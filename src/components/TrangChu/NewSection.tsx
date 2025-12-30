"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useNewsData } from "../../hooks/useNewsData";
import { useLanguage } from "../../contexts/LanguageContext";

const NewsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { newsItems, navigation, translations } = useNewsData();
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const [mainNews, ...sideNews] = newsItems;

  // Format date based on language
  const formatDate = (dateStr: string) => {
    return dateStr; // Dates are already formatted in the data
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-3 relative"
    >
      {/* Background Image với Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/doooncpse/image/upload/v1763014410/welding-88n8q6l12oa8xscv_tozvgj.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay gradient để làm nổi bật nội dung */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 to-blue-50/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="w-full pl-16 pr-16  relative z-10">
        {/* Header với style mới */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-24 mb-4 space-y-4 lg:space-y-0">
          {/* Badge - Bên trái */}
          <div className={`inline-block transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
              {translations.title}
            </span>
          </div>

          {/* Subtitle - Ở giữa */}
          <p className={`text-lg text-gray-600 max-w-2xl text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {translations.subtitle}
          </p>

          {/* Empty div để cân bằng layout - Bên phải */}
          <div className="w-32"></div>
        </div>

        {/* Navigation */}
        <div 
          className={`border-t border-gray-200 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transform transition-all duration-700 delay-100 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex ml-6 flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 text-sm text-gray-600">
            {navigation.map((item, index) => (
              <a
                key={item}
                href="#"
                className={`hover:text-blue-800 pb-1 font-medium transition-all duration-300 whitespace-nowrap transform ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </nav>

          <button 
            className={`bg-gray-800 hover:bg-blue-800 text-white px-5 py-2 flex items-center space-x-2 text-sm transition-all duration-300 rounded-lg hover:shadow-lg hover:scale-105 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <span>{translations.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content */}
        <main className="flex flex-col lg:flex-row gap-4 px-4 sm:px-6">
          {/* Featured News - Thẻ bên trái */}
          {mainNews && (
            <div 
              className={`w-full lg:w-1/2 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group rounded-xl overflow-hidden flex flex-col transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative h-64 overflow-hidden flex-shrink-0">
                <img
                  src={mainNews.image}
                  alt={mainNews.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex-1 p-6 flex flex-col overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  {mainNews.tag && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-semibold animate-pulse">
                      {mainNews.tag}
                    </span>
                  )}
                  <p className="text-gray-500 text-xs whitespace-nowrap font-medium">
                    {formatDate(mainNews.date)}
                  </p>
                </div>

                <h2 className="text-lg font-bold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                  {mainNews.title}
                </h2>
                
                <div className="flex-1 overflow-hidden max-h-20">
                  <p className="text-sm text-gray-600 leading-relaxed overflow-y-auto max-h-20 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {mainNews.description}
                  </p>
                </div>

                <button className="text-gray-800 hover:text-blue-800 text-sm font-semibold flex items-center gap-1 w-fit mt-4 group/btn">
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                    {translations.readMore}
                  </span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          )}

          {/* Side News - 2 thẻ bên phải */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {sideNews.map((news, index) => (
              <div
                key={news.id}
                className={`flex bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group rounded-xl overflow-hidden transform ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  height: '240px',
                  transitionDelay: `${400 + index * 150}ms` 
                }}
              >
                <div className="relative w-2/5 overflow-hidden flex-shrink-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-4 flex-1 flex flex-col overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    {news.tag && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-semibold whitespace-nowrap">
                        {news.tag}
                      </span>
                    )}
                    <p className="text-gray-500 text-xs whitespace-nowrap font-medium">
                      {formatDate(news.date)}
                    </p>
                  </div>

                  <h3 className="text-sm font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-blue-800 transition-colors duration-300 leading-tight">
                    {news.title}
                  </h3>
                  
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs text-gray-600 leading-relaxed overflow-y-auto max-h-20 pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                      {news.description}
                    </p>
                  </div>

                  <button className="text-gray-800 hover:text-blue-800 text-xs font-semibold flex items-center gap-1 mt-2 group/btn">
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      {translations.readMore}
                    </span>
                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </div>
  );
};

export default React.memo(NewsSection);