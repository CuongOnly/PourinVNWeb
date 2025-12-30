'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Tối ưu images với chất lượng thấp hơn và format webp
  const images = useMemo(() => [
    {
      url: 'https://hailongjsc.vn/wp-content/uploads/2025/03/Thiet-ke-chua-co-ten-1.png?w=800&h=500&fit=crop',
      placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+'
    },
    {
      url: 'https://res.cloudinary.com/doooncpse/image/upload/w_800,h_500,f_auto,q_auto/DSC00932_u2tj0i.jpg',
      placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2VmIi8+PC9zdmc+'
    },
    {
      url: 'https://res.cloudinary.com/doooncpse/image/upload/w_800,h_500,f_auto,q_auto/DSC00865_k025ic.jpg',
      placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZGYyZmYiLz48L3N2Zz4='
    },
    {
      url: 'https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg?w=800&h=500&fit=crop',
      placeholder: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmNGY3Ii8+PC9zdmc+'
    }
  ], []);

  // Định nghĩa handleNextImage trước khi sử dụng
  const handleNextImage = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      return newIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, images.length]);

  const handlePrevImage = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      return newIndex;
    });
    
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, images.length]);

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, [images]);

  // Auto slide với transition mượt mà
  useEffect(() => {
    if (!isVisible) return;

    const autoSlideTimer = setInterval(() => {
      handleNextImage();
    }, 5000);

    return () => {
      clearInterval(autoSlideTimer);
    };
  }, [isVisible, handleNextImage]);

  // Animation visibility
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Stats data
  const stats = useMemo(() => [
    { number: '50+', label: 'Dự án' },
    { number: '100+', label: 'Khách hàng' },
    { number: '20+', label: 'Năm kinh nghiệm' }
  ], []);

  // Features data
  const features = useMemo(() => [
    {
      icon: '💡',
      title: 'Sáng Tạo',
      description: 'Luôn đổi mới và sáng tạo trong mọi giải pháp'
    },
    {
      icon: '⚡',
      title: 'Hiệu Suất',
      description: 'Tối ưu hiệu suất và hiệu quả công việc'
    },
    {
      icon: '🤝',
      title: 'Đồng Hành',
      description: 'Đồng hành cùng sự phát triển của khách hàng'
    }
  ], []);

  return (
    <section className="min-h-[calc(100vh-70px)] flex items-center py-8 px-4 sm:px-6 lg:py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className={`inline-block transition-all duration-500 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <span className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200/50 backdrop-blur-sm">
                Về Chúng Tôi
              </span>
            </div>

            {/* Title */}
            <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Pourin{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Việt Nam
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-4">
              <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed transition-all duration-600 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Pourin Việt Nam tự hào là đơn vị tiên phong trong lĩnh vực cung cấp 
                giải pháp công nghệ và dịch vụ chất lượng cao.
              </p>

              <p className={`text-base lg:text-lg text-gray-500 leading-relaxed transition-all duration-600 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến 
                những giá trị tốt nhất cho khách hàng và đối tác.
              </p>
            </div>

            {/* Buttons */}
            <div className={`flex flex-wrap gap-4 transition-all duration-600 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl hover:shadow-blue-500/25">
                Khám Phá Ngay
              </button>
              
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm">
                Liên Hệ Tư Vấn
              </button>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 pt-6 transition-all duration-600 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center transform transition-all duration-300 hover:scale-105 group"
                  style={{
                    transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms'
                  }}
                >
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm lg:text-base group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Graphics */}
          <div className={`relative transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-4 transform transition-transform duration-500 hover:rotate-0 rotate-2 border border-white/20">
                <div className="relative bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl h-64 lg:h-80 xl:h-96 overflow-hidden">
                  {/* Image với animation */}
                  <div className="relative w-full h-full">
                    {images.map((image, index) => (
                      <img 
                        key={index}
                        src={image.url}
                        alt={`Pourin - Image ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                          index === currentImageIndex
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                        } ${
                          isTransitioning ? 'transition-transform duration-500' : ''
                        }`}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        style={{
                          background: image.placeholder
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                  
                  {/* Navigation Arrows */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
                    <button
                      onClick={handlePrevImage}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 hover:border-white/40"
                      aria-label="Previous image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={handleNextImage}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full p-3 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border border-white/20 hover:border-white/40"
                      aria-label="Next image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex gap-2 backdrop-blur-md bg-black/20 rounded-full px-3 py-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          index === currentImageIndex 
                            ? 'w-8 bg-white shadow-lg' 
                            : 'w-2 bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Auto-play Indicator */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 backdrop-blur-md bg-black/20 rounded-full px-3 py-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-white text-xs font-medium">Auto</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-float" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500/20 rounded-full animate-float delay-1000" />
            </div>

            {/* Features Section */}
            <div className="mt-8 grid grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${800 + index * 200}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;