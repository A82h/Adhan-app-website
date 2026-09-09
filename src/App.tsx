import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { ActiveView } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// 14 Structured Sections
import { HeroSection } from './sections/HeroSection';
import { IntroSection } from './sections/IntroSection';
import { CoreFeaturesSection } from './sections/CoreFeaturesSection';
import { PrayerSection } from './sections/PrayerSection';
import { QiblaSection } from './sections/QiblaSection';
import { QuranSection } from './sections/QuranSection';
import { AzkarSection } from './sections/AzkarSection';
import { LiveSection } from './sections/LiveSection';
import { OfflineSection } from './sections/OfflineSection';
import { PrivacyHighlightSection } from './sections/PrivacyHighlightSection';
import { TransparencySection } from './sections/TransparencySection';
import { FAQSection } from './sections/FAQSection';
import { SupportSection } from './sections/SupportSection';

// Subpages
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { PermissionsPage } from './pages/PermissionsPage';
import { ThirdPartyServicesPage } from './pages/ThirdPartyServicesPage';

const MainContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { direction } = useLanguage();

  // Derive active view from HashRouter location pathname
  const getActiveView = (): ActiveView => {
    const path = location.pathname.toLowerCase();
    if (path.includes('/privacy')) return 'privacy';
    if (path.includes('/permissions')) return 'permissions';
    if (path.includes('/third-party')) return 'third-party';
    return 'home';
  };

  const activeView = getActiveView();

  // Handle in-page scrolling when anchor hash changes or view changes
  useEffect(() => {
    if (location.hash && activeView === 'home') {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash, activeView]);

  const handleNavigateView = (view: ActiveView, hash?: string) => {
    if (view === 'home') {
      navigate({ pathname: '/', hash: hash || '' });
    } else {
      navigate({ pathname: `/${view}`, hash: '' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0F172A] font-sans antialiased" dir={direction}>
      {/* Sticky Accessible Navigation Bar */}
      <Navbar activeView={activeView} onNavigateView={handleNavigateView} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 w-full" role="main">
        {activeView === 'home' && (
          <div className="space-y-0">
            {/* 01 — Hero */}
            <HeroSection
              onExploreFeatures={() => handleNavigateView('home', '#features')}
              onExploreOffline={() => handleNavigateView('home', '#offline')}
            />

            {/* 02 — Product Introduction */}
            <IntroSection />

            {/* 03 — Core Features */}
            <CoreFeaturesSection />

            {/* 04 — Prayer */}
            <PrayerSection />

            {/* 05 — Qibla */}
            <QiblaSection />

            {/* 06 — Quran */}
            <QuranSection />

            {/* 07 — Azkar */}
            <AzkarSection />

            {/* 08 — Live */}
            <LiveSection />

            {/* 09 — Offline */}
            <OfflineSection />

            {/* 10 — Privacy */}
            <PrivacyHighlightSection onNavigateView={handleNavigateView} />

            {/* 11 — Technical Transparency */}
            <TransparencySection />

            {/* 12 — FAQ */}
            <FAQSection />

            {/* 13 — Support */}
            <SupportSection />
          </div>
        )}

        {activeView === 'privacy' && (
          <PrivacyPolicyPage onNavigateView={handleNavigateView} />
        )}

        {activeView === 'permissions' && (
          <PermissionsPage onNavigateView={handleNavigateView} />
        )}

        {activeView === 'third-party' && (
          <ThirdPartyServicesPage onNavigateView={handleNavigateView} />
        )}
      </main>

      {/* 14 — Footer */}
      <Footer onNavigateView={handleNavigateView} />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
