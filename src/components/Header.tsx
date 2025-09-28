import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Globe, Moon, Sun, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import HelpAssistance from './HelpAssistance';

interface HeaderProps {
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: t('header.home'), path: '/' },
    { name: t('header.services'), path: '/services' },
    { name: t('header.guide'), path: '/guide' },
    { name: t('header.documents'), path: '/documents' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-lg ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Top bar with government branding */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and title */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                DBT
              </div>
              <div>
                <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {t('header.title')}
                </h1>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t('header.subtitle')}
                </p>
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-orange-100 text-orange-700'
                    : isDark 
                      ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isDark ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <Globe size={16} />
              <span>{language === 'en' ? 'हिं' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-colors ${
                isDark ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Help Button */}
            <button
              onClick={() => setIsHelpOpen(true)}
              className={`p-2 rounded-md transition-colors ${
                isDark ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              <HelpCircle size={20} />
            </button>

            {/* User menu */}
            <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                isDark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-600'
              }`}
            >
              <User size={20} />
              <span className="hidden sm:block">{t('header.account')}</span>
            </button>

            {isUserMenuOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-50 ${
                isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}>
                <button
                  onClick={onLogout}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm w-full text-left transition-colors ${
                    isDark ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <LogOut size={16} />
                  <span>{t('header.signOut')}</span>
                </button>
              </div>
            )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${
              isDark ? 'text-gray-300 hover:text-orange-400' : 'text-gray-700 hover:text-orange-600'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t ${
              isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-orange-100 text-orange-700'
                      : isDark
                        ? 'text-gray-300 hover:text-orange-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
    
    <HelpAssistance isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </>
  );
};

export default Header;