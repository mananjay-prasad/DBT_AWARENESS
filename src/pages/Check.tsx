import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertTriangle, CreditCard } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Check: React.FC = () => {
  const { t } = useLanguage();
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aadhaarNumber || !accountNumber || !ifscCode) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock result based on input
      const mockResult = {
        aadhaarLinked: true,
        dbtEnabled: aadhaarNumber.endsWith('1') || aadhaarNumber.endsWith('3') || aadhaarNumber.endsWith('5'),
        bankName: 'State Bank of India',
        accountHolder: 'John Doe',
        lastUpdated: '2024-01-15',
        status: 'Active'
      };

      setResult(mockResult);
      setLoading(false);
    }, 2000);
  };

  const formatAadhaar = (value: string) => {
    const numbers = value.replace(/[^\d]/g, '');
    if (numbers.length <= 4) {
      return numbers;
    } else if (numbers.length <= 8) {
      return numbers.slice(0, 4) + ' ' + numbers.slice(4);
    } else {
      return numbers.slice(0, 4) + ' ' + numbers.slice(4, 8) + ' ' + numbers.slice(8, 12);
    }
  };

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numbersOnly = inputValue.replace(/[^\d]/g, '');
    
    if (numbersOnly.length <= 12) {
      const formatted = formatAadhaar(numbersOnly);
      setAadhaarNumber(formatted);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('check.title')}</h1>
          <p className="text-xl text-gray-600">
            {t('check.subtitle')}
          </p>
        </div>

        {/* Check Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleCheck} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aadhaar Number *
              </label>
              <input
                type="text"
                value={aadhaarNumber}
                onChange={handleAadhaarChange}
                placeholder="XXXX XXXX XXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number *
                </label>
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder="Enter account number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  IFSC Code *
                </label>
                <input
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                  placeholder="Enter IFSC code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>
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
              {loading ? 'Checking...' : 'Check Status'}
            </button>
          </form>
        </div>

        {/* Results */}
        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CreditCard className="text-blue-500 mr-3" size={28} />
              Account Status
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Account Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Account Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-sm"><strong>Bank:</strong> {result.bankName}</p>
                    <p className="text-sm"><strong>Account Holder:</strong> {result.accountHolder}</p>
                    <p className="text-sm"><strong>Status:</strong> 
                      <span className="text-green-600 ml-1">{result.status}</span>
                    </p>
                    <p className="text-sm"><strong>Last Updated:</strong> {result.lastUpdated}</p>
                  </div>
                </div>
              </div>

              {/* Status Checks */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 mb-2">Verification Status</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">Aadhaar Linked</span>
                    <div className="flex items-center">
                      {result.aadhaarLinked ? (
                        <>
                          <CheckCircle className="text-green-500 mr-1" size={20} />
                          <span className="text-green-600 text-sm">Verified</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="text-red-500 mr-1" size={20} />
                          <span className="text-red-600 text-sm">Not Linked</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium">DBT Enabled</span>
                    <div className="flex items-center">
                      {result.dbtEnabled ? (
                        <>
                          <CheckCircle className="text-green-500 mr-1" size={20} />
                          <span className="text-green-600 text-sm">Enabled</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="text-red-500 mr-1" size={20} />
                          <span className="text-red-600 text-sm">Not Enabled</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">Recommendations</h3>
              
              {!result.dbtEnabled ? (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="text-red-500 mr-3 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-medium text-red-800 mb-2">DBT Not Enabled</h4>
                      <p className="text-red-700 text-sm mb-3">
                        Your account is not DBT enabled. You cannot receive scholarship benefits without DBT facility.
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className="text-red-700"><strong>Next Steps:</strong></p>
                        <ul className="list-disc list-inside text-red-600 ml-2 space-y-1">
                          <li>Visit your bank branch immediately</li>
                          <li>Request DBT enrollment form</li>
                          <li>Submit with Aadhaar card and passbook</li>
                          <li>Follow up after 2-3 working days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-medium text-green-800 mb-2">Account Ready for Scholarships</h4>
                      <p className="text-green-700 text-sm">
                        Your account is properly configured to receive scholarship benefits through DBT. 
                        You can proceed with scholarship applications.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Important Notes</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• This is a demo service. In production, this would connect to actual government databases</li>
            <li>• Keep your mobile number updated and linked with Aadhaar</li>
            <li>• Regularly check your account status before scholarship application deadlines</li>
            <li>• Contact your bank if there are any discrepancies in the information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Check;