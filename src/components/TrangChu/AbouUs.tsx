'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  Ruler,
  Anchor,
  Warehouse,
  Cog,
  Package,
  Ship,
  MapPin,
  Cpu,
  TrendingUp
} from 'lucide-react';

const AboutUs = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  const [imageError, setImageError] = useState<boolean[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Sample images với fallback images
  const images = [
    {
      url: 'https://hailongjsc.vn/wp-content/uploads/2025/03/Thiet-ke-chua-co-ten-1.png',
      fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    },
    {
      url: 'https://res.cloudinary.com/doooncpse/image/upload/v1762927458/DSC00932_u2tj0i.jpg',
      fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    },
    {
      url: 'https://res.cloudinary.com/doooncpse/image/upload/v1762956640/DSC00865_k025ic.jpg',
      fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    },
    {
      url: 'https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg',
      fallback: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop'
    }
  ];

  // Video URL trực tiếp từ Cloudinary
  const videoUrl = "https://res.cloudinary.com/doooncpse/video/upload/f_auto:video,q_auto/v1762927458/vecteezy_cutting-metal-plate-with-a-laser-cutting-metal_25102839_d8x1pv.mp4";

  // Khởi tạo trạng thái load và error với giá trị mặc định
  const initializeImageStates = useCallback(() => {
    return new Array(images.length).fill(false);
  }, [images.length]);

  // Sử dụng useState với initial state thay vì useEffect
  const [initializedStates] = useState(() => ({
    imagesLoaded: initializeImageStates(),
    imageError: initializeImageStates()
  }));

  // Auto slide
  useEffect(() => {
    if (!isVisible) return;

    const autoSlideTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000); // Chuyển ảnh mỗi 4 giây

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [isVisible, images.length]);

  // Animation visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Video optimization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Tối ưu hóa video để giảm lag
    video.playsInline = true;
    video.muted = true;
    video.preload = 'auto'; // Thử với auto thay vì metadata
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', '');
    video.setAttribute('autoplay', '');

    // Thêm event listeners
    video.addEventListener('loadeddata', handleVideoLoaded);
    video.addEventListener('error', handleVideoError);
    video.addEventListener('canplay', handleVideoCanPlay);

    // Thử tải video
    const loadVideo = () => {
      try {
        video.load();
        // Thử play video
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log('Autoplay prevented, waiting for user interaction:', error);
          });
        }
      } catch (error) {
        console.error('Error loading video:', error);
        setVideoError(true);
      }
    };

    loadVideo();

    return () => {
      // Dọn dẹp khi component unmount
      if (video) {
        video.removeEventListener('loadeddata', handleVideoLoaded);
        video.removeEventListener('error', handleVideoError);
        video.removeEventListener('canplay', handleVideoCanPlay);
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
    };
  }, []);

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully');
    setIsVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play');
    setIsVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = (e: any) => {
    console.error('Failed to load video:', e);
    setVideoError(true);
    setIsVideoLoaded(false);
  };

  const handleRetryVideo = () => {
    setVideoError(false);
    setIsVideoLoaded(false);
    
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch(error => {
        console.log('Retry autoplay prevented:', error);
      });
    }
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Xử lý khi ảnh load thành công
  const handleImageLoad = useCallback((index: number) => {
    setImagesLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  }, []);

  // Xử lý khi ảnh load lỗi
  const handleImageError = useCallback((index: number) => {
    setImageError(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  }, []);

  // Lấy URL ảnh hiện tại, nếu lỗi thì dùng fallback
  const getCurrentImageUrl = useCallback(() => {
    const currentImage = images[currentImageIndex];
    const isError = imageError[currentImageIndex] || initializedStates.imageError[currentImageIndex];
    return isError ? currentImage.fallback : currentImage.url;
  }, [currentImageIndex, imageError, initializedStates.imageError]);

  // Kiểm tra xem ảnh hiện tại đã load chưa
  const isCurrentImageLoaded = imagesLoaded[currentImageIndex] || initializedStates.imagesLoaded[currentImageIndex];

  // Port stats data - sử dụng dữ liệu từ translation
  const portStats = t.sections.about.portStats;

  // Features data - sử dụng dữ liệu từ translation
  const features = t.sections.about.features;

  // Icon mapping với Lucide React icons - ĐƠN GIẢN HÓA
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      ruler: Ruler,
      anchor: Anchor,
      warehouse: Warehouse,
      cog: Cog,
      package: Package,
      ship: Ship,
      mapPin: MapPin,
      cpu: Cpu,
      trendingUp: TrendingUp
    };

    return iconMap[iconName] || Cog; // Fallback to Cog icon if not found
  };

  return (
    <section className="min-h-screen w-full flex items-center py-12 px-4 relative overflow-hidden bg-gray-900">
      {/* Video Background với tối ưu hóa */}
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

      <div className="mt-14 max-w-7xl mx-auto w-full relative z-10">
        <div className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

          {/* Left Content */}
          <div className="space-y-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
            {/* Badge */}
            <div className={`inline-block transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}>
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {t.sections.about.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-2xl lg:text-4xl font-bold text-gray-900 leading-tight transition-all duration-600 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {t.sections.about.title.main}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t.sections.about.title.highlight}
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-3">
              <p className={`text-base lg:text-lg text-gray-700 leading-relaxed transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {t.sections.about.description.paragraph1}
              </p>

              <p className={`text-sm lg:text-base text-gray-600 leading-relaxed transition-all duration-600 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                {t.sections.about.description.paragraph2}
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-3 transition-all duration-600 delay-600 mb-0 pb-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                {t.common.details}
              </button>

              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white/80 backdrop-blur-sm">
                {t.common.contact}
              </button>
            </div>

            {/* Port Stats Grid */}
            <div className={`flex flex-wrap justify-center gap-1 lg:gap-2 pt-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}>
              {portStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex-1 min-w-[22%] max-w-[24%] text-center p-1 lg:p-2 rounded-lg bg-white/90 backdrop-blur-sm border border-white/20 group relative overflow-hidden"
                  style={{
                    transitionDelay: isVisible ? `${700 + index * 150}ms` : '0ms'
                  }}
                >
                  {/* Background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />

                  {/* Animated number */}
                  <div className="relative">
                    <div className="text-sm lg:text-base font-bold text-blue-600 mb-0 transition-all duration-300 group-hover:text-blue-700">
                      {stat.number}
                    </div>
                  </div>

                  {/* Label with smaller text */}
                  <div className="relative text-gray-700 font-medium text-[10px] lg:text-xs leading-tight min-h-[1.5rem] flex items-center justify-center px-1">
                    {stat.label}
                  </div>

                  {/* Sublabel with even smaller text */}
                  {stat.subLabel && (
                    <div className="relative text-[8px] lg:text-[9px] text-gray-600 leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300 px-1">
                      {stat.subLabel}
                    </div>
                  )}

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-200 group-hover:shadow-blue-100 group-hover:shadow-sm transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Graphics */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 transform transition-transform duration-500 hover:rotate-0 rotate-2 border border-white/20">
                <div className="relative bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl h-56 lg:h-72 overflow-hidden">
                  {/* Loading Placeholder */}
                  {!isCurrentImageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                      <div className="text-gray-400">
                        <svg className="w-12 h-12 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2v4m0 12v4m8-10h-4M6 12H2" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Image */}
                  <img
                    src={getCurrentImageUrl()}
                    alt={t.sections.about.imageAlt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isCurrentImageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    onLoad={() => handleImageLoad(currentImageIndex)}
                    onError={() => handleImageError(currentImageIndex)}
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Navigation Arrows */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <button
                      onClick={handlePrevImage}
                      className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm"
                      aria-label={t.common.previous}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      onClick={handleNextImage}
                      className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-sm"
                      aria-label={t.common.next}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentImageIndex
                          ? 'w-8 bg-white'
                          : 'w-1.5 bg-white/50 hover:bg-white/70'
                          }`}
                        aria-label={`${t.common.goToImage} ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Auto-play Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-6 grid grid-cols-1 gap-3">
              {features.map((feature, index) => {
                const FeatureIconComponent = getIconComponent(feature.icon);
                return (
                  <div
                    key={feature.title}
                    className={`bg-white/95 backdrop-blur-md rounded-lg p-3 shadow-md transition-all duration-500 border border-white/20 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                      }`}
                    style={{
                      transitionDelay: isVisible ? `${800 + index * 200}ms` : '0ms'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <FeatureIconComponent className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 text-sm">{feature.title}</h3>
                        <p className="text-xs text-gray-700">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;