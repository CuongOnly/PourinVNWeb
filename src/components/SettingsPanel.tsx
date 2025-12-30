"use client";
import React from 'react';
import { Settings, X, Monitor, Smartphone, Mouse, Flower } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsPanelProps {
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
  isMobile: boolean;
  scrollMode: 'fullscreen' | 'smooth';
  toggleScrollMode: () => void;
  getColor: () => string;
  showCherryBlossom: boolean; // Thêm prop mới
  toggleCherryBlossom: () => void; // Thêm prop mới
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  showSettings,
  setShowSettings,
  isMobile,
  scrollMode,
  toggleScrollMode,
  getColor,
  showCherryBlossom, // Nhận prop mới
  toggleCherryBlossom // Nhận prop mới
}) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Settings Toggle Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed bottom-10 left-6 z-50 
w-12 h-12 flex items-center justify-center
rounded-xl text-gray-600 bg-white transition-all duration-300 ease-in-out hover:shadow-xl hover:text-white group border border-gray-200
group cursor-pointer"
        style={{
          border: `2px solid ${getColor()}20`
        }}
      >
        <Settings
          className="w-6 h-6 transition-colors duration-500 group-hover:scale-110"
          style={{ color: getColor() }}
        />
      </button>

      {/* Settings Panel Overlay */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
            onClick={() => setShowSettings(false)}
          />

          {/* Panel Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
            {/* Header */}
            <div
              className="px-6 py-4 text-white font-semibold flex items-center justify-between"
              style={{ backgroundColor: getColor() }}
            >
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5" />
                <span>{t.settings.title}</span>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="p-3 -m-2 rounded-lg hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Current Device Info */}
              <div className="cursor-default">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    {isMobile ? (
                      <Smartphone className="w-5 h-5 text-gray-600" />
                    ) : (
                      <Monitor className="w-5 h-5 text-gray-600" />
                    )}
                    <div>
                      <div className="font-medium text-gray-900">
                        {isMobile ? t.settings.mobileDevice : t.settings.desktopDevice}
                      </div>
                      <div className="text-sm text-gray-500">
                        {isMobile ? t.settings.smoothScrollOnly : t.settings.toggleScrollModes}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cherry Blossom Toggle */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 cursor-default">
                  <Flower className="w-4 h-4 text-gray-600" />
                  <label className="font-medium text-gray-900">Cherry Blossom Effect</label>
                </div>
                
                <div 
                  onClick={toggleCherryBlossom}
                  className="flex items-center justify-between p-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-gray-900">Show falling petals</span>
                  <div className="relative">
                    <div className={`w-12 h-6 flex items-center rounded-full p-1 transition-all duration-300 ${showCherryBlossom ? 'bg-blue-500' : 'bg-gray-300'}`}>
                      <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${showCherryBlossom ? 'translate-x-6' : ''}`} />
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 cursor-default">
                  Toggle the cherry blossom animation effect on/off
                </p>
              </div>

              {/* Scroll Mode Toggle */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 cursor-default">
                  <Mouse className="w-4 h-4 text-gray-600" />
                  <label className="font-medium text-gray-900">{t.settings.scrollBehavior}</label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => !isMobile && toggleScrollMode()}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${scrollMode === 'fullscreen'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      } ${isMobile ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="text-center">
                      <div className="font-semibold mb-1">{t.settings.fullscreen}</div>
                      <div className="text-xs opacity-70">{t.common.section} snap</div>
                    </div>
                  </div>

                  <div
                    onClick={() => !isMobile && toggleScrollMode()}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${scrollMode === 'smooth'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                      } ${isMobile ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="text-center">
                      <div className="font-semibold mb-1">{t.settings.smooth}</div>
                      <div className="text-xs opacity-70">{t.common.scroll} continuous</div>
                    </div>
                  </div>
                </div>

                {isMobile && (
                  <p className="text-xs text-gray-500 text-center cursor-default">
                    {t.settings.smoothScrollOnly}
                  </p>
                )}
              </div>

              {/* Instructions */}
              <div className="p-4 bg-gray-50 rounded-lg cursor-default">
                <h4 className="font-medium text-gray-900 mb-2">{t.settings.howToNavigate}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• {t.settings.fullscreenInstructions}</li>
                  <li>• {t.settings.smoothInstructions}</li>
                  <li>• {t.settings.mobileInstructions}</li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div
                onClick={() => setShowSettings(false)}
                className="w-full py-3 px-4 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium cursor-pointer text-center"
              >
                {t.common.close}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsPanel;