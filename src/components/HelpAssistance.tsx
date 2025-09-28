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
      title: 'Contact Support',
      icon: Phone,
      content: (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-blue-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
              24/7 Helpline
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
                <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-green-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-green-300' : 'text-green-800'}`}>
              WhatsApp Support
            </h4>
            <p className={`text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Get instant help via WhatsApp
            </p>
            <button className={`px-4 py-2 rounded-lg text-sm font-medium ${
              isDark 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-green-500 hover:bg-green-600 text-white'
            } transition-colors`}>
              <MessageCircle size={16} className="inline mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                What is the difference between Aadhaar-linked and DBT-enabled account?
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                An Aadhaar-linked account simply has your Aadhaar number associated with it. A DBT-enabled account is specially configured to receive government benefits directly.
              </p>
            </details>
          </div>

          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                How do I enable DBT on my account?
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Visit your bank branch with Aadhaar card and bank passbook. Fill the DBT enrollment form and submit it. The bank will activate DBT within 2-3 working days.
              </p>
            </details>
          </div>

          <div className={`border rounded-lg ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
            <details className="p-4">
              <summary className={`font-medium cursor-pointer ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                Why is my scholarship not being disbursed?
              </summary>
              <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Common reasons include: DBT not enabled, account dormant, name mismatch between Aadhaar and bank account, or incomplete application documents.
              </p>
            </details>
          </div>
        </div>
      )
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: ExternalLink,
      content: (
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
              Useful Links
            </h4>
            <div className="space-y-2">
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                National Scholarship Portal (NSP)
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Aadhaar Official Website
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                DBT Mission Portal
              </a>
              <a href="#" className={`block text-sm hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Ministry of Social Justice & Empowerment
              </a>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-yellow-50'}`}>
            <h4 className={`font-semibold mb-2 ${isDark ? 'text-yellow-300' : 'text-yellow-800'}`}>
              Video Tutorials
            </h4>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Watch step-by-step video guides
            </p>
            <div className="space-y-2">
              <button className={`block w-full text-left text-sm p-2 rounded ${
                isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-colors`}>
                How to Enable DBT (Hindi)
              </button>
              <button className={`block w-full text-left text-sm p-2 rounded ${
                isDark ? 'bg-gray-600 hover:bg-gray-500 text-gray-200' : 'bg-white hover:bg-gray-50 text-gray-700'
              } transition-colors`}>
                Scholarship Application Process
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
              Help & Assistance
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

          <div className="flex">
            {/* Sidebar */}
            <div className={`w-1/3 border-r ${isDark ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'}`}>
              <div className="p-4">
                {helpSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveTab(section.id)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors mb-2 ${
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

            {/* Content */}
            <div className="flex-1 p-6">
              {helpSections.find(section => section.id === activeTab)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAssistance;