export interface Product {
  name: {
    vi: string;
    en: string;
    zh: string;
  };
  title: {
    vi: string;
    en: string;
    zh: string;
  };
  description: {
    vi: string;
    en: string;
    zh: string;
  };
  image: string;
}

export interface ProductCategory {
  id: number;
  name: {
    vi: string;
    en: string;
    zh: string;
  };
  title: {
    vi: string;
    en: string;
    zh: string;
  };
  description: {
    vi: string;
    en: string;
    zh: string;
  };
  buttonText: {
    vi: string;
    en: string;
    zh: string;
  };
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    id: 0,
    name: {
      vi: "Sản xuất Bọc lót",
      en: "Cladding Manufacturing",
      zh: "堆焊制造"
    },
    title: {
      vi: "Sản xuất Bọc lót (Cladding)",
      en: "Cladding Manufacturing",
      zh: "堆焊制造"
    },
    description: {
      vi: "Công nghệ bọc lót tiên tiến với các trạm hàn tự động",
      en: "Advanced cladding technology with automatic welding stations",
      zh: "采用自动焊接站的先进堆焊技术"
    },
    buttonText: {
      vi: "Bọc lót",
      en: "Cladding",
      zh: "堆焊"
    },
    products: [
      {
        name: {
          vi: "Bọc lót 180°",
          en: "180° Cladding",
          zh: "180°堆焊"
        },
        title: {
          vi: "Bọc lót 180° (10 trạm)",
          en: "180° Cladding (10 stations)",
          zh: "180°堆焊（10个工位）"
        },
        description: {
          vi: "Hệ thống bọc lót 180° với 10 trạm hàn tự động, đáp ứng nhu cầu sản xuất công nghiệp",
          en: "180° cladding system with 10 automatic welding stations, meeting industrial production needs",
          zh: "180°堆焊系统配备10个自动焊接站，满足工业生产需求"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
      },
      {
        name: {
          vi: "Bọc lót 360°",
          en: "360° Cladding",
          zh: "360°堆焊"
        },
        title: {
          vi: "Bọc lót 360° (12 trạm)",
          en: "360° Cladding (12 stations)",
          zh: "360°堆焊（12个工位）"
        },
        description: {
          vi: "Công nghệ bọc lót 360° toàn diện với 12 trạm hàn, cho độ bền và chính xác cao",
          en: "Comprehensive 360° cladding technology with 12 welding stations for high durability and precision",
          zh: "全面的360°堆焊技术，配备12个焊接站，提供高耐久性和精度"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
      },
      {
        name: {
          vi: "Vật liệu bọc",
          en: "Cladding Materials",
          zh: "堆焊材料"
        },
        title: {
          vi: "Vật liệu bọc chuyên dụng",
          en: "Specialized Cladding Materials",
          zh: "专用堆焊材料"
        },
        description: {
          vi: "Các loại vật liệu bọc chất lượng cao: Inco622, C276, ER309L và nhiều loại khác",
          en: "High-quality cladding materials: Inco622, C276, ER309L and many others",
          zh: "高质量堆焊材料：Inco622、C276、ER309L等多种材料"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
      },
      {
        name: {
          vi: "Ống composite",
          en: "Composite Pipes",
          zh: "复合管"
        },
        title: {
          vi: "Ống composite PW Metallurgical",
          en: "PW Metallurgical Composite Pipes",
          zh: "PW冶金复合管"
        },
        description: {
          vi: "Ống composite công nghệ fusion tiên tiến, độ bền cao và khả năng chống ăn mòn vượt trội",
          en: "Advanced fusion technology composite pipes with high durability and superior corrosion resistance",
          zh: "采用先进熔合技术的复合管，具有高耐久性和卓越的耐腐蚀性"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
      }
    ]
  },
  {
    id: 1,
    name: {
      vi: "Sản xuất Lò hơi",
      en: "Boiler Manufacturing",
      zh: "锅炉制造"
    },
    title: {
      vi: "Sản xuất Lò hơi (Boiler)",
      en: "Boiler Manufacturing",
      zh: "锅炉制造"
    },
    description: {
      vi: "Giải pháp lò hơi công nghiệp toàn diện",
      en: "Comprehensive industrial boiler solutions",
      zh: "全面的工业锅炉解决方案"
    },
    buttonText: {
      vi: "Lò hơi",
      en: "Boiler",
      zh: "锅炉"
    },
    products: [
      {
        name: {
          vi: "Tường lò",
          en: "Furnace Wall",
          zh: "炉墙"
        },
        title: {
          vi: "Tường lò Membrane Wall",
          en: "Membrane Wall Furnace",
          zh: "膜式壁炉墙"
        },
        description: {
          vi: "Sản xuất tường lò kết hợp prefab từ Trung Quốc và lắp ráp tại Việt Nam, đảm bảo chất lượng",
          en: "Furnace wall production combining Chinese prefab and Vietnamese assembly, ensuring quality",
          zh: "结合中国预制件和越南组装的炉墙生产，确保质量"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
      },
      {
        name: {
          vi: "Ống xoắn",
          en: "Coil Pipes",
          zh: "盘管"
        },
        title: {
          vi: "Ống xoắn Coil",
          en: "Coil Pipes",
          zh: "盘管"
        },
        description: {
          vi: "Quy trình sản xuất ống xoắn chuyên nghiệp, đáp ứng tiêu chuẩn kỹ thuật cao",
          en: "Professional coil pipe production process meeting high technical standards",
          zh: "专业的盘管生产工艺，满足高技术标准"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
      },
      {
        name: {
          vi: "Ống góp",
          en: "Header Pipes",
          zh: "集管"
        },
        title: {
          vi: "Ống góp Header",
          en: "Header Pipes",
          zh: "集管"
        },
        description: {
          vi: "Dây chuyền sản xuất ống góp đầy đủ tại Việt Nam, chất lượng đạt tiêu chuẩn quốc tế",
          en: "Complete header pipe production line in Vietnam, quality meets international standards",
          zh: "越南完整的集管生产线，质量达到国际标准"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
      }
    ]
  },
  {
    id: 2,
    name: {
      vi: "Lò thu hồi nhiệt",
      en: "Heat Recovery Boiler",
      zh: "热回收锅炉"
    },
    title: {
      vi: "Sản xuất Lò thu hồi nhiệt (HRSG)",
      en: "Heat Recovery Steam Generator (HRSG)",
      zh: "热回收蒸汽发生器（HRSG）"
    },
    description: {
      vi: "Hệ thống thu hồi nhiệt hiệu suất cao",
      en: "High efficiency heat recovery systems",
      zh: "高效热回收系统"
    },
    buttonText: {
      vi: "HRSG",
      en: "HRSG",
      zh: "HRSG"
    },
    products: [
      {
        name: {
          vi: "Vật liệu thường dùng",
          en: "Common Materials",
          zh: "常用材料"
        },
        title: {
          vi: "Vật liệu HRSG",
          en: "HRSG Materials",
          zh: "HRSG材料"
        },
        description: {
          vi: "Các loại vật liệu chuyên dụng thường dùng trong sản xuất lò thu hồi nhiệt",
          en: "Specialized materials commonly used in heat recovery boiler production",
          zh: "热回收锅炉生产中常用的专用材料"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
      },
      {
        name: {
          vi: "Năng lực sản xuất",
          en: "Production Capacity",
          zh: "生产能力"
        },
        title: {
          vi: "Năng lực sản xuất HRSG",
          en: "HRSG Production Capacity",
          zh: "HRSG生产能力"
        },
        description: {
          vi: "Khả năng sản xuất đa dạng: Ống vây, Ống góp, HARP, BOX với công nghệ tiên tiến",
          en: "Diverse production capabilities: Fin tubes, Headers, HARP, BOX with advanced technology",
          zh: "多样化的生产能力：翅片管、集管、HARP、BOX，采用先进技术"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
      },
      {
        name: {
          vi: "Thiết bị hàn ống",
          en: "Tube Welding Equipment",
          zh: "管焊接设备"
        },
        title: {
          vi: "Dây chuyền hàn ống vây xoắn ốc",
          en: "Spiral Fin Tube Welding Lines",
          zh: "螺旋翅片管焊接生产线"
        },
        description: {
          vi: "4 dây chuyền hàn ống vây xoắn ốc hiện đại, nâng cao hiệu suất sản xuất",
          en: "4 modern spiral fin tube welding lines, enhancing production efficiency",
          zh: "4条现代螺旋翅片管焊接生产线，提高生产效率"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
      },
      {
        name: {
          vi: "Quy trình sản xuất",
          en: "Production Process",
          zh: "生产工艺"
        },
        title: {
          vi: "Quy trình sản xuất HRSG",
          en: "HRSG Production Process",
          zh: "HRSG生产工艺"
        },
        description: {
          vi: "Quy trình sản xuất chuyên nghiệp: từ ống -> HARP -> BOX, đảm bảo chất lượng",
          en: "Professional production process: from tubes -> HARP -> BOX, ensuring quality",
          zh: "专业生产工艺：从管材→HARP→BOX，确保质量"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
      }
    ]
  },
  {
    id: 3,
    name: {
      vi: "Kết cấu thép",
      en: "Steel Structure",
      zh: "钢结构"
    },
    title: {
      vi: "Sản xuất Kết cấu thép",
      en: "Steel Structure Manufacturing",
      zh: "钢结构制造"
    },
    description: {
      vi: "Giải pháp kết cấu thép công nghiệp đa dạng",
      en: "Diverse industrial steel structure solutions",
      zh: "多样化的工业钢结构解决方案"
    },
    buttonText: {
      vi: "Kết cấu thép",
      en: "Steel Structure",
      zh: "钢结构"
    },
    products: [
      {
        name: {
          vi: "Bình áp lực",
          en: "Pressure Vessels",
          zh: "压力容器"
        },
        title: {
          vi: "Bình áp lực",
          en: "Pressure Vessels",
          zh: "压力容器"
        },
        description: {
          vi: "Thiết kế và sản xuất bình áp lực công nghiệp, đáp ứng tiêu chuẩn an toàn nghiêm ngặt",
          en: "Design and manufacture of industrial pressure vessels, meeting strict safety standards",
          zh: "工业压力容器的设计和制造，满足严格的安全标准"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
      },
      {
        name: {
          vi: "Pulp Washer",
          en: "Pulp Washer",
          zh: "纸浆洗涤机"
        },
        title: {
          vi: "Pulp Washer",
          en: "Pulp Washer",
          zh: "纸浆洗涤机"
        },
        description: {
          vi: "Máy rửa bột giấy công nghiệp, hiệu suất cao và độ bền vượt trội",
          en: "Industrial pulp washer with high efficiency and superior durability",
          zh: "工业纸浆洗涤机，效率高，耐久性卓越"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
      },
      {
        name: {
          vi: "Grate",
          en: "Grate",
          zh: "炉排"
        },
        title: {
          vi: "Grate",
          en: "Grate",
          zh: "炉排"
        },
        description: {
          vi: "Sản xuất grate chất lượng cao cho các ứng dụng công nghiệp và năng lượng",
          en: "High-quality grate production for industrial and energy applications",
          zh: "高质量炉排生产，适用于工业和能源应用"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
      },
      {
        name: {
          vi: "Heat Exchanger",
          en: "Heat Exchanger",
          zh: "热交换器"
        },
        title: {
          vi: "Heat Exchanger",
          en: "Heat Exchanger",
          zh: "热交换器"
        },
        description: {
          vi: "Thiết bị trao đổi nhiệt hiệu suất cao, ứng dụng trong nhiều ngành công nghiệp",
          en: "High efficiency heat exchanger applied in various industries",
          zh: "高效热交换器，应用于多个行业"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
      },
      {
        name: {
          vi: "Burner",
          en: "Burner",
          zh: "燃烧器"
        },
        title: {
          vi: "Burner",
          en: "Burner",
          zh: "燃烧器"
        },
        description: {
          vi: "Thiết bị đốt công nghiệp, tiết kiệm năng lượng và thân thiện môi trường",
          en: "Industrial burners with energy saving and environmental friendliness",
          zh: "工业燃烧器，节能环保"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/71f3dd62-3d34-4364-9601-c0db1e5bb93c.jpg",
      }
    ]
  },
  {
    id: 4,
    name: {
      vi: "Tấm kim loại",
      en: "Metal Plate Work",
      zh: "金属板加工"
    },
    title: {
      vi: "Sản xuất Tấm kim loại (Plate Work)",
      en: "Metal Plate Work Manufacturing",
      zh: "金属板加工制造"
    },
    description: {
      vi: "Gia công tấm kim loại chính xác",
      en: "Precision metal plate processing",
      zh: "精密金属板加工"
    },
    buttonText: {
      vi: "Tấm kim loại",
      en: "Plate Work",
      zh: "板金加工"
    },
    products: [
      {
        name: {
          vi: "Diverter",
          en: "Diverter",
          zh: "分流器"
        },
        title: {
          vi: "Diverter",
          en: "Diverter",
          zh: "分流器"
        },
        description: {
          vi: "Thiết bị chuyển hướng được gia công chính xác từ tấm kim loại chất lượng cao",
          en: "Precision manufactured diverter from high-quality metal plates",
          zh: "采用高质量金属板精密制造的分流器"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/ea5a2652-b522-48d2-9786-1678118b4d56.jpg",
      },
      {
        name: {
          vi: "Elbow",
          en: "Elbow",
          zh: "弯头"
        },
        title: {
          vi: "Elbow",
          en: "Elbow",
          zh: "弯头"
        },
        description: {
          vi: "Côn nối elbow được sản xuất với độ chính xác cao, đa dạng kích thước và góc độ",
          en: "High precision elbow connectors with various sizes and angles",
          zh: "高精度弯头连接件，多种尺寸和角度"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/11ed3532-1955-4ab0-8629-95b6d19bf53c.jpg",
      },
      {
        name: {
          vi: "Diffuser",
          en: "Diffuser",
          zh: "扩散器"
        },
        title: {
          vi: "Diffuser",
          en: "Diffuser",
          zh: "扩散器"
        },
        description: {
          vi: "Thiết bị khuếch tán được thiết kế tối ưu cho hiệu suất luồng khí cao nhất",
          en: "Optimally designed diffuser for maximum airflow performance",
          zh: "优化设计的扩散器，实现最佳气流性能"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/069ba49b-7746-40b9-a294-1e5ce4471db2.jpg",
      },
      {
        name: {
          vi: "Rotary drum",
          en: "Rotary Drum",
          zh: "转鼓"
        },
        title: {
          vi: "Rotary drum",
          en: "Rotary Drum",
          zh: "转鼓"
        },
        description: {
          vi: "Trống quay công nghiệp được gia công từ tấm kim loại chuyên dụng, độ bền cao",
          en: "Industrial rotary drum processed from specialized metal plates with high durability",
          zh: "采用专用金属板加工的工业转鼓，耐久性高"
        },
        image: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/7fdf1a7b-5cdd-4f8b-8199-1c6b75387774.jpg",
      }
    ]
  }
];