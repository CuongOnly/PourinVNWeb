'use client';

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { laboratoryData, sectionLaboTitles } from '../../locales/data';
import CertificatesSlide from './CertificatesSlide';

interface LaboratorySlide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

interface SlideItemProps {
  slide: LaboratorySlide;
  isHovered: boolean;
  onButtonClick: () => void;
  isVisible: boolean;
}

const SlideItem = ({ slide, isHovered, onButtonClick, isVisible }: SlideItemProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white overflow-hidden flex flex-col h-[310px] sm:h-[340px] transition duration-300 hover:shadow-xl">
      {/* Image Container - Chiều cao cố định */}
      <div className="overflow-hidden relative w-full h-[220px] flex-shrink-0">
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%]"
            style={{ animation: 'shimmer 2s infinite' }} />
        )}

        {isVisible && (
          <img
            src={slide.image || '/placeholder.jpg'}
            alt={slide.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-110 rotate-2' : 'scale-100'}`}
          />
        )}

        {/* Category badge */}
        <div className="absolute top-2 right-2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          Laboratory
        </div>
      </div>

      {/* Content Container - Chiều cao cố định */}
      <div className="h-[40px] p-2 flex flex-col flex-1">
        {/* Title - Chiều cao cố định */}
        <h3 className="text-base font-semibold text-gray-800 h-[24px] overflow-hidden leading-6">
          <span className="line-clamp-2">{slide.title}</span>
        </h3>

        {/* Button - Đẩy xuống dưới cùng */}
        <button
          onClick={onButtonClick}
          className="mt-[14px] w-full px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-200 text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
        >
          {slide.buttonText}
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Dữ liệu mẫu fallback
const FALLBACK_SLIDES: LaboratorySlide[] = [
  {
    id: 1,
    image: '/images/lab-1.jpg',
    title: 'Phòng thí nghiệm Công nghệ Sinh học',
    description: 'Phòng thí nghiệm hiện đại với các thiết bị tiên tiến',
    buttonText: 'Xem thêm'
  },
  {
    id: 2,
    image: '/images/lab-2.jpg',
    title: 'Phòng thí nghiệm Hóa học Phân tích',
    description: 'Chuyên phân tích các mẫu vật với độ chính xác cao',
    buttonText: 'Xem thêm'
  },
  {
    id: 3,
    image: '/images/lab-3.jpg',
    title: 'Phòng thí nghiệm Vật liệu Mới',
    description: 'Nghiên cứu và phát triển các vật liệu tiên tiến',
    buttonText: 'Xem thêm'
  },
  {
    id: 4,
    image: '/images/lab-4.jpg',
    title: 'Phòng thí nghiệm Môi trường',
    description: 'Phân tích và đánh giá chất lượng môi trường',
    buttonText: 'Xem thêm'
  }
];

export default function CompanyLaboratory() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [progress, setProgress] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set());
  const [isVisible, setIsVisible] = useState(false);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Sửa lỗi: Xử lý trường hợp laboratoryData là object rỗng
  const slides: LaboratorySlide[] = useMemo(() => {
    try {
      console.log('Current language:', language);
      console.log('Available laboratoryData keys:', Object.keys(laboratoryData));
      console.log('laboratoryData content:', laboratoryData);

      // Lấy dữ liệu theo ngôn ngữ
      const dataByLanguage = laboratoryData[language as keyof typeof laboratoryData];
      console.log(`Data for language ${language}:`, dataByLanguage);

      // Nếu không có dữ liệu cho ngôn ngữ hiện tại, thử lấy tiếng Việt
      const data = dataByLanguage || laboratoryData.vi;
      console.log('Final data to use:', data);

      // Kiểm tra nếu data là object rỗng hoặc không phải mảng
      if (!data || typeof data !== 'object') {
        console.warn('Laboratory data is invalid, using fallback data');
        return FALLBACK_SLIDES;
      }

      // Nếu data là object rỗng {}
      if (Object.keys(data).length === 0) {
        console.warn('Laboratory data is empty object, using fallback data');
        return FALLBACK_SLIDES;
      }

      // Nếu data là mảng
      if (Array.isArray(data)) {
        const validSlides = data.filter(slide =>
          slide &&
          typeof slide === 'object' &&
          slide.id !== undefined &&
          slide.title !== undefined
        );

        if (validSlides.length === 0) {
          console.warn('No valid slides in array, using fallback data');
          return FALLBACK_SLIDES;
        }

        return validSlides;
      }

      // Nếu data là object có chứa mảng (ví dụ: { slides: [...] })
      // Thử tìm bất kỳ property nào là mảng
      const arrayProperties = Object.values(data).filter(value => Array.isArray(value));
      if (arrayProperties.length > 0) {
        const firstArray = arrayProperties[0] as LaboratorySlide[];
        const validSlides = firstArray.filter(slide =>
          slide &&
          typeof slide === 'object' &&
          slide.id !== undefined &&
          slide.title !== undefined
        );

        if (validSlides.length > 0) {
          console.log('Found slides in object property, using:', validSlides);
          return validSlides;
        }
      }

      console.warn('No valid slides found in laboratory data structure, using fallback');
      return FALLBACK_SLIDES;

    } catch (error) {
      console.error('Error processing laboratory data:', error);
      return FALLBACK_SLIDES;
    }
  }, [language]);

  // Sửa lỗi: Đảm bảo title và subtitle luôn có giá trị hợp lệ
  const sectionTitles = useMemo(() => {
    try {
      const data = sectionLaboTitles[language as keyof typeof sectionLaboTitles] || sectionLaboTitles.vi;

      // Kiểm tra nếu data là object rỗng
      if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
        return {
          title: 'Phòng Thí Nghiệm',
          subtitle: 'Hệ thống phòng thí nghiệm hiện đại và tiên tiến'
        };
      }

      return {
        title: data?.title || 'Phòng Thí Nghiệm',
        subtitle: data?.subtitle || 'Hệ thống phòng thí nghiệm hiện đại và tiên tiến'
      };
    } catch (error) {
      console.error('Error processing section titles:', error);
      return {
        title: 'Phòng Thí Nghiệm',
        subtitle: 'Hệ thống phòng thí nghiệm hiện đại và tiên tiến'
      };
    }
  }, [language]);

  const { title, subtitle } = sectionTitles;

  const maxIndex = useMemo(() => Math.max(0, slides.length - slidesPerView), [slides.length, slidesPerView]);

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Responsive breakpoints
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateSlidesPerView = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesPerView(1);
      else if (w < 768) setSlidesPerView(2);
      else if (w < 1024) setSlidesPerView(3);
      else setSlidesPerView(4);
    };

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateSlidesPerView, 150);
    };

    updateSlidesPerView();
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      clearTimeout(timeoutId);
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleSlides(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Auto-play with progress bar - chỉ chạy khi có slides
  useEffect(() => {
    if (slides.length === 0) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }

    if (!isAutoPlaying || hoveredIndex !== null) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      setProgress(0);
      return;
    }

    setProgress(0);
    const progressInterval = 30;
    const totalDuration = 4000;

    progressRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + (progressInterval / totalDuration) * 100;
        return next >= 100 ? 100 : next;
      });
    }, progressInterval);

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
      setProgress(0);
    }, totalDuration);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [isAutoPlaying, hoveredIndex, maxIndex, slides.length]);

  const nextSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    setProgress(0);
  }, [maxIndex, slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length === 0) return;
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    setProgress(0);
  }, [maxIndex, slides.length]);

  const goToSlide = useCallback((index: number) => {
    if (slides.length === 0) return;
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    setProgress(0);
  }, [maxIndex, slides.length]);

  // Keyboard navigation - chỉ chạy khi có slides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (slides.length === 0) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, slides.length]);

  const handleButtonClick = (slide: LaboratorySlide) => {
    console.log("Xem thêm:", slide.title);
  };

  return (
    // SỬA Ở ĐÂY: Thêm class để căn giữa toàn bộ component
    <div className="flex items-center justify-center min-h-screen w-full">
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
      <div ref={sectionRef} className="w-full h-full overflow-hidden relative">
        {/* Background Image với Overlay */}
        

        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>

        {/* Laboratory Section - SỬA Ở ĐÂY: Thêm class để căn giữa nội dung */}
        <section className="w-full relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
            
            {/* Section Header với animation - ĐÃ SỬA LẠI ĐỂ CĂN GIỮA */}
            <div className="flex flex-col items-center justify-center text-center mb-8 lg:mb-12 space-y-4 w-full">
              {/* Title - Centered */}
              <div className={`transition-all duration-500 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
                <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {title}
                </span>
              </div>

              {/* Subtitle - Centered with max width */}
              <p className={`text-lg md:text-xl text-gray-600 max-w-3xl transition-all duration-500 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {subtitle}
              </p>
            </div>

            {/* Slider Container với hiệu ứng xuất hiện và căn giữa */}
            <div className={`relative w-full transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              {/* Navigation buttons - chỉ hiển thị khi có nhiều hơn 1 slide */}
              {slides.length > slidesPerView && (
                <>
                  <button
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className="absolute left-0 sm:left-2 lg:left-[-70px] top-1/2 -translate-y-1/2 z-20 
                             flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 
                             rounded-full bg-white/90 backdrop-blur-sm shadow-2xl 
                             hover:scale-110 hover:shadow-emerald-500/20 hover:bg-emerald-50
                             transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                             border-2 border-gray-100 hover:border-emerald-500"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className="absolute right-0 sm:right-2 lg:right-[-70px] top-1/2 -translate-y-1/2 z-20 
                             flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 
                             rounded-full bg-white/90 backdrop-blur-sm shadow-2xl 
                             hover:scale-110 hover:shadow-emerald-500/20 hover:bg-emerald-50
                             transition-all duration-300 cursor-pointer
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                             border-2 border-gray-100 hover:border-emerald-500"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Slider container với grid layout và căn giữa */}
              <div
                ref={sliderRef}
                className="overflow-hidden rounded-2xl"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => {
                  setIsAutoPlaying(true);
                  setHoveredIndex(null);
                }}
              >
                <div
                  className="flex transition-transform duration-700 ease-out h-80"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
                  }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id || index}
                      data-index={index}
                      ref={(el) => {
                        if (el && observerRef.current) {
                          observerRef.current.observe(el);
                        }
                      }}
                      className="flex-shrink-0 px-2"
                      style={{ width: `${100 / slidesPerView}%` }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <SlideItem
                        slide={slide}
                        isHovered={hoveredIndex === index}
                        onButtonClick={() => handleButtonClick(slide)}
                        isVisible={visibleSlides.has(index) || (index >= currentIndex && index < currentIndex + slidesPerView)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern dots with progress bar - căn giữa */}
              {slides.length > slidesPerView && (
                <div className={`flex justify-center items-center gap-3 mt-6 lg:mt-8 transition-all duration-500 delay-600 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      className={`relative transition-all duration-300 rounded-full cursor-pointer overflow-hidden
                        ${currentIndex === i
                          ? 'w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-500'
                          : 'w-1 h-1 bg-gray-300 hover:bg-gray-500 hover:scale-125'
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    >
                      {currentIndex === i && (
                        <div
                          className="absolute top-0 left-0 h-full bg-white/40 rounded-full transition-all duration-100 ease-linear"
                          style={{ width: `${progress}%` }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Certificates Section - Cũng căn giữa */}
        <section className="w-full relative z-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CertificatesSlide />
          </div>
        </section>
      </div>
    </div>
  );
}