import React from 'react';
import { 
  CreditCard, 
  Landmark, 
  CheckCircle, 
  AlertCircle, 
  FileText, 
  Clock,
  Phone,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Guide: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('guide.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('guide.subtitle')}
          </p>
        </div>

        {/* What is the Difference Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="text-blue-500 mr-3" size={28} />
            What's the Difference?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="text-blue-500 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-blue-700">
                  {t('home.aadhaar.title')}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                {(t('guide.aadhaar.features') as string[]).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <div className="flex items-center mb-4">
                <Landmark className="text-green-500 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-green-700">
                  {t('home.dbt.title')}
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                {(t('guide.dbt.features') as string[]).map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How to Enable DBT */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="text-green-500 mr-3" size={28} />
            {t('guide.howto.title')}
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guide.step1.title')}</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('guide.step1.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guide.step2.title')}</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('guide.step2.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guide.step3.title')}</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('guide.step3.desc')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('guide.step4.title')}</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  {t('guide.step4.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="text-purple-500 mr-3" size={28} />
            {t('guide.documents.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">आवश्यक दस्तावेज:</h3>
              <ul className="space-y-2 text-gray-700">
                {(t('guide.documents.essential') as string[]).map((doc, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">अतिरिक्त आवश्यकताएं:</h3>
              <ul className="space-y-2 text-gray-700">
                {(t('guide.documents.additional') as string[]).map((doc, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-blue-500 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm md:text-base">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits of DBT */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guide.benefits.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Clock className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.benefits.faster')}</h3>
              <p className="text-gray-700 text-sm">{t('guide.benefits.faster.desc')}</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.benefits.secure')}</h3>
              <p className="text-gray-700 text-sm">{t('guide.benefits.secure.desc')}</p>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Landmark className="text-purple-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.benefits.full')}</h3>
              <p className="text-gray-700 text-sm">{t('guide.benefits.full.desc')}</p>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="bg-yellow-50 rounded-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="text-yellow-600 mr-3" size={28} />
            {t('guide.issues.title')}
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.issues.mobile')}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                <strong>समाधान:</strong> {t('guide.issues.mobile.solution')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.issues.dormant')}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                <strong>समाधान:</strong> {t('guide.issues.dormant.solution')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guide.issues.mismatch')}</h3>
              <p className="text-gray-700 text-sm md:text-base">
                <strong>समाधान:</strong> {t('guide.issues.mismatch.solution')}
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Help */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('guide.help.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Phone className="text-green-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">हेल्पलाइन कॉल करें</h3>
                <p className="text-gray-700">1800-XXX-XXXX (Toll Free)</p>
                <p className="text-gray-500 text-sm">सोमवार-शुक्रवार, सुबह 9 बजे - शाम 6 बजे उपलब्ध</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">स्थानीय कार्यालयों में जाएं</h3>
                <p className="text-gray-700">ग्राम पंचायत या स्कूल कार्यालय</p>
                <p className="text-gray-500 text-sm">हमारी निर्देशिका में स्थान खोजें</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guide;