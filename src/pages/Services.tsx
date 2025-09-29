import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  CheckCircle, 
  Search, 
  MapPin, 
  School, 
  FileText,
  ArrowRight 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.guide.title'),
      description: t('services.guide.desc'),
      icon: BookOpen,
      link: "/guide",
      color: "blue"
    },
    {
      title: t('services.check.title'),
      description: t('services.check.desc'),
      icon: CheckCircle,
      link: "/check",
      color: "green"
    },
    {
      title: t('services.track.title'),
      description: t('services.track.desc'),
      icon: Search,
      link: "/track",
      color: "purple"
    },
    {
      title: t('services.gp.title'),
      description: t('services.gp.desc'),
      icon: MapPin,
      link: "/gram-panchayat",
      color: "orange"
    },
    {
      title: t('services.schools.title'),
      description: t('services.schools.desc'),
      icon: School,
      link: "/schools",
      color: "indigo"
    },
    {
      title: t('services.documents.title'),
      description: t('services.documents.desc'),
      icon: FileText,
      link: "/documents",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-500 hover:bg-blue-600 border-blue-200 text-blue-600",
      green: "bg-green-500 hover:bg-green-600 border-green-200 text-green-600",
      purple: "bg-purple-500 hover:bg-purple-600 border-purple-200 text-purple-600",
      orange: "bg-orange-500 hover:bg-orange-600 border-orange-200 text-orange-600",
      indigo: "bg-indigo-500 hover:bg-indigo-600 border-indigo-200 text-indigo-600",
      red: "bg-red-500 hover:bg-red-600 border-red-200 text-red-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            {t('services.title')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.link}
                className="group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${colorClasses.split(' ')[0]} group-hover:${colorClasses.split(' ')[1]} transition-colors`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-600 transition-colors text-gray-900">
                    {service.title}
                  </h3>
                  
                  <p className="mb-4 leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700">
                    <span className="mr-2">{t('services.learnMore')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Help Section */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('services.help.title')}
            </h3>
            <p className="mb-6 text-gray-700">
              {t('services.help.desc')}
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Helpline:</strong> 1800-XXX-XXXX (Toll Free)
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> support@dbtportal.gov.in
              </p>
              <p className="text-gray-600">
                <strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="rounded-xl p-8 bg-gradient-to-br from-orange-50 to-red-50">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              {t('services.tips.title')}
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Visit your bank branch with original Aadhaar card
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ensure mobile number is linked with Aadhaar
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Keep your bank account active with regular transactions
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Update KYC if account details have changed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;