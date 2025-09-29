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
      title: "DBT Enrollment Form",
      description: "Official form for enabling Direct Beneficiary Transfer on your bank account",
      category: "Forms",
      type: "PDF",
      size: "0.8 MB",
      language: "English/Hindi",
      downloads: 15420,
      isNew: false,
      isImportant: true
    },
    {
      id: 2,
      title: "Aadhaar vs DBT Complete Guide",
      description: "Comprehensive guide explaining differences and procedures",
      category: "Guides",
      type: "PDF",
      size: "3.2 MB",
      language: "English/Hindi",
      downloads: 8950,
      isNew: true,
      isImportant: true
    },
    {
      id: 3,
      title: "Pre-Matric Scholarship Application Form",
      description: "Application form for SC Pre-Matric Scholarship Scheme",
      category: "Scholarship Forms",
      type: "PDF",
      size: "1.1 MB",
      language: "English/Hindi",
      downloads: 12300,
      isNew: false,
      isImportant: true
    },
    {
      id: 4,
      title: "Post-Matric Scholarship Application Form",
      description: "Application form for SC Post-Matric Scholarship Scheme",
      category: "Scholarship Forms",
      type: "PDF",
      size: "1.3 MB",
      language: "English/Hindi",
      downloads: 9870,
      isNew: false,
      isImportant: true
    },
    {
      id: 5,
      title: "Bank List Supporting DBT",
      description: "Complete list of banks that support Direct Beneficiary Transfer",
      category: "Reference",
      type: "PDF",
      size: "0.6 MB",
      language: "English",
      downloads: 5640,
      isNew: false,
      isImportant: false
    },
    {
      id: 6,
      title: "Income Certificate Format",
      description: "Standard format for income certificate required for scholarships",
      category: "Certificates",
      type: "DOC",
      size: "0.3 MB",
      language: "English/Hindi",
      downloads: 7890,
      isNew: false,
      isImportant: false
    },
    {
      id: 7,
      title: "Caste Certificate Format",
      description: "Standard format for caste certificate for SC students",
      category: "Certificates",
      type: "DOC",
      size: "0.3 MB",
      language: "English/Hindi",
      downloads: 6540,
      isNew: false,
      isImportant: false
    },
    {
      id: 8,
      title: "DBT Troubleshooting Manual",
      description: "Solutions for common issues in DBT enrollment and activation",
      category: "Guides",
      type: "PDF",
      size: "2.1 MB",
      language: "English/Hindi",
      downloads: 4320,
      isNew: true,
      isImportant: false
    },
    {
      id: 9,
      title: "Scholarship Scheme Guidelines 2024",
      description: "Updated guidelines for Pre-Matric and Post-Matric scholarship schemes",
      category: "Guidelines",
      type: "PDF",
      size: "4.5 MB",
      language: "English",
      downloads: 11200,
      isNew: true,
      isImportant: true
    },
    {
      id: 10,
      title: "Student Information Brochure",
      description: "Quick reference brochure for students about DBT and scholarships",
      category: "Brochures",
      type: "PDF",
      size: "1.8 MB",
      language: "English/Hindi",
      downloads: 3450,
      isNew: false,
      isImportant: false
    },
    {
      id: 11,
      title: "Parent Awareness Poster",
      description: "Educational poster for parents about importance of DBT",
      category: "Posters",
      type: "PDF",
      size: "2.3 MB",
      language: "Hindi",
      downloads: 2180,
      isNew: false,
      isImportant: false
    },
    {
      id: 12,
      title: "Frequently Asked Questions",
      description: "Common questions and answers about DBT and scholarships",
      category: "FAQ",
      type: "PDF",
      size: "1.4 MB",
      language: "English/Hindi",
      downloads: 8760,
      isNew: false,
      isImportant: false
    }
  ];

  const categories = [
    "All Categories",
    "Forms",
    "Guides", 
    "Scholarship Forms",
    "Reference",
    "Certificates",
    "Guidelines",
    "Brochures",
    "Posters",
    "FAQ"
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
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search documents..."
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
            <span>Showing {filteredDocuments.length} documents</span>
            <span>Total downloads: {documents.reduce((total, doc) => total + doc.downloads, 0).toLocaleString()}</span>
          </div>
        </div>

        {/* Important Documents Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Documents</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <span className="font-medium">Type:</span> {doc.type}
                    </div>
                    <div>
                      <span className="font-medium">Size:</span> {doc.size}
                    </div>
                    <div className="col-span-2">
                      <span className="font-medium">Language:</span> {doc.language}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Documents</h2>
          <div className="space-y-4">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between">
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
                          {doc.category}
                        </span>
                        <span>{doc.type} • {doc.size}</span>
                        <span>{doc.language}</span>
                        <span>{doc.downloads.toLocaleString()} downloads</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Eye size={16} />
                    </button>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center">
                      <Download size={16} className="mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12 bg-white rounded-xl shadow-lg">
              <FileText className="text-gray-400 mx-auto mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Documents Found</h3>
              <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Need Help with Documents?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Document Support</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>• All documents are available in English and Hindi</li>
                <li>• Forms are fillable PDFs for your convenience</li>
                <li>• Check file size before downloading on mobile data</li>
                <li>• Print documents on plain A4 paper</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Technical Issues?</h4>
              <p className="text-blue-700 text-sm mb-2">
                Having trouble downloading or opening documents?
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-blue-800">📞 Helpline: 1800-XXX-XXXX</p>
                <p className="text-blue-800">✉️ Email: documents@dbtportal.gov.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;