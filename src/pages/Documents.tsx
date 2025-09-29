import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Documents: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('documents.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('documents.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;