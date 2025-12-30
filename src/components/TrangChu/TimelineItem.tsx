"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Building,
  Factory,
  Users,
  TrendingUp,
  Award,
  MapPin,
  Minus,
} from "lucide-react";
import { useLanguage } from '../../contexts/LanguageContext';

const Timeline = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsPlaying(true);
        } else {
          setIsPlaying(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < milestones.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const milestones = [
    {
      id: 1,
      year: "2007",
      title: t.sections.timeline.milestones.milestone1.title,
      description: t.sections.timeline.milestones.milestone1.description,
      icon: Building,
      color: "from-yellow-400 to-orange-500",
      iconBg: "bg-gradient-to-br from-yellow-400 to-cyan-500",
    },
    {
      id: 2,
      year: "2011",
      title: t.sections.timeline.milestones.milestone2.title,
      description: t.sections.timeline.milestones.milestone2.description,
      icon: Factory,
      color: "from-pink-500 to-rose-500",
      iconBg: "bg-gradient-to-br from-pink-500 to-cyan-500",
    },
    {
      id: 3,
      year: "2016",
      title: t.sections.timeline.milestones.milestone3.title,
      description: t.sections.timeline.milestones.milestone3.description,
      icon: MapPin,
      color: "from-teal-400 to-cyan-500",
      iconBg: "bg-gradient-to-br from-teal-400 to-cyan-500",
    },
    {
      id: 4,
      year: "2017",
      title: t.sections.timeline.milestones.milestone4.title,
      description: t.sections.timeline.milestones.milestone4.description,
      icon: TrendingUp,
      color: "from-sky-400 to-blue-500",
      iconBg: "bg-gradient-to-br from-sky-400 to-cyan-500",
    },
    {
      id: 5,
      year: "2019",
      title: t.sections.timeline.milestones.milestone5.title,
      description: t.sections.timeline.milestones.milestone5.description,
      icon: Factory,
      color: "from-blue-500 to-indigo-600",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 6,
      year: "2023",
      title: t.sections.timeline.milestones.milestone6.title,
      description: t.sections.timeline.milestones.milestone6.description,
      icon: Award,
      color: "from-violet-500 to-purple-600",
      iconBg: "bg-gradient-to-br from-violet-500 to-cyan-500",
    },
    {
      id: 7,
      year: "2022-2025",
      title: t.sections.timeline.milestones.milestone7.title,
      description: t.sections.timeline.milestones.milestone7.description,
      icon: Building,
      color: "from-purple-500 to-pink-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-cyan-500",
    },
  ];

  return (
    <div 
      ref={timelineRef}
      className="min-h-screen w-full flex items-center justify-center py-8 relative"
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/90 via-blue-50/90 to-purple-50/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-[150px] max-w-[1800px] mx-auto relative z-10">
        {/* Header - Thu nhỏ tiêu đề */}
        <div
          className={`text-center mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent px-4">
            {t.sections.timeline.title}
          </h1>
        </div>

        {/* Overview Section - Không có icon */}
        <div
          className={`w-full mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="backdrop-blur-sm rounded-2xl">
            <div className="text-center">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed sm:leading-loose max-w-6xl mx-auto">
                {t.sections.timeline.overview.description}
              </p>
            </div>
          </div>
        </div>

        {/* Icon ngang đẹp mắt */}
        <div className={`flex justify-center items-center transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-cyan-500"></div>
            <Minus className="w-12 h-12 text-cyan-500 transform rotate-0" strokeWidth={3} />
            <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
          </div>
        </div>

        {/* Desktop View - Hidden on mobile/tablet */}
        <div className={`hidden lg:block w-full mt-5 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {/* Top Icons with Content */}
          <div className="relative mb-6">
            <div className="flex justify-between items-start gap-2 xl:gap-4">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isActive = index === activeStep;
                const isPassed = index < activeStep;

                return (
                  <div
                    key={milestone.id}
                    className="flex flex-col items-center relative flex-1"
                    style={{
                      animation: isVisible 
                        ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        : "none",
                    }}
                  >
                    {/* Icon Circle */}
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`w-12 h-12 xl:w-16 xl:h-16 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${
                        isPassed || isActive
                          ? milestone.iconBg + " shadow-2xl"
                          : "bg-white border-4 border-gray-300"
                      } ${isActive ? "scale-110" : ""}`}
                      style={{
                        boxShadow: isActive
                          ? "0 20px 40px -10px rgba(0,0,0,0.3)"
                          : "",
                      }}
                    >
                      <Icon className="w-6 h-6 xl:w-8 xl:h-8 text-white" strokeWidth={2.5} />
                    </button>

                    {/* Content Box */}
                    <div
                      className={`mt-4 xl:mt-6 text-center transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <h3 className="font-bold text-xs xl:text-sm mb-1 xl:mb-2 text-gray-900">
                        {milestone.title}
                      </h3>
                      <p className="text-xs xl:text-sm text-gray-600 leading-relaxed min-h-[60px]">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Pulse effect for active */}
                    {isActive && (
                      <div
                        className="absolute top-0 w-12 h-12 xl:w-16 xl:h-16 rounded-full animate-ping opacity-20"
                        style={{
                          background: `linear-gradient(to bottom right, ${milestone.color})`,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline Bar with Years */}
          <div className="relative mt-2">
            {/* Progress Line */}
            <div className="absolute top-[52px] xl:top-[62px] left-0 right-0 h-2 xl:h-3 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 via-pink-500 via-teal-400 via-sky-400 via-blue-500 via-purple-500 to-violet-500 transition-all duration-1000 ease-out rounded-full"
                style={{
                  width: `${(activeStep / (milestones.length - 1)) * 100}%`,
                }}
              />
            </div>

            {/* Year Nodes */}
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => {
                const isActive = index === activeStep;
                const isPassed = index < activeStep;

                return (
                  <button
                    key={milestone.id}
                    onClick={() => setActiveStep(index)}
                    className="flex flex-col items-center group z-10 flex-1"
                  >
                    <div
                      className={`font-bold text-base xl:text-xl transition-colors mb-2 xl:mb-3 ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {milestone.year}
                    </div>

                    <div
                      className={`w-10 h-10 xl:w-12 xl:h-12 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 ${
                        isPassed || isActive
                          ? milestone.iconBg + " shadow-lg"
                          : "bg-white border-4 border-gray-400"
                      }`}
                    >
                      <span
                        className={`text-sm xl:text-base font-bold ${
                          isPassed || isActive ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {milestone.id}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View - Hidden on desktop */}
        <div className={`lg:hidden w-full max-w-2xl mx-auto mt-5 transition-all duration-700 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={milestone.id}
                className="relative mb-6 sm:mb-8"
                style={{
                  animation: isVisible 
                    ? `fadeInLeft 0.6s ease-out ${index * 0.1}s both`
                    : "none",
                }}
              >
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-full flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                    isActive ? "bg-white shadow-xl" : "bg-white/50"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${milestone.iconBg} shadow-lg`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-900">
                      {milestone.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </button>

                {/* Connecting line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-7 sm:left-8 top-16 sm:top-20 w-0.5 h-6 sm:h-8 bg-gray-300">
                    <div
                      className={`w-full transition-all duration-700 ${
                        index < activeStep ? milestone.iconBg : "bg-transparent"
                      }`}
                      style={{ height: "100%" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Timeline;