import React, { useState } from 'react';
import { Search, Phone, Mail, MapPin, School, FileText, Download, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Schools: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const schools = [
    {
      id: 1,
      name: "Government Senior Secondary School, Rampur",
      type: "Government",
      level: "Secondary",
      district: "Central District",
      principal: {
        name: "Dr. Anjali Verma",
        phone: "+91-9876543220",
        email: "principal.rampur@education.gov.in"
      },
      address: "Rampur Village, Central District, Pin - 123456",
      coordinates: { lat: 28.6139, lng: 77.2090 },
      facilities: ["Computer Lab", "Library", "Scholarship Desk"],
      workingHours: "Mon-Sat: 8:00 AM - 2:00 PM",
      totalStudents: 450,
      scStudents: 89
    },
    {
      id: 2,
      name: "Holy Angels Higher Secondary School",
      type: "Private",
      level: "Higher Secondary",
      district: "North District",
      principal: {
        name: "Mr. Joseph Martin",
        phone: "+91-9876543221",
        email: "principal@holyangels.edu.in"
      },
      address: "Sector 15, North District, Pin - 123457",
      coordinates: { lat: 28.7041, lng: 77.1025 },
      facilities: ["Smart Classes", "Career Guidance", "Scholarship Cell"],
      workingHours: "Mon-Sat: 7:30 AM - 1:30 PM",
      totalStudents: 320,
      scStudents: 45
    },
    {
      id: 3,
      name: "Sarvodaya Vidyalaya, Ganga Nagar",
      type: "Government",
      level: "Senior Secondary",
      district: "South District",
      principal: {
        name: "Mrs. Meena Gupta",
        phone: "+91-9876543222",
        email: "principal.ganganagar@delhieducation.net"
      },
      address: "Block C, Ganga Nagar, South District, Pin - 123458",
      coordinates: { lat: 28.5355, lng: 77.3910 },
      facilities: ["Science Lab", "Computer Center", "DBT Help Desk"],
      workingHours: "Mon-Sat: 7:45 AM - 1:45 PM",
      totalStudents: 680,
      scStudents: 156
    },
    {
      id: 4,
      name: "Kendriya Vidyalaya, Krishnapur",
      type: "Central Government",
      level: "Senior Secondary",
      district: "East District",
      principal: {
        name: "Dr. Rakesh Sharma",
        phone: "+91-9876543223",
        email: "principal.krishnapur@kv.gov.in"
      },
      address: "Krishnapur Cantonment, East District, Pin - 123459",
      coordinates: { lat: 28.6692, lng: 77.4538 },
      facilities: ["Digital Library", "Counseling Center", "Financial Aid Office"],
      workingHours: "Mon-Sat: 8:00 AM - 2:00 PM",
      totalStudents: 540,
      scStudents: 78
    }
  ];

  const documents = [
    {
      title: "School DBT Enrollment Protocol",
      description: "Guidelines for school administrators to assist students with DBT setup",
      type: "PDF",
      size: "1.9 MB"
    },
    {
      title: "Student Information Brochure",
      description: "Comprehensive brochure about Aadhaar vs DBT for distribution to students",
      type: "PDF",
      size: "2.1 MB"
    },
    {
      title: "Parent-Teacher Meeting Presentation",
      description: "Ready-to-use presentation slides for PTA meetings on DBT awareness",
      type: "PPTX",
      size: "4.3 MB"
    },
    {
      title: "School Notice Board Template",
      description: "Template for displaying DBT information on school notice boards",
      type: "PDF",
      size: "1.2 MB"
    }
  ];

  const districts = ["All Districts", "Central District", "North District", "South District", "East District"];
  const schoolTypes = [
    { value: "All Types", label: t('schools.type.all') },
    { value: "Government", label: t('schools.type.government') },
    { value: "Private", label: t('schools.type.private') },
    { value: "Central Government", label: t('schools.type.central') }
  ];

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.principal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === '' || selectedDistrict === t('gp.district.all') || school.district === selectedDistrict;
    const matchesType = selectedType === '' || selectedType === t('schools.type.all') || school.type === selectedType;
    return matchesSearch && matchesDistrict && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Government':
        return 'bg-green-100 text-green-800';
      case 'Private':
        return 'bg-blue-100 text-blue-800';
      case 'Central Government':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('schools.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('schools.subtitle')}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t('schools.search.placeholder') as string}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {districts.map((district, index) => (
                <option key={district} value={district}>
                  {index === 0 ? t('gp.district.all') : district}
                </option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {schoolTypes.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Schools List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredSchools.map((school) => (
              <div key={school.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {language === 'en' ? school.name : 
                          school.id === 1 ? 'सरकारी वरिष्ठ माध्यमिक विद्यालय, रामपुर' :
                          school.id === 2 ? 'होली एंजल्स उच्चतर माध्यमिक विद्यालय' :
                          school.id === 3 ? 'सर्वोदय विद्यालय, गंगा नगर' :
                          school.id === 4 ? 'केंद्रीय विद्यालय, कृष्णपुर' : school.name
                        }
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(school.type)}`}>
                        {language === 'en' ? school.type :
                          school.type === 'Government' ? 'सरकारी' :
                          school.type === 'Private' ? 'निजी' :
                          school.type === 'Central Government' ? 'केंद्रीय सरकार' : school.type
                        }
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {language === 'en' ? school.level :
                        school.level === 'Secondary' ? 'माध्यमिक' :
                        school.level === 'Higher Secondary' ? 'उच्चतर माध्यमिक' :
                        school.level === 'Senior Secondary' ? 'वरिष्ठ माध्यमिक' : school.level
                      } • {school.district}
                    </p>
                  </div>
                  <div className="text-right">
                    <MapPin className="text-orange-500 inline-block mr-1" size={16} />
                    <span className="text-sm text-gray-500">{t('schools.view.location')}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('schools.principal')}</p>
                    <p className="font-medium">{language === 'en' ? school.principal.name : school.principal.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('schools.working.hours')}</p>
                    <p className="font-medium text-green-600">
                      {language === 'en' ? school.workingHours : 
                        school.id === 1 ? 'सोम-शनि: सुबह 8:00 - दोपहर 2:00' :
                        school.id === 2 ? 'सोम-शनि: सुबह 7:30 - दोपहर 1:30' :
                        school.id === 3 ? 'सोम-शनि: सुबह 7:45 - दोपहर 1:45' :
                        school.id === 4 ? 'सोम-शनि: सुबह 8:00 - दोपहर 2:00' : school.workingHours
                      }
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">{t('schools.address')}</p>
                  <p className="text-gray-700">
                    {language === 'en' ? school.address : 
                      school.id === 1 ? 'गांव रामपुर, केंद्रीय जिला, पिन - 123456' :
                      school.id === 2 ? 'सेक्टर 15, उत्तर जिला, पिन - 123457' :
                      school.id === 3 ? 'ब्लॉक सी, गंगा नगर, दक्षिण जिला, पिन - 123458' :
                      school.id === 4 ? 'कृष्णपुर कैंटोनमेंट, पूर्व जिला, पिन - 123459' : school.address
                    }
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('schools.total.students')}</p>
                    <p className="font-medium">{school.totalStudents}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{t('schools.sc.students')}</p>
                    <p className="font-medium text-orange-600">{school.scStudents}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">{t('schools.key.facilities')}</p>
                  <div className="flex flex-wrap gap-2">
                    {school.facilities.map((facility, facilityIndex) => (
                      <span
                        key={facilityIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {language === 'en' ? facility :
                          facility === 'Computer Lab' ? 'कंप्यूटर लैब' :
                          facility === 'Library' ? 'पुस्तकालय' :
                          facility === 'Scholarship Desk' ? 'छात्रवृत्ति डेस्क' :
                          facility === 'Smart Classes' ? 'स्मार्ट क्लासेस' :
                          facility === 'Career Guidance' ? 'करियर मार्गदर्शन' :
                          facility === 'Scholarship Cell' ? 'छात्रवृत्ति सेल' :
                          facility === 'Science Lab' ? 'विज्ञान प्रयोगशाला' :
                          facility === 'Computer Center' ? 'कंप्यूटर केंद्र' :
                          facility === 'DBT Help Desk' ? 'डीबीटी हेल्प डेस्क' :
                          facility === 'Digital Library' ? 'डिजिटल लाइब्रेरी' :
                          facility === 'Counseling Center' ? 'परामर्श केंद्र' :
                          facility === 'Financial Aid Office' ? 'वित्तीय सहायता कार्यालय' : facility
                        }
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t">
                  <a
                    href={`tel:${school.principal.phone}`}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{school.principal.phone}</span>
                  </a>
                  <a
                    href={`mailto:${school.principal.email}`}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{school.principal.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {filteredSchools.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <School className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">{t('schools.no.schools')}</h3>
                <p className="text-gray-600">{t('schools.no.schools.desc')}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Statistics */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <GraduationCap className="mr-2" size={20} />
                {language === 'en' ? 'Quick Stats' : 'त्वरित आंकड़े'}
              </h3>
              <div className="space-y-4">
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {schools.reduce((total, school) => total + school.totalStudents, 0)}
                  </div>
                  <div className="text-sm text-gray-600">{t('schools.total.students.stat')}</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    {schools.reduce((total, school) => total + school.scStudents, 0)}
                  </div>
                  <div className="text-sm text-gray-600">{t('schools.sc.students.stat')}</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{schools.length}</div>
                  <div className="text-sm text-gray-600">{t('schools.schools.listed')}</div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('schools.school.locations')}</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>{t('schools.interactive.map')}</p>
                  <p className="text-sm">{t('schools.will.show')}</p>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2" size={20} />
                {language === 'en' ? 'School Resources' : 'स्कूल संसाधन'}
              </h3>
              <div className="space-y-3">
                {documents.map((doc, docIndex) => (
                  <div key={docIndex} className="border border-gray-200 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1 text-sm">
                      {language === 'en' ? doc.title :
                        docIndex === 0 ? 'स्कूल डीबीटी नामांकन प्रोटोकॉल' :
                        docIndex === 1 ? 'छात्र सूचना ब्रोशर' :
                        docIndex === 2 ? 'अभिभावक-शिक्षक बैठक प्रस्तुति' :
                        docIndex === 3 ? 'स्कूल नोटिस बोर्ड टेम्प्लेट' : doc.title
                      }
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      {language === 'en' ? doc.description :
                        docIndex === 0 ? 'छात्रों को डीबीटी सेटअप में सहायता करने के लिए स्कूल प्रशासकों के लिए दिशानिर्देश' :
                        docIndex === 1 ? 'छात्रों को वितरण के लिए आधार बनाम डीबीटी के बारे में व्यापक ब्रोशर' :
                        docIndex === 2 ? 'डीबीटी जागरूकता पर पीटीए बैठकों के लिए तैयार प्रस्तुति स्लाइड' :
                        docIndex === 3 ? 'स्कूल नोटिस बोर्ड पर डीबीटी जानकारी प्रदर्शित करने के लिए टेम्प्लेट' : doc.description
                      }
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{doc.type} • {doc.size}</span>
                      <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-xs">
                        <Download size={12} />
                        <span>{t('common.download')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">
                {language === 'en' ? 'For Principals & Teachers' : 'प्रधानाचार्यों और शिक्षकों के लिए'}
              </h3>
              <div className="space-y-3 text-sm">
                <p className="text-blue-800">
                  {language === 'en' 
                    ? 'Need training materials or guidance on helping students with DBT enrollment?'
                    : 'छात्रों को डीबीटी नामांकन में मदद करने के लिए प्रशिक्षण सामग्री या मार्गदर्शन चाहिए?'
                  }
                </p>
                <div className="flex items-center space-x-2">
                  <Phone className="text-blue-600" size={16} />
                  <span className="text-blue-800">
                    {language === 'en' ? 'Training Helpline: 1800-XXX-YYYY' : 'प्रशिक्षण हेल्पलाइन: 1800-XXX-YYYY'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-blue-600" size={16} />
                  <span className="text-blue-800">training@dbtportal.gov.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schools;