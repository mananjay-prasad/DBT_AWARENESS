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

const Guide: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide: Aadhaar Link vs DBT
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about enabling DBT for scholarship benefits
          </p>
        </div>

        {/* What is the Difference Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="text-blue-500 mr-3" size={28} />
            What's the Difference?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <CreditCard className="text-blue-500 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-blue-700">Aadhaar Linked Account</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Basic Aadhaar number linked to account</li>
                <li>• Used for KYC compliance</li>
                <li>• May not receive direct benefits</li>
                <li>• Standard banking services</li>
                <li>• No special government transfer facility</li>
              </ul>
            </div>

            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <div className="flex items-center mb-4">
                <Landmark className="text-green-500 mr-3" size={24} />
                <h3 className="text-lg font-semibold text-green-700">DBT Enabled Account</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• <strong>Specially configured for govt benefits</strong></li>
                <li>• Direct scholarship transfer capability</li>
                <li>• Required for SC Pre & Post-Matric scholarships</li>
                <li>• Faster, secure benefit delivery</li>
                <li>• Eliminates middleman delays</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Enable DBT */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="text-green-500 mr-3" size={28} />
            How to Enable DBT: Step-by-Step
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Your Bank Branch</h3>
                <p className="text-gray-700 text-sm">
                  Go to the branch where your account is maintained with original Aadhaar card and bank passbook.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Fill DBT Enrollment Form</h3>
                <p className="text-gray-700 text-sm">
                  Request and complete the DBT enrollment form. Bank staff will assist you with the process.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Verify Details</h3>
                <p className="text-gray-700 text-sm">
                  Ensure your Aadhaar details match bank records. Update if there are any discrepancies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">DBT Activation</h3>
                <p className="text-gray-700 text-sm">
                  Bank will activate DBT facility within 2-3 working days. You'll receive SMS confirmation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FileText className="text-purple-500 mr-3" size={28} />
            Required Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Essential Documents:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Original Aadhaar Card
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Bank Account Passbook
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  Mobile number linked with Aadhaar
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={16} />
                  DBT Enrollment Form
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Additional Requirements:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  Active bank account (not dormant)
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  Valid KYC documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-500 mr-2" size={16} />
                  Updated address proof
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits of DBT */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of DBT Enabled Account</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Clock className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Faster Transfers</h3>
              <p className="text-gray-700 text-sm">Direct transfer eliminates processing delays</p>
            </div>

            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <CheckCircle className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">100% Secure</h3>
              <p className="text-gray-700 text-sm">No intermediary involvement, completely secure</p>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Landmark className="text-purple-600 mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-900 mb-2">Full Amount</h3>
              <p className="text-gray-700 text-sm">Receive complete scholarship without deductions</p>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="bg-yellow-50 rounded-xl border border-yellow-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="text-yellow-600 mr-3" size={28} />
            Common Issues & Solutions
          </h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Issue: Mobile number not linked with Aadhaar</h3>
              <p className="text-gray-700 text-sm">
                <strong>Solution:</strong> Visit nearest Aadhaar center or use mAadhaar app to link mobile number first.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Issue: Account shows as dormant/inactive</h3>
              <p className="text-gray-700 text-sm">
                <strong>Solution:</strong> Make a small deposit or withdrawal to reactivate account, then apply for DBT.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Issue: Name mismatch between Aadhaar and bank account</h3>
              <p className="text-gray-700 text-sm">
                <strong>Solution:</strong> Update name in either Aadhaar or bank account to ensure exact match.
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Help */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Additional Help?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Phone className="text-green-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Call Helpline</h3>
                <p className="text-gray-700">1800-XXX-XXXX (Toll Free)</p>
                <p className="text-gray-500 text-sm">Available Mon-Fri, 9 AM - 6 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-blue-500 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900">Visit Local Offices</h3>
                <p className="text-gray-700">Gram Panchayat or School offices</p>
                <p className="text-gray-500 text-sm">Find locations in our directory</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guide;