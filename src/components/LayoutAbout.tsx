import React, { useState, useEffect } from 'react';
import { MapPin, Factory, Ship, TrendingUp, Users, Award, ChevronRight, Menu, X } from 'lucide-react';
import TruckLoader from './Truckloader';

export default function PourinWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(true);
    const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    if (showDevelopmentNotice) {
      const totalTime = 15000; // 10 giây
      const intervalTime = 100; // Cập nhật mỗi 100ms
      const steps = totalTime / intervalTime;
      const decrement = 100 / steps;

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            setShowDevelopmentNotice(false);
            return 0;
          }
          return prev - decrement;
        });
      }, intervalTime);

      const autoCloseTimer = setTimeout(() => {
        setShowDevelopmentNotice(false);
        clearInterval(timer);
      }, totalTime);

      return () => {
        clearInterval(timer);
        clearTimeout(autoCloseTimer);
      };
    } else {
      setProgress(100);
    }
  }, [showDevelopmentNotice]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-auto">
      {/* Development Notice */}
      {showDevelopmentNotice && (
        <div className="fixed top-6 right-6 max-w-md w-full z-50 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="absolute top-4 right-4 text-black/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
                aria-label="Đóng thông báo"
              >
                <X className="w-5 h-5" />
              </button>

            {/* Content với TruckLoader lớn */}
            <div className="p-6">
              {/* TruckLoader lớn ở trên cùng */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="scale-100">
                    <TruckLoader />
                  </div>
                </div>
              </div>

              

              {/* Message Box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-yellow-800 font-semibold">🚧Thông báo</h2>
                </div>
                {/* Developer Info */}
              <div className="text-center mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                 <p className="text-gray-600 text-sm mb-3">Nguyễn Đức Cường đang lập trình trang web này</p> 
                 <p>阮德强正在编程这个网站</p> 
                </h4>
              </div>
                <p className="text-yellow-700 text-sm  text-center mb-2">
                  Phần này đang được phát triển, vui lòng quay lại sau! 😊
                </p>
                <p className="text-yellow-600 text-center">
                  此部分功能正在开发中，请稍后再来！😊
                </p>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Tự động đóng sau</span>
                  <span>{Math.ceil(progress / 15)}s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Action button */}
              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Đã hiểu - 明白了
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      {/* Main Content */}
      <main className="">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  World-Class Manufacturing in Vietnam
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Pourin Special Welding Vietnam - Your trusted partner for industrial equipment manufacturing with $65M investment in Haiphong City
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold">150,000</div>
                    <div className="text-sm text-blue-200">Total Area (m²)</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold">90,000</div>
                    <div className="text-sm text-blue-200">Workshop Area (m²)</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                    <div className="text-3xl font-bold">550</div>
                    <div className="text-sm text-blue-200">Personnel</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2">
                  <img
                    src="https://res.cloudinary.com/doooncpse/image/upload/v1762927458/DSC00932_u2tj0i.jpg"
                    alt="Manufacturing Facility"
                    className="rounded-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Company Overview</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Factory className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Equipment</h3>
                <p className="text-gray-600">
                  180° and 360° overlay welding machines with advanced header hole drilling and welding systems
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Output</h3>
                <p className="text-gray-600">
                  Consistent, high-quality output from day one with skilled workforce and advanced technology
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strong Growth</h3>
                <p className="text-gray-600">
                  Expected annual sales revenue of 50-90 million USD serving global markets
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Main Products</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Additive Manufacturing Components</h4>
                    <p className="text-gray-600 text-sm">Advanced manufacturing solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">HRSGs & Boilers</h4>
                    <p className="text-gray-600 text-sm">Heat recovery systems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Metal Pressure Vessels</h4>
                    <p className="text-gray-600 text-sm">Industrial containers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ChevronRight className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Auxiliary Equipment</h4>
                    <p className="text-gray-600 text-sm">Supporting industrial equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantages */}
        <section id="location" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Location</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Located in Nam Dinh Vu Industrial Zone, Haiphong City - Vietnam's premier port city
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/p/AF1QipOMhNqU0BvlMWwO_bruVq3lfqXZTSFGe17SBW2a=s1360-w1360-h1020-rw"
                    alt="Port Location"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Ship className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Hai Phong Port System</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Deep-water berths (42 km total length)</li>
                      <li>• Advanced cargo handling infrastructure</li>
                      <li>• 200,000 DWT max vessel size</li>
                      <li>• 12M import / 9M export annually</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-lg p-3">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Nam Dinh Vu Terminal</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 40,000 DWT capacity</li>
                      <li>• 1.5 km pier length, 650,000 m² area</li>
                      <li>• 10 cranes (STS & Mobile)</li>
                      <li>• 3M tons annual throughput</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Land Access</h3>
                    <p className="text-gray-600">
                      Proximity to Chinese border (~200 km) for efficient raw material access.
                      Direct "blue route" for overweight trucks up to 400 tons.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Port Terminals Comparison */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold">Hoang Dieu</th>
                      <th className="px-6 py-4 text-left font-semibold">Tan Vu</th>
                      <th className="px-6 py-4 text-left font-semibold">Lach Huyen (HHIT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Length</td>
                      <td className="px-6 py-4 text-gray-600">1,385 m</td>
                      <td className="px-6 py-4 text-gray-600">980 m</td>
                      <td className="px-6 py-4 text-gray-600">900 m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Depth</td>
                      <td className="px-6 py-4 text-gray-600">-7.4 to 8.4 m</td>
                      <td className="px-6 py-4 text-gray-600">-9.4 m</td>
                      <td className="px-6 py-4 text-gray-600">-16.8 to -18.4 m</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Max Vessel</td>
                      <td className="px-6 py-4 text-gray-600">40,000 DWT</td>
                      <td className="px-6 py-4 text-gray-600">40,000 DWT</td>
                      <td className="px-6 py-4 text-gray-600">200,000 DWT</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Cranes</td>
                      <td className="px-6 py-4 text-gray-600">4 STS, 22 pedestal</td>
                      <td className="px-6 py-4 text-gray-600">8 shore, 6 pedestal</td>
                      <td className="px-6 py-4 text-gray-600">10 STS, 36 eRTG</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Capacity</td>
                      <td className="px-6 py-4 text-gray-600">6M tons</td>
                      <td className="px-6 py-4 text-gray-600">6M tons</td>
                      <td className="px-6 py-4 text-gray-600">2.2M TEUs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Phase Development</h2>
              <p className="text-xl text-gray-600">Two-phase expansion for maximum efficiency</p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">Phase I</h3>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Active</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg"><strong>Area:</strong> 90,000 m²</p>
                  <p className="text-lg"><strong>Status:</strong> Equipment installation complete (June)</p>
                  <p className="text-lg"><strong>Production Start:</strong> September 28th</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">Phase II</h3>
                  <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Upcoming</span>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg"><strong>Area:</strong> 60,000 m²</p>
                  <p className="text-lg"><strong>Status:</strong> Construction planned</p>
                  <p className="text-lg"><strong>Expansion:</strong> Additional capacity</p>
                </div>
              </div>
            </div>

            {/* Workshops */}
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Workshop Facilities</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4">
                  <h4 className="text-2xl font-bold">Workshop 1</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Length</span>
                    <span className="font-semibold text-gray-900">175 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Width</span>
                    <span className="font-semibold text-gray-900">120 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Crane Capacity</span>
                    <span className="font-semibold text-gray-900">32 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bays</span>
                    <span className="font-semibold text-gray-900">4 (W30m each)</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Production:</strong> Plate cutting, header welding, 180°/360° overlay welding
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4">
                  <h4 className="text-2xl font-bold">Workshop 2</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Length</span>
                    <span className="font-semibold text-gray-900">190 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Width</span>
                    <span className="font-semibold text-gray-900">90 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Crane Capacity</span>
                    <span className="font-semibold text-gray-900">32 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bays</span>
                    <span className="font-semibold text-gray-900">3 (W30m each)</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Production:</strong> HRSG production line, finning, bending, harps assembly
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4">
                  <h4 className="text-2xl font-bold">Workshop 3</h4>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Length</span>
                    <span className="font-semibold text-gray-900">190 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Width</span>
                    <span className="font-semibold text-gray-900">90 meters</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Crane Capacity</span>
                    <span className="font-semibold text-gray-900">50 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Bays</span>
                    <span className="font-semibold text-gray-900">3 (W30m each)</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Production:</strong> Heavy pressure vessels, high-end steel structures
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-blue-100">Ready to discuss your manufacturing needs?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Location</h3>
                    <p className="text-blue-100">Nam Dinh Vu Industrial Zone<br />Haiphong City, Vietnam</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Factory className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Investment</h3>
                    <p className="text-blue-100">$65 Million USD<br />150,000 m² total area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Workforce</h3>
                    <p className="text-blue-100">550 Personnel at full capacity<br />Skilled and trained specialists</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="border-b border-white/20 pb-4">
                    <div className="text-3xl font-bold mb-1">50-90M USD</div>
                    <div className="text-blue-200">Expected Annual Revenue</div>
                  </div>
                  <div className="border-b border-white/20 pb-4">
                    <div className="text-3xl font-bold mb-1">90,000 m²</div>
                    <div className="text-blue-200">Phase I Workshop Area</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-1">3 Workshops</div>
                    <div className="text-blue-200">Specialized Production Lines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Factory className="h-8 w-8 text-blue-500" />
                <div>
                  <h3 className="text-white font-bold text-lg">Pourin Vietnam</h3>
                  <p className="text-xs">Special Welding Manufacturing</p>
                </div>
              </div>
              <p className="text-sm">
                Leading manufacturer of industrial equipment serving global power generation and industrial projects.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#overview" className="hover:text-blue-400 transition">Company Overview</a></li>
                <li><a href="#location" className="hover:text-blue-400 transition">Location Benefits</a></li>
                <li><a href="#facilities" className="hover:text-blue-400 transition">Our Facilities</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>• Additive Manufacturing</li>
                <li>• HRSGs & Boilers</li>
                <li>• Metal Pressure Vessels</li>
                <li>• Auxiliary Equipment</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 Pourin Special Welding Vietnam Manufacturing Co., Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}