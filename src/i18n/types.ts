export interface TranslationSchema {
  common: {
    appName: string;
    tagline: string;
    platformLabel: string;
    phaseLabel: string;
    phaseBadge: string;
    sourceOfTruthNotice: string;
    needsVerification: string;
    readMore: string;
    backToHome: string;
    quickNavigation: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    officialWebsite: string;
    versionPlaceholder: string;
    productConceptNotice: string;
    verifiedFeature: string;
    offlineFirstBadge: string;
  };
  nav: {
    home: string;
    story: string;
    features: string;
    prayer: string;
    qibla: string;
    quran: string;
    azkar: string;
    live: string;
    utilities: string;
    offline: string;
    howItWorks: string;
    privacy: string;
    faq: string;
    support: string;
    permissions: string;
    thirdParty: string;
  };
  intro: {
    heading: string;
    body1: string;
    body2: string;
    corePillars: {
      p1: { title: string; desc: string };
      p2: { title: string; desc: string };
      p3: { title: string; desc: string };
    };
  };
  features: {
    prayer: { title: string; desc: string; technical: string };
    qibla: { title: string; desc: string; technical: string };
    quran: { title: string; desc: string; technical: string };
    azkar: { title: string; desc: string; technical: string };
    live: { title: string; desc: string; technical: string };
    offline: { title: string; desc: string; technical: string };
  };
  sections: {
    s01: { number: string; title: string; subtitle: string };
    s02: { number: string; title: string; subtitle: string };
    s03: { number: string; title: string; subtitle: string };
    s04: { number: string; title: string; subtitle: string };
    s05: { number: string; title: string; subtitle: string };
    s06: { number: string; title: string; subtitle: string };
    s07: { number: string; title: string; subtitle: string };
    s08: { number: string; title: string; subtitle: string };
    s09: { number: string; title: string; subtitle: string };
    s10: { number: string; title: string; subtitle: string };
    s11: { number: string; title: string; subtitle: string };
    s12: { number: string; title: string; subtitle: string };
    s13: { number: string; title: string; subtitle: string };
    s14: { number: string; title: string; subtitle: string };
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    architectureTag: string;
    mockupStatus: string;
    indicators: {
      native: string;
      localFirst: string;
      noAccount: string;
    };
    preview: {
      nextPrayerLabel: string;
      nextPrayerName: string;
      nextPrayerTime: string;
      countdownLabel: string;
      countdownValue: string;
      locationLabel: string;
      fajr: string;
      dhuhr: string;
      asr: string;
      maghrib: string;
      isha: string;
      qiblaBearing: string;
      meccaDistance: string;
      dailyAyahTitle: string;
      dailyAyahText: string;
      dailyAyahSurah: string;
      azkarCardTitle: string;
      azkarSample: string;
      counterLabel: string;
    };
  };
  trustStrip: {
    title: string;
    facts: {
      icon: string;
      title: string;
      desc: string;
    }[];
  };
  storytelling: {
    heading: string;
    subheading: string;
    steps: {
      stepNumber: string;
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  editorialFeatures: {
    heading: string;
    subheading: string;
    groups: {
      title: string;
      tag: string;
      description: string;
      items: {
        title: string;
        desc: string;
        technicalDetail: string;
      }[];
    }[];
  };
  prayerExperience: {
    heading: string;
    subheading: string;
    description: string;
    calculationNote: string;
    methodLabel: string;
    madhhabLabel: string;
    featuresList: string[];
    card: {
      exactAlarmBadge: string;
      adhanEngineTitle: string;
      audioPlayback: string;
      dozeOptimization: string;
      currentCity: string;
      methodLabel: string;
      methodValue: string;
      batteryLabel: string;
      batteryValue: string;
      locationLabel: string;
      locationValue: string;
      activeStatus: string;
    };
  };
  qiblaSection: {
    heading: string;
    subheading: string;
    description: string;
    technicalBadge: string;
    calculationNote: string;
    details: string[];
    sensorCard: {
      heading: string;
      bearingText: string;
      sensorTitle: string;
      sensorType: string;
      accuracyText: string;
      offlineStatus: string;
    };
  };
  quranSection: {
    heading: string;
    subheading: string;
    description: string;
    technicalBadge: string;
    details: string[];
    showcase: {
      scriptureTitle: string;
      sampleSurah: string;
      sampleAyahNumber: string;
      sampleAyah: string;
      recitationEngine: string;
      offlineModeText: string;
      searchFeature: string;
      tafsirFeature: string;
    };
  };
  azkarSection: {
    heading: string;
    subheading: string;
    description: string;
    technicalBadge: string;
    details: string[];
    counterPreview: {
      title: string;
      sampleDua: string;
      category: string;
      hapticNotice: string;
      targetText: string;
      categoriesList: string[];
    };
  };
  liveSection: {
    heading: string;
    subheading: string;
    description: string;
    technicalBadge: string;
    disclaimer: string;
    details: string[];
    makkahChannel: {
      title: string;
      desc: string;
    };
    madinahChannel: {
      title: string;
      desc: string;
    };
  };
  dailyUtilities: {
    heading: string;
    subheading: string;
    description: string;
    items: {
      id: string;
      title: string;
      desc: string;
      badge: string;
      detail: string;
    }[];
  };
  offlineComparison: {
    heading: string;
    subheading: string;
    description: string;
    offlineColTitle: string;
    offlineColBadge: string;
    offlineItems: string[];
    onlineColTitle: string;
    onlineColBadge: string;
    onlineItems: string[];
    cardTitle: string;
    cardBadge: string;
    localRoomTitle: string;
    localRoomDesc: string;
    sensorMathTitle: string;
    sensorMathDesc: string;
    lowPowerTitle: string;
    lowPowerDesc: string;
  };
  privacyOverview: {
    heading: string;
    subheading: string;
    description: string;
    badge: string;
    pillars: {
      title: string;
      desc: string;
    }[];
    ctaText: string;
    note: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    description: string;
    pipeline1: {
      title: string;
      badge: string;
      steps: { title: string; desc: string }[];
    };
    pipeline2: {
      title: string;
      badge: string;
      steps: { title: string; desc: string }[];
    };
  };
  transparency: {
    heading: string;
    description: string;
    specs: { label: string; value: string }[];
    specificationsTitle: string;
    specificationsStatus: string;
    sourceOfTruthBadge: string;
    noSpeculativeTitle: string;
    noSpeculativeDesc: string;
    telemetryTitle: string;
    telemetryDesc: string;
  };
  faq: {
    heading: string;
    subheading: string;
    items: { question: string; answer: string; category: string }[];
  };
  support: {
    heading: string;
    description: string;
    notice: string;
    technicalChannel: string;
    guidelines: string[];
  };
  footer: {
    description: string;
    navigationHeader: string;
    transparencyHeader: string;
    socialHeader: string;
    systemNotice: string;
    rightsReserved: string;
    appNameText: string;
    youtubeChannel: string;
    followOnYoutube: string;
    instagramChannel: string;
    followOnInstagram: string;
  };
  subpages: {
    privacyPolicy: {
      badge: string;
      effectiveDate: string;
      auditBasisNotice: string;
      title: string;
      intro: string;
      tocTitle: string;
      toc: { id: string; title: string }[];
      noAccount: {
        title: string;
        statement: string;
        details: string;
        notRequiredList: string[];
      };
      location: {
        title: string;
        statement: string;
        fineLocation: string;
        coarseLocation: string;
        optionalNote: string;
        processingNote: string;
      };
      localData: {
        title: string;
        statement: string;
        items: string[];
        storageNote: string;
      };
      dataDeletion: {
        title: string;
        statement: string;
        steps: string[];
        noRemoteNote: string;
      };
      advertising: {
        title: string;
        statement: string;
        sdkName: string;
        adType: string;
        noOtherTypesNote: string;
        dataNote: string;
      };
      payments: {
        title: string;
        statement: string;
        details: string;
      };
      security: {
        title: string;
        statement: string;
        details: string;
      };
      children: {
        title: string;
        statement: string;
        details: string;
      };
      retention: {
        title: string;
        localRetention: string;
        externalRetention: string;
      };
      firebase: {
        title: string;
        statement: string;
        details: string;
      };
      technicalVerification: {
        title: string;
        statement: string;
        details: string;
      };
    };
    permissions: {
      badge: string;
      auditedBadge: string;
      title: string;
      subtitle: string;
      intro: string;
      filterLabel: string;
      tableHeaders: {
        permission: string;
        purpose: string;
        required: string;
        ifDenied: string;
      };
      filterLabels: {
        all: string;
        location: string;
        alarms: string;
        media: string;
        system: string;
      };
      statusLabels: {
        optional: string;
        required: string;
        normal: string;
        special: string;
      };
      list: {
        name: string;
        category: 'location' | 'alarms' | 'media' | 'system';
        purpose: string;
        status: 'optional' | 'required' | 'normal' | 'special';
        statusLabel: string;
        ifDenied: string;
      }[];
      clarificationBox: {
        title: string;
        desc: string;
      };
    };
    thirdParty: {
      badge: string;
      auditedBadge: string;
      title: string;
      subtitle: string;
      intro: string;
      integrationsHeading: string;
      onDemandBadge: string;
      labels: {
        provider: string;
        purpose: string;
        whenTriggered: string;
        dataInvolved: string;
        note: string;
      };
      services: {
        name: string;
        provider: string;
        purpose: string;
        dataTransferred: string;
        whenUsed: string;
        category: string;
        ownershipNote?: string;
      }[];
      networkArchitecture: {
        title: string;
        desc: string;
        localTitle: string;
        localBadge: string;
        localItems: string[];
        onlineTitle: string;
        onlineBadge: string;
        onlineItems: string[];
      };
      technicalDisclosuresHeading: string;
      technicalDisclosures: {
        firebaseTitle: string;
        firebaseDesc: string;
        cleartextTitle: string;
        cleartextDesc: string;
        mapsIntentTitle: string;
        mapsIntentDesc: string;
      };
    };
    dataFlow: {
      badge: string;
      title: string;
      subtitle: string;
      userStep: { title: string; desc: string };
      appStep: { title: string; desc: string };
      localProcessing: {
        title: string;
        badge: string;
        desc: string;
        items: { name: string; detail: string }[];
      };
      externalServices: {
        title: string;
        badge: string;
        desc: string;
        items: { name: string; detail: string; protocol: string }[];
      };
      summaryTable: {
        title: string;
        headers: { feature: string; type: string; processing: string };
        rows: { feature: string; type: string; isLocal: boolean; processing: string }[];
      };
    };
  };
}
