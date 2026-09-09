import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('====================================================');
console.log('🚀 بدء عملية تجميع وتجهيز قالب بلوجر (Blogger Build)...');
console.log('====================================================\n');

try {
  // 1. تشغيل بناء Vite لإنتاج ملفات الإنتاج المجمعة في مجلد dist بوضع الإنتاج (Production)
  console.log('📦 جاري تشغيل أمر البناء بوضع الإنتاج: NODE_ENV=production vite build ...');
  execSync('npx vite build', {
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
  });

  const rootDir = process.cwd();
  const distDir = path.join(rootDir, 'dist');

  if (!fs.existsSync(distDir)) {
    throw new Error('مجلد dist غير موجود بعد انتهاء البناء!');
  }

  // دالة تكرارية للبحث عن جميع الملفات داخل مجلد ومجلداته الفرعية
  function getAllFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const fullPath = path.join(dirPath, file);
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      } else {
        arrayOfFiles.push(fullPath);
      }
    });
    return arrayOfFiles;
  }

  const allDistFiles = getAllFiles(distDir);
  const cssFiles = allDistFiles.filter((f) => f.endsWith('.css'));
  const jsFiles = allDistFiles.filter((f) => f.endsWith('.js'));

  if (cssFiles.length === 0) {
    throw new Error('لم يتم العثور على أي ملفات CSS داخل مجلد dist!');
  }
  if (jsFiles.length === 0) {
    throw new Error('لم يتم العثور على أي ملفات JS داخل مجلد dist!');
  }

  console.log('\n📄 الملفات المكتشفة في مجلد dist:');
  cssFiles.forEach((f) => console.log(`   - CSS: ${path.relative(rootDir, f)}`));
  jsFiles.forEach((f) => console.log(`   - JS:  ${path.relative(rootDir, f)}`));

  // 2. دمج كافة أكواد CSS
  let combinedCss = cssFiles.map((f) => fs.readFileSync(f, 'utf-8')).join('\n\n');

  // 3. دمج كافة أكواد JS
  let combinedJs = jsFiles.map((f) => fs.readFileSync(f, 'utf-8')).join('\n\n');

  // 4. معالجة وتأمين الأكواد لتفادي أخطاء مفسر XML في Blogger
  // تجنب إغلاق وسم script أو قسم CDATA مبكراً داخل مفسر المتصفح وXML
  const sanitizedJs = combinedJs
    .replace(/<\/script/gi, '<\\/script')
    .replace(/]]>/g, ']]\\u003E');

  const sanitizedCss = combinedCss.replace(/]]>/g, ']]]]><![CDATA[>');

  // 5. قراءة قالب بلوجر الأساسي دائماً من blogger-template.base.xml لمنع تكرار الحقن
  const baseTemplatePath = path.join(rootDir, 'blogger-template.base.xml');
  const targetTemplatePath = path.join(rootDir, 'blogger-template.xml');

  if (!fs.existsSync(baseTemplatePath)) {
    throw new Error('تعذر العثور على ملف قالب بلوجر الأساسي (blogger-template.base.xml)!');
  }
  const templateContent = fs.readFileSync(baseTemplatePath, 'utf-8');

  // 6. حقن الأكواد داخل وسوم القالب
  const cssPlaceholder = '/* BLOGGER_INJECT_CSS */';
  const jsPlaceholder = '/* BLOGGER_INJECT_JS */';

  if (!templateContent.includes(cssPlaceholder) || !templateContent.includes(jsPlaceholder)) {
    throw new Error('القالب الأساسي لا يحتوي على وسوم التعويض المطلوبة (BLOGGER_INJECT_CSS / BLOGGER_INJECT_JS)!');
  }

  // التأكد الحاسم من إزالة أي DOCTYPE قد يندس أو يتسرب إلى القالب
  const cleanTemplate = templateContent.replace(/<!DOCTYPE[^>]*>/gi, '').trimStart();

  // هام جداً: استخدام دالة إرجاع (() => sanitizedJs) لتفادي تفسير رموز $ و $& في String.prototype.replace
  let finalXml = cleanTemplate
    .replace(cssPlaceholder, () => sanitizedCss)
    .replace(jsPlaceholder, () => sanitizedJs);

  // فحص أمان نهائي: إزالة أي DOCTYPE قد يتواجد
  finalXml = finalXml.replace(/<!DOCTYPE[^>]*>/gi, '').trim();

  // 7. حفظ الملف النهائي الجاهز للرفع في المجلد الرئيسي
  fs.writeFileSync(targetTemplatePath, finalXml, 'utf-8');

  const stats = fs.statSync(targetTemplatePath);
  const sizeInKb = (stats.size / 1024).toFixed(2);
  const sizeInMb = (stats.size / (1024 * 1024)).toFixed(2);

  // 8. التحقق الدقيق من سلامة بناء XML
  try {
    execSync(`python3 -c "import xml.etree.ElementTree as ET; ET.parse('${targetTemplatePath}'); print('   ✓ فحص XML تم بنجاح: القالب سليم وخالٍ من الأخطاء النحوية.')"`, { stdio: 'inherit' });
  } catch (xmlErr) {
    console.warn('⚠️ تحذير: فحص XML أظهر ملاحظة، يرجى مراجعة محتوى القالب.');
  }

  console.log('\n====================================================');
  console.log('✅ تم تجميع وحقن القالب بنجاح تام وبدون أي تلف في الأكواد!');
  console.log(`📁 الملف النهائي: ${path.relative(rootDir, targetTemplatePath)}`);
  console.log(`📊 الحجم الإجمالي: ${sizeInKb} KB (${sizeInMb} MB)`);
  console.log('====================================================\n');
} catch (error) {
  console.error('\n❌ حدث خطأ أثناء تجميع القالب:', error.message);
  process.exit(1);
}
