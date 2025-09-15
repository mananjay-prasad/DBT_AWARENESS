import React, { useState } from 'react';
import { MapPin, Phone, Mail, Search, FileText, Download } from 'lucide-react';

const GramPanchayat: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const gramPanchayats = [
    {
      id: 1,
      name: "Rampur Gram Panchayat",
      district: "Central District",
      sarpanch: "Mrs. Sunita Sharma",
      phone: "+91-9876543210",
      email: "rampur.gp@gov.in",
      address: "Village Rampur, Block - Central, Pin - 123456",
      coordinates: { lat: 28.6139, lng: 77.2090 },
      services: ["DBT Enrollment", "Aadhaar Services", "Scholarship Guidance"],
      workingHours: "Mon-Fri: 10:00 AM - 4:00 PM"
    },
    {
      id: 2,
      name: "Shivpur Gram Panchayat",
      district: "North District",
      sarpanch: "Mr. Rajesh Kumar",
      phone: "+91-9876543211",
      email: "shivpur.gp@gov.in",
      address: "Village Shivpur, Block - North, Pin - 123457",
      coordinates: { lat: 28.7041, lng: 77.1025 },
      services: ["DBT Support", "Document Verification", "Application Assistance"],
      workingHours: "Mon-Sat: 9:00 AM - 5:00 PM"
    },
    {
      id: 3,
      name: "Ganga Nagar Gram Panchayat",
      district: "South District",
      sarpanch: "Mrs. Priya Devi",
      phone: "+91-9876543212",
      email: "ganganagar.gp@gov.in",
      address: "Village Ganga Nagar, Block - South, Pin - 123458",
      coordinates: { lat: 28.5355, lng: 77.3910 },
      services: ["Financial Inclusion", "Digital Literacy", "Scholarship Info"],
      workingHours: "Mon-Fri: 9:30 AM - 4:30 PM"
    },
    {
      id: 4,
      name: "Krishnapur Gram Panchayat",
      district: "East District",
      sarpanch: "Mr. Suresh Yadav",
      phone: "+91-9876543213",
      email: "krishnapur.gp@gov.in",
      address: "Village Krishnapur, Block - East, Pin - 123459",
      coordinates: { lat: 28.6692, lng: 77.4538 },
      services: ["Bank Account Opening", "DBT Activation", "KYC Support"],
      workingHours: "Mon-Fri: 10:00 AM - 3:00 PM"
    }
  ];

  const documents = [
    {
      title: "DBT Enrollment Guide for Gram Panchayats",
      description: "Step-by-step guide for GP officials to help residents with DBT enrollment",
      type: "PDF",
      size: "2.3 MB"
    },
    {
      title: "Aadhaar vs DBT Awareness Poster",
      description: "Educational poster for display at GP offices",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Common Issues Resolution Manual",
      description: "Solutions for frequently encountered DBT and Aadhaar linking problems",
      type: "PDF",
      size: "3.1 MB"
    },
    {
      title: "Scholarship Application Checklist",
      description: "Complete checklist for SC scholarship applications",
      type: "PDF",
      size: "0.9 MB"
    }
  ];

  const districts = ["All Districts", "Central District", "North District", "South District", "East District"];

  const filteredPanchayats = gramPanchayats.filter(gp => {
    const matchesSearch = gp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gp.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         gp.sarpanch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = selectedDistrict === '' || selectedDistrict === 'All Districts' || gp.district === selectedDistrict;
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gram Panchayat Directory</h1>
          <p className="text-xl text-gray-600">
            Find your local Gram Panchayat for DBT enrollment and scholarship assistance
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, location, or sarpanch..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gram Panchayat List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredPanchayats.map((gp) => (
              <div key={gp.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{gp.name}</h3>
                    <p className="text-gray-600">{gp.district}</p>
                  </div>
                  <div className="text-right">
                    <MapPin className="text-orange-500 inline-block mr-1" size={16} />
                    <span className="text-sm text-gray-500">View on Map</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Sarpanch</p>
                    <p className="font-medium">{gp.sarpanch}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Working Hours</p>
                    <p className="font-medium text-green-600">{gp.workingHours}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-1">Address</p>
                  <p className="text-gray-700">{gp.address}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Services Offered</p>
                  <div className="flex flex-wrap gap-2">
                    {gp.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t">
                  <a
                    href={`tel:${gp.phone}`}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700"
                  >
                    <Phone size={16} />
                    <span className="text-sm">{gp.phone}</span>
                  </a>
                  <a
                    href={`mailto:${gp.email}`}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
                  >
                    <Mail size={16} />
                    <span className="text-sm">{gp.email}</span>
                  </a>
                </div>
              </div>
            ))}

            {filteredPanchayats.length === 0 && (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <MapPin className="text-gray-400 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No Results Found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Location Map</h3>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Will show GP locations</p>
                </div>
              </div>
            </div>

            {/* Important Documents */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-2" size={20} />
                Important Documents
              </h3>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3">
                    <h4 className="font-medium text-gray-900 mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{doc.type} • {doc.size}</span>
                      <button className="flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm">
                        <Download size={14} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-orange-900 mb-4">Need Immediate Help?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="text-orange-600" size={16} />
                  <span className="text-orange-800">Toll Free: 1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-orange-600" size={16} />
                  <span className="text-orange-800">help@dbtportal.gov.in</span>
                </div>
                <p className="text-orange-700 text-xs mt-3">
                  Available Mon-Fri, 9:00 AM - 6:00 PM for technical support and guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GramPanchayat;