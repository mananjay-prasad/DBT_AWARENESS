import React, { useState } from 'react';
import { Search, Download, FileText, Filter, HelpCircle, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Documents: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const documents = [
    {
      id: 1,
      title: language === 'en' ? 'DBT Enrollment Form' : 'डीबीटी नामांकन फॉर्म',
      description: language === 'en' 
        ? 'Official form to enable DBT on your bank account' 
        : 'अपने बैंक खाते पर डीबीटी सक्षम करने के लिए आधिकारिक फॉर्म',
      category: 'Forms',
      type: 'PDF',
      size: '0.8 MB',
      language: 'both',
      downloads: 15420,
      essential: true
    },
    {
      id: 2,
      title: language === 'en' ? 'Aadhaar vs DBT Guide' : 'आधार बनाम डीबीटी गाइड',
      description: language === 'en'
        ? 'Complete guide explaining the difference between Aadhaar-linked and DBT-enabled accounts'
        : 'आधार-लिंक्ड और डीबीटी-सक्षम खातों के बीच अंतर बताने वाली पूर्ण गाइड',
      category: 'Guides',
      type: 'PDF',
      size: '2.3 MB',
      language: 'both',
      downloads: 8750,
      essential: true
    },
    {
      id: 3,
      title: language === 'en' ? 'Pre-Matric Scholarship Application' : 'प्री-मैट्रिक छात्रवृत्ति आवेदन',
      description: language === 'en'
        ? 'Application form for Pre-Matric scholarship for SC students'
        : 'एससी छात्रों के लिए प्री-मैट्रिक छात्रवृत्ति आवेदन फॉर्म',
      category: 'Scholarship Forms',
      type: 'PDF',
      size: '1.2 MB',
      language: 'both',
      downloads: 12300,
      essential: true
    },
    {
      id: 4,
      title: language === 'en' ? 'Post-Matric Scholarship Application' : 'पोस्ट-मैट्रिक छात्रवृत्ति आवेदन',
      description: language === 'en'
        ? 'Application form for Post-Matric scholarship for SC students'
        : 'एससी छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति आवेदन फॉर्म',
      category: 'Scholarship Forms',
      type: 'PDF',
      size: '1.5 MB',
      language: 'both',
      downloads: 9800,
      essential: true
    },
    {
      id: 5,
      title: language === 'en' ? 'Income Certificate Format' : 'आय प्रमाण पत्र प्रारूप',
      description: language === 'en'
        ? 'Standard format for income certificate required for scholarships'
        : 'छात्रवृत्ति के लिए आवश्यक आय प्रमाण पत्र का मानक प्रारूप',
      category: 'Certificates',
      type: 'PDF',
      size: '0.5 MB',
      language: 'both',
      downloads: 6540,
      essential: false
    },
    {
      id: 6,
      title: language === 'en' ? 'DBT Troubleshooting Guide' : 'डीबीटी समस्या निवारण गाइड',
      description: language === 'en'
        ? 'Solutions for common DBT enrollment and transfer issues'
        : 'सामान्य डीबीटी नामांकन और स्थानांतरण समस्याओं के समाधान',
      category: 'Reference',
      type: 'PDF',
      size: '1.8 MB',
      language: 'both',
      downloads: 4320,
      essential: false
    },
    {
      id: 7,
      title: language === 'en' ? 'Scholarship Guidelines 2024' : 'छात्रवृत्ति दिशानिर्देश 2024',
      description: language === 'en'
        ? 'Updated guidelines for SC scholarship schemes for 2024'
        : '2024 के लिए एससी छात्रवृत्ति योजनाओं के अपडेटेड दिशानिर्देश',
      category: 'Guidelines',
      type: 'PDF',
      size: '3.2 MB',
      language: 'both',
      downloads: 7890,
      essential: false
    },
    {
      id: 8,
      title: language === 'en' ? 'DBT Awareness Brochure' : 'डीबीटी जागरूकता ब्रोशर',
      description: language === 'en'
        ? 'Informational brochure about DBT benefits and enrollment'
        : 'डीबीटी लाभ और नामांकन के बारे में जानकारी ब्रोशर',
      category: 'Brochures',
      type: 'PDF',
      size: '2.1 MB',
      language: 'both',
      downloads: 5670,
      essential: false
    }
  ];

  const categories = [
    { value: '', label: t('documents.filter.all') },
    { value: 'Forms', label: t('documents.categories.forms') },
    { value: 'Guides', label: t('documents.categories.guides') },
    { value: 'Scholarship Forms', label: t('documents.categories.scholarship') },
    { value: 'Reference', label: t('documents.categories.reference') },
    { value: 'Certificates', label: t('documents.categories.certificates') },
    { value: 'Guidelines', label: t('documents.categories.guidelines') },
    { value: 'Brochures', label: t('documents.categories.brochures') }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const essentialDocuments = filteredDocuments.filter(doc => doc.essential);
  const totalDownloads = documents.reduce((total, doc) => total + doc.downloads, 0);

  const getLanguageDisplay = (docLanguage: string) => {
    if (docLanguage === 'both') {
      return t('documents.language.both');
    } else if (docLanguage === 'english') {
      return t('documents.language.english');
    } else {
      return t('documents.language.hindi');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('documents.title')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
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
                placeholder={t('documents.search.placeholder') as string}
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
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between text-sm text-gray-600">
            <span>
              {t('documents.showing.text')} {filteredDocuments.length} {language === 'en' ? 'documents' : 'दस्तावेज़'}
            </span>
            <span>
              {t('documents.total.downloads')} {totalDownloads.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Essential Documents */}
            {essentialDocuments.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="mr-2 text-orange-500" size={24} />
                  {t('documents.essential.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {essentialDocuments.map((doc) => (
                    <div key={doc.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                      
                      <div className="space-y-2 text-xs text-gray-500 mb-4">
                        <div className="flex justify-between">
                          <span>{language === 'en' ? 'Type:' : 'प्रकार:'} {doc.type}</span>
                          <span>{language === 'en' ? 'Size:' : 'आकार:'} {doc.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{language === 'en' ? 'Language:' : 'भाषा:'} {getLanguageDisplay(doc.language)}</span>
                          <span>{doc.downloads.toLocaleString()} {language === 'en' ? 'downloads' : 'डाउनलोड'}</span>
                        </div>
                      </div>

                      <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center">
                        <Download size={16} className="mr-2" />
                        {t('common.download')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All Documents */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('documents.all.title')}
              </h2>
              
              {filteredDocuments.length > 0 ? (
                <div className="space-y-4">
                  {filteredDocuments.map((doc) => (
                    <div key={doc.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex-1 mb-4 sm:mb-0">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{doc.description}</p>
                          
                          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <span>{language === 'en' ? 'Type:' : 'प्रकार:'} {doc.type}</span>
                            <span>{language === 'en' ? 'Size:' : 'आकार:'} {doc.size}</span>
                            <span>{language === 'en' ? 'Language:' : 'भाषा:'} {getLanguageDisplay(doc.language)}</span>
                            <span>{doc.downloads.toLocaleString()} {language === 'en' ? 'downloads' : 'डाउनलोड'}</span>
                          </div>
                        </div>
                        
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center sm:ml-4">
                          <Download size={16} className="mr-2" />
                          {t('common.download')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                  <FileText className="text-gray-400 mx-auto mb-4" size={48} />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t('documents.no.results')}</h3>
                  <p className="text-gray-600">{t('documents.no.results.desc')}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Help Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <HelpCircle className="mr-2 text-blue-500" size={20} />
                  {t('documents.help.title')}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('documents.help.support')}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone size={14} />
                      <span>1800-XXX-XXXX</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">{t('documents.help.technical')}</h4>
                    <p className="text-sm text-gray-600">{t('documents.help.technical.desc')}</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {language === 'en' ? 'Quick Stats' : 'त्वरित आंकड़े'}
                </h3>
                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{documents.length}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Total Documents' : 'कुल दस्तावेज़'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{essentialDocuments.length}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Essential Docs' : 'आवश्यक दस्तावेज़'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{totalDownloads.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Total Downloads' : 'कुल डाउनलोड'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;