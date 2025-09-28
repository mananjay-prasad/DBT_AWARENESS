import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  return (
    <footer className={isDark ? 'bg-gray-900 text-white' : 'bg-gray-900 text-white'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.title')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">DBT Guide</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Account Check</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Track Scholarship</span></li>
              <li><span className="text-gray-300 hover:text-white transition-colors cursor-pointer">Documents</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone size={14} />
                <span className="text-gray-300">1800-XXX-XXXX (Toll Free)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={14} />
                <span className="text-gray-300">support@dbtportal.gov.in</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={14} />
                <span className="text-gray-300">New Delhi, India</span>
              </li>
            </ul>
          </div>

          {/* Ministry Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.ministry')}</h3>
            <p className="text-gray-300 text-sm">
              {t('footer.ministryName')}<br />
              Government of India
            </p>
            <div className="mt-4 flex space-x-1">
              <div className="w-6 h-4 bg-orange-500"></div>
              <div className="w-6 h-4 bg-white"></div>
              <div className="w-6 h-4 bg-green-600"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;