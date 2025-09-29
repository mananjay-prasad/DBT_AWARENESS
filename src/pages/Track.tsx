import React, { useState } from 'react';
import { Search, Clock, CheckCircle, XCircle, AlertCircle, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Track: React.FC = () => {
  const { t, language } = useLanguage();
  const [applicationId, setApplicationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicationId) {
      alert('Please enter application ID');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const mockStatuses = [
        {
          status: 'approved',
          applicationDate: '2024-01-15',
          lastUpdate: '2024-01-25',
          amount: '₹48,000',
          disbursementDate: '2024-01-25',
          steps: [
            { title: 'Application Submitted', completed: true, date: '2024-01-15' },
            { title: 'Document Verification', completed: true, date: '2024-01-18' },
            { title: 'Eligibility Check', completed: true, date: '2024-01-20' },
            { title: 'Approval', completed: true, date: '2024-01-22' },
            { title: 'Amount Disbursed', completed: true, date: '2024-01-25' }
          ]
        },
        {
          status: 'pending',
          applicationDate: '2024-01-20',
          lastUpdate: '2024-01-23',
          amount: '₹25,000',
          steps: [
            { title: 'Application Submitted', completed: true, date: '2024-01-20' },
            { title: 'Document Verification', completed: true, date: '2024-01-22' },
            { title: 'Eligibility Check', completed: false, date: null },
            { title: 'Approval', completed: false, date: null },
            { title: 'Amount Disbursed', completed: false, date: null }
          ]
        },
        {
          status: 'rejected',
          applicationDate: '2024-01-10',
          lastUpdate: '2024-01-18',
          rejectionReason: 'Incomplete documents - Income certificate missing',
          steps: [
            { title: 'Application Submitted', completed: true, date: '2024-01-10' },
            { title: 'Document Verification', completed: false, date: '2024-01-15' }
          ]
        }
      ];

      // Select status based on application ID pattern
      let selectedStatus;
      if (applicationId.includes('1') || applicationId.includes('5')) {
        selectedStatus = mockStatuses[0]; // approved
      } else if (applicationId.includes('2') || applicationId.includes('6')) {
        selectedStatus = mockStatuses[1]; // pending
      } else {
        selectedStatus = mockStatuses[2]; // rejected
      }

      setTrackingResult({
        ...selectedStatus,
        applicationId,
        applicantName: 'Student Name',
        scheme: applicationId.startsWith('PRE') ? 'Pre-Matric Scholarship for SC' : 'Post-Matric Scholarship for SC'
      });

      setLoading(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="text-green-500" size={24} />;
      case 'pending':
        return <Clock className="text-yellow-500" size={24} />;
      case 'rejected':
        return <XCircle className="text-red-500" size={24} />;
      default:
        return <AlertCircle className="text-gray-500" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('track.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('track.subtitle')}
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleTrack} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Application ID / Registration Number *
              </label>
              <input
                type="text"
                value={applicationId}
                onChange={(e) => setApplicationId(e.target.value.toUpperCase())}
                placeholder="Enter your application ID (e.g., PRE2024001, POST2024001)"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <p className="text-sm text-gray-500 mt-1">
                You can find this ID in your application confirmation email or SMS
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Search className="mr-2" size={20} />
              )}
              {loading ? 'Tracking...' : 'Track Application'}
            </button>
          </form>
        </div>

        {/* Tracking Results */}
        {trackingResult && (
          <div className="space-y-6">
            {/* Application Overview */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Application Status</h2>
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${getStatusColor(trackingResult.status)}`}>
                  {getStatusIcon(trackingResult.status)}
                  <span className="font-medium capitalize">{trackingResult.status}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Application ID</p>
                    <p className="font-medium">{trackingResult.applicationId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Applicant Name</p>
                    <p className="font-medium">{trackingResult.applicantName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Scheme</p>
                    <p className="font-medium">{trackingResult.scheme}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Application Date</p>
                    <p className="font-medium">{trackingResult.applicationDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="font-medium">{trackingResult.lastUpdate}</p>
                  </div>
                  {trackingResult.amount && (
                    <div>
                      <p className="text-sm text-gray-500">Scholarship Amount</p>
                      <p className="font-medium text-green-600">{trackingResult.amount}</p>
                    </div>
                  )}
                </div>
              </div>

              {trackingResult.disbursementDate && trackingResult.status === 'approved' && (
                <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-green-800">Amount Disbursed Successfully</h4>
                      <p className="text-green-700 text-sm">
                        Scholarship amount of {trackingResult.amount} has been transferred to your DBT-enabled account on {trackingResult.disbursementDate}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {trackingResult.rejectionReason && (
                <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <XCircle className="text-red-500 mr-3 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-medium text-red-800 mb-1">Application Rejected</h4>
                      <p className="text-red-700 text-sm">{trackingResult.rejectionReason}</p>
                      <p className="text-red-600 text-sm mt-2">
                        You can reapply after resolving the issue. Contact support for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Progress Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Application Progress</h3>
              
              <div className="space-y-4">
                {trackingResult.steps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 ${
                      step.completed ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-500'
                    }`}>
                      {step.completed ? (
                        <CheckCircle size={16} />
                      ) : (
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-medium ${step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                          {step.title}
                        </h4>
                        {step.date && (
                          <span className="text-sm text-gray-500">{step.date}</span>
                        )}
                      </div>
                      
                      {!step.completed && index === trackingResult.steps.findIndex((s: any) => !s.completed) && (
                        <p className="text-sm text-blue-600 mt-1">Currently in progress...</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
            <FileText className="mr-2" size={20} />
            {t('track.help.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-blue-800 text-sm">
            <div>
              <p className="font-medium mb-2">{t('track.help.id.not.working')}</p>
              <ul className="space-y-1">
                <li>• {language === 'en' ? 'Check your confirmation email/SMS' : 'अपना पुष्टिकरण ईमेल/एसएमएस जांचें'}</li>
                <li>• {language === 'en' ? 'Verify the complete application ID' : 'पूरी एप्लिकेशन आईडी सत्यापित करें'}</li>
                <li>• {language === 'en' ? 'Contact your school or Gram Panchayat' : 'अपने स्कूल या ग्राम पंचायत से संपर्क करें'}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">{t('track.help.delayed')}</p>
              <ul className="space-y-1">
                <li>• {language === 'en' ? 'Processing time: 15-30 working days' : 'प्रसंस्करण समय: 15-30 कार्य दिवस'}</li>
                <li>• {language === 'en' ? 'Check document requirements' : 'दस्तावेज़ आवश्यकताएं जांचें'}</li>
                <li>• {language === 'en' ? 'Ensure DBT is enabled on your account' : 'सुनिश्चित करें कि आपके खाते पर डीबीटी सक्षम है'}</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>{language === 'en' ? 'Helpline:' : 'हेल्पलाइन:'}</strong> 1800-XXX-XXXX | <strong>{language === 'en' ? 'Email:' : 'ईमेल:'}</strong> scholarships@mosje.gov.in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;