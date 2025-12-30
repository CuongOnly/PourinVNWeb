// components/LayoutProject.jsx
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import TruckLoader from './Truckloader';
import {X} from 'lucide-react';

// Định nghĩa kiểu dữ liệu
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  location: string;
  features: string[];
}

interface Partner {
  id: number;
  name: string;
  logo: string;
  category: string;
}

const LayoutProject = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'partners'>('projects');
  const [activeProject, setActiveProject] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showDevelopmentNotice, setShowDevelopmentNotice] = useState(true);
    const [progress, setProgress] = useState(100);

  // Dữ liệu mẫu cho các dự án
  const projects: Project[] = [
    {
      id: 1,
      title: "EcoLiving Residence",
      category: "Kiến trúc bền vững",
      description: "Khu chung cư cao cấp ứng dụng công nghệ xanh và tiết kiệm năng lượng với thiết kế tối ưu hóa ánh sáng tự nhiên.",
      image: "/images/project-eco-living.jpg",
      year: "2024",
      location: "Hồ Chí Minh, Việt Nam",
      features: ["Năng lượng mặt trời", "Hệ thống xử lý nước tuần hoàn", "Vật liệu tái chế"]
    },
    {
      id: 2,
      title: "TechHub Innovation Center",
      category: "Không gian làm việc",
      description: "Trung tâm đổi mới sáng tạo với không gian làm việc linh hoạt và công nghệ hiện đại phục vụ cộng đồng startup.",
      image: "/images/project-techhub.jpg",
      year: "2023",
      location: "Hà Nội, Việt Nam",
      features: ["AI Integration", "IoT Infrastructure", "Collaborative Spaces"]
    },
    {
      id: 3,
      title: "OceanView Resort & Spa",
      category: "Du lịch nghỉ dưỡng",
      description: "Khu nghỉ dưỡng cao cấp ven biển kết hợp kiến trúc đương đại với văn hóa bản địa tạo trải nghiệm độc đáo.",
      image: "/images/project-oceanview.jpg",
      year: "2025",
      location: "Đà Nẵng, Việt Nam",
      features: ["Kiến trúc cảnh quan", "Bền vững môi trường", "Trải nghiệm văn hóa"]
    },
    {
      id: 4,
      title: "Smart City Masterplan",
      category: "Quy hoạch đô thị",
      description: "Đề án quy hoạch thành phố thông minh với hệ thống giao thông kết nối và hạ tầng công nghệ cao.",
      image: "/images/project-smart-city.jpg",
      year: "2024",
      location: "Bình Dương, Việt Nam",
      features: ["Giao thông thông minh", "Quản lý năng lượng", "Dữ liệu đô thị"]
    }
  ];

  // Dữ liệu mẫu cho các đối tác
  const partners: Partner[] = [
    { id: 1, name: "TechGlobal", logo: "/images/partner-techglobal.png", category: "Công nghệ" },
    { id: 2, name: "EcoBuild", logo: "/images/partner-ecobuild.png", category: "Xây dựng" },
    { id: 3, name: "DesignInnovate", logo: "/images/partner-designinnovate.png", category: "Thiết kế" },
    { id: 4, name: "UrbanSolutions", logo: "/images/partner-urbansolutions.png", category: "Quy hoạch" },
    { id: 5, name: "FutureLiving", logo: "/images/partner-futureliving.png", category: "Bất động sản" },
    { id: 6, name: "GreenTech", logo: "/images/partner-greentech.png", category: "Năng lượng" },
  ];
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

  // Tự động chuyển đổi dự án sau mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeTab === 'projects') {
        setActiveProject((prev) => (prev + 1) % projects.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab, projects.length]);

  // Xử lý cuộn ngang cho danh sách đối tác
  const scrollPartners = (direction: 'left' | 'right'): void => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
      <div className="max-w-7xl mx-auto">
        {/* Header với tabs */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dự Án & Đối Tác
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Khám phá những dự án tiêu biểu và các đối tác chiến lược cùng chúng tôi kiến tạo tương lai
          </p>

          <div className="inline-flex rounded-lg border border-slate-200 dark:border-slate-700 p-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              Dự Án
            </button>
            <button
              onClick={() => setActiveTab('partners')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${activeTab === 'partners'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
            >
              Đối Tác
            </button>
          </div>
        </div>

        {/* Nội dung theo tab */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Hình ảnh và thông tin dự án */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <Image
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {projects[activeProject].year}
                  </span>
                </div>
                <p className="text-slate-200 mb-4">{projects[activeProject].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].features.map((feature, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Danh sách dự án */}
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${index === activeProject
                      ? 'bg-white dark:bg-slate-800 shadow-lg border-l-4 border-blue-500'
                      : 'bg-slate-100/50 dark:bg-slate-800/50 hover:bg-white/70 dark:hover:bg-slate-700/70'
                    }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{project.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{project.category}</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{project.year}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'partners' && (
          <div className="space-y-8">
            {/* Controls */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Đối Tác Chiến Lược</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => scrollPartners('left')}
                  className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollPartners('right')}
                  className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-shadow"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Danh sách đối tác */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {partners.map(partner => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 w-64 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
                >
                  <div className="h-16 flex items-center justify-center mb-4">
                    <div className="w-32 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {partner.name}
                    </div>
                    {/* Trong thực tế, thay thế bằng: */}
                    {/* <Image src={partner.logo} alt={partner.name} width={128} height={48} className="object-contain" /> */}
                  </div>
                  <h4 className="text-lg font-semibold text-center text-slate-800 dark:text-white">{partner.name}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-center mt-1">{partner.category}</p>
                  <button className="w-full mt-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg text-slate-700 dark:text-slate-300 transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              ))}
            </div>

            {/* Thống kê */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-slate-600 dark:text-slate-300 mt-2">Dự án hoàn thành</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-blue-600">30+</div>
                <div className="text-slate-600 dark:text-slate-300 mt-2">Đối tác toàn cầu</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-blue-600">15</div>
                <div className="text-slate-600 dark:text-slate-300 mt-2">Quốc gia</div>
              </div>
              <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-slate-600 dark:text-slate-300 mt-2">Khách hàng hài lòng</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LayoutProject;