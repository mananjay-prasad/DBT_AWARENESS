import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, CreditCard, Landmark, Shield, Users } from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const posters = [
    {
      title: "Understand DBT vs Aadhaar Link",
      description: "Learn the crucial difference between Aadhaar-linked and DBT-enabled accounts",
      bgColor: "from-orange-500 to-red-500"
    },
    {
      title: "Enable DBT in 3 Simple Steps",
      description: "Visit bank → Fill form → Activate DBT facility",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      title: "Secure Your Scholarships",
      description: "DBT ensures direct, secure transfer of scholarship amounts",
      bgColor: "from-blue-500 to-indigo-500"
    },
    {
      title: "Contact Local Offices",
      description: "Get help from Gram Panchayats and Schools in your area",
      bgColor: "from-purple-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % posters.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [posters.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posters.length) % posters.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-96 overflow-hidden">
        <div className="relative w-full h-full">
          {posters.map((poster, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <div className={`h-full bg-gradient-to-r ${poster.bgColor} flex items-center justify-center text-white`}>
                <div className="text-center px-4 max-w-4xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{poster.title}</h2>
                  <p className="text-xl md:text-2xl opacity-90">{poster.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {posters.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Aadhaar Link vs DBT Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Aadhaar Link vs DBT Enabled Account
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Aadhaar Linked */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <div className="flex items-center mb-4">
                <CreditCard className="text-blue-500 mr-3" size={32} />
                <h3 className="text-xl font-semibold text-gray-900">Aadhaar Linked Account</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Basic connection of Aadhaar number with bank account
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Used for KYC verification
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  May not receive government benefits directly
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Standard banking services available
                </li>
              </ul>
            </div>

            {/* DBT Enabled */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <div className="flex items-center mb-4">
                <Landmark className="text-green-500 mr-3" size={32} />
                <h3 className="text-xl font-semibold text-gray-900">DBT Enabled Account</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Specially configured for government benefit transfers
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Direct scholarship disbursement capability
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <strong>Required for SC scholarships</strong>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Faster and more secure benefit delivery
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 inline-block">
              <Shield className="text-yellow-600 mx-auto mb-3" size={32} />
              <p className="text-yellow-800 font-semibold">
                Important: For SC Pre-Matric and Post-Matric scholarships, 
                you MUST have a DBT-enabled Aadhaar-seeded bank account.
              </p>
            </div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Watch: How to Enable DBT
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="text-center text-white">
                  <Play size={64} className="mx-auto mb-4 opacity-80" />
                  <h3 className="text-xl font-semibold mb-2">Educational Video</h3>
                  <p className="text-gray-300">Step-by-step guide to enable DBT on your bank account</p>
                  <p className="text-sm text-gray-400 mt-4">
                    Video will be embedded here in production
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10L+</h3>
              <p className="text-gray-600">Students Benefited</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">₹500Cr+</h3>
              <p className="text-gray-600">Disbursed via DBT</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Secure Transfers</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;