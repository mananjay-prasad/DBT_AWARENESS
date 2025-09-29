import React, { createContext, useContext, useState, ReactNode } from 'react';

type TranslationValue = string | string[];

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
  t: (key: string) => TranslationValue;
}

const translations: Record<'en' | 'hi', Record<string, TranslationValue>> = {
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
    
    // Guide
    'guide.title': 'Complete Guide: Aadhaar Link vs DBT',
    'guide.subtitle': 'Everything you need to know about enabling DBT for scholarship benefits',
    'guide.difference.title': 'What\'s the Difference?',
    'guide.howto.title': 'How to Enable DBT: Step-by-Step',
    'guide.documents.title': 'Required Documents',
    'guide.benefits.title': 'Benefits of DBT Enabled Account',
    'guide.issues.title': 'Common Issues & Solutions',
    'guide.help.title': 'Need Additional Help?',
    'guide.step1.title': 'Visit Your Bank Branch',
    'guide.step1.desc': 'Go to the branch where your account is held with original Aadhaar card and bank passbook.',
    'guide.step2.title': 'Fill DBT Enrollment Form',
    'guide.step2.desc': 'Request and complete the DBT enrollment form. Bank staff will assist you with the process.',
    'guide.step3.title': 'Verify Details',
    'guide.step3.desc': 'Ensure your Aadhaar details match with bank records. Update if there are any discrepancies.',
    'guide.step4.title': 'DBT Activation',
    'guide.step4.desc': 'Bank will activate DBT facility within 2-3 working days. You will receive SMS confirmation.',
    'guide.aadhaar.features': [
      'Basic Aadhaar number linked to account',
      'Used for KYC compliance',
      'May not receive direct benefits',
      'Standard banking services',
      'No special government transfer facility'
    ],
    'guide.dbt.features': [
      'Specially configured for government benefits',
      'Direct scholarship transfer capability',
      'Required for SC scholarships',
      'Faster, secure benefit disbursement',
      'Eliminates middleman delays'
    ],
    'guide.documents.essential': [
      'Original Aadhaar Card',
      'Bank Account Passbook',
      'Aadhaar-linked Mobile Number',
      'DBT Enrollment Form'
    ],
    'guide.documents.additional': [
      'Active Bank Account (not dormant)',
      'Valid KYC Documents',
      'Updated Address Proof'
    ],
    'guide.benefits.faster': 'Faster Transfer',
    'guide.benefits.faster.desc': 'Direct transfer eliminates processing delays',
    'guide.benefits.secure': '100% Secure',
    'guide.benefits.secure.desc': 'No middleman involvement, completely secure',
    'guide.benefits.full': 'Full Amount',
    'guide.benefits.full.desc': 'Receive complete scholarship without deductions',
    'guide.issues.mobile': 'Issue: Mobile number not linked to Aadhaar',
    'guide.issues.mobile.solution': 'Solution: Visit nearest Aadhaar center to link mobile number first, or use mAadhaar app.',
    'guide.issues.dormant': 'Issue: Account shows inactive/dormant',
    'guide.issues.dormant.solution': 'Solution: Make a small deposit or withdrawal to reactivate account, then apply for DBT.',
    'guide.issues.mismatch': 'Issue: Name mismatch between Aadhaar and bank account',
    'guide.issues.mismatch.solution': 'Solution: Update name in either Aadhaar or bank account to ensure exact match.',
    
    // Check
    'check.title': 'Check Account Status',
    'check.subtitle': 'Verify if your bank account is DBT enabled and Aadhaar linked',
    
    // Track
    'track.title': 'Track Your Scholarship',
    'track.subtitle': 'Check the status of your Pre-Matric or Post-Matric scholarship application',
    
    // Documents
    'documents.title': 'Document Library',
    'documents.subtitle': 'Download important documents, forms, and guidance materials for DBT and scholarships',
    
    // Schools
    'schools.title': 'Schools Directory',
    'schools.subtitle': 'Connect with local schools and principals for DBT guidance and scholarship support',
    
    // Gram Panchayat
    'gp.title': 'Gram Panchayat Directory',
    'gp.subtitle': 'Find your local Gram Panchayat for DBT enrollment and scholarship assistance',
    
    // Chat
    'chat.placeholder': 'Ask me about DBT, scholarships, or account verification...',
    'chat.send': 'Send',
    'chat.title': 'Ask AI Assistant',
    
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
    
    // Guide
    'guide.title': 'पूर्ण गाइड: आधार लिंक बनाम डीबीटी',
    'guide.subtitle': 'छात्रवृत्ति लाभों के लिए डीबीटी सक्षम करने के बारे में आपको जो कुछ जानना चाहिए',
    'guide.difference.title': 'अंतर क्या है?',
    'guide.howto.title': 'डीबीटी कैसे सक्षम करें: चरण-दर-चरण',
    'guide.documents.title': 'आवश्यक दस्तावेज',
    'guide.benefits.title': 'डीबीटी सक्षम खाते के लाभ',
    'guide.issues.title': 'सामान्य समस्याएं और समाधान',
    'guide.help.title': 'अतिरिक्त सहायता चाहिए?',
    'guide.step1.title': 'अपनी बैंक शाखा में जाएं',
    'guide.step1.desc': 'मूल आधार कार्ड और बैंक पासबुक के साथ उस शाखा में जाएं जहां आपका खाता है।',
    'guide.step2.title': 'डीबीटी नामांकन फॉर्म भरें',
    'guide.step2.desc': 'डीबीटी नामांकन फॉर्म का अनुरोध करें और पूरा करें। बैंक कर्मचारी प्रक्रिया में आपकी सहायता करेंगे।',
    'guide.step3.title': 'विवरण सत्यापित करें',
    'guide.step3.desc': 'सुनिश्चित करें कि आपके आधार विवरण बैंक रिकॉर्ड से मेल खाते हैं। यदि कोई विसंगति है तो अपडेट करें।',
    'guide.step4.title': 'डीबीटी सक्रियकरण',
    'guide.step4.desc': 'बैंक 2-3 कार्य दिवसों के भीतर डीबीटी सुविधा सक्रिय कर देगा। आपको एसएमएस पुष्टि प्राप्त होगी।',
    'guide.aadhaar.features': [
      'बुनियादी आधार संख्या खाते से जुड़ी',
      'केवाईसी अनुपालन के लिए उपयोग',
      'प्रत्यक्ष लाभ प्राप्त नहीं हो सकते',
      'मानक बैंकिंग सेवाएं',
      'कोई विशेष सरकारी स्थानांतरण सुविधा नहीं'
    ],
    'guide.dbt.features': [
      'सरकारी लाभों के लिए विशेष रूप से कॉन्फ़िगर किया गया',
      'प्रत्यक्ष छात्रवृत्ति स्थानांतरण क्षमता',
      'एससी छात्रवृत्ति के लिए आवश्यक',
      'तेज़, सुरक्षित लाभ वितरण',
      'बिचौलिए की देरी को समाप्त करता है'
    ],
    'guide.documents.essential': [
      'मूल आधार कार्ड',
      'बैंक खाता पासबुक',
      'आधार से जुड़ा मोबाइल नंबर',
      'डीबीटी नामांकन फॉर्म'
    ],
    'guide.documents.additional': [
      'सक्रिय बैंक खाता (निष्क्रिय नहीं)',
      'वैध केवाईसी दस्तावेज',
      'अपडेटेड पता प्रमाण'
    ],
    'guide.benefits.faster': 'तेज़ स्थानांतरण',
    'guide.benefits.faster.desc': 'प्रत्यक्ष स्थानांतरण प्रसंस्करण देरी को समाप्त करता है',
    'guide.benefits.secure': '100% सुरक्षित',
    'guide.benefits.secure.desc': 'कोई मध्यस्थ भागीदारी नहीं, पूरी तरह सुरक्षित',
    'guide.benefits.full': 'पूरी राशि',
    'guide.benefits.full.desc': 'बिना कटौती के पूरी छात्रवृत्ति प्राप्त करें',
    'guide.issues.mobile': 'समस्या: मोबाइल नंबर आधार से जुड़ा नहीं है',
    'guide.issues.mobile.solution': 'समाधान: पहले मोबाइल नंबर लिंक करने के लिए निकटतम आधार केंद्र पर जाएं या mAadhaar ऐप का उपयोग करें।',
    'guide.issues.dormant': 'समस्या: खाता निष्क्रिय/निष्क्रिय दिखाता है',
    'guide.issues.dormant.solution': 'समाधान: खाता पुनः सक्रिय करने के लिए छोटी जमा या निकासी करें, फिर डीबीटी के लिए आवेदन करें।',
    'guide.issues.mismatch': 'समस्या: आधार और बैंक खाते के बीच नाम मेल नहीं खाता',
    'guide.issues.mismatch.solution': 'समाधान: सटीक मिलान सुनिश्चित करने के लिए आधार या बैंक खाते में नाम अपडेट करें।',
    
    // Check
    'check.title': 'खाता स्थिति जांचें',
    'check.subtitle': 'सत्यापित करें कि आपका बैंक खाता डीबीटी सक्षम और आधार लिंक्ड है',
    
    // Track
    'track.title': 'अपनी छात्रवृत्ति ट्रैक करें',
    'track.subtitle': 'अपनी प्री-मैट्रिक या पोस्ट-मैट्रिक छात्रवृत्ति आवेदन की स्थिति जांचें',
    
    // Documents
    'documents.title': 'दस्तावेज़ लाइब्रेरी',
    'documents.subtitle': 'डीबीटी और छात्रवृत्ति के लिए महत्वपूर्ण दस्तावेज़, फॉर्म और मार्गदर्शन सामग्री डाउनलोड करें',
    'documents.search': 'दस्तावेज़ खोजें...',
    'documents.filter': 'सभी श्रेणियां',
    'documents.showing': 'दिखाए जा रहे हैं',
    'documents.total': 'कुल डाउनलोड:',
    'documents.essential': 'आवश्यक दस्तावेज़',
    'documents.all': 'सभी दस्तावेज़',
    'documents.noResults': 'कोई दस्तावेज़ नहीं मिला',
    'documents.noResults.desc': 'अपने खोज शब्दों या श्रेणी फ़िल्टर को समायोजित करने का प्रयास करें।',
    'documents.help.title': 'दस्तावेज़ों के साथ सहायता चाहिए?',
    'documents.help.support': 'दस्तावेज़ सहायता',
    'documents.help.technical': 'तकनीकी समस्याएं?',
    'documents.help.technical.desc': 'दस्तावेज़ डाउनलोड करने या खोलने में समस्या हो रही है?',
    'documents.categories': {
      'Forms': 'फॉर्म',
      'Guides': 'गाइड',
      'Scholarship Forms': 'छात्रवृत्ति फॉर्म',
      'Reference': 'संदर्भ',
      'Certificates': 'प्रमाणपत्र',
      'Guidelines': 'दिशानिर्देश',
      'Brochures': 'ब्रोशर',
      'Posters': 'पोस्टर',
      'FAQ': 'अक्सर पूछे जाने वाले प्रश्न'
    },
    
    // Schools
    'schools.title': 'स्कूल निर्देशिका',
    'schools.subtitle': 'डीबीटी मार्गदर्शन और छात्रवृत्ति सहायता के लिए स्थानीय स्कूलों और प्रधानाचार्यों से जुड़ें',
    
    // Gram Panchayat
    'gp.title': 'ग्राम पंचायत निर्देशिका',
    'gp.subtitle': 'डीबीटी नामांकन और छात्रवृत्ति सहायता के लिए अपनी स्थानीय ग्राम पंचायत खोजें',
    
    // Chat
    'chat.placeholder': 'डीबीटी, छात्रवृत्ति, या खाता सत्यापन के बारे में मुझसे पूछें...',
    'chat.send': 'भेजें',
    'chat.title': 'एआई सहायक से पूछें',
    
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

  const t = (key: string): TranslationValue => {
    return translations[language][key] || key;
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