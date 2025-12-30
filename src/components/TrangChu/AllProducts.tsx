'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { productCategoriesData } from '../../locales/data';

interface ProductItemProps {
  product: any;
  isHovered: boolean;
  index: number;
}

export default function AllProducts() {
  const { language } = useLanguage();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState(new Set<number>());

  const headerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  // Get current language product categories
  const productCategories = productCategoriesData[language];

  // Create array of all products with category info
  const allProducts = productCategories.flatMap((category, catIndex) =>
    category.products.map((product, prodIndex) => ({
      ...product,
      categoryId: category.id,
      categoryIndex: catIndex,
      isFirstInCategory: prodIndex === 0,
      categoryName: category.buttonText
    }))
  );

  // Slides per view based on screen size
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Section visibility observer
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Intersection Observer for product items visibility
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const indexAttr = entry.target.getAttribute('data-index');
          if (indexAttr) {
            const index = parseInt(indexAttr);
            if (entry.isIntersecting) {
              setVisibleProducts((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Header visibility observer
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => {
      headerObserver.disconnect();
    };
  }, []);

  // Auto scroll slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoPlaying) {
        setCurrentIndex((prevIndex) => {
          const maxIndex = allProducts.length - slidesPerView;
          const nextIndex = prevIndex >= maxIndex ? 0 : prevIndex + 1;
          const currentProduct = allProducts[nextIndex];
          if (currentProduct) {
            setActiveCategory(currentProduct.categoryIndex);
          }
          return nextIndex;
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [allProducts.length, isAutoPlaying, slidesPerView]);

  // Reset currentIndex when language changes
  useEffect(() => {
    setCurrentIndex(0);
    setActiveCategory(0);
  }, [language]);

  // Handle category button click
  const handleCategoryClick = (categoryIndex: number) => {
    const firstProductIndex = allProducts.findIndex(
      p => p.categoryIndex === categoryIndex
    );
    if (firstProductIndex !== -1) {
      setCurrentIndex(firstProductIndex);
      setActiveCategory(categoryIndex);
    }
  };

  // Get header text based on language
  const getHeaderText = () => {
    switch (language) {
      case 'vi':
        return {
          title: 'TẤT CẢ SẢN PHẨM',
          subtitle: 'Khám phá dòng sản phẩm chuyên nghiệp của chúng tôi',
          learnMore: 'Tìm hiểu thêm'
        };
      case 'en':
        return {
          title: 'ALL PRODUCTS',
          subtitle: 'Explore our professional product line,',
          learnMore: 'Learn More'
        };
      case 'zh':
        return {
          title: '所有产品',
          subtitle: '探索我们的专业产品系列，为您的工业需求提供完美解决方案',
          learnMore: '了解更多'
        };
      default:
        return {
          title: 'ALL PRODUCTS',
          subtitle: 'Explore our professional product line,',
          learnMore: 'Learn More'
        };
    }
  };

  const headerText = getHeaderText();

  // Product Item Component - GIỮ NGUYÊN HIỆU ỨNG HOVER
  const ProductItem = ({ product, isHovered, index }: {
    product: any;
    isHovered: boolean;
    index: number
  }) => {
    const isVisible = visibleProducts.has(index) ||
      (index >= currentIndex && index < currentIndex + slidesPerView);

    return (
      <div
        className={`group bg-white shadow-lg overflow-hidden rounded-lg flex flex-col h-[380px] sm:h-[390px] transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${isHovered ? 'shadow-2xl scale-105' : 'hover:shadow-xl'}`}
      >
        {/* Image Container */}
        <div className="overflow-hidden relative w-full h-[220px] flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {product.categoryName}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-base font-semibold text-gray-800 h-[24px] overflow-hidden leading-6">
            <span className="line-clamp-2">{product.title}</span>
          </h3>

          {/* Description */}
          <p className="mt-2 text-sm text-gray-600 overflow-hidden leading-[21px]">
            <span className="line-clamp-4">{product.description}</span>
          </p>

          {/* Button */}
          <button className="mt-auto w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium">
            {headerText.learnMore}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen w-full flex flex-col items-center justify-center mt-12 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative"
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

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* Header với title bên trái và subtitle ở giữa */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-1 lg:mb-2 space-y-4 lg:space-y-0"
        >
          {/* Title - Bên trái */}
          <div className={`transition-all duration-500 delay-100 ${
            isSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <span className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
              {headerText.title}
            </span>
          </div>

          {/* Subtitle - Ở giữa */}
          <p className={`text-lg text-gray-600 max-w-2xl text-center transition-all duration-500 delay-300 ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {headerText.subtitle}
          </p>

          {/* Empty div để cân bằng layout */}
          <div className="w-32"></div>
        </div>

        {/* Category Buttons - GIỮ NGUYÊN STYLE NHƯNG THÊM HIỆU ỨNG XUẤT HIỆN */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-2 sm:mb-4 transition-all duration-700 delay-200 ${
          isSectionVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          {productCategories.map((category, index) => {
            const categoryProducts = allProducts.filter(p => p.categoryIndex === index);
            const firstProductIndex = allProducts.findIndex(p => p.categoryIndex === index);
            const isHighlighted = currentIndex >= firstProductIndex &&
              currentIndex < firstProductIndex + categoryProducts.length;

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(index)}
                className={`w-28 h-8 rounded-lg text-xs sm:text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                  isHighlighted
                    ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-xl transform ring-2 ring-blue-300'
                    : activeCategory === index
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-300 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                {category.buttonText}
              </button>
            );
          })}
        </div>

        {/* Products Slider - THÊM HIỆU ỨNG XUẤT HIỆN */}
        <div
          ref={sliderRef}
          className={`overflow-hidden rounded-2xl transition-all duration-700 delay-400 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            setIsAutoPlaying(true);
            setHoveredIndex(null);
          }}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {allProducts.map((product, index) => (
              <div
                key={`${product.categoryId}-${index}`}
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
                <ProductItem
                  product={product}
                  isHovered={hoveredIndex === index}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators - THÊM HIỆU ỨNG XUẤT HIỆN */}
        <div className={`flex justify-center mt-6 gap-2 flex-wrap transition-all duration-500 delay-600 ${
          isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          {allProducts.map((product, idx) => (
            <button
              key={`indicator-${idx}`}
              onClick={() => {
                setCurrentIndex(idx);
                setActiveCategory(product.categoryIndex);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-8 bg-blue-600'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}