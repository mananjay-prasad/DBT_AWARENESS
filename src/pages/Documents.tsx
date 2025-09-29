import React, { useState } from 'react';
import { Download, FileText, File, Search, Filter, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Documents: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const documents = [
    {
      id: 1,
      title: t('language') === 'en' ? "DBT Enrollment Form" : "डीबीटी नामांकन फॉर्म",
      description: t('language') === 'en' ? "Official form for enabling Direct Beneficiary Transfer on your bank account" : "आपके बैंक खाते पर प्रत्यक्ष लाभार्थी स्थानांतरण सक्षम करने के लिए आधिकारिक फॉर्म",
      category: "Forms",
      type: "PDF",
      size: "0.8 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 15420,
      isNew: false,
      isImportant: true
    },
    {
      id: 2,
      title: t('language') === 'en' ? "Aadhaar vs DBT Complete Guide" : "आधार बनाम डीबीटी पूर्ण गाइड",
      description: t('language') === 'en' ? "Comprehensive guide explaining differences and procedures" : "अंतर और प्रक्रियाओं को समझाने वाली व्यापक गाइड",
      category: "Guides",
      type: "PDF",
      size: "3.2 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 8950,
      isNew: true,
      isImportant: true
    },
    {
      id: 3,
      title: t('language') === 'en' ? "Pre-Matric Scholarship Application Form" : "प्री-मैट्रिक छात्रवृत्ति आवेदन फॉर्म",
      description: t('language') === 'en' ? "Application form for SC Pre-Matric Scholarship Scheme" : "एससी प्री-मैट्रिक छात्रवृत्ति योजना के लिए आवेदन फॉर्म",
      category: "Scholarship Forms",
      type: "PDF",
      size: "1.1 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 12300,
      isNew: false,
      isImportant: true
    },
    {
      id: 4,
      title: t('language') === 'en' ? "Post-Matric Scholarship Application Form" : "पोस्ट-मैट्रिक छात्रवृत्ति आवेदन फॉर्म",
      description: t('language') === 'en' ? "Application form for SC Post-Matric Scholarship Scheme" : "एससी पोस्ट-मैट्रिक छात्रवृत्ति योजना के लिए आवेदन फॉर्म",
      category: "Scholarship Forms",
      type: "PDF",
      size: "1.3 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 9870,
      isNew: false,
      isImportant: true
    },
    {
      id: 5,
      title: t('language') === 'en' ? "Bank List Supporting DBT" : "डीबीटी समर्थित बैंकों की सूची",
      description: t('language') === 'en' ? "Complete list of banks that support Direct Beneficiary Transfer" : "प्रत्यक्ष लाभार्थी स्थानांतरण का समर्थन करने वाले बैंकों की पूरी सूची",
      category: "Reference",
      type: "PDF",
      size: "0.6 MB",
      language: t('language') === 'en' ? "English" : "अंग्रेजी",
      downloads: 5640,
      isNew: false,
      isImportant: false
    },
    {
      id: 6,
      title: t('language') === 'en' ? "Income Certificate Format" : "आय प्रमाण पत्र प्रारूप",
      description: t('language') === 'en' ? "Standard format for income certificate required for scholarships" : "छात्रवृत्ति के लिए आवश्यक आय प्रमाण पत्र का मानक प्रारूप",
      category: "Certificates",
      type: "DOC",
      size: "0.3 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 7890,
      isNew: false,
      isImportant: false
    },
    {
      id: 7,
      title: t('language') === 'en' ? "Caste Certificate Format" : "जाति प्रमाण पत्र प्रारूप",
      description: t('language') === 'en' ? "Standard format for caste certificate for SC students" : "एससी छात्रों के लिए जाति प्रमाण पत्र का मानक प्रारूप",
      category: "Certificates",
      type: "DOC",
      size: "0.3 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 6540,
      isNew: false,
      isImportant: false
    },
    {
      id: 8,
      title: t('language') === 'en' ? "DBT Troubleshooting Manual" : "डीबीटी समस्या निवारण मैनुअल",
      description: t('language') === 'en' ? "Solutions for common issues in DBT enrollment and activation" : "डीबीटी नामांकन और सक्रियकरण में सामान्य समस्याओं के समाधान",
      category: "Guides",
      type: "PDF",
      size: "2.1 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 4320,
      isNew: true,
      isImportant: false
    },
    {
      id: 9,
      title: t('language') === 'en' ? "Scholarship Scheme Guidelines 2024" : "छात्रवृत्ति योजना दिशानिर्देश 2024",
      description: t('language') === 'en' ? "Updated guidelines for Pre-Matric and Post-Matric scholarship schemes" : "प्री-मैट्रिक और पोस्ट-मैट्रिक छात्रवृत्ति योजनाओं के लिए अद्यतन दिशानिर्देश",
      category: "Guidelines",
      type: "PDF",
      size: "4.5 MB",
      language: t('language') === 'en' ? "English" : "अंग्रेजी",
      downloads: 11200,
      isNew: true,
      isImportant: true
    },
    {
      id: 10,
      title: t('language') === 'en' ? "Student Information Brochure" : "छात्र सूचना ब्रोशर",
      description: t('language') === 'en' ? "Quick reference brochure for students about DBT and scholarships" : "डीबीटी और छात्रवृत्ति के बारे में छात्रों के लिए त्वरित संदर्भ ब्रोशर",
      category: "Brochures",
      type: "PDF",
      size: "1.8 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 3450,
      isNew: false,
      isImportant: false
    },
    {
      id: 11,
      title: t('language') === 'en' ? "Parent Awareness Poster" : "अभिभावक जागरूकता पोस्टर",
      description: t('language') === 'en' ? "Educational poster for parents about importance of DBT" : "डीबीटी के महत्व के बारे में माता-पिता के लिए शैक्षिक पोस्टर",
      category: "Posters",
      type: "PDF",
      size: "2.3 MB",
      language: t('language') === 'en' ? "Hindi" : "हिंदी",
      downloads: 2180,
      isNew: false,
      isImportant: false
    },
    {
      id: 12,
      title: t('language') === 'en' ? "Frequently Asked Questions" : "अक्सर पूछे जाने वाले प्रश्न",
      description: t('language') === 'en' ? "Common questions and answers about DBT and scholarships" : "डीबीटी और छात्रवृत्ति के बारे में सामान्य प्रश्न और उत्तर",
      category: "FAQ",
      type: "PDF",
      size: "1.4 MB",
      language: t('language') === 'en' ? "English/Hindi" : "अंग्रेजी/हिंदी",
      downloads: 8760,
      isNew: false,
      isImportant: false
    }
  ];

  const categories = [
    t('language') === 'en' ? "All Categories" : "सभी श्रेणियां",
    t('documents.categories.Forms'),
    t('documents.categories.Guides'),
    t('documents.categories.Scholarship Forms'),
    t('documents.categories.Reference'),
    t('documents.categories.Certificates'),
    t('documents.categories.Guidelines'),
    t('documents.categories.Brochures'),
    t('documents.categories.Posters'),
    t('documents.categories.FAQ')
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'All Categories' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="text-red-500" size={20} />;
      case 'DOC':
        return <File className="text-blue-500" size={20} />;
      default:
        return <FileText className="text-gray-500" size={20} />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Forms': 'bg-green-100 text-green-800',
      'Guides': 'bg-blue-100 text-blue-800',
      'Scholarship Forms': 'bg-purple-100 text-purple-800',
      'Reference': 'bg-gray-100 text-gray-800',
      'Certificates': 'bg-yellow-100 text-yellow-800',
      'Guidelines': 'bg-indigo-100 text-indigo-800',
      'Brochures': 'bg-pink-100 text-pink-800',
      'Posters': 'bg-orange-100 text-orange-800',
      'FAQ': 'bg-teal-100 text-teal-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('documents.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('documents.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('documents.search')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <span>{t('documents.showing')} {filteredDocuments.length} documents</span>
            <span>{t('documents.total')} {documents.reduce((total, doc) => total + doc.downloads, 0).toLocaleString()}</span>
          </div>
        </div>

        {/* Important Documents Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('documents.essential')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments
              .filter(doc => doc.isImportant)
              .map((doc) => (
                <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {getFileIcon(doc.type)}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg leading-tight">{doc.title}</h3>
                        {doc.isNew && (
                          <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doc.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(doc.category)}`}>
                      {doc.category}
                    </span>
                    <span className="text-xs text-gray-500">{doc.downloads.toLocaleString()} downloads</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                    <div>
                      <span className="font-medium">प्रकार:</span> {doc.type}
                    </div>
                    <div>
                      <span className="font-medium">आकार:</span> {doc.size}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">भाषा:</span> {doc.language}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center text-sm">
                      <Download size={16} className="mr-2" />
                      Download
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye size={16} />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Documents Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('documents.all')}</h2>
          <div className="space-y-4">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-4">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex-shrink-0 mt-1">
                      {getFileIcon(doc.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{doc.title}</h3>
                        {doc.isNew && (
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                        {doc.isImportant && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                            ESSENTIAL
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-3">{doc.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(doc.category)}`}>
                          {t(`documents.categories.${doc.category}`)}
                        </span>
                        <span>{doc.type} • {doc.size}</span>
                        <span>{doc.language}</span>
                  {t(`documents.categories.${doc.category}`)}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full lg:w-auto lg:ml-4">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="font-medium">{t('documents.type')}</span> {doc.type}
                    </button>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center flex-1 lg:flex-none justify-center">
                  <span className="font-medium">{t('documents.size')}</span> {doc.size}
                      {t('common.download')}
                    </button>
                  <span className="font-medium">{t('documents.language')}</span> {doc.language}
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <FileText className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{t('documents.noResults')}</h3>
              <p className="text-gray-600">{t('documents.noResults.desc')}</p>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">{t('documents.help.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">{t('documents.help.support')}</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>• {t('language') === 'en' ? 'All documents are available in English and Hindi' : 'सभी दस्तावेज़ अंग्रेजी और हिंदी में उपलब्ध हैं'}</li>
                <li>• {t('language') === 'en' ? 'Forms are fillable PDFs for your convenience' : 'आपकी सुविधा के लिए फॉर्म भरने योग्य पीडीएफ हैं'}</li>
                <li>• {t('language') === 'en' ? 'Check file size before downloading on mobile data' : 'मोबाइल डेटा पर डाउनलोड करने से पहले फ़ाइल का आकार जांचें'}</li>
                <li>• {t('language') === 'en' ? 'Print documents on plain A4 paper' : 'दस्तावेज़ों को सादे A4 पेपर पर प्रिंट करें'}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">{t('documents.help.technical')}</h4>
              <p className="text-blue-700 text-sm mb-2">
                {t('documents.help.technical.desc')}
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-blue-800">📞 {t('language') === 'en' ? 'Helpline: 1800-XXX-XXXX' : 'हेल्पलाइन: 1800-XXX-XXXX'}</p>
                <p className="text-blue-800">✉️ {t('language') === 'en' ? 'Email: documents@dbtportal.gov.in' : 'ईमेल: documents@dbtportal.gov.in'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;