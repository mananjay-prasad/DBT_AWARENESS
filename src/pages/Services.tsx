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

const Services: React.FC = () => {
  const services = [
    {
      title: "Guide",
      description: "Comprehensive guide on Aadhaar Link vs DBT with step-by-step instructions",
      icon: BookOpen,
      link: "/guide",
      color: "blue"
    },
    {
      title: "Check Status",
      description: "Verify if your bank account is DBT enabled and Aadhaar linked",
      icon: CheckCircle,
      link: "/check",
      color: "green"
    },
    {
      title: "Track Scholarship",
      description: "Track your scholarship application status like NSP portal",
      icon: Search,
      link: "/track",
      color: "purple"
    },
    {
      title: "Gram Panchayat",
      description: "Find local Gram Panchayats with contact details and locations",
      icon: MapPin,
      link: "/gram-panchayat",
      color: "orange"
    },
    {
      title: "Schools Directory",
      description: "Directory of local schools with principal contact information",
      icon: School,
      link: "/schools",
      color: "indigo"
    },
    {
      title: "Documents",
      description: "Download important documents, forms, and guidance materials",
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive tools and resources to understand and manage your 
            DBT-enabled Aadhaar-seeded bank account for scholarship benefits.
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
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${colorClasses.split(' ')[0]} group-hover:${colorClasses.split(' ')[1]} transition-colors`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700">
                    <span className="mr-2">Learn More</span>
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
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-700 mb-6">
              Our support team is available to assist you with any questions about 
              DBT enrollment, scholarship tracking, or account verification.
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
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Tips</h3>
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