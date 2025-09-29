import React, { useState } from 'react';
import { X, Phone, Mail, MessageCircle, FileText, ExternalLink, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

interface HelpAssistanceProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpAssistance: React.FC<HelpAssistanceProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('contact');
  const { t } = useLanguage();
  const { isDark } = useTheme();

  if (!isOpen) return null;

  const helpSections = [
    {
      id: 'contact',
      title: t('help.contact.title'),
      icon: Phone,
      content: (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
              {t('help.helpline.title')}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className={isDark ? 'text-green-400' : 'text-green-600'} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>1800-XXX-XXXX (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>support@dbtportal.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className={isDark ? 'text-orange-400' : 'text-orange-600'} />
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                  {t('help.hours')}
                </span>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-green-300' : 'text-green-800'}`}>
              {t('help.whatsapp.title')}
            </h4>
            <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('help.whatsapp.desc')}
            </p>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
              isDark 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            } transition-colors`}>
              <MessageCircle size={16} className="inline mr-2" />
              {t('help.whatsapp.button')}
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: t('help.faq.title'),
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {t('help.faq.q1')}
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('help.faq.a1')}
              </p>
            </details>
          </div>

          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {t('help.faq.q2')}
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('help.faq.a2')}
              </p>
            </details>
          </div>

          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                {t('help.faq.q3')}
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('help.faq.a3')}
              </p>
            </details>
          </div>
        </div>
      )
    },
    {
      id: 'resources',
      title: t('help.resources.title'),
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              {t('help.useful.links')}
            </h4>
            <div className="space-y-2">
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {t('language') === 'en' ? 'National Scholarship Portal (NSP)' : 'राष्ट्रीय छात्रवृत्ति पोर्टल (एनएसपी)'}
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {t('language') === 'en' ? 'Aadhaar Official Website' : 'आधार आधिकारिक वेबसाइट'}
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {t('language') === 'en' ? 'DBT Mission Portal' : 'डीबीटी मिशन पोर्टल'}
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                {t('language') === 'en' ? 'Ministry of Social Justice & Empowerment' : 'सामाजिक न्याय और अधिकारिता मंत्रालय'}
              </a>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-yellow-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
              {t('help.video.tutorials')}
            </h4>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t('help.video.desc')}
            </p>
            <div className="space-y-2">
              <button className={`block w-full text-left text-sm p-2 rounded ${
                isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-colors`}>
                {language === 'en' ? 'How to Enable DBT (Hindi)' : 'डीबीटी कैसे सक्षम करें (हिंदी)'}
              </button>
              <button className={`block w-full text-left text-sm p-2 rounded ${
                isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-colors`}>
                {language === 'en' ? 'Scholarship Application Process' : 'छात्रवृत्ति आवेदन प्रक्रिया'}
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>

        <div className={`inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-lg ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          {/* Header */}
          <div className={`flex items-center justify-between p-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {t('help.title')}
            </h2>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Sidebar */}
            <div className={`w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r ${isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'} overflow-x-auto lg:overflow-x-visible`}>
              <div className="p-4">
                <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 min-w-max lg:min-w-0">
                  {helpSections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveTab(section.id)}
                        className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-colors whitespace-nowrap lg:w-full ${
                          activeTab === section.id
                            ? isDark
                              ? 'bg-orange-600 text-white'
                              : 'bg-orange-500 text-white'
                            : isDark
                              ? 'hover:bg-gray-700 text-gray-300'
                              : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 lg:p-6 overflow-y-auto max-h-96 lg:max-h-none">
              {helpSections.find(section => section.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAssistance;