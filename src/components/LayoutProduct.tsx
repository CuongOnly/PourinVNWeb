'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { productCategoriesData } from '../locales/data';
import TruckLoader from './Truckloader';
import {X} from 'lucide-react';

interface ProductItemProps {
  product: any;
  isHovered: boolean;
  index: number;
}

export default function LayoutProduct() {
  const { language } = useLanguage();
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleProducts, setVisibleProducts] = useState(new Set<number>());
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(true);
  const headerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const contentRightRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(100);
  const productCategories = productCategoriesData[language];

  // Sửa lỗi: Kiểm tra productCategories tồn tại
  const LayoutProductArray = productCategories?.flatMap((category, catIndex) =>
    category.products.map((product, prodIndex) => ({
      ...product,
      categoryId: category.id,
      categoryIndex: catIndex,
      isFirstInCategory: prodIndex === 0,
      categoryName: category.buttonText
    }))
  ) || [];

  useEffect(() => {
    if (showDevelopmentNotice) {
      const totalTime = 15000;
      const intervalTime = 100;
      const steps = totalTime / intervalTime;
      const decrement = 100 / steps;

      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev <= 0) {
            clearInterval(timer);
            setShowDevelopmentNotice(false);
            return 0;
          }
          return prev - decrement;
        });
      }, intervalTime);

      const autoCloseTimer = setTimeout(() => {
        setShowDevelopmentNotice(false);
        clearInterval(timer);
      }, totalTime);

      return () => {
        clearInterval(timer);
        clearTimeout(autoCloseTimer);
      };
    } else {
      setProgress(100);
    }
  }, [showDevelopmentNotice]);

  // Intersection Observer - ĐÃ SỬA: Thêm kiểm tra null
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

  // Header visibility observer - ĐÃ SỬA: Thêm kiểm tra null
  useEffect(() => {
    if (!headerRef.current) return;
    
    const headerObserver = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    headerObserver.observe(headerRef.current);
    return () => headerObserver.disconnect();
  }, []);

  useEffect(() => {
    setActiveCategory(0);
  }, [language]);

  const handleCategoryClick = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    const categoryElement = document.getElementById(`category-${categoryIndex}`);
    if (categoryElement && contentRightRef.current) {
      const containerTop = contentRightRef.current.getBoundingClientRect().top;
      const elementTop = categoryElement.getBoundingClientRect().top;
      const scrollTop = contentRightRef.current.scrollTop;
      const targetScrollTop = scrollTop + (elementTop - containerTop) - 20;
      contentRightRef.current.scrollTo({ top: targetScrollTop, behavior: 'smooth' });
    }
  };

  const getHeaderText = () => ({
    vi: { title: 'TẤT CẢ SẢN PHẨM', subtitle: 'Khám phá dòng sản phẩm chuyên nghiệp của chúng tôi', learnMore: 'Tìm hiểu thêm' },
    en: { title: 'ALL PRODUCTS', subtitle: 'Explore our professional product line,', learnMore: 'Learn More' },
    zh: { title: '所有产品', subtitle: '探索我们的专业产品系列，为您的工业需求提供完美解决方案', learnMore: '了解更多' }
  }[language]);

  const headerText = getHeaderText();

  // Product Item Component - ĐÃ SỬA: Thêm fallback cho image
  const ProductItem = ({ product, isHovered, index }: ProductItemProps) => {
    const isVisible = visibleProducts.has(index);
    
    // Fallback image nếu product.image không tồn tại
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      target.src = 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Product+Image';
    };

    return (
      <div className={`group bg-white shadow-lg overflow-hidden rounded-lg flex flex-col transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        ${isHovered ? 'shadow-2xl scale-105' : 'hover:shadow-xl'}`}>
        <div className="overflow-hidden relative w-full h-[220px]">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
            onError={handleImageError}
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {product.categoryName}
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-base font-semibold text-gray-800 h-12 overflow-hidden line-clamp-2">
            {product.title || 'Product Title'}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            {product.description || 'Product description goes here...'}
          </p>
          <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm font-medium">
            {headerText.learnMore}
          </button>
        </div>
      </div>
    );
  };

  // Callback ref - ĐÃ SỬA: Thêm kiểm tra nghiêm ngặt
  const observeRef = useCallback((el: HTMLDivElement | null) => {
    if (el && observerRef.current) {
      observerRef.current.observe(el);
    }
  }, []);

  // ĐÃ SỬA: Kiểm tra productCategories tồn tại trước khi render
  if (!productCategories) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex mt-12 bg-gradient-to-br from-gray-50 to-blue-50">
      {showDevelopmentNotice && (
        <div className="fixed top-6 right-6 max-w-md w-full z-50 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <button
              onClick={() => setShowDevelopmentNotice(false)}
              className="absolute top-4 right-4 text-black/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
              aria-label="Đóng thông báo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="scale-100">
                    <TruckLoader />
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-yellow-800 font-semibold">🚧Thông báo</h2>
                </div>
                <div className="text-center mb-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-2">
                    <p className="text-gray-600 text-sm mb-3">Nguyễn Đức Cường đang lập trình trang web này</p> 
                    <p>阮德强正在编程这个网站</p> 
                  </h4>
                </div>
                <p className="text-yellow-700 text-sm text-center mb-2">
                  Phần này đang được phát triển, vui lòng quay lại sau! 😊
                </p>
                <p className="text-yellow-600 text-center">
                  此部分功能正在开发中，请稍后再来！😊
                </p>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Tự động đóng sau</span>
                  <span>{Math.ceil(progress / 15)}s</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Đã hiểu - 明白了
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="lg:w-1/4 xl:w-1/5">
          <div className="sticky top-24 text-black bg-white rounded-lg shadow-lg p-6 mx-4 lg:mx-6 xl:mx-8">
            <h3 className="text-lg font-bold mb-4 border-b pb-2">
              {language === 'vi' ? 'DANH MỤC SẢN PHẨM' : language === 'en' ? 'PRODUCT CATEGORIES' : '产品类别'}
            </h3>
            <div className="space-y-2">
              {productCategories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(index)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeCategory === index ? 'bg-blue-600 text-white shadow-md scale-105' : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{category.buttonText}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === index ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    }`}>
                      {category.products?.length || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content - ĐÃ SỬA: Thêm overflow-hidden và sửa scroll */}
        <div 
          ref={contentRightRef} 
          className="lg:w-3/4 xl:w-4/5 h-[calc(100vh-140px)] overflow-y-auto scroll-smooth pr-4 lg:pr-6 xl:pr-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div ref={headerRef} className="text-center mb-8 space-y-4 px-4">
            <div className={`transition-all duration-500 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <span className="inline-block bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold">
                {headerText.title}
              </span>
            </div>
            <p className={`text-lg text-gray-600 transition-all duration-500 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {headerText.subtitle}
            </p>
          </div>

          <div className="space-y-12 text-gray-900 px-4 pb-8">
            {productCategories.map((category, categoryIndex) => (
              <div key={category.id} id={`category-${categoryIndex}`}>
                <div className="flex items-center justify-between mb-6 pb-2 border-b">
                  <h2 className="text-2xl font-bold">{category.buttonText}</h2>
                  <span className="text-sm bg-gray-600 text-white px-3 py-1 rounded-full">
                    {category.products?.length || 0} {language === 'vi' ? 'sản phẩm' : language === 'en' ? 'products' : '产品'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products?.map((product, productIndex) => {
                    const globalIndex = LayoutProductArray.findIndex(
                      (p) => p.categoryIndex === categoryIndex && p.title === product.title
                    );

                    return (
                      <div
                        key={`${category.id}-${productIndex}`}
                        data-index={globalIndex}
                        ref={observeRef}
                        onMouseEnter={() => setHoveredIndex(globalIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <ProductItem
                          product={product}
                          isHovered={hoveredIndex === globalIndex}
                          index={globalIndex}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}