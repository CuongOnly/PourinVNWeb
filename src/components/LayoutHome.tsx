"use client";
import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
  Suspense
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
const LazyLogoScroller = React.lazy(() => import('./TrangChu/LogoScroller'));
const LazyLaboratorySection = React.lazy(() => import('./TrangChu/CompanyLaboratory'));
const LazyFooterSection = React.lazy(() => import('./TrangChu/FooterSection'));

// Fallback components
const AboutUs = dynamic(() => import('./TrangChu/AbouUs'));
const AllProducts = dynamic(() => import('./TrangChu/AllProducts'));
const Technology = dynamic(() => import('./TrangChu/Technology'));
const NewsSection = dynamic(() => import('./TrangChu/NewSection'));
const TimelineItem = dynamic(() => import('./TrangChu/TimelineItem'));
const LogoScroller = dynamic(() => import('./TrangChu/LogoScroller'));
const Laboratory = dynamic(() => import('./TrangChu/CompanyLaboratory'));
const FooterSection = dynamic(() => import('./TrangChu/FooterSection'));
const SettingsPanel = dynamic(() => import('./SettingsPanel'));

// Loading component
const SectionLoader = () => (
  <div className="flex items-center justify-center h-full">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

// Scroll manager class for better performance
class ScrollManager {
  private isScrolling = false;
  private lastScrollTime = 0;
  private scrollThreshold = 50; // Minimum wheel delta to trigger scroll
  private throttleTime = 800; // Time between scrolls in ms
  private rafId: number | null = null;

  constructor(
    private onScrollNext: () => void,
    private onScrollPrev: () => void,
    private canScrollNext: () => boolean,
    private canScrollPrev: () => boolean
  ) { }

  handleWheel = (deltaY: number): boolean => {
    const now = Date.now();

    // Throttle scroll events
    if (now - this.lastScrollTime < this.throttleTime) {
      return false;
    }

    // Ignore small wheel movements
    if (Math.abs(deltaY) < this.scrollThreshold) {
      return false;
    }

    // Prevent multiple simultaneous scrolls
    if (this.isScrolling) {
      return false;
    }

    this.lastScrollTime = now;
    this.isScrolling = true;

    // Determine scroll direction with debouncing
    if (deltaY > 0 && this.canScrollNext()) {
      this.onScrollNext();
    } else if (deltaY < 0 && this.canScrollPrev()) {
      this.onScrollPrev();
    }

    // Reset scrolling state after animation would complete
    setTimeout(() => {
      this.isScrolling = false;
    }, this.throttleTime);

    return true;
  };

  handleKeydown = (key: string): boolean => {
    const now = Date.now();

    if (now - this.lastScrollTime < this.throttleTime || this.isScrolling) {
      return false;
    }

    this.lastScrollTime = now;
    this.isScrolling = true;

    if ((key === 'ArrowDown' || key === 'PageDown') && this.canScrollNext()) {
      this.onScrollNext();
    } else if ((key === 'ArrowUp' || key === 'PageUp') && this.canScrollPrev()) {
      this.onScrollPrev();
    } else {
      this.isScrolling = false;
      return false;
    }

    setTimeout(() => {
      this.isScrolling = false;
    }, this.throttleTime);

    return true;
  };

  cancel() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.isScrolling = false;
  }
}

export default function LayoutHome() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollMode, setScrollMode] = useState<'fullscreen' | 'smooth'>('fullscreen');
  const [showSettings, setShowSettings] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));
  const [showCherryBlossom, setShowCherryBlossom] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollManagerRef = useRef<ScrollManager | null>(null);

  const toggleCherryBlossom = () => {
    setShowCherryBlossom(!showCherryBlossom);
  };

  // Initialize scroll manager
  useEffect(() => {
    scrollManagerRef.current = new ScrollManager(
      () => scrollToSection(currentSection + 1),
      () => scrollToSection(currentSection - 1),
      () => currentSection < 7,
      () => currentSection > 0
    );

    return () => {
      scrollManagerRef.current?.cancel();
    };
  }, [currentSection]);

  // Device detection
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setScrollMode(mobile ? 'smooth' : 'fullscreen');
    };

    checkDevice();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkDevice, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Optimized video loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.style.willChange = 'auto';
    };

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

    if (video) {
      observer.observe(video);
    }

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      observer.disconnect();
    };
  }, [isVideoLoaded]);

  // Preload nearby sections
  useEffect(() => {
    const newVisibleSections = new Set(visibleSections);
    for (let i = Math.max(0, currentSection - 1); i <= Math.min(7, currentSection + 1); i++) {
      newVisibleSections.add(i);
    }

    if (newVisibleSections.size !== visibleSections.size) {
      setVisibleSections(newVisibleSections);
    }
  }, [currentSection, visibleSections]);

  // Optimized scroll to section with performance improvements
  const scrollToSection = useCallback((sectionNumber: number, instant: boolean = false) => {
    if (sectionNumber < 0 || sectionNumber > 7 || sectionNumber === currentSection) return;

    const targetRef = sectionRefs.current[sectionNumber];
    if (!targetRef || !containerRef.current) return;

    setCurrentSection(sectionNumber);

    if (scrollMode === 'smooth' && !instant) {
      targetRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    if (scrollMode === 'fullscreen') {
      // Use CSS snap for fullscreen mode - most performant
      containerRef.current.scrollTo({
        top: targetRef.offsetTop,
        behavior: instant ? 'auto' : 'smooth'
      });
    }
  }, [scrollMode, currentSection]);

  // Ultra-optimized wheel handler
  const handleWheel = useCallback((e: WheelEvent) => {
    if (scrollMode !== 'fullscreen') return;

    e.preventDefault();

    if (scrollManagerRef.current) {
      const handled = scrollManagerRef.current.handleWheel(e.deltaY);
      if (handled) {
        e.stopPropagation();
      }
    }
  }, [scrollMode]);

  // Optimized keyboard handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (scrollMode !== 'fullscreen') return;

    if (scrollManagerRef.current) {
      const handled = scrollManagerRef.current.handleKeydown(e.key);
      if (handled) {
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, [scrollMode]);

  // Smooth scroll tracking
  useEffect(() => {
    if (scrollMode !== 'smooth') return;

    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const updateCurrentSection = () => {
      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollTop / windowHeight);

      if (newSection !== currentSection && newSection >= 0 && newSection <= 7) {
        setCurrentSection(newSection);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateCurrentSection);
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollMode, currentSection]);

  // Optimized event listeners with passive where possible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (scrollMode === 'fullscreen') {
      container.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      container.removeEventListener('wheel', handleWheel);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [scrollMode, handleWheel, handleKeyDown]);

  // Cleanup
  useEffect(() => {
    return () => {
      scrollManagerRef.current?.cancel();
    };
  }, []);

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

    const newMode = scrollMode === 'fullscreen' ? 'smooth' : 'fullscreen';
    setScrollMode(newMode);

    // Reset to current section in new mode
    setTimeout(() => {
      scrollToSection(currentSection, true);
    }, 50);
  }, [scrollMode, currentSection, scrollToSection, isMobile]);

  const containerClassName = useMemo(() =>
    `fixed inset-0 w-screen h-screen overflow-hidden ${scrollMode === 'fullscreen'
      ? 'snap-y snap-mandatory overflow-y-scroll'
      : 'overflow-y-auto'
    }`,
    [scrollMode]
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
        
        /* Hardware acceleration and performance optimizations */
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
          contain: layout style paint;
        }
        
        /* Smooth animations */
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
        
        /* Gentle bounce animation for scroll indicator */
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
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-gentle-bounce {
            animation: none;
          }
          
          .scroll-container {
            scroll-behavior: auto;
          }
        }
        
        /* Video optimization */
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
              src="https://res.cloudinary.com/doooncpse/video/upload/v1762587725/7202221208711_safwfv.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Gradient overlay để text dễ đọc hơn */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div
          className={`relative z-10 ml-8 md:ml-16 lg:ml-24 xl:ml-32 
                ${isVideoLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{
            maxWidth: 'min(900px, 90vw)',
            marginTop: '-5%' // Điều chỉnh vị trí dọc
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
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
                      bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 
                   mb-2 pl-6 border-l-2 border-white/20 
                   backdrop-blur-sm bg-white/5 p-4 rounded-r-xl">
              Join us in creating value<br />
              and growing together!
            </p>

            {/* Call to Action Button */}
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

        {/* Decorative elements */}
        <div className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 text-white/50 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
          <span className="text-white/30">•</span>
          <span>Scroll to explore</span>
        </div>
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
      {(scrollMode === 'fullscreen' || !isMobile) && (
        <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block performance-layer">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300/50 -translate-x-1/2" />

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

          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
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
      {currentSection < 7 && scrollMode === 'fullscreen' && (
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
        scrollMode={scrollMode}
        toggleScrollMode={toggleScrollMode}
        getColor={getColor}
        showCherryBlossom={showCherryBlossom}
        toggleCherryBlossom={toggleCherryBlossom}
      />
      {showCherryBlossom && <CherryBlossom />}
      {/* Keyboard Shortcuts Hint */}
      {scrollMode === 'fullscreen' && !isMobile && (
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