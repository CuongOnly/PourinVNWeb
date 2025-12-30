"use client";
import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, TrendingUp, Users, Briefcase, X } from 'lucide-react';
import TruckLoader from './Truckloader';

// Định nghĩa kiểu dữ liệu
type NewsCategory = 'projects' | 'events' | 'market';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface NewsData {
  projects: NewsItem[];
  events: NewsItem[];
  market: NewsItem[];
}

interface Category {
  id: NewsCategory;
  name: string;
  icon: React.ComponentType<any>;
}

const LayoutNew = () => {
  const [activeTab, setActiveTab] = useState<NewsCategory>('projects');
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(true);
  const [progress, setProgress] = useState(100);

  // Tự động đóng thông báo sau 10 giây với progress bar
  useEffect(() => {
    if (showDevelopmentNotice) {
      const totalTime = 15000; // 10 giây
      const intervalTime = 100; // Cập nhật mỗi 100ms
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

  const categories: Category[] = [
    { id: 'projects', name: 'Dự Án Tiêu Biểu', icon: Briefcase },
    { id: 'events', name: 'Sự Kiện Nội Bộ', icon: Users },
    { id: 'market', name: 'Thị Trường', icon: TrendingUp }
  ];

  const newsData: NewsData = {
    projects: [
      {
        id: 1,
        title: 'Hoàn thành dự án tòa nhà văn phòng cao cấp Golden Tower',
        excerpt: 'Pourin tự hào hoàn thành dự án Golden Tower với tổng diện tích 45,000m² tại trung tâm thành phố...',
        date: '15/11/2025',
        image: 'https://hailongjsc.vn/wp-content/uploads/2025/03/Thiet-ke-chua-co-ten-1.png',
        category: 'Dự án lớn'
      },
      {
        id: 2,
        title: 'Khởi công khu đô thị sinh thái Green Valley',
        excerpt: 'Dự án Green Valley với quy mô 120 ha hứa hẹn mang đến không gian sống xanh cho cộng đồng...',
        date: '08/11/2025',
        image: 'https://hailongjsc.vn/wp-content/uploads/2025/03/Thiet-ke-chua-co-ten-1.png',
        category: 'Dự án mới'
      },
      {
        id: 3,
        title: 'Nâng cấp hệ thống hạ tầng khu công nghiệp Tân Phú',
        excerpt: 'Pourin đầu tư 200 tỷ đồng nâng cấp toàn diện hạ tầng kỹ thuật phục vụ sản xuất...',
        date: '02/11/2025',
        image: 'https://hailongjsc.vn/wp-content/uploads/2025/03/Thiet-ke-chua-co-ten-1.png',
        category: 'Nâng cấp'
      }
    ],
    events: [
      {
        id: 4,
        title: 'Lễ kỷ niệm 15 năm thành lập Pourin',
        excerpt: 'Buổi gala hoành tráng quy tụ 500 CBNV cùng đối tác chiến lược đã diễn ra thành công rực rỡ...',
        date: '20/11/2025',
        image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
        category: 'Sự kiện đặc biệt'
      },
      {
        id: 5,
        title: 'Hội thảo đào tạo kỹ năng lãnh đạo 2025',
        excerpt: 'Chương trình đào tạo chuyên sâu dành cho 100 cán bộ quản lý cấp trung và cao cấp...',
        date: '12/11/2025',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
        category: 'Đào tạo'
      },
      {
        id: 6,
        title: 'Teambuilding mùa hè 2025 tại Đà Lạt',
        excerpt: 'Hơn 300 CBNV Pourin đã có những ngày nghỉ dưỡng đầy ý nghĩa tại thành phố ngàn hoa...',
        date: '05/11/2025',
        image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&q=80',
        category: 'Team building'
      }
    ],
    market: [
      {
        id: 7,
        title: 'Thị trường bất động sản Q4/2025: Cơ hội phục hồi mạnh mẽ',
        excerpt: 'Các chuyên gia dự báo thị trường BĐS sẽ tăng trưởng 15-20% trong quý cuối năm nhờ các chính sách mới...',
        date: '18/11/2025',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
        category: 'Phân tích'
      },
      {
        id: 8,
        title: 'Xu hướng xây dựng bền vững dẫn dắt ngành 2025',
        excerpt: 'Công nghệ xanh và vật liệu thân thiện môi trường đang trở thành yếu tố quyết định...',
        date: '10/11/2025',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        category: 'Xu hướng'
      },
      {
        id: 9,
        title: 'Chính sách tín dụng mới hỗ trợ doanh nghiệp xây dựng',
        excerpt: 'Ngân hàng Nhà nước công bố gói tín dụng ưu đãi 50,000 tỷ đồng cho lĩnh vực xây dựng...',
        date: '01/11/2025',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        category: 'Chính sách'
      }
    ]
  };

  const currentNews = newsData[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Thiết kế mới với TruckLoader lớn trên cùng */}
      {showDevelopmentNotice && (
        <div className="fixed top-6 right-6 max-w-md w-full z-50 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
              <button
                onClick={() => setShowDevelopmentNotice(false)}
                className="absolute top-4 right-4 text-black/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/20"
                aria-label="Đóng thông báo"
              >
                <X className="w-5 h-5" />
              </button>

            {/* Content với TruckLoader lớn */}
            <div className="p-6">
              {/* TruckLoader lớn ở trên cùng */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="scale-100">
                    <TruckLoader />
                  </div>
                </div>
              </div>

              

              {/* Message Box */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h2 className="text-yellow-800 font-semibold">🚧Thông báo</h2>
                </div>
                {/* Developer Info */}
              <div className="text-center mb-6">
                <h4 className="font-bold text-gray-900 text-lg mb-2">
                 <p className="text-gray-600 text-sm mb-3">Nguyễn Đức Cường đang lập trình trang web này</p> 
                 <p>阮德强正在编程这个网站</p> 
                </h4>
              </div>
                <p className="text-yellow-700 text-sm  text-center mb-2">
                  Phần này đang được phát triển, vui lòng quay lại sau! 😊
                </p>
                <p className="text-yellow-600 text-center">
                  此部分功能正在开发中，请稍后再来！😊
                </p>
              </div>

              {/* Progress bar */}
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

              {/* Action button */}
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

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Tin Tức & Dự Án
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về dự án, sự kiện và thị trường từ Pourin
            </p>
          </div>
        </div>
      </div>

      {/* Rest of your existing content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                  }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <img
                  src={currentNews[0].image}
                  alt={currentNews[0].title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {currentNews[0].category}
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{currentNews[0].date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {currentNews[0].title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {currentNews[0].excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold text-lg group-hover:gap-4 transition-all">
                  Đọc thêm
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentNews.slice(1).map((news: NewsItem, index: number) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {news.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                  {news.excerpt}
                </p>
                <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                  Chi tiết
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Xem thêm tin tức
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Đăng ký nhận tin tức
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Cập nhật những thông tin mới nhất từ Pourin qua email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNew;