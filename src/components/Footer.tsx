import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DBT Awareness Portal</h3>
            <p className="text-gray-300 text-sm">
              Enhancing student awareness about Direct Beneficiary Transfer and Aadhaar-linked bank accounts 
              for seamless scholarship disbursement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/guide" className="text-gray-300 hover:text-white transition-colors">DBT Guide</a></li>
              <li><a href="/check" className="text-gray-300 hover:text-white transition-colors">Account Check</a></li>
              <li><a href="/track" className="text-gray-300 hover:text-white transition-colors">Track Scholarship</a></li>
              <li><a href="/documents" className="text-gray-300 hover:text-white transition-colors">Documents</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
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
            <h3 className="text-lg font-semibold mb-4">Ministry</h3>
            <p className="text-gray-300 text-sm">
              Ministry of Social Justice & Empowerment<br />
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
          <p>&copy; 2024 Ministry of Social Justice & Empowerment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;