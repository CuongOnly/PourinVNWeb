export type Language = 'vi' | 'en' | 'zh';

export interface TranslationData {
  common: {
    welcome: string;
    scroll: string;
    section: string;
    navigateWith: string;
    close: string;
    settings: string;
    loading: string;
    details: string;
    contact: string;
    previous: string;
    next: string;
    goToImage: string;
    viewMore: string;
    learnMore: string;
    readMore: string;
    development: string;
  };
  navigation: {
    welcome: string;
    about: string;
    products: string;
    technology: string;
    news: string;
    timeline: string;
    partners: string;
    hr: string;
  };
  settings: {
    title: string;
    scrollBehavior: string;
    fullscreen: string;
    smooth: string;
    deviceInfo: string;
    mobileDevice: string;
    desktopDevice: string;
    smoothScrollOnly: string;
    toggleScrollModes: string;
    instructions: string;
    howToNavigate: string;
    fullscreenInstructions: string;
    smoothInstructions: string;
    mobileInstructions: string;
  };
  sections: {
    section1: {
      title: string;
      subtitle: string;
      mobileNote: string;
    };
    timeline: {
      title: string;
      overview: {
        description: string;
      };
      milestones: {
        milestone1: {
          title: string;
          description: string;
        };
        milestone2: {
          title: string;
          description: string;
        };
        milestone3: {
          title: string;
          description: string;
        };
        milestone4: {
          title: string;
          description: string;
        };
        milestone5: {
          title: string;
          description: string;
        };
        milestone6: {
          title: string;
          description: string;
        };
        milestone7: {
          title: string;
          description: string;
        };
      };
    };
    about: {
      badge: string;
      title: {
        main: string;
        highlight: string;
      };
      description: {
        paragraph1: string;
        paragraph2: string;
      };
      portStats: Array<{
        icon: string;
        number: string;
        label: string;
        subLabel?: string;
      }>;
      features: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
      imageAlt: string;
    };
    products: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
        icon: string;
      }>;
    };
    technology: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        icon: string;
      }>;
    };
    news: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        date: string;
        description: string;
        category: string;
      }>;
    };
    partners: {
      title: string;
      subtitle: string;
      items: Array<{
        name: string;
        description: string;
        country: string;
      }>;
    };
    contact: {
      title: string;
      subtitle: string;
      company: {
        fullName: string;
        shortName: string;
      };
      address: {
        title: string;
        lines: string[];
      };
      status: string;
      contact: {
        title: string;
        phone: string;
        hotline: string;
        fax: string;
      };
      email: {
        title: string;
        primary: string;
        secondary: string;
      };
      form: {
        title: string;
        description: string;
        message: {
          label: string;
          placeholder: string;
        };
        name: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        phone: {
          label: string;
          placeholder: string;
        };
        submit: string;
      };
      copyright: string;
    };
  };
}

export interface MenuItem {
  id: number;
  title: string;
  path: string;
}

export const translations: Record<Language, TranslationData> = {
  vi: {
    common: {
      welcome: 'Chào mừng',
      scroll: 'Cuộn',
      section: 'Phần',
      navigateWith: 'Điều hướng bằng',
      close: 'Đóng',
      settings: 'Cài đặt',
      loading: 'Đang tải...',
      details: 'Chi Tiết',
      contact: 'Liên Hệ',
      previous: 'Ảnh trước',
      next: 'Ảnh sau',
      goToImage: 'Đến ảnh',
      viewMore: 'Xem thêm',
      learnMore: 'Tìm hiểu thêm',
      readMore: 'Đọc thêm',
      development: "",
    },
    navigation: {
      welcome: 'Trang chủ',
      about: 'Giới thiệu',
      products: 'Sản phẩm',
      technology: 'Công nghệ',
      news: 'Tin tức',
      timeline: 'Lịch sử phát triển',
      partners: 'Đối tác',
      hr: 'Tuyển dụng'
    },
    settings: {
      title: 'Cài đặt Cuộn',
      scrollBehavior: 'Hành vi cuộn',
      fullscreen: 'Toàn màn hình',
      smooth: 'Mượt mà',
      deviceInfo: 'Thông tin thiết bị',
      mobileDevice: 'Thiết bị di động',
      desktopDevice: 'Máy tính để bàn',
      smoothScrollOnly: 'Chỉ cuộn mượt mà',
      toggleScrollModes: 'Chuyển đổi chế độ cuộn',
      instructions: 'Hướng dẫn',
      howToNavigate: 'Cách điều hướng:',
      fullscreenInstructions: 'Chế độ toàn màn hình: Phím mũi tên, Page Up/Down, hoặc nhấp chấm điều hướng',
      smoothInstructions: 'Chế độ mượt mà: Cuộn chuột thông thường',
      mobileInstructions: 'Di động: Vuốt chạm hoặc cuộn thông thường'
    },
    sections: {
      section1: {
        title: 'Chào mừng đến với Pourin',
        subtitle: 'Nhà sản xuất thiết bị công nghiệp hàng đầu Việt Nam',
        mobileNote: '📱 Chế độ di động - Đã bật cuộn mượt mà'
      },
      timeline: {
        title: 'LỊCH SỬ PHÁT TRIỂN',
        overview: {
          description: 'Từ một doanh nghiệp khởi nghiệp năm 2007 với quy mô nhỏ, công ty đã không ngừng mở rộng qua 5 giai đoạn xây dựng nhà máy trong gần 20 năm, đạt diện tích sản xuất gần 100.000 m², đội ngũ hơn 700 nhân viên và chính thức niêm yết cổ phiếu năm 2023, đánh dấu bước phát triển vượt bậc thành một doanh nghiệp sản xuất quy mô lớn.'
        },
        milestones: {
          milestone1: {
            title: 'Thành lập công ty',
            description: 'Khởi đầu hành trình từ một doanh nghiệp khởi nghiệp'
          },
          milestone2: {
            title: 'Mở rộng quy mô',
            description: 'Diện tích nhà xưởng: 11.000 m² • Nhân viên: 200 người'
          },
          milestone3: {
            title: 'Chuyển sang nhà máy mới',
            description: 'Diện tích nhà xưởng: 14.000 m² • Nhân viên: 300 người'
          },
          milestone4: {
            title: 'Giai đoạn 2 đi vào hoạt động',
            description: 'Diện tích nhà xưởng: 26.600 m² • Nhân viên: 400 người'
          },
          milestone5: {
            title: 'Giai đoạn 3 đi vào hoạt động',
            description: 'Diện tích nhà xưởng: 49.000 m² • Nhân viên: 550 người'
          },
          milestone6: {
            title: 'Niêm yết chứng khoán',
            description: 'Niêm yết cổ phiếu trên Sở Giao dịch Chứng khoán Thâm Quyến'
          },
          milestone7: {
            title: 'Mở rộng giai đoạn 4 & 5',
            description: 'Diện tích nhà xưởng: 99.600 m² • Nhân viên: 700 người'
          }
        }
      },
      about: {
        badge: 'Về Chúng Tôi',
        title: {
          main: 'Pourin Special Welding',
          highlight: 'Việt Nam'
        },
        description: {
          paragraph1: 'Pourin Special Welding Vietnam Manufacturing Co., Ltd. tọa lạc tại Khu Công nghiệp Nam Đình Vũ, Thành phố Hải Phòng, mang lại khả năng tiếp cận thuận tiện cho cả giao thông đường biển và đường bộ. Dự án có tổng vốn đầu tư 65 triệu USD.',
          paragraph2: 'Tổng diện tích là 150.000 mét vuông, tổng diện tích nhà xưởng là 90.000 mét vuông. Với 1,5 km chiều dài cầu cảng và 650,000 m² diện tích bến, công ty có cơ sở vật chất phục vụ sản xuất và logistics vượt trội. Sản phẩm chính của công ty bao gồm linh kiện sản xuất bồi đắp, HRSG, nồi hơi và thiết bị phụ trợ, bình áp lực kim loại và các thiết bị công nghiệp khác.'
        },
        portStats: [
          {
            icon: 'FaAnchor',
            number: '-9,7 m',
            label: 'Độ sâu bên cạnh bến',
            subLabel: 'Depth alongside berth'
          },
          {
            icon: 'FaCogs',
            number: '10 cranes',
            label: 'STS - Mobile',
            subLabel: 'Upto 125 tons lifting capacity'
          },
          {
            icon: 'FaBoxes',
            number: '1,200,000 TEUs',
            label: '3,000,000 tấn hàng hóa',
            subLabel: 'Annual Throughput'
          },
          {
            icon: 'FaShip',
            number: '48,000 DWT',
            label: 'Kích thước tàu tối đa'
          }
        ],
        features: [
          {
            icon: 'FaMapMarkerAlt',
            title: 'Vị trí chiến lược',
            description: 'Khu CN Nam Đình Vũ, Hải Phòng'
          },
          {
            icon: 'FaRobot',
            title: 'Công nghệ tiên tiến',
            description: 'Máy hàn phủ 180° và 360°'
          },
          {
            icon: 'FaChartLine',
            title: 'Doanh thu dự kiến',
            description: '50-90 triệu USD/năm'
          }
        ],
        imageAlt: 'Nhà máy Pourin Special Welding Vietnam'
      },
      products: {
        title: 'SẢN PHẨM CHÍNH',
        subtitle: 'Các sản phẩm công nghệ cao chất lượng quốc tế',
        items: [
          {
            title: 'Linh kiện sản xuất bồi đắp',
            description: 'Các bộ phận sản xuất bằng công nghệ additive manufacturing tiên tiến',
            features: ['Độ chính xác cao', 'Vật liệu đa dạng', 'Ứng dụng rộng rãi'],
            icon: 'FaCube'
          },
          {
            title: 'HRSG & Nồi hơi',
            description: 'Hệ thống thu hồi nhiệt và nồi hơi công nghiệp',
            features: ['Hiệu suất cao', 'Tiết kiệm năng lượng', 'Độ bền vượt trội'],
            icon: 'FaFire'
          },
          {
            title: 'Bình áp lực kim loại',
            description: 'Thiết bị áp lực cho các ứng dụng công nghiệp',
            features: ['An toàn tuyệt đối', 'Tuân thủ tiêu chuẩn', 'Thiết kế tối ưu'],
            icon: 'FaTachometerAlt'
          }
        ]
      },
      technology: {
        title: 'CÔNG NGHỆ TIÊN TIẾN',
        subtitle: 'Áp dụng những công nghệ mới nhất trong sản xuất',
        items: [
          {
            title: 'Hàn phủ tự động',
            description: 'Công nghệ hàn phủ 180° và 360° tự động hóa hoàn toàn',
            icon: 'FaRobot'
          },
          {
            title: 'Kiểm soát chất lượng',
            description: 'Hệ thống kiểm tra và đảm bảo chất lượng tiên tiến',
            icon: 'FaCheckCircle'
          },
          {
            title: 'Sản xuất thông minh',
            description: 'Áp dụng IoT và AI trong quy trình sản xuất',
            icon: 'FaCogs'
          }
        ]
      },
      news: {
        title: 'TIN TỨC & SỰ KIỆN',
        subtitle: 'Cập nhật những thông tin mới nhất về công ty',
        items: [
          {
            title: 'Khánh thành nhà máy mới',
            date: '15/03/2024',
            description: 'Pourin chính thức đưa vào vận hành nhà máy sản xuất mới tại Hải Phòng',
            category: 'Sự kiện'
          },
          {
            title: 'Đạt chứng chỉ chất lượng quốc tế',
            date: '28/02/2024',
            description: 'Công ty được cấp chứng chỉ ISO 9001:2015 cho hệ thống quản lý chất lượng',
            category: 'Thành tựu'
          },
          {
            title: 'Hợp tác chiến lược với đối tác Nhật Bản',
            date: '10/01/2024',
            description: 'Ký kết hợp tác chiến lược với tập đoàn công nghiệp hàng đầu Nhật Bản',
            category: 'Hợp tác'
          }
        ]
      },
      partners: {
        title: 'ĐỐI TÁC CHIẾN LƯỢC',
        subtitle: 'Hợp tác cùng những tập đoàn hàng đầu thế giới',
        items: [
          {
            name: 'Mitsubishi Heavy Industries',
            description: 'Tập đoàn công nghiệp hàng đầu Nhật Bản',
            country: 'Nhật Bản'
          },
          {
            name: 'Siemens Energy',
            description: 'Nhà cung cấp giải pháp năng lượng toàn cầu',
            country: 'Đức'
          },
          {
            name: 'GE Renewable Energy',
            description: 'Chuyên về giải pháp năng lượng tái tạo',
            country: 'Mỹ'
          }
        ]
      },
      contact: {
        title: 'LIÊN HỆ CHÚNG TÔI',
        subtitle: 'Kết nối với chúng tôi để được tư vấn và hỗ trợ',
        company: {
          fullName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED',
          shortName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
        },
        address: {
          title: 'Địa chỉ',
          lines: [
            'Lô CN6, CN7-01, Khu phi thuế quan và khu công nghiệp Nam Đình Vũ (Khu 1)',
            'Thuộc Khu kinh tế Đình Vũ – Cát Hải',
            'Phường Đông Hải 2, Quận Hải An',
            'Thành phố Hải Phòng, Việt Nam',
            'Nguyễn Đức Cường'
          ]
        },
        status: 'Đang hoạt động',
        contact: {
          title: 'Liên hệ',
          phone: 'Tel: +84 123 456 789',
          hotline: 'Hotline: +84 987 654 321',
          fax: 'Fax: +84 123 456 788'
        },
        email: {
          title: 'Email',
          primary: 'info@pourinvietnam.com',
          secondary: 'contact@pourinvietnam.com'
        },
        form: {
          title: 'Để lại lời nhắn cho chúng tôi',
          description: 'Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.',
          message: {
            label: 'Nội dung tin nhắn',
            placeholder: 'Nhập nội dung tin nhắn của bạn...'
          },
          name: {
            label: 'Họ và tên',
            placeholder: 'Nhập họ và tên'
          },
          email: {
            label: 'Địa chỉ email',
            placeholder: 'email@example.com'
          },
          phone: {
            label: 'Số điện thoại',
            placeholder: 'Nhập số điện thoại'
          },
          submit: 'Gửi tin nhắn'
        },
        copyright: 'Copyright©2024 POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED | Tên viết tắt: POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
      }
    }
  },
  en: {
    common: {
      welcome: 'Welcome',
      scroll: 'Scroll',
      section: 'Section',
      navigateWith: 'Navigate with',
      close: 'Close',
      settings: 'Settings',
      loading: 'Loading...',
      details: 'Details',
      contact: 'Contact',
      previous: 'Previous image',
      next: 'Next image',
      goToImage: 'Go to image',
      viewMore: 'View More',
      learnMore: 'Learn More',
      readMore: 'Read More',
      development: "",
    },
    navigation: {
      welcome: 'Welcome',
      about: 'About',
      products: 'Products',
      technology: 'Technology',
      news: 'News',
      timeline: 'Development History',
      partners: 'Partners',
      hr: 'Recruitment'
    },
    settings: {
      title: 'Scroll Settings',
      scrollBehavior: 'Scroll Behavior',
      fullscreen: 'Fullscreen',
      smooth: 'Smooth',
      deviceInfo: 'Device Information',
      mobileDevice: 'Mobile Device',
      desktopDevice: 'Desktop Device',
      smoothScrollOnly: 'Smooth scroll only',
      toggleScrollModes: 'Toggle scroll modes',
      instructions: 'Instructions',
      howToNavigate: 'How to navigate:',
      fullscreenInstructions: 'Fullscreen mode: Arrow keys, Page Up/Down, or click navigation dots',
      smoothInstructions: 'Smooth mode: Regular mouse wheel scrolling',
      mobileInstructions: 'Mobile: Touch swipe or regular scroll'
    },
    sections: {
      section1: {
        title: 'Welcome to Pourin',
        subtitle: 'Leading Industrial Equipment Manufacturer in Vietnam',
        mobileNote: '📱 Mobile mode - Smooth scroll enabled'
      },
      timeline: {
        title: 'DEVELOPMENT HISTORY',
        overview: {
          description: 'From a small startup in 2007, the company has continuously expanded through 5 factory construction phases over nearly 20 years, achieving nearly 100,000 m² of production area, a team of over 700 employees, and officially listed shares in 2023, marking a breakthrough development into a large-scale manufacturing enterprise.'
        },
        milestones: {
          milestone1: {
            title: 'Company Establishment',
            description: 'Started the journey from a startup business'
          },
          milestone2: {
            title: 'Scale Expansion',
            description: 'Factory area: 11,000 m² • Employees: 200 people'
          },
          milestone3: {
            title: 'Moved to New Factory',
            description: 'Factory area: 14,000 m² • Employees: 300 people'
          },
          milestone4: {
            title: 'Phase 2 Operational',
            description: 'Factory area: 26,600 m² • Employees: 400 people'
          },
          milestone5: {
            title: 'Phase 3 Operational',
            description: 'Factory area: 49,000 m² • Employees: 550 people'
          },
          milestone6: {
            title: 'Stock Exchange Listing',
            description: 'Listed shares on Shenzhen Stock Exchange'
          },
          milestone7: {
            title: 'Phase 4 & 5 Expansion',
            description: 'Factory area: 99,600 m² • Employees: 700 people'
          }
        }
      },
      about: {
        badge: 'About Us',
        title: {
          main: 'Pourin Special Welding',
          highlight: 'Vietnam'
        },
        description: {
          paragraph1: 'Pourin Vietnam facility is is located in Haiphong City, Nan Dinh Vu Industrial Zone, only 3km away from the international port. It covers an area of about 150,000 ㎡, with about 100,000 ㎡ of workshop. \nThe facility is equipped with Spiral finning machines & bend system, laser cutting equipment, CNC presses, plate rolling, CNC machining, 180 degree and 360 degree automatic welding equipment, membrane wall assembly automatic welding equipment, TIG and MIG welding, DR inspection equipment, heat treatment equipment, surface pretreatment equipment, painting production system, etc. ',
          paragraph2: 'Main products: \nBoiler pressure parts (including Cladding and HRSG) with 1,000,000 man-hours; \nPressure vessels and heat exchangers with 300,000 man-hours; \nHigh-end steel structures with 300,000 man-hours.'
        },
        portStats: [
          {
            icon: 'FaAnchor',
            number: '-9.7 m',
            label: 'Depth alongside berth'
          },
          {
            icon: 'FaCogs',
            number: '10 cranes',
            label: 'STS - Mobile',
            subLabel: 'Upto 125 tons lifting capacity'
          },
          {
            icon: 'FaBoxes',
            number: '1,200,000 TEUs',
            label: '3,000,000 tons of cargo',
            subLabel: 'Annual Throughput'
          },
          {
            icon: 'FaShip',
            number: '48,000 DWT',
            label: 'Max Vessel Size'
          }
        ],
        features: [
          {
            icon: 'FaMapMarkerAlt',
            title: 'Strategic Location',
            description: 'Nam Dinh Vu IP, Haiphong'
          },
          {
            icon: 'FaRobot',
            title: 'Advanced Technology',
            description: '180° & 360° overlay welding'
          },
          {
            icon: 'FaChartLine',
            title: 'Expected Revenue',
            description: '50-90 million USD/year'
          }
        ],
        imageAlt: 'Pourin Special Welding Vietnam Factory'
      },
      products: {
        title: 'MAIN PRODUCTS',
        subtitle: 'High-tech products with international quality standards',
        items: [
          {
            title: 'Additive Manufacturing Components',
            description: 'Parts manufactured using advanced additive manufacturing technology',
            features: ['High precision', 'Diverse materials', 'Wide applications'],
            icon: 'FaCube'
          },
          {
            title: 'HRSGs & Boilers',
            description: 'Heat recovery systems and industrial boilers',
            features: ['High efficiency', 'Energy saving', 'Superior durability'],
            icon: 'FaFire'
          },
          {
            title: 'Metal Pressure Vessels',
            description: 'Pressure equipment for industrial applications',
            features: ['Absolute safety', 'Standard compliance', 'Optimized design'],
            icon: 'FaTachometerAlt'
          }
        ]
      },
      technology: {
        title: 'ADVANCED TECHNOLOGY',
        subtitle: 'Applying the latest technologies in manufacturing',
        items: [
          {
            title: 'Automatic Overlay Welding',
            description: 'Fully automated 180° and 360° overlay welding technology',
            icon: 'FaRobot'
          },
          {
            title: 'Quality Control',
            description: 'Advanced inspection and quality assurance systems',
            icon: 'FaCheckCircle'
          },
          {
            title: 'Smart Manufacturing',
            description: 'Applying IoT and AI in production processes',
            icon: 'FaCogs'
          }
        ]
      },
      news: {
        title: 'NEWS & EVENTS',
        subtitle: 'Latest updates about the company',
        items: [
          {
            title: 'New Factory Inauguration',
            date: '03/15/2024',
            description: 'Pourin officially operates new manufacturing plant in Haiphong',
            category: 'Event'
          },
          {
            title: 'International Quality Certification',
            date: '02/28/2024',
            description: 'Company awarded ISO 9001:2015 certificate for quality management system',
            category: 'Achievement'
          },
          {
            title: 'Strategic Partnership with Japanese Partner',
            date: '01/10/2024',
            description: 'Signed strategic cooperation with leading Japanese industrial group',
            category: 'Partnership'
          }
        ]
      },
      partners: {
        title: 'STRATEGIC PARTNERS',
        subtitle: 'Cooperating with world-leading corporations',
        items: [
          {
            name: 'Mitsubishi Heavy Industries',
            description: 'Leading Japanese industrial group',
            country: 'Japan'
          },
          {
            name: 'Siemens Energy',
            description: 'Global energy solutions provider',
            country: 'Germany'
          },
          {
            name: 'GE Renewable Energy',
            description: 'Specialized in renewable energy solutions',
            country: 'USA'
          }
        ]
      },
      contact: {
        title: 'CONTACT US',
        subtitle: 'Connect with us for consultation and support',
        company: {
          fullName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED',
          shortName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
        },
        address: {
          title: 'Address',
          lines: [
            'CN6, CN7-01, Nam Dinh Vu Non-tariff Zone and Industrial Park (Zone 1)',
            'Belonging to Dinh Vu - Cat Hai Economic Zone',
            'Dong Hai 2 Ward, Hai An District',
            'Haiphong City, Vietnam'
          ]
        },
        status: 'Operational',
        contact: {
          title: 'Contact',
          phone: 'Tel: +84 123 456 789',
          hotline: 'Hotline: +84 987 654 321',
          fax: 'Fax: +84 123 456 788'
        },
        email: {
          title: 'Email',
          primary: 'info@pourinvietnam.com',
          secondary: 'contact@pourinvietnam.com'
        },
        form: {
          title: 'Leave us a message',
          description: 'If you have any questions, please feel free to contact us. We will contact you as soon as possible.',
          message: {
            label: 'Message content',
            placeholder: 'Type your message here...'
          },
          name: {
            label: 'Full name',
            placeholder: 'Enter your full name'
          },
          email: {
            label: 'Email address',
            placeholder: 'your.email@example.com'
          },
          phone: {
            label: 'Phone number',
            placeholder: 'Enter your phone number'
          },
          submit: 'Submit Message'
        },
        copyright: 'Copyright©2024 POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED | Abbreviated name: POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
      }
    }
  },
  zh: {
    common: {
      welcome: '欢迎',
      scroll: '滚动',
      section: '部分',
      navigateWith: '导航使用',
      close: '关闭',
      settings: '设置',
      loading: '加载中...',
      details: '详情',
      contact: '联系我们',
      previous: '上一张',
      next: '下一张',
      goToImage: '转到图片',
      viewMore: '查看更多',
      learnMore: '了解更多',
      readMore: '阅读更多',
      development: "",
    },
    navigation: {
      welcome: '首页',
      about: '关于我们',
      products: '产品',
      technology: '技术',
      news: '新闻',
      timeline: '发展历史',
      partners: '合作伙伴',
      hr: '招聘'
    },
    settings: {
      title: '滚动设置',
      scrollBehavior: '滚动行为',
      fullscreen: '全屏',
      smooth: '平滑',
      deviceInfo: '设备信息',
      mobileDevice: '移动设备',
      desktopDevice: '桌面设备',
      smoothScrollOnly: '仅平滑滚动',
      toggleScrollModes: '切换滚动模式',
      instructions: '使用说明',
      howToNavigate: '如何导航：',
      fullscreenInstructions: '全屏模式：方向键，Page Up/Down，或点击导航点',
      smoothInstructions: '平滑模式：常规鼠标滚轮滚动',
      mobileInstructions: '移动设备：触摸滑动或常规滚动'
    },
    sections: {
      section1: {
        title: '欢迎来到 Pourin',
        subtitle: '越南领先的工业设备制造商',
        mobileNote: '📱 移动模式 - 已启用平滑滚动'
      },
      timeline: {
        title: '发展历史',
        overview: {
          description: '从2007年的一家小型初创企业开始，公司在近20年中通过5个工厂建设阶段不断扩张，实现了近10万平方米的生产面积，拥有700多名员工团队，并于2023年正式上市，标志着突破性发展成为大型制造企业。'
        },
        milestones: {
          milestone1: {
            title: '公司成立',
            description: '从初创企业开始征程'
          },
          milestone2: {
            title: '规模扩张',
            description: '工厂面积：11,000 平方米 • 员工：200 人'
          },
          milestone3: {
            title: '迁至新工厂',
            description: '工厂面积：14,000 平方米 • 员工：300 人'
          },
          milestone4: {
            title: '第二阶段运营',
            description: '工厂面积：26,600 平方米 • 员工：400 人'
          },
          milestone5: {
            title: '第三阶段运营',
            description: '工厂面积：49,000 平方米 • 员工：550 人'
          },
          milestone6: {
            title: '证券交易所上市',
            description: '在深圳证券交易所上市'
          },
          milestone7: {
            title: '第四和第五阶段扩展',
            description: '工厂面积：99,600 平方米 • 员工：700 人'
          }
        }
      },
      about: {
        badge: '关于我们',
        title: {
          main: 'Pourin Special Welding',
          highlight: '越南'
        },
        description: {
          paragraph1: 'Pourin Special Welding Vietnam Manufacturing Co., Ltd. \n位置: 坐落于海防市，南亭武工业区，距海防市国际港仅3公里。占地面积约 150,000 ㎡，厂房面积约 100,000 ㎡。',
          paragraph2: '工厂配备: 绕片机和弯管成型生产线，激光切割设备、数控液压机、卷板机、数控加工、180度和360度自动堆焊设备、膜式壁焊接及组装生产线、TIG和MIG焊接、DR检测设备、热处理设备、表面预处理设备、油漆生产系统等行业高端生产设备及生产线。\n主要产品: \n锅炉制造及堆焊、电厂辅助设备，燃气轮机余热锅炉，钢结构，压力容器。'
        },
        portStats: [
          {
            icon: 'FaAnchor',
            number: '-9.7 米',
            label: '泊位深度'
          },
          {
            icon: 'FaCogs',
            number: '10 台起重机',
            label: 'STS - 移动式',
            subLabel: '起重能力达125吨'
          },
          {
            icon: 'FaBoxes',
            number: '1,200,000 标准箱',
            label: '3,000,000 吨货物',
            subLabel: '年吞吐量'
          },
          {
            icon: 'FaShip',
            number: '48,000 载重吨',
            label: '最大船舶尺寸'
          }
        ],
        features: [
          {
            icon: 'FaMapMarkerAlt',
            title: '战略位置',
            description: '海防南定武工业区'
          },
          {
            icon: 'FaRobot',
            title: '先进技术',
            description: '180°和360°堆焊'
          },
          {
            icon: 'FaChartLine',
            title: '预期收入',
            description: '5000-9000万美元/年'
          }
        ],
        imageAlt: 'Pourin Special Welding Vietnam 工厂'
      },
      products: {
        title: '主要产品',
        subtitle: '具有国际质量标准的高科技产品',
        items: [
          {
            title: '增材制造部件',
            description: '采用先进增材制造技术制造的零件',
            features: ['高精度', '多样化材料', '广泛应用'],
            icon: 'FaCube'
          },
          {
            title: 'HRSG和锅炉',
            description: '热回收系统和工业锅炉',
            features: ['高效率', '节能', '卓越耐久性'],
            icon: 'FaFire'
          },
          {
            title: '金属压力容器',
            description: '工业应用压力设备',
            features: ['绝对安全', '标准合规', '优化设计'],
            icon: 'FaTachometerAlt'
          }
        ]
      },
      technology: {
        title: '先进技术',
        subtitle: '在制造中应用最新技术',
        items: [
          {
            title: '自动堆焊',
            description: '全自动180°和360°堆焊技术',
            icon: 'FaRobot'
          },
          {
            title: '质量控制',
            description: '先进的检测和质量保证系统',
            icon: 'FaCheckCircle'
          },
          {
            title: '智能制造',
            description: '在生产过程中应用物联网和人工智能',
            icon: 'FaCogs'
          }
        ]
      },
      news: {
        title: '新闻与活动',
        subtitle: '公司最新动态',
        items: [
          {
            title: '新工厂落成',
            date: '2024年3月15日',
            description: 'Pourin在海防正式运营新制造工厂',
            category: '活动'
          },
          {
            title: '获得国际质量认证',
            date: '2024年2月28日',
            description: '公司获得ISO 9001:2015质量管理体系证书',
            category: '成就'
          },
          {
            title: '与日本合作伙伴达成战略合作',
            date: '2024年1月10日',
            description: '与领先的日本工业集团签署战略合作协议',
            category: '合作'
          }
        ]
      },
      partners: {
        title: '战略合作伙伴',
        subtitle: '与世界领先企业合作',
        items: [
          {
            name: '三菱重工',
            description: '领先的日本工业集团',
            country: '日本'
          },
          {
            name: '西门子能源',
            description: '全球能源解决方案提供商',
            country: '德国'
          },
          {
            name: '通用电气可再生能源',
            description: '专注于可再生能源解决方案',
            country: '美国'
          }
        ]
      },
      contact: {
        title: '联系我们',
        subtitle: '联系我们获取咨询和支持',
        company: {
          fullName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED',
          shortName: 'POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
        },
        address: {
          title: '地址',
          lines: [
            'CN6、CN7-01地块，南定武非关税区和工业园区（1区）',
            '属于定武-吉海经济区',
            '东海二坊，海安郡',
            '海防市，越南',
            '阮德强'
          ]
        },
        status: '运营中',
        contact: {
          title: '联系方式',
          phone: '电话: +84 123 456 789',
          hotline: '热线: +84 987 654 321',
          fax: '传真: +84 123 456 788'
        },
        email: {
          title: '邮箱',
          primary: 'info@pourinvietnam.com',
          secondary: 'contact@pourinvietnam.com'
        },
        form: {
          title: '给我们留言',
          description: '如果您有任何问题，请随时联系我们。我们将尽快与您联系。',
          message: {
            label: '留言内容',
            placeholder: '请输入您的留言内容...'
          },
          name: {
            label: '姓名',
            placeholder: '请输入您的姓名'
          },
          email: {
            label: '邮箱地址',
            placeholder: 'your.email@example.com'
          },
          phone: {
            label: '电话号码',
            placeholder: '请输入您的电话号码'
          },
          submit: '提交留言'
        },
        copyright: '版权所有©2024 POURIN SPECIAL WELDING VIETNAM MANUFACTURING COMPANY LIMITED | 简称: POURIN SPECIAL WELDING VIETNAM MANUFACTURING CO.,LTD'
      }
    }
  }
};


export interface Product {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  products: Product[];
}

export const productCategoriesData: Record<Language, ProductCategory[]> = {
  vi: [
    {
      id: 0,
      name: "Sản xuất Bọc lót",
      title: "Sản xuất Bọc lót (Cladding)",
      description: "Công nghệ bọc lót tiên tiến với các trạm hàn tự động",
      buttonText: "Bọc lót",
      products: [
        {
          name: "Bọc lót 180°",
          title: "Bọc lót 180° (10 trạm)",
          description: "Hệ thống bọc lót 180° với 10 trạm hàn tự động, đáp ứng nhu cầu sản xuất công nghiệp",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        },
        {
          name: "Bọc lót 360°",
          title: "Bọc lót 360° (12 trạm)",
          description: "Công nghệ bọc lót 360° toàn diện với 12 trạm hàn, cho độ bền và chính xác cao",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764123397/Snipaste_2025-11-26_09-09-58_fbauif.png",
        },
        {
          name: "Vật liệu bọc",
          title: "Vật liệu bọc chuyên dụng",
          description: "Các loại vật liệu bọc chất lượng cao: Inco622, C276, ER309L và nhiều loại khác",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125538/Snipaste_2025-11-26_09-13-29_ogsvet.png",
        },
        {
          name: "Ống composite",
          title: "Ống composite PW Metallurgical",
          description: "Ống composite công nghệ fusion tiên tiến, độ bền cao và khả năng chống ăn mòn vượt trội",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125539/Snipaste_2025-11-26_09-14-24_fyc34t.png",
        }
      ]
    },
    {
      id: 1,
      name: "Sản xuất Lò hơi",
      title: "Sản xuất Lò hơi (Boiler)",
      description: "Giải pháp lò hơi công nghiệp toàn diện",
      buttonText: "Lò hơi",
      products: [
        {
          name: "Tường lò",
          title: "Tường lò Membrane Wall",
          description: "Sản xuất tường lò kết hợp prefab từ Trung Quốc và lắp ráp tại Việt Nam, đảm bảo chất lượng",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126510/Snipaste_2025-11-26_10-00-06_rg6p8l.png",
        },
        {
          name: "Ống xoắn",
          title: "Ống xoắn Coil",
          description: "Quy trình sản xuất ống xoắn chuyên nghiệp, đáp ứng tiêu chuẩn kỹ thuật cao",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-00-49_juc2ze.png",
        },
        {
          name: "Ống góp",
          title: "Ống góp Header",
          description: "Dây chuyền sản xuất ống góp đầy đủ tại Việt Nam, chất lượng đạt tiêu chuẩn quốc tế",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-01-50_oa0n6n.png",
        }
      ]
    },
    {
      id: 2,
      name: "Lò thu hồi nhiệt",
      title: "Sản xuất Lò thu hồi nhiệt (HRSG)",
      description: "Hệ thống thu hồi nhiệt hiệu suất cao",
      buttonText: "HRSG",
      products: [
        {
          name: "Vật liệu thường dùng",
          title: "Vật liệu HRSG",
          description: "Các loại vật liệu chuyên dụng thường dùng trong sản xuất lò thu hồi nhiệt",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Năng lực sản xuất",
          title: "Năng lực sản xuất HRSG",
          description: "Khả năng sản xuất đa dạng: Ống vây, Ống góp, HARP, BOX với công nghệ tiên tiến",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Thiết bị hàn ống",
          title: "Dây chuyền hàn ống vây xoắn ốc",
          description: "4 dây chuyền hàn ống vây xoắn ốc hiện đại, nâng cao hiệu suất sản xuất",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "Quy trình sản xuất",
          title: "Quy trình sản xuất HRSG",
          description: "Quy trình sản xuất chuyên nghiệp: từ ống -> HARP -> BOX, đảm bảo chất lượng",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 3,
      name: "Kết cấu thép",
      title: "Sản xuất Kết cấu thép",
      description: "Giải pháp kết cấu thép công nghiệp đa dạng",
      buttonText: "Kết cấu thép",
      products: [
        {
          name: "Bình áp lực",
          title: "Bình áp lực",
          description: "Thiết kế và sản xuất bình áp lực công nghiệp, đáp ứng tiêu chuẩn an toàn nghiêm ngặt",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "Pulp Washer",
          title: "Pulp Washer",
          description: "Máy rửa bột giấy công nghiệp, hiệu suất cao và độ bền vượt trội",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Grate",
          title: "Grate",
          description: "Sản xuất grate chất lượng cao cho các ứng dụng công nghiệp và năng lượng",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Heat Exchanger",
          title: "Heat Exchanger",
          description: "Thiết bị trao đổi nhiệt hiệu suất cao, ứng dụng trong nhiều ngành công nghiệp",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "Burner",
          title: "Burner",
          description: "Thiết bị đốt công nghiệp, tiết kiệm năng lượng và thân thiện môi trường",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 4,
      name: "Tấm kim loại",
      title: "Sản xuất Tấm kim loại (Plate Work)",
      description: "Gia công tấm kim loại chính xác",
      buttonText: "Tấm kim loại",
      products: [
        {
          name: "Diverter",
          title: "Diverter",
          description: "Thiết bị chuyển hướng được gia công chính xác từ tấm kim loại chất lượng cao",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "Elbow",
          title: "Elbow",
          description: "Côn nối elbow được sản xuất với độ chính xác cao, đa dạng kích thước và góc độ",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Diffuser",
          title: "Diffuser",
          description: "Thiết bị khuếch tán được thiết kế tối ưu cho hiệu suất luồng khí cao nhất",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Rotary drum",
          title: "Rotary drum",
          description: "Trống quay công nghiệp được gia công từ tấm kim loại chuyên dụng, độ bền cao",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        }
      ]
    }
  ],

  en: [
    {
      id: 0,
      name: "Cladding Manufacturing",
      title: "Cladding Manufacturing",
      description: "Advanced cladding technology with automatic welding stations",
      buttonText: "Cladding",
      products: [
        {
          name: "180° Cladding",
          title: "180° Cladding (10 stations)",
          description: "180° cladding system with 10 automatic welding stations, meeting industrial production needs",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1763542611/z7240858643311_5adc94934d02fe975527b8085f72decb_zvdhzu.jpg",
        },
        {
          name: "360° Cladding",
          title: "360° Cladding (12 stations)",
          description: "Comprehensive 360° cladding technology with 12 welding stations for high durability and precision",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764123397/Snipaste_2025-11-26_09-09-58_fbauif.png",
        },
        {
          name: "Cladding Materials",
          title: "Specialized Cladding Materials",
          description: "High-quality cladding materials: Inco622, C276, ER309L and many more",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125538/Snipaste_2025-11-26_09-13-29_ogsvet.png",
        },
        {
          name: "Composite Pipes",
          title: "PW Metallurgical Composite Pipes",
          description: "Advanced fusion technology composite pipes with high durability and superior corrosion resistance",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125539/Snipaste_2025-11-26_09-14-24_fyc34t.png",
        }
      ]
    },
    {
      id: 1,
      name: "Boiler Manufacturing",
      title: "Boiler Manufacturing",
      description: "Comprehensive industrial boiler solutions",
      buttonText: "Boiler",
      products: [
        {
          name: "Membrane Wall",
          title: "Membrane Wall",
          description: "Manufacturing membrane walls combining prefab from China and assembly in Vietnam, ensuring quality",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126510/Snipaste_2025-11-26_10-00-06_rg6p8l.png",
        },
        {
          name: "Coil",
          title: "Coil",
          description: "Professional coil manufacturing process, meeting high technical standards",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-00-49_juc2ze.png",
        },
        {
          name: "Header",
          title: "Header",
          description: "Complete header production line in Vietnam, quality meets international standards",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-01-50_oa0n6n.png",
        }
      ]
    },
    {
      id: 2,
      name: "Heat Recovery",
      title: "HRSG Manufacturing",
      description: "High-efficiency heat recovery systems",
      buttonText: "HRSG",
      products: [
        {
          name: "HRSG Materials",
          title: "HRSG Materials",
          description: "Specialized materials commonly used in heat recovery boiler manufacturing",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Production Capacity",
          title: "HRSG Production Capacity",
          description: "Diverse production capabilities: Finned tubes, Headers, HARP, BOX with advanced technology",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Welding Equipment",
          title: "Spiral Fin Tube Welding Line",
          description: "4 modern spiral fin tube welding lines, improving production efficiency",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "Production Process",
          title: "HRSG Production Process",
          description: "Professional production process: from tube -> HARP -> BOX, ensuring quality",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 3,
      name: "Steel Structures",
      title: "Steel Structure Manufacturing",
      description: "Diverse industrial steel structure solutions",
      buttonText: "Steel Structure",
      products: [
        {
          name: "Pressure Vessels",
          title: "Pressure Vessels",
          description: "Design and manufacture of industrial pressure vessels, meeting strict safety standards",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "Pulp Washer",
          title: "Pulp Washer",
          description: "Industrial pulp washing machine, high efficiency and superior durability",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Grate",
          title: "Grate",
          description: "High-quality grate manufacturing for industrial and energy applications",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Heat Exchanger",
          title: "Heat Exchanger",
          description: "High-efficiency heat exchange equipment, applications in multiple industries",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "Burner",
          title: "Burner",
          description: "Industrial combustion equipment, energy-saving and environmentally friendly",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 4,
      name: "Plate Work",
      title: "Plate Work Manufacturing",
      description: "Precision metal plate processing",
      buttonText: "Plate Work",
      products: [
        {
          name: "Diverter",
          title: "Diverter",
          description: "Diversion equipment precisely machined from high-quality metal plates",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "Elbow",
          title: "Elbow",
          description: "Elbow connectors manufactured with high precision, diverse sizes and angles",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "Diffuser",
          title: "Diffuser",
          description: "Diffusion equipment optimally designed for highest air flow efficiency",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "Rotary drum",
          title: "Rotary drum",
          description: "Industrial rotary drum machined from specialized metal plates, high durability",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        }
      ]
    }
  ],

  zh: [
    {
      id: 0,
      name: "堆焊生产",
      title: "堆焊生产",
      description: "采用自动焊接工作站的先进堆焊技术",
      buttonText: "堆焊",
      products: [
        {
          name: "180°堆焊",
          title: "180°堆焊（10工位）",
          description: "配备10个自动焊接工位的180°堆焊系统，满足工业生产需求",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        },
        {
          name: "360°堆焊",
          title: "360°堆焊（12工位）",
          description: "配备12个焊接工位的全方位360°堆焊技术，具有高耐久性和精度",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764123397/Snipaste_2025-11-26_09-09-58_fbauif.png",
        },
        {
          name: "堆焊材料",
          title: "专用堆焊材料",
          description: "高质量堆焊材料：Inco622、C276、ER309L等多种材料",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125538/Snipaste_2025-11-26_09-13-29_ogsvet.png",
        },
        {
          name: "复合管",
          title: "PW冶金复合管",
          description: "采用先进熔合技术的复合管，具有高耐久性和卓越的防腐蚀性能",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764125539/Snipaste_2025-11-26_09-14-24_fyc34t.png",
        }
      ]
    },
    {
      id: 1,
      name: "锅炉生产",
      title: "锅炉生产",
      description: "全面的工业锅炉解决方案",
      buttonText: "锅炉",
      products: [
        {
          name: "膜式壁",
          title: "膜式壁",
          description: "结合中国预制件和越南组装生产膜式壁，确保质量",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126510/Snipaste_2025-11-26_10-00-06_rg6p8l.png",
        },
        {
          name: "盘管",
          title: "盘管",
          description: "专业的盘管生产工艺，满足高技术标准",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-00-49_juc2ze.png",
        },
        {
          name: "联箱",
          title: "联箱",
          description: "越南完整的联箱生产线，质量符合国际标准",
          image: "https://res.cloudinary.com/doooncpse/image/upload/v1764126509/Snipaste_2025-11-26_10-01-50_oa0n6n.png",
        }
      ]
    },
    {
      id: 2,
      name: "热回收",
      title: "余热锅炉生产（HRSG）",
      description: "高效热回收系统",
      buttonText: "HRSG",
      products: [
        {
          name: "HRSG材料",
          title: "HRSG材料",
          description: "余热锅炉制造中常用的专用材料",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "生产能力",
          title: "HRSG生产能力",
          description: "多样化生产能力：翅片管、联箱、HARP、BOX，采用先进技术",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "焊接设备",
          title: "螺旋翅片管焊接线",
          description: "4条现代化螺旋翅片管焊接线，提高生产效率",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "生产工艺",
          title: "HRSG生产工艺",
          description: "专业生产工艺：从管材 -> HARP -> BOX，确保质量",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 3,
      name: "钢结构",
      title: "钢结构生产",
      description: "多样化的工业钢结构解决方案",
      buttonText: "钢结构",
      products: [
        {
          name: "压力容器",
          title: "压力容器",
          description: "工业压力容器的设计和制造，满足严格的安全标准",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "浆料洗涤机",
          title: "浆料洗涤机",
          description: "工业浆料洗涤机，高效率和卓越的耐久性",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "炉排",
          title: "炉排",
          description: "用于工业和能源应用的高质量炉排生产",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "换热器",
          title: "换热器",
          description: "高效换热设备，应用于多个行业",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        },
        {
          name: "燃烧器",
          title: "燃烧器",
          description: "工业燃烧设备，节能环保",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
        }
      ]
    },
    {
      id: 4,
      name: "板金加工",
      title: "板金加工生产",
      description: "精密金属板加工",
      buttonText: "板金加工",
      products: [
        {
          name: "分流器",
          title: "分流器",
          description: "由高质量金属板精密加工的分流设备",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
        },
        {
          name: "弯头",
          title: "弯头",
          description: "高精度制造的弯头连接件，多种尺寸和角度",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
        },
        {
          name: "扩散器",
          title: "扩散器",
          description: "优化设计的扩散设备，实现最高的气流效率",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
        },
        {
          name: "旋转滚筒",
          title: "旋转滚筒",
          description: "由专用金属板加工的工业旋转滚筒，高耐久性",
          image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
        }
      ]
    }
  ]
};


export interface Machine {
  name: string;
  title: string;
  description: string;
  image?: string; // Không có hình thì để undefined
}

export interface MachineCategory {
  id: number;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  machines: Machine[];
}

export interface TechnologySlide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export const technologyData: Record<Language, TechnologySlide[]> = {
  vi: [
    {
      id: 1,
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/b021a18c-258a-4739-a6b2-32e9a9d8fb95.jpg_560xaf.jpg",
      title: "Công nghệ hàn MIG",
      description: "Công nghệ hàn MIG xung cao tần tự động của Boying, quy trình ổn định, hiệu quả cao, lớp hàn đồng đều, phù hợp với nhiều loại vật liệu chống ăn mòn và chống mài mòn",
      buttonText: "Xem thêm",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-07-51_hvfhho.png",
      title: "Máy cắt Laser CNC",
      description: "Hệ thống cắt laser công nghệ cao với độ chính xác tuyệt đối, tốc độ cắt nhanh, phù hợp với nhiều loại kim loại",
      buttonText: "Xem thêm",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144803/Snipaste_2025-11-26_15-08-11_g5jnyx.png",
      title: "Máy chấn CNC",
      description: "Máy chấn CNC hiện đại với độ chính xác cao, có thể gia công các chi tiết phức tạp",
      buttonText: "Xem thêm",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144804/Snipaste_2025-11-26_15-09-06_vgkdyc.png",
      title: "Máy lốc tôn",
      description: "Máy lốc tôn công suất lớn, có khả năng uốn các tấm thép dày với độ chính xác cao",
      buttonText: "Xem thêm",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144809/Snipaste_2025-11-26_15-09-50_hezxbk.png",
      title: "Hệ Thống Cầu Trục",
      description: "Hệ thống cầu trục hiện đại, sức nâng lớn, vận hành linh hoạt và an toàn, phục vụ cho việc di chuyển và bốc xếp vật liệu, chi tiết cồng kềnh trong nhà xưởng",
      buttonText: "Xem thêm",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-00_pax7ys.png",
      title: "Máy Gắn Cánh Tản Nhiệt",
      description: "Máy chuyên dụng để gắn các cánh tản nhiệt (fin) lên ống thép, tối ưu hóa hiệu suất trao đổi nhiệt cho các bộ trao đổi nhiệt, bình ngưng",
      buttonText: "Xem thêm",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-12_bd1dsb.png",
      title: "Máy Uốn Ống",
      description: "Máy uốn ống CNC chính xác cao, có khả năng uốn các loại ống với nhiều đường kính và độ dày khác nhau theo các góc độ phức tạp mà không làm biến dạng ống",
      buttonText: "Xem thêm",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144812/Snipaste_2025-11-26_15-10-24_aang2g.png",
      title: "Máy Phun Bi",
      description: "Thiết bị làm sạch và tăng cứng bề mặt kim loại bằng cách phun các hạt bi thép với vận tốc cao, giúp loại bỏ rỉ sét, bụi bẩn và tạo độ nhám cho việc phủ sơn",
      buttonText: "Xem thêm",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144813/Snipaste_2025-11-26_15-10-33_iega0d.png",
      title: "Máy Ép Thủy Lực",
      description: "Máy ép công suất lớn sử dụng hệ thống thủy lực để tạo lực nén cực cao, dùng cho việc nắn thẳng, định hình, dập tấm kim loại và các chi tiết nặng",
      buttonText: "Xem thêm",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144814/Snipaste_2025-11-26_15-10-42_i82l5d.png",
      title: "Máy Vát Mép CNC",
      description: "Máy gia công vát mép đầu ống tự động với độ chính xác tuyệt đối, tạo ra các đường vát mép hoàn hảo phục vụ cho quá trình hàn nối ống chất lượng cao",
      buttonText: "Xem thêm",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764145308/Snipaste_2025-11-26_15-21-33_puhkkq.png",
      title: "Máy Hàn Tự Động SAW",
      description: "Công nghệ hàn hồ quang chìm tự động (SAW), lý tưởng cho các đường hàn dài, sâu và yêu cầu chất lượng cao trên thép tấm và ống có độ dày lớn",
      buttonText: "Xem thêm",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144815/Snipaste_2025-11-26_15-11-20_yh51ww.png",
      title: "Máy Cắt Ống Laser",
      description: "Hệ thống cắt ống bằng laser CNC 3D, cắt với tốc độ cao, độ chính xác tuyệt đối và hoàn toàn tự động, cho phép tạo hình phức tạp trên nhiều loại ống",
      buttonText: "Xem thêm",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144816/Snipaste_2025-11-26_15-11-30_yuiljx.png",
      title: "Máy Hàn Phủ 180°",
      description: "Máy hàn phủ bề mặt chuyên dụng ở vị trí 180°, ứng dụng để phủ cứng, phủ chống ăn mòn lên bề mặt bên trong của các chi tiết dạng ống/trụ",
      buttonText: "Xem thêm",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-11-39_ioiiqn.png",
      title: "Máy Đánh Bóng",
      description: "Hệ thống máy mài và đánh bóng tự động, mang lại bề mặt sản phẩm hoàn thiện với độ bóng và nhẵn mịn theo yêu cầu kỹ thuật khắt khe",
      buttonText: "Xem thêm",
    },
    {
      id: 17,
      image: "https://path-to-your-image/heat-treatment.jpg",
      title: "Lò Nhiệt Luyện",
      description: "Lò nhiệt luyện được điều khiển bằng máy tính, cho phép xử lý nhiệt (ủ, tôi, ram) chính xác để cải thiện các tính chất cơ học của vật liệu",
      buttonText: "Xem thêm",
    },
    {
      id: 18,
      image: "https://path-to-your-image/machining-center.jpg",
      title: "Trung Tâm Gia Công",
      description: "Trung tâm gia công CNC đa trục, hiện đại, thực hiện các nguyên công phay, tiện, khoan, tarô phức tạp với độ chính xác cực cao trên một máy duy nhất",
      buttonText: "Xem thêm",
    },
  ],

  en: [
    {
      id: 1,
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/b021a18c-258a-4739-a6b2-32e9a9d8fb95.jpg_560xaf.jpg",
      title: "MIG Surfacing Technology",
      description: "Boying's proprietary high-frequency pulse MIG surfacing, stable process, high efficiency, uniform welding layer, suitable for various corrosion and wear-resistant materials",
      buttonText: "Learn More",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-07-51_hvfhho.png",
      title: "CNC Laser Cutting",
      description: "High-tech laser cutting system with absolute precision, fast cutting speed, suitable for various metal types",
      buttonText: "Learn More",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144803/Snipaste_2025-11-26_15-08-11_g5jnyx.png",
      title: "CNC Press Brake",
      description: "Modern CNC press brake with high precision, capable of processing complex parts",
      buttonText: "Learn More",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144804/Snipaste_2025-11-26_15-09-06_vgkdyc.png",
      title: "Plate Rolling Machine",
      description: "High-capacity plate rolling machine, capable of bending thick steel plates with high precision",
      buttonText: "Learn More",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144809/Snipaste_2025-11-26_15-09-50_hezxbk.png",
      title: "Crane System",
      description: "Modern crane system with high lifting capacity, flexible and safe operation, used for moving and handling bulky materials and components within the workshop",
      buttonText: "Learn More",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-00_pax7ys.png",
      title: "Finning Machine",
      description: "Specialized machine for attaching heat dissipation fins onto steel tubes, optimizing heat exchange performance for heat exchangers and condensers",
      buttonText: "Learn More",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-12_bd1dsb.png",
      title: "Pipe Bending Machine",
      description: "High-precision CNC pipe bender capable of bending pipes of various diameters and thicknesses to complex angles without causing deformation",
      buttonText: "Learn More",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144812/Snipaste_2025-11-26_15-10-24_aang2g.png",
      title: "Shot Blasting Machine",
      description: "Equipment for cleaning and hardening metal surfaces by blasting steel shots at high velocity, removing rust, scale, and creating a profile for paint coating",
      buttonText: "Learn More",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144813/Snipaste_2025-11-26_15-10-33_iega0d.png",
      title: "Hydraulic Press",
      description: "High-capacity press utilizing a hydraulic system to generate extreme compressive force, used for straightening, forming, and stamping heavy metal plates and components",
      buttonText: "Learn More",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144814/Snipaste_2025-11-26_15-10-42_i82l5d.png",
      title: "CNC Beveling Machine",
      description: "Automatic pipe end beveling machine with absolute precision, creating perfect bevel preparations for high-quality pipe welding",
      buttonText: "Learn More",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764145308/Snipaste_2025-11-26_15-21-33_puhkkq.png",
      title: "SAW Automatic Welding",
      description: "Submerged Arc Welding (SAW) automation technology, ideal for long, deep, high-quality welds on thick plates and pipes",
      buttonText: "Learn More",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144815/Snipaste_2025-11-26_15-11-20_yh51ww.png",
      title: "Laser Pipe Cutting Machine",
      description: "3D CNC laser pipe cutting system, offering high speed, absolute precision, and full automation, enabling complex profiling on various types of pipes",
      buttonText: "Learn More",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144816/Snipaste_2025-11-26_15-11-30_yuiljx.png",
      title: "180° Overlay Welding",
      description: "Specialized cladding welder for 180° position, used for applying hardfacing or corrosion-resistant overlays onto the inner surface of tubular/cylindrical components",
      buttonText: "Learn More",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-11-39_ioiiqn.png",
      title: "Polishing Machine",
      description: "Automatic grinding and polishing system, delivering a finished product surface with the required shine and smoothness to meet stringent technical specifications",
      buttonText: "Learn More",
    },
    {
      id: 17,
      image: "https://path-to-your-image/heat-treatment.jpg",
      title: "Heat Treatment Furnace",
      description: "Computer-controlled heat treatment furnace allowing precise thermal processes (annealing, quenching, tempering) to improve material mechanical properties",
      buttonText: "Learn More",
    },
    {
      id: 18,
      image: "https://path-to-your-image/machining-center.jpg",
      title: "Machining Center",
      description: "Modern, multi-axis CNC machining center performing complex milling, turning, drilling, and tapping operations with extreme precision on a single machine",
      buttonText: "Learn More",
    },
  ],

  zh: [
    {
      id: 1,
      image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/b021a18c-258a-4739-a6b2-32e9a9d8fb95.jpg_560xaf.jpg",
      title: "MIG堆焊技术",
      description: "博盈自主高频脉冲MIG堆焊，工艺稳定、高效、焊层均匀，适用于多种耐腐蚀与耐磨材料，可数控或手工操作",
      buttonText: "了解更多",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-07-51_hvfhho.png",
      title: "数控激光切割",
      description: "高科技激光切割系统，精度绝对，切割速度快，适用于各种金属类型",
      buttonText: "了解更多",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144803/Snipaste_2025-11-26_15-08-11_g5jnyx.png",
      title: "数控折弯机",
      description: "现代化数控折弯机，精度高，可加工复杂零件",
      buttonText: "了解更多",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144804/Snipaste_2025-11-26_15-09-06_vgkdyc.png",
      title: "卷板机",
      description: "大功率卷板机，能够高精度弯曲厚钢板",
      buttonText: "了解更多",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144809/Snipaste_2025-11-26_15-09-50_hezxbk.png",
      title: "起重机系统",
      description: "现代化的起重机系统，起重能力大，运行灵活安全，用于在车间内移动和搬运笨重的物料和部件",
      buttonText: "了解更多",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-00_pax7ys.png",
      title: "翅片安装机",
      description: "用于将散热翅片附着在钢管上的专用设备，优化热交换器和冷凝器的热交换性能",
      buttonText: "了解更多",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144810/Snipaste_2025-11-26_15-10-12_bd1dsb.png",
      title: "弯管机",
      description: "高精度数控弯管机，能够弯曲各种直径和厚度的管道至复杂角度，且不会导致变形",
      buttonText: "了解更多",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144812/Snipaste_2025-11-26_15-10-24_aang2g.png",
      title: "喷砂机",
      description: "通过高速喷射钢丸来清理和强化金属表面的设备，去除锈蚀、氧化皮，并为油漆涂层创造粗糙度",
      buttonText: "了解更多",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144813/Snipaste_2025-11-26_15-10-33_iega0d.png",
      title: "液压机",
      description: "大功率压力机，利用液压系统产生极大的压缩力，用于校直、成型和冲压厚重的金属板及部件",
      buttonText: "了解更多",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144814/Snipaste_2025-11-26_15-10-42_i82l5d.png",
      title: "数控坡口机",
      description: "自动管道端面坡口加工机，精度极高，为高质量的管道焊接创造完美的坡口准备",
      buttonText: "了解更多",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764145308/Snipaste_2025-11-26_15-21-33_puhkkq.png",
      title: "埋弧自动焊",
      description: "埋弧焊自动化技术，非常适合在厚板和厚壁管道上进行长、深、高质量的焊接",
      buttonText: "了解更多",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144815/Snipaste_2025-11-26_15-11-20_yh51ww.png",
      title: "激光切管机",
      description: "3D数控激光切管系统，切割速度快、精度绝对、完全自动化，可在各种类型的管材上进行复杂造型切割",
      buttonText: "了解更多",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144816/Snipaste_2025-11-26_15-11-30_yuiljx.png",
      title: "180° 堆焊",
      description: "专用于180°位置的堆焊设备，用于在管状/圆柱形部件的内表面进行耐磨堆焊或耐腐蚀堆焊",
      buttonText: "了解更多",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1764144802/Snipaste_2025-11-26_15-11-39_ioiiqn.png",
      title: "抛光机",
      description: "自动打磨和抛光系统，使产品表面获得所需的光洁度和光滑度，以满足严格的技术规范",
      buttonText: "了解更多",
    },
    {
      id: 17,
      image: "https://path-to-your-image/heat-treatment.jpg",
      title: "热处理炉",
      description: "计算机控制的热处理炉，可进行精确的热处理工艺（退火、淬火、回火）以改善材料的机械性能",
      buttonText: "了解更多",
    },
    {
      id: 18,
      image: "https://path-to-your-image/machining-center.jpg",
      title: "加工中心",
      description: "现代化的多轴数控加工中心，在一台机床上以极高的精度执行复杂的铣削、车削、钻孔和攻丝操作",
      buttonText: "了解更多",
    },
  ],
};

// Tiêu đề section theo ngôn ngữ
export const sectionTitles: Record<Language, { title: string; subtitle: string }> = {
  vi: {
    title: "Công Nghệ Công Ty",
    subtitle: "Khám phá các dự án công nghệ và giải pháp sáng tạo của chúng tôi",
  },
  en: {
    title: "Company Technology",
    subtitle: "Explore our technology projects and innovative solutions",
  },
  zh: {
    title: "公司技术",
    subtitle: "探索我们的技术项目与创新解决方案",
  },
};


export interface MachineCategory {
  id: number;
  name: string;
  title: string;
  description: string;
  buttonText: string;
  machines: Machine[];
}

export interface LaboratorySlide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface LaboratoryData {
  descriptionTitle: string;
  slides: LaboratorySlide[];
}

export const laboratoryData: Record<Language, LaboratoryData> = {
  vi: {
    descriptionTitle: "Phòng Thí nghiệm Vật lý và Hóa học: Thiết bị được lắp đặt hoàn chỉnh, nhân sự được đào tạo tại Pourin Trung Quốc.",
    slides: [
      {
        id: 1,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-08-56_shcthm.png",
        title: "Kiểm tra độ va đập phổ quát",
        description: "Công nghệ hàn MIG xung cao tần tự động của Boying, quy trình ổn định, hiệu quả cao, lớp hàn đồng đều, phù hợp với nhiều loại vật liệu chống ăn mòn và chống mài mòn",
        buttonText: "Xem thêm",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-09-28_ghu7kx.png",
        title: "Kiểm tra tác động",
        description: "Hệ thống cắt laser công nghệ cao với độ chính xác tuyệt đối, tốc độ cắt nhanh, phù hợp với nhiều loại kim loại",
        buttonText: "Xem thêm",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "Thử độ cứng Micro Vickers",
        description: "Máy chấn CNC hiện đại với độ chính xác cao, có thể gia công các chi tiết phức tạp",
        buttonText: "Xem thêm",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-03_d8y9dk.png",
        title: "Mài và Đánh bóng",
        description: "Máy lốc tôn công suất lớn, có khả năng uốn các tấm thép dày với độ chính xác cao",
        buttonText: "Xem thêm",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-36_in0bse.png",
        title: "Máy chiếu rãnh mẫu va đập",
        description: "Công nghệ phủ bề mặt tiên tiến giúp tăng tuổi thọ và độ bền của sản phẩm",
        buttonText: "Xem thêm",
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "Kính hiển vi nổi",
        description: "Hệ thống kiểm tra chất lượng hiện đại đảm bảo tiêu chuẩn cao cho mọi sản phẩm",
        buttonText: "Xem thêm",
      }
    ]
  },

  en: {
    descriptionTitle: "Physical and Chemical Laboratory: Equipment has been fully installed, and personnel have been trained at Pourin, China.",
    slides: [
      {
        id: 1,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-08-56_shcthm.png",
        title: "Universal Impact Testing",
        description: "Boying's proprietary high-frequency pulse MIG surfacing, stable process, high efficiency, uniform welding layer, suitable for various corrosion and wear-resistant materials",
        buttonText: "Learn More",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-09-28_ghu7kx.png",
        title: "Impact Testing",
        description: "High-tech laser cutting system with absolute precision, fast cutting speed, suitable for various metal types",
        buttonText: "Learn More",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "Micro Vickers Hardness Test",
        description: "Modern CNC press brake with high precision, capable of processing complex parts",
        buttonText: "Learn More",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-03_d8y9dk.png",
        title: "Grinding and Polishing",
        description: "High-capacity plate rolling machine, capable of bending thick steel plates with high precision",
        buttonText: "Learn More",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-36_in0bse.png",
        title: "Impact Specimen Notch Projector",
        description: "Advanced surface coating technology that increases product lifespan and durability",
        buttonText: "Learn More",
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "Stereomicroscope",
        description: "Modern quality control system ensuring high standards for all products",
        buttonText: "Learn More",
      }
    ]
  },

  zh: {
    descriptionTitle: "物理与化学实验室：设备已完全安装，人员已在中国Pourin接受培训。",
    slides: [
      {
        id: 1,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-08-56_shcthm.png",
        title: "万能冲击试验",
        description: "博盈自主高频脉冲MIG堆焊，工艺稳定、高效、焊层均匀，适用于多种耐腐蚀与耐磨材料，可数控或手工操作",
        buttonText: "了解更多",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-09-28_ghu7kx.png",
        title: "冲击测试",
        description: "高科技激光切割系统，精度绝对，切割速度快，适用于各种金属类型",
        buttonText: "了解更多",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "显微维氏硬度测试",
        description: "现代化数控折弯机，精度高，可加工复杂零件",
        buttonText: "了解更多",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-03_d8y9dk.png",
        title: "研磨与抛光",
        description: "大功率卷板机，能够高精度弯曲厚钢板",
        buttonText: "了解更多",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-36_in0bse.png",
        title: "冲击试样缺口投影仪",
        description: "先进的表面涂层技术，提高产品使用寿命和耐用性",
        buttonText: "了解更多",
      },
      {
        id: 6,
        image: "https://res.cloudinary.com/doooncpse/image/upload/v1764036681/Snipaste_2025-11-25_09-10-47_mok45r.png",
        title: "体视显微镜",
        description: "现代化质量控制系统，确保所有产品的高标准",
        buttonText: "了解更多",
      }
    ]
  }
};


export const sectionLaboTitles: Record<Language, { title: string; subtitle: string }> = {
  vi: {
    title: "Thiết bị thí nghiệm",
    subtitle: "Phòng Thí nghiệm Vật lý và Hóa học: Thiết bị được lắp đặt hoàn chỉnh, nhân sự được đào tạo tại Pourin Trung Quốc.",
  },
  en: {
    title: "Company Technology",
    subtitle: "Physical and Chemical Laboratory: Equipment has been fully installed, and personnel have been trained at Pourin, China.",
  },
  zh: {
    title: "公司技术",
    subtitle: "物理与化学实验室：设备已完全安装，人员已在中国Pourin接受培训。",
  },
};


export interface NewsItem {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export const newsData: Record<Language, NewsItem[]> = {
  vi: [
    {
      id: 1,
      date: "28/10/2025",
      time: "14:30",
      title: "Pourin Vietnam đang triển khai xây dựng Giai đoạn 2",
      description: "Pourin Vietnam đang triển khai xây dựng Giai đoạn 2 với nhiều bước tiến quan trọng nhằm mở rộng quy mô sản xuất và đáp ứng nhu cầu thị trường ngày càng tăng. Dựa trên thực tế sản xuất và tốc độ tăng trưởng đơn hàng, Pourin dự kiến sẽ đầu tư bổ sung nhiều hạng mục then chốt trong Giai đoạn 2",
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1762927458/DSC00932_u2tj0i.jpg",
      tag: "TIN MỚI",
    },
    {
      id: 2,
      date: "28/03/2025",
      time: "09:15",
      title: "Nhà máy hàn đặc biệt Pourin Việt Nam đi vào hoạt động tại Hải Phòng",
      description: "Sự kiện nhà máy Pourin Việt Nam đi vào hoạt động là bước tiến quan trọng, không chỉ đánh dấu sự mở rộng đầu tư mà còn là minh chứng cho cam kết phát triển bền vững của các nhà đầu tư tại thành phố Hải Phòng.",
      image: "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "TIN MỚI",
    },
    {
      id: 3,
      date: "28/03/2025",
      time: "09:15",
      title: "Nhà máy hàn đặc biệt Pourin Việt Nam đi vào hoạt động tại Hải Phòng",
      description: "Sự kiện nhà máy Pourin Việt Nam đi vào hoạt động là bước tiến quan trọng, không chỉ đánh dấu sự mở rộng đầu tư mà còn là minh chứng cho cam kết phát triển bền vững của các nhà đầu tư tại thành phố Hải Phòng.",
      image: "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "TIN MỚI",
    },
  ],

  en: [
    {
      id: 1,
      date: "10/28/2025",
      time: "14:30",
      title: "Pourin Vietnam Begins Phase 2 Construction",
      description:
        "Pourin Vietnam is currently implementing Phase 2 with significant progress to expand production capacity and meet the rapidly growing market demand. Based on actual manufacturing needs and increasing order volume, Pourin plans to invest in several key items during Phase 2.",
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1762927458/DSC00932_u2tj0i.jpg",
      tag: "LATEST NEWS",
    },
    {
      id: 2,
      date: "03/28/2025",
      time: "09:15",
      title: "Pourin Vietnam’s Special Welding Plant Officially Put into Operation in Hai Phong",
      description:
        "The launch of the Pourin Vietnam special welding plant marks an important milestone—not only as an expansion of investment but also as proof of investors' commitment to sustainable development in Hai Phong City.",
      image:
        "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "LATEST NEWS",
    },
    {
      id: 3,
      date: "03/28/2025",
      time: "09:15",
      title: "Pourin Vietnam’s Special Welding Plant Officially Put into Operation in Hai Phong",
      description:
        "The launch of the Pourin Vietnam special welding plant marks an important milestone—not only as an expansion of investment but also as proof of investors' commitment to sustainable development in Hai Phong City.",
      image:
        "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "LATEST NEWS",
    },
  ],

  zh: [
    {
      id: 1,
      date: "2025/10/28",
      time: "14:30",
      title: "Pourin Vietnam正在推进第二阶段建设",
      description:
        "Pourin Vietnam正在实施第二阶段建设，并取得了多项重要进展，旨在扩大生产规模、满足不断增长的市场需求。基于实际生产情况和订单增长速度，Pourin计划在第二阶段追加多个关键投资项目。",
      image: "https://res.cloudinary.com/doooncpse/image/upload/v1762927458/DSC00932_u2tj0i.jpg",
      tag: "最新消息",
    },
    {
      id: 2,
      date: "2025/03/28",
      time: "09:15",
      title: "Pourin越南特殊焊接工厂在海防正式投产运营",
      description:
        "Pourin越南特殊焊接工厂正式投产，这是一个重要的里程碑，不仅标志着投资规模的扩大，也体现了投资方对海防市可持续发展的承诺。",
      image:
        "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "最新消息",
    },
    {
      id: 3,
      date: "2025/03/28",
      time: "09:15",
      title: "Pourin越南特殊焊接工厂在海防正式投产运营",
      description:
        "Pourin越南特殊焊接工厂正式投产，这是一个重要的里程碑，不仅标志着投资规模的扩大，也体现了投资方对海防市可持续发展的承诺。",
      image:
        "https://cdn.nhandan.vn/images/1fccedd6556a1e0b563fa7a8e900d725b1938c1e7101a32607864dd1a14b2d9b6e1c809b4e3daae1c61216f080b364c2483fb46ab4a60f80be5b7ec9bd86ee64c26f58aa19805a43ac9e02f44f382906093165f6676e9745e154fca9450d8ac349c3b420f57f53d4f01e280381cd5635/z6450450096350-b4130e7ea9245377ac280eea0ef61590-4028-4712-2973-2811.jpg",
      tag: "最新消息",
    },
  ],

};

export const newsNavigation: Record<Language, string[]> = {
  vi: ["TIN CÔNG NGHỆ", "DỰ ÁN TIÊU BIỂU", "SỰ KIỆN NỘI BỘ", "THỊ TRƯỜNG"],
  en: ["TECH NEWS", "FEATURED PROJECTS", "INTERNAL EVENTS", "MARKET"],
  zh: ["技术新闻", "特色项目", "内部活动", "市场"],
};

export const newsTranslations: Record<Language, {
  title: string;
  subtitle: string;
  viewAll: string;
  readMore: string;
}> = {
  vi: {
    title: "TIN TỨC & SỰ KIỆN POURIN",
    subtitle: "Cập nhật những tin tức mới nhất về công nghệ và đổi mới",
    viewAll: "Xem tất cả tin tức",
    readMore: "Đọc tiếp",
  },
  en: {
    title: "POURIN NEWS & EVENTS",
    subtitle: "Cập nhật những tin tức mới nhất về công nghệ và đổi mới",
    viewAll: "View all news",
    readMore: "Read more",
  },
  zh: {
    title: "POURIN 新闻与活动",
    subtitle: "Cập nhật những tin tức mới nhất về công nghệ và đổi mới",
    viewAll: "查看所有新闻",
    readMore: "阅读更多",
  },
};