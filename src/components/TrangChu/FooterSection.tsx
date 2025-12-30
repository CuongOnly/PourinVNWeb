import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const FooterSection = () => {
  const { t } = useLanguage();
  const contact = t.sections.contact;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef} className="w-full h-full flex flex-col bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="mt-12 max-w-7xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">

            {/* Left Side - Company Info */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 xl:space-y-6">
              <div className={`space-y-2 transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <h2 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent leading-tight">
                  {contact.company.fullName}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm lg:text-sm xl:text-base leading-relaxed">
                  {contact.company.shortName}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5">
                {/* Address */}
                <div className={`flex items-start space-x-2 sm:space-x-3 lg:space-x-3 xl:space-x-4 transition-all duration-500 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base lg:text-base xl:text-lg truncate">
                      {contact.address.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-sm xl:text-base space-y-0.5">
                      {contact.address.lines.map((line, index) => (
                        <span key={index} className="block break-words">
                          {line}
                        </span>
                      ))}
                    </p>
                    {/* <div className="mt-1 sm:mt-2 px-2 sm:px-3 py-0.5 sm:py-1 bg-green-900/30 border border-green-700 rounded-md inline-block">
                      <span className="text-green-400 text-xs font-medium">✓ {contact.status}</span>
                    </div> */}
                  </div>
                </div>

                {/* Contact */}
                <div className={`flex items-start space-x-2 sm:space-x-3 lg:space-x-3 xl:space-x-4 transition-all duration-500 delay-300 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base lg:text-base xl:text-lg truncate">
                      {contact.contact.title}
                    </h3>
                    <div className="text-gray-300 space-y-0.5 text-xs sm:text-sm lg:text-sm xl:text-base">
                      <a href={`tel:${contact.contact.phone.replace(/\s/g, '')}`} className="block hover:text-cyan-300 transition-colors duration-200 break-words">
                        {contact.contact.phone}
                      </a>
                      <a href={`tel:${contact.contact.hotline.replace(/\s/g, '')}`} className="block hover:text-cyan-300 transition-colors duration-200 break-words">
                        {contact.contact.hotline}
                      </a>
                      <span className="block break-words">{contact.contact.fax}</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className={`flex items-start space-x-2 sm:space-x-3 lg:space-x-3 xl:space-x-4 transition-all duration-500 delay-400 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-cyan-400 mt-0.5 sm:mt-1 flex-shrink-0">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base lg:text-base xl:text-lg truncate">
                      {contact.email.title}
                    </h3>
                    <div className="space-y-0.5">
                      <a
                        href={`mailto:${contact.email.primary}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm sm:text-base lg:text-base xl:text-lg font-medium block break-all"
                      >
                        {contact.email.primary}
                      </a>
                      <a
                        href={`mailto:${contact.email.secondary}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm sm:text-base lg:text-base xl:text-lg font-medium block break-all"
                      >
                        {contact.email.secondary}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`bg-gray-800/60 backdrop-blur-xl rounded-xl lg:rounded-2xl xl:rounded-3xl p-4 sm:p-5 lg:p-6 xl:p-6 2xl:p-6 shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 w-full h-auto max-h-[90vh] overflow-y-auto transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '500ms' }}>
              <div className="mb-3 sm:mb-4 lg:mb-5 xl:mb-5 2xl:mb-5">
                <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl font-bold mb-1 sm:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {contact.form.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-base leading-relaxed">
                  {contact.form.description}
                </p>
              </div>

              <form className="space-y-3 sm:space-y-3 lg:space-y-4 xl:space-y-4 2xl:space-y-4">
                {/* Message Content */}
                <div className="group transition-all duration-300 delay-600">
                  <label className="block text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-300 mb-1 sm:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2 group-focus-within:text-cyan-300 transition-colors duration-300">
                    {contact.form.message.label}
                  </label>
                  <textarea
                    className="w-full px-3 sm:px-3 lg:px-4 xl:px-4 2xl:px-4 py-2 sm:py-2 lg:py-2 xl:py-3 2xl:py-3 bg-gray-700/50 border border-gray-600 rounded-lg lg:rounded-lg xl:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm group-hover:border-gray-500"
                    rows={3}
                    placeholder={contact.form.message.placeholder}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2 lg:gap-3 xl:gap-3 2xl:gap-3">
                  {/* Name */}
                  <div className="group transition-all duration-300 delay-700">
                    <label className="block text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-300 mb-1 sm:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2 group-focus-within:text-cyan-300 transition-colors duration-300">
                      {contact.form.name.label}
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-3 lg:px-4 xl:px-4 2xl:px-4 py-2 sm:py-2 lg:py-2 xl:py-3 2xl:py-3 bg-gray-700/50 border border-gray-600 rounded-lg lg:rounded-lg xl:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm group-hover:border-gray-500"
                      placeholder={contact.form.name.placeholder}
                    />
                  </div>

                  {/* Email */}
                  <div className="group transition-all duration-300 delay-800">
                    <label className="block text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-300 mb-1 sm:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2 group-focus-within:text-cyan-300 transition-colors duration-300">
                      {contact.form.email.label}
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 sm:px-3 lg:px-4 xl:px-4 2xl:px-4 py-2 sm:py-2 lg:py-2 xl:py-3 2xl:py-3 bg-gray-700/50 border border-gray-600 rounded-lg lg:rounded-lg xl:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm group-hover:border-gray-500"
                      placeholder={contact.form.email.placeholder}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="group transition-all duration-300 delay-900">
                  <label className="block text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm font-medium text-gray-300 mb-1 sm:mb-1 lg:mb-2 xl:mb-2 2xl:mb-2 group-focus-within:text-cyan-300 transition-colors duration-300">
                    {contact.form.phone.label}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 sm:px-3 lg:px-4 xl:px-4 2xl:px-4 py-2 sm:py-2 lg:py-2 xl:py-3 2xl:py-3 bg-gray-700/50 border border-gray-600 rounded-lg lg:rounded-lg xl:rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm group-hover:border-gray-500"
                    placeholder={contact.form.phone.placeholder}
                  />
                </div>

                {/* Submit Button */}
                <div className="transition-all duration-300 delay-1000">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-2 sm:py-2 lg:py-3 xl:py-3 2xl:py-3 px-4 rounded-lg lg:rounded-lg xl:rounded-xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] focus:ring-4 focus:ring-cyan-500/30 focus:ring-offset-2 focus:ring-offset-gray-800 shadow-2xl hover:shadow-cyan-500/20 text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-sm relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {contact.form.submit}
                      <svg
                        className="w-3 h-3 sm:w-3 sm:h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-4 2xl:h-4 ml-1 sm:ml-1 lg:ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={`w-full bg-black py-3 lg:py-4 border-t border-gray-800 mt-auto transition-all duration-500 delay-1100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-400 text-xs lg:text-sm text-center">
            {contact.copyright}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;