"use client";
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  Suspense,
} from 'react';
import { ChevronDown, Mouse } from 'lucide-react';
import dynamic from 'next/dynamic';
import CherryBlossom from './CherryBlossom';

// Dynamic imports for heavy components
const NavigationButton = dynamic(() => import('./TrangChu/NavigationButton'), {
  loading: () => <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse" />
});

const SocialIconsWithHover = dynamic(() => import('./SocialIconsWithHover'), {
  loading: () => (
    <div className="flex gap-2">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-12 h-12 bg-gray-200 rounded-[20%] animate-pulse" />
      ))}
    </div>
  )
});

// Lazy load heavy sections
const LazyAboutUs = React.lazy(() => import('./TrangChu/AbouUs'));
const LazyAllProducts = React.lazy(() => import('./TrangChu/AllProducts'));
const LazyTechnology = React.lazy(() => import('./TrangChu/Technology'));
const LazyNewsSection = React.lazy(() => import('./TrangChu/NewSection'));
const LazyTimelineItem = React.lazy(() => import('./TrangChu/TimelineItem'));
const LazyLaboratorySection = React.lazy(() => import('./TrangChu/CompanyLaboratory'));
const LazyFooterSection = React.lazy(() => import('./TrangChu/FooterSection'));

// Fallback components
const AboutUs = dynamic(() => import('./TrangChu/AbouUs'));
const AllProducts = dynamic(() => import('./TrangChu/AllProducts'));
const Technology = dynamic(() => import('./TrangChu/Technology'));
const NewsSection = dynamic(() => import('./TrangChu/NewSection'));
const TimelineItem = dynamic(() => import('./TrangChu/TimelineItem'));
const Laboratory = dynamic(() => import('./TrangChu/CompanyLaboratory'));
const FooterSection = dynamic(() => import('./TrangChu/FooterSection'));
const SettingsPanel = dynamic(() => import('./SettingsPanel'));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Hook để theo dõi responsive mà không cần useEffect
function useResponsive() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: dimensions.width < 768,
    width: dimensions.width,
    height: dimensions.height
  };
}

// Hook để quản lý visible sections mà không cần useEffect
function useVisibleSections(currentSection: number) {
  return useMemo(() => {
    const sections = new Set<number>();
    for (let i = Math.max(0, currentSection - 1); i <= Math.min(7, currentSection + 1); i++) {
      sections.add(i);
    }
    return sections;
  }, [currentSection]);
}

export default function LayoutHome() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [scrollMode, setScrollMode] = useState<'fullscreen' | 'smooth'>('fullscreen');
  const [showSettings, setShowSettings] = useState(false);
  const [showCherryBlossom, setShowCherryBlossom] = useState(true);
  
  // Sử dụng custom hooks
  const { isMobile } = useResponsive();
  const visibleSections = useVisibleSections(currentSection);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const toggleCherryBlossom = () => {
    setShowCherryBlossom(!showCherryBlossom);
  };

  // Tự động set scroll mode dựa trên device - KHÔNG DÙNG useEffect
  const derivedScrollMode = isMobile ? 'smooth' : scrollMode;

  // Optimized scroll to section
  const scrollToSection = useCallback((sectionNumber: number, instant: boolean = false) => {
    if (sectionNumber < 0 || sectionNumber > 7 || sectionNumber === currentSection) return;

    const targetRef = sectionRefs.current[sectionNumber];
    if (!targetRef || !containerRef.current) return;

    // Cập nhật section hiện tại
    setCurrentSection(sectionNumber);

    if (derivedScrollMode === 'smooth' && !instant) {
      targetRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    if (derivedScrollMode === 'fullscreen') {
      containerRef.current.scrollTo({
        top: targetRef.offsetTop,
        behavior: instant ? 'auto' : 'smooth'
      });
    }
  }, [derivedScrollMode, currentSection]);

  // Handle wheel với requestAnimationFrame
  const handleWheel = useCallback((e: WheelEvent) => {
    if (derivedScrollMode !== 'fullscreen') return;

    e.preventDefault();

    if (Math.abs(e.deltaY) < 50) return;

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if (e.deltaY > 0 && currentSection < 7) {
        scrollToSection(currentSection + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    });
  }, [derivedScrollMode, currentSection, scrollToSection]);

  // Handle keyboard với debounce
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (derivedScrollMode !== 'fullscreen') return;

    e.preventDefault();

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      if ((e.key === 'ArrowDown' || e.key === 'PageDown') && currentSection < 7) {
        scrollToSection(currentSection + 1);
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    });
  }, [derivedScrollMode, currentSection, scrollToSection]);

  // Track smooth scroll - chỉ cần 1 useEffect cho scroll tracking
  useEffect(() => {
    if (derivedScrollMode !== 'smooth') return;

    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = container.scrollTop;
          const windowHeight = window.innerHeight;
          const newSection = Math.round(scrollTop / windowHeight);

          if (newSection !== currentSection && newSection >= 0 && newSection <= 7) {
            setCurrentSection(newSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [derivedScrollMode, currentSection]);

  // Setup event listeners - chỉ 1 useEffect cho tất cả listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (derivedScrollMode === 'fullscreen') {
      container.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [derivedScrollMode, handleWheel, handleKeyDown]);

  // Video loading - chỉ 1 useEffect cho video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => setIsVideoLoaded(true);
    const handleError = () => setIsVideoLoaded(true);

    video.preload = "metadata";
    video.playsInline = true;
    video.muted = true;
    video.load();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isVideoLoaded) {
          video.play().catch(() => { });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      observer.disconnect();
    };
  }, [isVideoLoaded]);

  // Memoized values
  const getColor = useCallback(() => {
    const colors = ['#6366f1', '#06b6d4', '#a855f7', '#10b981', '#f59e0b', '#ef4444', '#84cc16', '#f97316'];
    return colors[currentSection] || colors[0];
  }, [currentSection]);

  const handleNavigationClick = useCallback((sectionNumber: number) => {
    scrollToSection(sectionNumber);
  }, [scrollToSection]);

  const toggleScrollMode = useCallback(() => {
    if (isMobile) return;

    const newMode = derivedScrollMode === 'fullscreen' ? 'smooth' : 'fullscreen';
    setScrollMode(newMode);

    // Reset to current section in new mode
    setTimeout(() => {
      scrollToSection(currentSection, true);
    }, 50);
  }, [derivedScrollMode, currentSection, scrollToSection, isMobile]);

  const containerClassName = useMemo(() =>
    `fixed inset-0 w-screen h-screen overflow-hidden ${derivedScrollMode === 'fullscreen'
      ? 'snap-y snap-mandatory overflow-y-scroll'
      : 'overflow-y-auto'
    }`,
    [derivedScrollMode]
  );

  const renderSection = (index: number, Component: React.ComponentType, Fallback?: React.ComponentType) => {
    if (!visibleSections.has(index)) {
      return <SectionLoader />;
    }

    return (
      <Suspense fallback={<SectionLoader />}>
        {Fallback ? <Fallback /> : <Component />}
      </Suspense>
    );
  };

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      } as React.CSSProperties}
    >
      {/* Optimized CSS styles */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
        
        .performance-layer {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000;
          will-change: transform;
        }
        
        .scroll-container {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }
        
        .section-snap {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translate3d(0, 20px, 0); 
          }
          to { 
            opacity: 1; 
            transform: translate3d(0, 0, 0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes gentle-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40% {
            transform: translate3d(0, -4px, 0);
          }
          60% {
            transform: translate3d(0, -2px, 0);
          }
        }
        
        .animate-gentle-bounce {
          animation: gentle-bounce 3s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-gentle-bounce {
            animation: none;
          }
        }
        
        .video-optimized {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 performance-layer">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            backgroundColor: getColor(),
            width: `${((currentSection + 1) / 8) * 100}%`,
            boxShadow: `0 0 20px ${getColor()}40`,
          }}
        />
      </div>

      {/* SECTION 1 - Video Background */}
      <section
        ref={el => { sectionRefs.current[0] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-start relative overflow-hidden bg-black performance-layer"
      >
        <div className="absolute inset-0 overflow-hidden">
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-3"></div>
                <p className="text-sm">Loading...</p>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'
              } video-optimized`}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source
              src="https://res.cloudinary.com/doooncpse/video/upload/v1767082625/1230_1_nmf7qb.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div
          className={`relative z-10 ml-8 md:ml-16 lg:ml-24 xl:ml-32 
                ${isVideoLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            maxWidth: 'min(900px, 90vw)',
            marginTop: '-5%'
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                   font-black mb-4 md:mb-6 text-white performance-layer
                   leading-tight md:leading-none">
            Welcome to<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                       bg-clip-text text-transparent">
              Pourin Viet Nam
            </span>
          </h1>

          <div className="relative">
            <div className="absolute -left-4 top-1/2 w-1 h-16 -translate-y-1/2 
                      bg-gradient-to-b rounded-full" />

            <p className="text-lg md:text-lg lg:text-xl text-white/90 
                   mb-2 pl-6 border-l-2 border-white/20 
                   backdrop-blur-sm bg-white/5 p-4 rounded-r-xl">
              Join us in creating value<br />
              and growing together!
            </p>

            <div className="mt-6 md:mt-8 pl-6">
              <button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white font-semibold rounded-lg hover:from-blue-600 
                    hover:to-purple-600 transition-all duration-300 
                    transform hover:scale-105 active:scale-95 
                    shadow-lg hover:shadow-xl"
                onClick={() => scrollToSection(1)}
              >
                Explore More
                <ChevronDown className="inline-block ml-2 w-4 h-4 animate-bounce" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
          <span className="text-white/30">•</span>
          <span>Scroll to explore</span>
        </div> */}
      </section>

      {/* SECTION 2 */}
      <section
        ref={el => { sectionRefs.current[1] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 performance-layer"
      >
        {renderSection(1, LazyAboutUs, AboutUs)}
      </section>

      {/* SECTION 3 */}
      <section
        ref={el => { sectionRefs.current[2] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50 performance-layer"
      >
        {renderSection(2, LazyAllProducts, AllProducts)}
      </section>

      {/* SECTION 4 */}
      <section
        ref={el => { sectionRefs.current[3] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50 performance-layer"
      >
        {renderSection(3, LazyTechnology, Technology)}
      </section>

      {/* SECTION 5 */}
      <section
        ref={el => { sectionRefs.current[4] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 performance-layer"
      >
        {renderSection(4, LazyLaboratorySection, Laboratory)}
      </section>

      {/* SECTION 6 */}
      <section
        ref={el => { sectionRefs.current[5] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 performance-layer"
      >
        {renderSection(5, LazyNewsSection, NewsSection)}
      </section>

      {/* SECTION 7 */}
      <section
        ref={el => { sectionRefs.current[6] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-lime-50 via-emerald-50 to-cyan-50 performance-layer"
      >
        {renderSection(6, LazyTimelineItem, TimelineItem)}
      </section>

      {/* SECTION 8 */}
      <section
        ref={el => { sectionRefs.current[7] = el; }}
        className="section-snap w-screen h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 performance-layer"
      >
        {renderSection(7, LazyFooterSection, FooterSection)}
      </section>

      {/* Social Icons */}
      <div className="fixed left-6 bottom-25 z-50 performance-layer">
        <Suspense fallback={
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-gray-200 rounded-[20%] animate-pulse" />
            ))}
          </div>
        }>
          <SocialIconsWithHover />
        </Suspense>
      </div>

      {/* Navigation Sidebar */}
      {(derivedScrollMode === 'fullscreen' || !isMobile) && (
        <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block performance-layer">
          <div className="absolute right-1/2 top-0 bottom-0 w-px bg-gray-300/50 -translate-x-1/2" />

          <div className="relative flex flex-col gap-6">
            {['Welcome', 'About', 'Products', 'Technology', 'Laboratory', 'News', 'Timeline', 'Contact'].map((title, index) => (
              <NavigationButton
                key={index}
                sectionNumber={index}
                title={title}
                currentSection={currentSection}
                getColor={getColor}
                scrollToSection={handleNavigationClick}
              />
            ))}
          </div>

          <div className="absolute -bottom-16 right-1/2 -translate-x-1/2 text-center">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
              Section
            </div>
            <div
              className="text-2xl font-bold transition-colors duration-300"
              style={{ color: getColor() }}
            >
              {currentSection + 1}<span className="text-gray-400 text-lg">/8</span>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      {currentSection < 7 && derivedScrollMode === 'fullscreen' && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 performance-layer">
          <div className="flex flex-col items-center gap-1 animate-gentle-bounce opacity-70 hover:opacity-100 transition-opacity duration-300">
            <Mouse
              className="w-5 h-5 transition-colors duration-300"
              style={{
                color: getColor(),
                filter: `drop-shadow(0 2px 4px ${getColor()}40)`
              }}
            />
            <ChevronDown
              className="w-5 h-5 transition-colors duration-300"
              style={{
                color: getColor(),
                filter: `drop-shadow(0 2px 4px ${getColor()}40)`
              }}
            />
          </div>
        </div>
      )}

      {/* Settings Panel */}
      <SettingsPanel
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        isMobile={isMobile}
        scrollMode={derivedScrollMode}
        toggleScrollMode={toggleScrollMode}
        getColor={getColor}
        showCherryBlossom={showCherryBlossom}
        toggleCherryBlossom={toggleCherryBlossom}
      />
      {showCherryBlossom && <CherryBlossom />}
      
      {/* Keyboard Shortcuts Hint */}
      {derivedScrollMode === 'fullscreen' && !isMobile && (
        <div className="fixed bottom-6 right-24 z-40 performance-layer">
          <div className="flex gap-1.5 items-center backdrop-blur-xl bg-white/50 px-3 py-2 rounded-full shadow-lg opacity-50 hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-gray-600 font-medium">Use</span>
            <kbd className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 font-semibold shadow border border-gray-200/50">
              ↑
            </kbd>
            <kbd className="px-2 py-1 bg-white/80 rounded text-xs text-gray-700 font-semibold shadow border border-gray-200/50">
              ↓
            </kbd>
            <span className="text-xs text-gray-600 font-medium">to navigate</span>
          </div>
        </div>
      )}
    </div>
  );
}