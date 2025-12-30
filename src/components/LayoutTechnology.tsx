import { useState, useEffect } from 'react';
import TruckLoader from './Truckloader';
import {X} from 'lucide-react';

const LayoutTechnology = () => {
  const [activeTab, setActiveTab] = useState('heatExchanger');
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Industrial Technology Solutions
          </h1>
          <p className="text-slate-400">Advanced manufacturing equipment and systems</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-700 pb-4">
          <button
            onClick={() => setActiveTab('heatExchanger')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'heatExchanger'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            Heat Exchanger Systems
          </button>
          <button
            onClick={() => setActiveTab('carbonSteel')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'carbonSteel'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            Carbon Steel Workshop
          </button>
          <button
            onClick={() => setActiveTab('stainlessSteel')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'stainlessSteel'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            Stainless Steel Workshop
          </button>
          <button
            onClick={() => setActiveTab('keyEquipment')}
            className={`px-4 py-2 rounded-lg transition-all ${activeTab === 'keyEquipment'
              ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
              : 'bg-slate-700 hover:bg-slate-600'
              }`}
          >
            Key Equipment
          </button>
        </div>

        {/* Content Sections */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
          {/* Heat Exchanger Section */}
          {activeTab === 'heatExchanger' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-emerald-300">Heat Exchanger</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Burner Section */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Burner</h3>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium mb-3 text-slate-300">Moisture Separator Reheater</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span>Pulp Washer</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span>Exotic Special Welding Vietnam Manufacturing Co., Ltd</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        <span className="text-emerald-400 font-medium">Exotic Leader Confidential: Green</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium mb-3 text-slate-300">Pressure Vessel</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        <span>Grate Manufacturing</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Components Section */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Components</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-600/30 p-3 rounded-lg text-center">
                      <span className="text-slate-300">Diverter</span>
                    </div>
                    <div className="bg-slate-600/30 p-3 rounded-lg text-center">
                      <span className="text-slate-300">Elbow</span>
                    </div>
                    <div className="bg-slate-600/30 p-3 rounded-lg text-center">
                      <span className="text-slate-300">Pulper</span>
                    </div>
                    <div className="bg-slate-600/30 p-3 rounded-lg text-center">
                      <span className="text-slate-300">Diffuser</span>
                    </div>
                    <div className="col-span-2 bg-slate-600/30 p-3 rounded-lg text-center">
                      <span className="text-slate-300">Rotary drum (stainless steel)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Carbon Steel Workshop Section */}
          {activeTab === 'carbonSteel' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-emerald-300">For Carbon Steel (Workshop #1)</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CNC Press Brake */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">CNC Press Brake</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Pressure:</span>
                      <span className="font-medium">5000 kN</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Table Length:</span>
                      <span className="font-medium">6000 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Stroke:</span>
                      <span className="font-medium">320 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Opening Height:</span>
                      <span className="font-medium">625 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Ram Speed (Work):</span>
                      <span className="font-medium">7 mm/s</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Motor Power:</span>
                      <span className="font-medium">37 kW</span>
                    </li>
                  </ul>
                </div>

                {/* Plate Rolling Machine */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Plate Rolling Machine</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Max. Plate Width:</span>
                      <span className="font-medium">2500 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Max. Rolling Thickness:</span>
                      <span></span>
                    </li>
                    <li className="flex justify-between pl-4">
                      <span className="text-slate-300">End Pre-bending:</span>
                      <span className="font-medium">30 mm</span>
                    </li>
                    <li className="flex justify-between pl-4">
                      <span className="text-slate-300">Central Rolling:</span>
                      <span className="font-medium">40 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Min. Rolling Diameter:</span>
                      <span className="font-medium">1800 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Hydraulic Motor Power:</span>
                      <span className="font-medium">45 kW</span>
                    </li>
                  </ul>
                </div>

                {/* Laser Cutting Machine */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Laser Cutting Machine</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Model:</span>
                      <span className="font-medium">BUILD-B28030</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Dimensions:</span>
                      <span className="font-medium">L28m × W3m</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Power Supply:</span>
                      <span className="font-medium">380V, 3 Phase, 50–60Hz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Stainless Steel Workshop Section */}
          {activeTab === 'stainlessSteel' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-emerald-300">For Stainless Steel (Workshop #3)</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* CNC Press Brake */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">CNC Press Brake</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Pressure:</span>
                      <span className="font-medium">2500 kN</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Table Length:</span>
                      <span className="font-medium">3200 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Stroke:</span>
                      <span className="font-medium">200 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Opening Height:</span>
                      <span className="font-medium">520 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Ram Speed (Work):</span>
                      <span className="font-medium">8 mm/s</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Motor Power:</span>
                      <span className="font-medium">18.5 kW</span>
                    </li>
                  </ul>
                </div>

                {/* Plate Rolling Machine */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Plate Rolling Machine</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Max. Plate Width:</span>
                      <span className="font-medium">2000 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Max. Rolling Thickness:</span>
                      <span></span>
                    </li>
                    <li className="flex justify-between pl-4">
                      <span className="text-slate-300">End Pre-bending:</span>
                      <span className="font-medium">16 mm</span>
                    </li>
                    <li className="flex justify-between pl-4">
                      <span className="text-slate-300">Central Rolling:</span>
                      <span className="font-medium">20 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Min. Rolling Diameter:</span>
                      <span className="font-medium">800 mm</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Hydraulic Motor Power:</span>
                      <span className="font-medium">15 kW</span>
                    </li>
                  </ul>
                </div>

                {/* Laser Cutting Machine */}
                <div className="bg-slate-700/50 p-5 rounded-xl border border-slate-600">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-300">Laser Cutting Machine</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-slate-300">Model:</span>
                      <span className="font-medium">SWINGX8025</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Dimensions:</span>
                      <span className="font-medium">L25m × W2.5m</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-slate-300">Power Supply:</span>
                      <span className="font-medium">380V, 3 Phase, 50–60Hz</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Key Equipment Section */}
          {activeTab === 'keyEquipment' && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 text-emerald-300">Key Equipment</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  "Crane System",
                  "Finning Machine",
                  "Bending Machine",
                  "Shot Blasting",
                  "Hydraulic Press",
                  "CNC Beveling",
                  "SAW Automatic Welding",
                  "Laser pipe cutting",
                  "180 ° overlay welding",
                  "Polishing",
                  "Heat Treatment",
                  "Machining Center"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 text-center hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <span className="text-xl font-medium text-cyan-300">Pourin</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-slate-500 text-sm">
          <p>© 2025 Industrial Technology Solutions. All rights reserved.</p>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LayoutTechnology;