import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.title': 'DBT Awareness Portal',
    'header.subtitle': 'Ministry of Social Justice & Empowerment',
    'header.home': 'Home',
    'header.services': 'Services',
    'header.guide': 'Guide',
    'header.documents': 'Documents',
    'header.account': 'Account',
    'header.signOut': 'Sign Out',
    
    // Home Page
    'home.hero1.title': 'Understand DBT vs Aadhaar Link',
    'home.hero1.desc': 'Learn the crucial difference between Aadhaar-linked and DBT-enabled accounts',
    'home.hero2.title': 'Enable DBT in 3 Simple Steps',
    'home.hero2.desc': 'Visit bank → Fill form → Activate DBT facility',
    'home.hero3.title': 'Secure Your Scholarships',
    'home.hero3.desc': 'DBT ensures direct, secure transfer of scholarship amounts',
    'home.hero4.title': 'Contact Local Offices',
    'home.hero4.desc': 'Get help from Gram Panchayats and Schools in your area',
    'home.comparison.title': 'Aadhaar Link vs DBT Enabled Account',
    'home.aadhaar.title': 'Aadhaar Linked Account',
    'home.dbt.title': 'DBT Enabled Account',
    'home.video.title': 'Watch: How to Enable DBT',
    'home.video.desc': 'Step-by-step guide to enable DBT on your bank account',
    'home.stats.students': 'Students Benefited',
    'home.stats.disbursed': 'Disbursed via DBT',
    'home.stats.secure': 'Secure Transfers',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Access comprehensive tools and resources to understand and manage your DBT-enabled Aadhaar-seeded bank account for scholarship benefits.',
    'services.guide.title': 'Guide',
    'services.guide.desc': 'Comprehensive guide on Aadhaar Link vs DBT with step-by-step instructions',
    'services.check.title': 'Check Status',
    'services.check.desc': 'Verify if your bank account is DBT enabled and Aadhaar linked',
    'services.track.title': 'Track Scholarship',
    'services.track.desc': 'Track your scholarship application status like NSP portal',
    'services.gp.title': 'Gram Panchayat',
    'services.gp.desc': 'Find local Gram Panchayats with contact details and locations',
    'services.schools.title': 'Schools Directory',
    'services.schools.desc': 'Directory of local schools with principal contact information',
    'services.documents.title': 'Documents',
    'services.documents.desc': 'Download important documents, forms, and guidance materials',
    'services.learnMore': 'Learn More',
    'services.help.title': 'Need Help?',
    'services.help.desc': 'Our support team is available to assist you with any questions about DBT enrollment, scholarship tracking, or account verification.',
    'services.tips.title': 'Quick Tips',
    
    // Common
    'common.loading': 'Loading...',
    'common.search': 'Search...',
    'common.download': 'Download',
    'common.contact': 'Contact',
    'common.help': 'Help',
    'common.close': 'Close',
    'common.submit': 'Submit',
    'common.cancel': 'Cancel',
    
    // Footer
    'footer.title': 'DBT Awareness Portal',
    'footer.desc': 'Enhancing student awareness about Direct Beneficiary Transfer and Aadhaar-linked bank accounts for seamless scholarship disbursement.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.ministry': 'Ministry',
    'footer.ministryName': 'Ministry of Social Justice & Empowerment',
    'footer.copyright': '© 2024 Ministry of Social Justice & Empowerment. All rights reserved.',
  },
  hi: {
    // Header
    'header.title': 'डीबीटी जागरूकता पोर्टल',
    'header.subtitle': 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    'header.home': 'होम',
    'header.services': 'सेवाएं',
    'header.guide': 'गाइड',
    'header.documents': 'दस्तावेज',
    'header.account': 'खाता',
    'header.signOut': 'साइन आउट',
    
    // Home Page
    'home.hero1.title': 'डीबीटी बनाम आधार लिंक को समझें',
    'home.hero1.desc': 'आधार-लिंक्ड और डीबीटी-सक्षम खातों के बीच महत्वपूर्ण अंतर जानें',
    'home.hero2.title': '3 सरल चरणों में डीबीटी सक्षम करें',
    'home.hero2.desc': 'बैंक जाएं → फॉर्म भरें → डीबीटी सुविधा सक्रिय करें',
    'home.hero3.title': 'अपनी छात्रवृत्ति सुरक्षित करें',
    'home.hero3.desc': 'डीबीटी छात्रवृत्ति राशि का प्रत्यक्ष, सुरक्षित स्थानांतरण सुनिश्चित करता है',
    'home.hero4.title': 'स्थानीय कार्यालयों से संपर्क करें',
    'home.hero4.desc': 'अपने क्षेत्र में ग्राम पंचायतों और स्कूलों से सहायता प्राप्त करें',
    'home.comparison.title': 'आधार लिंक बनाम डीबीटी सक्षम खाता',
    'home.aadhaar.title': 'आधार लिंक्ड खाता',
    'home.dbt.title': 'डीबीटी सक्षम खाता',
    'home.video.title': 'देखें: डीबीटी कैसे सक्षम करें',
    'home.video.desc': 'अपने बैंक खाते पर डीबीटी सक्षम करने के लिए चरण-दर-चरण गाइड',
    'home.stats.students': 'लाभान्वित छात्र',
    'home.stats.disbursed': 'डीबीटी के माध्यम से वितरित',
    'home.stats.secure': 'सुरक्षित स्थानांतरण',
    
    // Services
    'services.title': 'हमारी सेवाएं',
    'services.subtitle': 'छात्रवृत्ति लाभों के लिए अपने डीबीटी-सक्षम आधार-सीडेड बैंक खाते को समझने और प्रबंधित करने के लिए व्यापक उपकरण और संसाधनों तक पहुंच प्राप्त करें।',
    'services.guide.title': 'गाइड',
    'services.guide.desc': 'चरण-दर-चरण निर्देशों के साथ आधार लिंक बनाम डीबीटी पर व्यापक गाइड',
    'services.check.title': 'स्थिति जांचें',
    'services.check.desc': 'सत्यापित करें कि आपका बैंक खाता डीबीटी सक्षम और आधार लिंक्ड है',
    'services.track.title': 'छात्रवृत्ति ट्रैक करें',
    'services.track.desc': 'एनएसपी पोर्टल की तरह अपनी छात्रवृत्ति आवेदन स्थिति को ट्रैक करें',
    'services.gp.title': 'ग्राम पंचायत',
    'services.gp.desc': 'संपर्क विवरण और स्थानों के साथ स्थानीय ग्राम पंचायतें खोजें',
    'services.schools.title': 'स्कूल निर्देशिका',
    'services.schools.desc': 'प्रधानाचार्य संपर्क जानकारी के साथ स्थानीय स्कूलों की निर्देशिका',
    'services.documents.title': 'दस्तावेज',
    'services.documents.desc': 'महत्वपूर्ण दस्तावेज, फॉर्म और मार्गदर्शन सामग्री डाउनलोड करें',
    'services.learnMore': 'और जानें',
    'services.help.title': 'सहायता चाहिए?',
    'services.help.desc': 'हमारी सहायता टीम डीबीटी नामांकन, छात्रवृत्ति ट्रैकिंग, या खाता सत्यापन के बारे में किसी भी प्रश्न के साथ आपकी सहायता के लिए उपलब्ध है।',
    'services.tips.title': 'त्वरित सुझाव',
    
    // Common
    'common.loading': 'लोड हो रहा है...',
    'common.search': 'खोजें...',
    'common.download': 'डाउनलोड',
    'common.contact': 'संपर्क',
    'common.help': 'सहायता',
    'common.close': 'बंद करें',
    'common.submit': 'जमा करें',
    'common.cancel': 'रद्द करें',
    
    // Footer
    'footer.title': 'डीबीटी जागरूकता पोर्टल',
    'footer.desc': 'निर्बाध छात्रवृत्ति वितरण के लिए प्रत्यक्ष लाभार्थी स्थानांतरण और आधार-लिंक्ड बैंक खातों के बारे में छात्र जागरूकता बढ़ाना।',
    'footer.quickLinks': 'त्वरित लिंक',
    'footer.contact': 'संपर्क करें',
    'footer.ministry': 'मंत्रालय',
    'footer.ministryName': 'सामाजिक न्याय और अधिकारिता मंत्रालय',
    'footer.copyright': '© 2024 सामाजिक न्याय और अधिकारिता मंत्रालय। सभी अधिकार सुरक्षित।',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'hi'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};