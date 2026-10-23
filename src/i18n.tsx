import React, { createContext, useContext, useEffect, useState } from 'react';

export type Lang = 'en' | 'ar';

// Arabic is the default language of the site
const DEFAULT_LANG: Lang = 'ar';

const en = {
  meta: {
    title: 'Mohamed Samir Faisal — Full-Stack Developer',
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    contact: 'Contact',
    talk: "Let's Talk",
    menu: 'Toggle menu',
    switchTo: 'ع',
    switchLabel: 'التبديل إلى العربية',
  },
  hero: {
    hi: "Hi, I'm",
    first: 'Mohamed Samir',
    last: 'Faisal',
    role: 'Full-Stack Developer · Riyadh, Saudi Arabia',
    bio: 'I build complete web systems — from the pixel to the database. Bilingual, RTL-first websites and web apps that are fast, responsive and built to last.',
    cta: 'View My Work',
    imageAlt: 'Developer working on a laptop in an orange beanbag',
  },
  about: {
    title: 'About Me',
    bio: "I'm a full-stack developer who designs and builds web applications end to end — clean interfaces on the front, solid APIs and databases on the back, and the deployment that keeps them online. I care about performance, details, and code that other people can read.",
    qualities: [
      'Bilingual AR / EN',
      'Detail Oriented',
      'Clean Code Advocate',
      'Performance & SEO',
      'Team Leader',
      'Ships to Production',
    ],
    imageAlt: 'Developer by the window holding a cup of coffee',
  },
  skills: {
    title: 'Skills & Technologies',
  },
  work: {
    title: 'Selected Work',
    view: 'View Project',
    projects: {
      powermaas: {
        title: 'Power Maas Contracting',
        description: 'Bilingual WordPress site for a general-contracting company in the Eastern Province, showcasing its services and projects.',
      },
      rapture: {
        title: 'Rapture Business',
        description: 'Bilingual site for a Saudi business & government-services company.',
      },
      nafitha: {
        title: 'Nafitha Saql',
        description: 'Thermal & waterproofing company site in Riyadh with a WhatsApp lead flow.',
      },
      razeem: {
        title: 'Razeem Real Estate',
        description: 'Saudi property platform — search by city or type, browse on a map, manage listings.',
      },
      sbs: {
        title: 'SBS — Cyber & AI',
        description: 'Cinematic dark landing page for a cybersecurity & enterprise-AI company.',
      },
    },
  },
  process: {
    title: 'My Process',
    steps: [
      { title: 'Discover', description: 'Understand the problem deeply.' },
      { title: 'Design', description: 'Plan and craft simple solutions.' },
      { title: 'Develop', description: 'Write clean code and build features.' },
      { title: 'Deploy', description: 'Test thoroughly and launch.' },
      { title: 'Improve', description: 'Monitor, iterate and improve.' },
    ],
  },
  footer: {
    line1: "Let's build something",
    line2: 'meaningful',
    accent: 'together.',
    copyTitle: 'Click to copy email',
    copy: 'Copy',
    copied: 'Copied!',
    location: 'Riyadh, Saudi Arabia',
    connect: "Let's Connect",
    linkedin: 'LinkedIn profile',
    whatsapp: 'WhatsApp chat',
    email: 'Send Email',
    rights: '© 2026 Mohamed Samir Faisal. All rights reserved.',
  },
};

export type Dict = typeof en;

// Arabic copy is written for clients (simple, benefit-first MSA), not as a word-for-word translation
const ar: Dict = {
  meta: {
    title: 'محمد سمير فيصل — مطوّر مواقع وأنظمة ويب',
  },
  nav: {
    home: 'الرئيسية',
    about: 'من أنا',
    skills: 'المهارات',
    work: 'أعمالي',
    contact: 'تواصل معي',
    talk: 'لنتحدث',
    menu: 'فتح القائمة',
    switchTo: 'EN',
    switchLabel: 'Switch to English',
  },
  hero: {
    hi: 'مرحبًا، أنا',
    first: 'محمد سمير',
    last: 'فيصل',
    role: 'مطوّر مواقع وأنظمة ويب · الرياض، المملكة العربية السعودية',
    bio: 'أصمّم وأبرمج مواقع وأنظمة ويب لشركتك من الفكرة حتى الإطلاق: واجهة جذّابة يراها عملاؤك، ونظام قوي يدير بياناتك في الخلفية. مواقع سريعة تدعم العربية والإنجليزية، وتعمل بكفاءة على الجوال والكمبيوتر.',
    cta: 'شاهد أعمالي',
    imageAlt: 'مطوّر يعمل على حاسوبه فوق كرسي برتقالي',
  },
  about: {
    title: 'من أنا',
    bio: 'أتولّى مشروعك كاملًا دون الحاجة إلى فريق منفصل لكل جزء: أصمّم الواجهة التي يتعامل معها عملاؤك، وأبني النظام الذي يحفظ بياناتك ويدير أعمالك، ثم أرفع الموقع على الإنترنت وأتابعه ليبقى سريعًا وآمنًا ومتاحًا دائمًا. أهتم بأدق التفاصيل، وأسلّم عملًا منظّمًا يسهل تطويره مستقبلًا.',
    qualities: [
      'مواقع بالعربية والإنجليزية',
      'اهتمام بأدق التفاصيل',
      'برمجة نظيفة ومنظّمة',
      'سرعة وظهور في جوجل',
      'خبرة في قيادة الفرق',
      'تسليم جاهز للإطلاق',
    ],
    imageAlt: 'مطوّر بجوار النافذة يحمل كوب قهوة',
  },
  skills: {
    title: 'المهارات والتقنيات',
  },
  work: {
    title: 'أعمال مختارة',
    view: 'عرض المشروع',
    projects: {
      powermaas: {
        title: 'ماس الطاقة للمقاولات',
        description: 'موقع بالعربية والإنجليزية لشركة مقاولات عامة في المنطقة الشرقية، يعرض خدماتها ومشاريعها المنفّذة.',
      },
      rapture: {
        title: 'رابتشر لخدمات الأعمال',
        description: 'موقع بالعربية والإنجليزية لشركة تقدّم خدمات الأعمال والمعاملات الحكومية في السعودية.',
      },
      nafitha: {
        title: 'نافذة صقل للعزل',
        description: 'موقع مؤسسة عزل حراري ومائي في الرياض، يستقبل طلبات العملاء مباشرة عبر واتساب.',
      },
      razeem: {
        title: 'رزيم العقارية',
        description: 'منصة عقارية تتيح البحث عن العقارات حسب المدينة أو النوع، وتصفّحها على الخريطة، وإدارتها بسهولة.',
      },
      sbs: {
        title: 'SBS — أمن سيبراني وذكاء اصطناعي',
        description: 'صفحة تعريفية بتصميم داكن وفخم لشركة متخصّصة في الأمن السيبراني والذكاء الاصطناعي.',
      },
    },
  },
  process: {
    title: 'طريقة العمل',
    steps: [
      { title: 'الفهم', description: 'أستمع لفكرتك وأحدّد احتياجاتك بدقة.' },
      { title: 'التصميم', description: 'أرسم شكل الموقع وأعتمده معك قبل البدء.' },
      { title: 'البرمجة', description: 'أبرمج الموقع بجودة عالية وأختبر كل جزء.' },
      { title: 'الإطلاق', description: 'أرفع الموقع على الإنترنت وأتأكد من عمله.' },
      { title: 'المتابعة', description: 'أتابع الأداء وأطوّر الموقع باستمرار.' },
    ],
  },
  footer: {
    line1: 'لنحوّل فكرتك',
    line2: 'إلى موقع',
    accent: 'ناجح.',
    copyTitle: 'انقر لنسخ البريد',
    copy: 'نسخ',
    copied: 'تم النسخ!',
    location: 'الرياض، المملكة العربية السعودية',
    connect: 'تواصل معي',
    linkedin: 'الملف على لينكدإن',
    whatsapp: 'محادثة واتساب',
    email: 'إرسال بريد إلكتروني',
    rights: '© 2026 محمد سمير فيصل. جميع الحقوق محفوظة.',
  },
};

const dictionaries: Record<Lang, Dict> = { en, ar };
const STORAGE_KEY = 'portfolio-lang';

const readStoredLang = (): Lang => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {
    // storage blocked (private mode, previews) — fall back to the default
  }
  return DEFAULT_LANG;
};

interface LangContextValue {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(readStoredLang);

  // Keep <html lang/dir> and the tab title in sync with the chosen language
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.title = dictionaries[lang].meta.title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore — the choice just won't be remembered
    }
  }, [lang]);

  const toggleLang = () => setLang((current) => (current === 'en' ? 'ar' : 'en'));

  return (
    <LangContext.Provider value={{ lang, t: dictionaries[lang], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = (): LangContextValue => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
};
