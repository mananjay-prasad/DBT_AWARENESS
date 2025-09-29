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
    'home.aadhaar.features': [
      'Basic connection of Aadhaar number with bank account',
      'Used for KYC verification',
      'May not receive government benefits directly',
      'Standard banking services available'
    ],
    'home.dbt.features': [
      'Specially configured for government benefit transfers',
      'Direct scholarship disbursement capability',
      'Required for SC scholarships',
      'Faster and more secure benefit delivery'
    ],
    
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
    'guide.documents.essential.title': 'Essential Documents:',
    'guide.documents.additional.title': 'Additional Requirements:',
    'guide.issues.solution': 'Solution:',
    'guide.help.call': 'Call Helpline',
    'guide.help.visit': 'Visit Local Offices',
    'guide.help.office.desc': 'Gram Panchayat or School Office',
    'guide.help.directory': 'Find locations in our directory',
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
    
    // Important Notes
    'common.important.notes': 'Important Notes',
    'common.important.note.sc': 'Important: For SC Pre-Matric and Post-Matric scholarships, you MUST have a DBT-enabled Aadhaar-seeded bank account.',
    
    // Track page
    'track.help.title': 'Need Help with Tracking?',
    'track.help.id.not.working': 'Application ID Not Working?',
    'track.help.delayed': 'Application Delayed?',
    
    // Check
    'check.title': 'Check Account Status',
    'check.subtitle': 'Verify if your bank account is DBT enabled and Aadhaar linked',
    
    // Track
    'track.title': 'Track Your Scholarship',
    'track.subtitle': 'Check the status of your Pre-Matric or Post-Matric scholarship application',
    
    // Documents
    'documents.title': 'Document Library',
    'documents.subtitle': 'Download important documents, forms, and guidance materials for DBT and scholarships',
    'documents.help.title': 'Need help with documents?',
    'documents.help.support': 'Document Support',
    'documents.help.technical': 'Technical Issues?',
    'documents.help.technical.desc': 'Having trouble downloading or opening documents?',
    
    // Check page
    'check.important.demo': 'This is a demo service. In production, this would connect to actual government databases',
    'check.important.mobile': 'Keep your mobile number updated and linked with Aadhaar',
    'check.important.regular': 'Regularly check your account status before scholarship application deadlines',
    'check.important.contact': 'Contact your bank if there are any discrepancies in the information',
    
    // Services tips
    'services.tips.bank': 'Visit your bank branch with original Aadhaar card',
    'services.tips.mobile': 'Ensure mobile number is linked with Aadhaar',
    'services.tips.active': 'Keep your bank account active with regular transactions',
    'services.tips.kyc': 'Update KYC if account details have changed',
    
    // Help section
    'help.contact.title': 'Contact Support',
    'help.faq.title': 'FAQ',
    'help.resources.title': 'Resources',
    'help.helpline.title': '24/7 Helpline',
    'help.whatsapp.title': 'WhatsApp Support',
    'help.whatsapp.desc': 'Get instant help via WhatsApp',
    'help.whatsapp.button': 'Chat on WhatsApp',
    'help.hours': 'Mon-Fri: 9:00 AM - 6:00 PM',
    'help.available': 'Available Mon-Fri, 9:00 AM - 6:00 PM',
    
    // Gram Panchayat
    'gp.search.placeholder': 'Search by name, location, or sarpanch...',
    'gp.district.all': 'All Districts',
    'gp.sarpanch': 'Sarpanch',
    'gp.working.hours': 'Working Hours',
    'gp.address': 'Address',
    'gp.services.offered': 'Services Offered',
    'gp.view.map': 'View on Map',
    'gp.location.map': 'Location Map',
    'gp.interactive.map': 'Interactive Map',
    'gp.will.show': 'Will show GP locations',
    'gp.important.documents': 'Important Documents',
    'gp.need.help': 'Need Immediate Help?',
    'gp.toll.free': 'Toll Free: 1800-XXX-XXXX',
    'gp.email': 'help@dbtportal.gov.in',
    'gp.available.hours': 'Available Mon-Fri, 9:00 AM - 6:00 PM for technical support and guidance.',
    'gp.no.results': 'No Results Found',
    'gp.no.results.desc': 'Try adjusting your search terms or filters.',
    
    // Schools
    'schools.search.placeholder': 'Search schools, principals, location...',
    'schools.type.all': 'All Types',
    'schools.type.government': 'Government',
    'schools.type.private': 'Private',
    'schools.type.central': 'Central Government',
    'schools.principal': 'Principal',
    'schools.working.hours': 'Working Hours',
    'schools.address': 'Address',
    'schools.total.students': 'Total Students',
    'schools.sc.students': 'SC Students',
    'schools.key.facilities': 'Key Facilities',
    'schools.view.location': 'View Location',
    'schools.quick.stats': 'Quick Stats',
    'schools.school.locations': 'School Locations',
    'schools.interactive.map': 'Interactive Map',
    'schools.will.show': 'Will show school locations',
    'schools.school.resources': 'School Resources',
    'schools.no.schools': 'No Schools Found',
    'schools.no.schools.desc': 'Try adjusting your search criteria or filters.',
    'schools.for.principals': 'For Principals & Teachers',
    'schools.training.help': 'Need training materials or guidance on helping students with DBT enrollment?',
    'schools.training.helpline': 'Training Helpline: 1800-XXX-YYYY',
    'schools.training.email': 'training@dbtportal.gov.in',
    'schools.total.students.stat': 'Total Students',
    'schools.sc.students.stat': 'SC Students',
    'schools.schools.listed': 'Schools Listed',
    
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
    'home.aadhaar.features': [
      'बैंक खाते के साथ आधार संख्या का बुनियादी कनेक्शन',
      'केवाईसी सत्यापन के लिए उपयोग',
      'सीधे सरकारी लाभ प्राप्त नहीं हो सकते',
      'मानक बैंकिंग सेवाएं उपलब्ध'
    ],
    'home.dbt.features': [
      'सरकारी लाभ स्थानांतरण के लिए विशेष रूप से कॉन्फ़िगर किया गया',
      'प्रत्यक्ष छात्रवृत्ति वितरण क्षमता',
      'एससी छात्रवृत्ति के लिए आवश्यक',
      'तेज़ और अधिक सुरक्षित लाभ वितरण'
    ],
    
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
    'guide.documents.essential.title': 'आवश्यक दस्तावेज:',
    'guide.documents.additional.title': 'अतिरिक्त आवश्यकताएं:',
    'guide.issues.solution': 'समाधान:',
    'guide.help.call': 'हेल्पलाइन कॉल करें',
    'guide.help.visit': 'स्थानीय कार्यालयों में जाएं',
    'guide.help.office.desc': 'ग्राम पंचायत या स्कूल कार्यालय',
    'guide.help.directory': 'हमारी निर्देशिका में स्थान खोजें',
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
    
    // Important Notes
    'common.important.notes': 'महत्वपूर्ण नोट्स',
    'common.important.note.sc': 'महत्वपूर्ण: एससी प्री-मैट्रिक और पोस्ट-मैट्रिक छात्रवृत्ति के लिए, आपके पास डीबीटी-सक्षम आधार-सीडेड बैंक खाता होना चाहिए।',
    
    // Track page
    'track.help.title': 'ट्रैकिंग में सहायता चाहिए?',
    'track.help.id.not.working': 'एप्लिकेशन आईडी काम नहीं कर रहा?',
    'track.help.delayed': 'आवेदन में देरी?',
    
    // Check
    'check.title': 'खाता स्थिति जांचें',
    'check.subtitle': 'सत्यापित करें कि आपका बैंक खाता डीबीटी सक्षम और आधार लिंक्ड है',
    
    // Track
    'track.title': 'अपनी छात्रवृत्ति ट्रैक करें',
    'track.subtitle': 'अपनी प्री-मैट्रिक या पोस्ट-मैट्रिक छात्रवृत्ति आवेदन की स्थिति जांचें',
    
    // Documents
    'documents.title': 'दस्तावेज़ लाइब्रेरी',
    'documents.subtitle': 'डीबीटी और छात्रवृत्ति के लिए महत्वपूर्ण दस्तावेज़, फॉर्म और मार्गदर्शन सामग्री डाउनलोड करें',
    'documents.help.title': 'दस्तावेज़ों के साथ सहायता चाहिए?',
    'documents.help.support': 'दस्तावेज़ सहायता',
    'documents.help.technical': 'तकनीकी समस्याएं?',
    'documents.help.technical.desc': 'दस्तावेज़ डाउनलोड करने या खोलने में समस्या हो रही है?',
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
    'documents.type': 'प्रकार:',
    'documents.size': 'आकार:',
    'documents.language': 'भाषा:',
    
    // Help & Assistance
    'help.title': 'सहायता और सहायता',
    'help.contact': 'संपर्क सहायता',
    'help.faq': 'अक्सर पूछे जाने वाले प्रश्न',
    'help.resources': 'संसाधन',
    'help.helpline': '24/7 हेल्पलाइन',
    'help.whatsapp': 'व्हाट्सएप सहायता',
    'help.whatsapp.desc': 'व्हाट्सएप के माध्यम से तुरंत सहायता प्राप्त करें',
    'help.whatsapp.button': 'व्हाट्सएप पर चैट करें',
    'help.useful.links': 'उपयोगी लिंक',
    'help.video.tutorials': 'वीडियो ट्यूटोरियल',
    'help.video.desc': 'चरण-दर-चरण वीडियो गाइड देखें',
    'help.faq.q1': 'आधार-लिंक्ड और डीबीटी-सक्षम खाते के बीच क्या अंतर है?',
    'help.faq.a1': 'आधार-लिंक्ड खाते में केवल आपका आधार नंबर जुड़ा होता है। डीबीटी-सक्षम खाता सरकारी लाभ सीधे प्राप्त करने के लिए विशेष रूप से कॉन्फ़िगर किया गया है।',
    'help.faq.q2': 'मैं अपने खाते पर डीबीटी कैसे सक्षम करूं?',
    'help.faq.a2': 'आधार कार्ड और बैंक पासबुक के साथ अपनी बैंक शाखा में जाएं। डीबीटी नामांकन फॉर्म भरें और जमा करें। बैंक 2-3 कार्य दिवसों के भीतर डीबीटी सक्रिय कर देगा।',
    'help.faq.q3': 'मेरी छात्रवृत्ति का वितरण क्यों नहीं हो रहा?',
    'help.faq.a3': 'सामान्य कारणों में शामिल हैं: डीबीटी सक्षम नहीं, खाता निष्क्रिय, आधार और बैंक खाते के बीच नाम मेल नहीं खाता, या अधूरे आवेदन दस्तावेज।',
    
    // Documents page
    'documents.categories.forms': 'फॉर्म',
    'documents.categories.guides': 'गाइड',
    'documents.categories.scholarship': 'छात्रवृत्ति फॉर्म',
    'documents.categories.reference': 'संदर्भ',
    'documents.categories.certificates': 'प्रमाणपत्र',
    'documents.categories.guidelines': 'दिशानिर्देश',
    'documents.categories.brochures': 'ब्रोशर',
    'documents.categories.posters': 'पोस्टर',
    'documents.categories.faq': 'अक्सर पूछे जाने वाले प्रश्न',
    'documents.type.label': 'प्रकार:',
    'documents.size.label': 'आकार:',
    'documents.language.label': 'भाषा:',
    'documents.language.english': 'अंग्रेजी',
    'documents.language.hindi': 'हिंदी',
    'documents.language.both': 'अंग्रेजी/हिंदी',
    'documents.search.placeholder': 'दस्तावेज़ खोजें...',
    'documents.filter.all': 'सभी श्रेणियां',
    'documents.showing.text': 'दिखाए जा रहे हैं',
    'documents.total.downloads': 'कुल डाउनलोड:',
    'documents.essential.title': 'आवश्यक दस्तावेज़',
    'documents.all.title': 'सभी दस्तावेज़',
    'documents.no.results': 'कोई दस्तावेज़ नहीं मिला',
    'documents.no.results.desc': 'अपने खोज शब्दों या श्रेणी फ़िल्टर को समायोजित करने का प्रयास करें।',
    'documents.help.title': 'दस्तावेज़ों के साथ सहायता चाहिए?',
    'documents.help.support': 'दस्तावेज़ सहायता',
    'documents.help.technical': 'तकनीकी समस्याएं?',
    'documents.help.technical.desc': 'दस्तावेज़ डाउनलोड करने या खोलने में समस्या हो रही है?',
    
    // Check page
    'check.important.demo': 'यह एक डेमो सेवा है। उत्पादन में, यह वास्तविक सरकारी डेटाबेस से जुड़ेगा',
    'check.important.mobile': 'अपना मोबाइल नंबर अपडेट रखें और आधार से लिंक करें',
    'check.important.regular': 'छात्रवृत्ति आवेदन की समय सीमा से पहले नियमित रूप से अपने खाते की स्थिति जांचें',
    'check.important.contact': 'यदि जानकारी में कोई विसंगति है तो अपने बैंक से संपर्क करें',
    
    // Services tips
    'services.tips.bank': 'मूल आधार कार्ड के साथ अपनी बैंक शाखा में जाएं',
    'services.tips.mobile': 'सुनिश्चित करें कि मोबाइल नंबर आधार से जुड़ा है',
    'services.tips.active': 'नियमित लेनदेन के साथ अपना बैंक खाता सक्रिय रखें',
    'services.tips.kyc': 'यदि खाता विवरण बदल गया है तो केवाईसी अपडेट करें',
    
    // Help section
    'help.contact.title': 'संपर्क सहायता',
    'help.faq.title': 'अक्सर पूछे जाने वाले प्रश्न',
    'help.resources.title': 'संसाधन',
    'help.helpline.title': '24/7 हेल्पलाइन',
    'help.whatsapp.title': 'व्हाट्सएप सहायता',
    'help.whatsapp.desc': 'व्हाट्सएप के माध्यम से तुरंत सहायता प्राप्त करें',
    'help.whatsapp.button': 'व्हाट्सएप पर चैट करें',
    'help.hours': 'सोम-शुक्र: सुबह 9:00 - शाम 6:00',
    'help.available': 'सोमवार-शुक्रवार, सुबह 9 बजे - शाम 6 बजे उपलब्ध',
    
    // Gram Panchayat
    'gp.search.placeholder': 'नाम, स्थान या सरपंच द्वारा खोजें...',
    'gp.district.all': 'सभी जिले',
    'gp.sarpanch': 'सरपंच',
    'gp.working.hours': 'कार्य समय',
    'gp.address': 'पता',
    'gp.services.offered': 'प्रदान की जाने वाली सेवाएं',
    'gp.view.map': 'मानचित्र पर देखें',
    'gp.location.map': 'स्थान मानचित्र',
    'gp.interactive.map': 'इंटरैक्टिव मानचित्र',
    'gp.will.show': 'जीपी स्थान दिखाएगा',
    'gp.important.documents': 'महत्वपूर्ण दस्तावेज़',
    'gp.need.help': 'तत्काल सहायता चाहिए?',
    'gp.toll.free': 'टॉल फ्री: 1800-XXX-XXXX',
    'gp.email': 'help@dbtportal.gov.in',
    'gp.available.hours': 'तकनीकी सहायता और मार्गदर्शन के लिए सोमवार-शुक्रवार, सुबह 9:00 - शाम 6:00 उपलब्ध।',
    'gp.no.results': 'कोई परिणाम नहीं मिला',
    'gp.no.results.desc': 'अपने खोज शब्दों या फ़िल्टर को समायोजित करने का प्रयास करें।',
    
    // Schools
    'schools.search.placeholder': 'स्कूल, प्रधानाचार्य, स्थान खोजें...',
    'schools.type.all': 'सभी प्रकार',
    'schools.type.government': 'सरकारी',
    'schools.type.private': 'निजी',
    'schools.type.central': 'केंद्रीय सरकार',
    'schools.principal': 'प्रधानाचार्य',
    'schools.working.hours': 'कार्य समय',
    'schools.address': 'पता',
    'schools.total.students': 'कुल छात्र',
    'schools.sc.students': 'एससी छात्र',
    'schools.key.facilities': 'मुख्य सुविधाएं',
    'schools.view.location': 'स्थान देखें',
    'schools.quick.stats': 'त्वरित आंकड़े',
    'schools.school.locations': 'स्कूल स्थान',
    'schools.interactive.map': 'इंटरैक्टिव मानचित्र',
    'schools.will.show': 'स्कूल स्थान दिखाएगा',
    'schools.school.resources': 'स्कूल संसाधन',
    'schools.no.schools': 'कोई स्कूल नहीं मिला',
    'schools.no.schools.desc': 'अपने खोज मानदंड या फ़िल्टर को समायोजित करने का प्रयास करें।',
    'schools.for.principals': 'प्रधानाचार्यों और शिक्षकों के लिए',
    'schools.training.help': 'छात्रों को डीबीटी नामांकन में सहायता करने के लिए प्रशिक्षण सामग्री या मार्गदर्शन चाहिए?',
    'schools.training.helpline': 'प्रशिक्षण हेल्पलाइन: 1800-XXX-YYYY',
    'schools.training.email': 'training@dbtportal.gov.in',
    'schools.total.students.stat': 'कुल छात्र',
    'schools.sc.students.stat': 'एससी छात्र',
    'schools.schools.listed': 'सूचीबद्ध स्कूल',
    
    // Documents page
    'documents.categories.forms': 'Forms',
    'documents.categories.guides': 'Guides',
    'documents.categories.scholarship': 'Scholarship Forms',
    'documents.categories.reference': 'Reference',
    'documents.categories.certificates': 'Certificates',
    'documents.categories.guidelines': 'Guidelines',
    'documents.categories.brochures': 'Brochures',
    'documents.categories.posters': 'Posters',
    'documents.categories.faq': 'FAQ',
    'documents.type.label': 'Type:',
    'documents.size.label': 'Size:',
    'documents.language.label': 'Language:',
    'documents.language.english': 'English',
    'documents.language.hindi': 'Hindi',
    'documents.language.both': 'English/Hindi',
    'documents.search.placeholder': 'Search documents...',
    'documents.filter.all': 'All Categories',
    'documents.showing.text': 'Showing',
    'documents.total.downloads': 'Total Downloads:',
    'documents.essential.title': 'Essential Documents',
    'documents.all.title': 'All Documents',
    'documents.no.results': 'No documents found',
    'documents.no.results.desc': 'Try adjusting your search terms or category filters.',
    'documents.help.title': 'Need help with documents?',
    'documents.help.support': 'Document Support',
    'documents.help.technical': 'Technical Issues?',
    'documents.help.technical.desc': 'Having trouble downloading or opening documents?',
    
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