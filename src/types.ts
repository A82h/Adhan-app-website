export type Language = 'ar' | 'en' | 'fr';
export type Direction = 'rtl' | 'ltr';
export type ActiveView = 'home' | 'privacy' | 'permissions' | 'third-party';

export interface AppMetadata {
  nameAr: string;
  nameEn: string;
  nameFr: string;
  metadataName: string;
  platform: 'Android';
  status: 'In Development — Phase 1 Foundation';
}

export interface NavItem {
  id: string;
  labelKey: string;
  href: string;
  viewTarget?: ActiveView;
}

export interface FeatureItem {
  id: string;
  iconName: string;
  titleKey: string;
  descKey: string;
  badgeKey?: string;
  technicalKey?: string;
}

export interface FAQItemData {
  id: string;
  questionKey: string;
  answerKey: string;
  categoryKey: string;
}
