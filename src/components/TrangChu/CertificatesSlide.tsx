import React, { useState } from "react";

type logo = {
  src: string;
  alt: string;
};
// Dữ liệu logos - chỉ cần sửa ở đây
const LOGOS = [
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-05-33_bydakt.png", alt: "ASME S and U stamps" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-06-03_w2wf3x.png", alt: "NB Certificate" },
  { src: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/03c8442d-88ca-46d2-95f9-3885a43d59f4.jpg", alt: "ISO 9001" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-05-33_bydakt.png", alt: "ASME S and U stamps" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-06-03_w2wf3x.png", alt: "NB Certificate" },
  { src: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/03c8442d-88ca-46d2-95f9-3885a43d59f4.jpg", alt: "ISO 9001" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-05-33_bydakt.png", alt: "ASME S and U stamps" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-06-03_w2wf3x.png", alt: "NB Certificate" },
  { src: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/03c8442d-88ca-46d2-95f9-3885a43d59f4.jpg", alt: "ISO 9001" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-05-33_bydakt.png", alt: "ASME S and U stamps" },
  { src: "https://res.cloudinary.com/doooncpse/image/upload/v1764205651/Snipaste_2025-11-27_08-06-03_w2wf3x.png", alt: "NB Certificate" },
  { src: "https://omo-oss-image.thefastimg.com/portal-saas/new2023073020144267311/cms/image/03c8442d-88ca-46d2-95f9-3885a43d59f4.jpg", alt: "ISO 9001" },
];

const LogoItem: React.FC<{ logo: logo }> = ({ logo }) => (
  <div className="relative flex-shrink-0 w-[100px] md:w-[120px] lg:w-[140px] flex justify-center items-center text-center">
    <span className="relative inline-block">
      <img
        src={logo.src}
        alt={logo.alt}
        width={100}
        height={150}
        draggable={false}
        className="object-contain"
      />
      <span className="block mt-2 text-sm text-gray-600">
        {logo.alt}
      </span>
    </span>
  </div>
);

const CertificatesSlide = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <div className="relative mt-5 w-full px-4 md:px-20 lg:px-40">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div 
        className=""
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Một hàng duy nhất chạy từ phải sang trái */}
        <div className="overflow-hidden cursor-default">
          <div
            className="flex whitespace-nowrap gap-10"
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {/* Lặp lại 2 lần để tạo hiệu ứng liên tục */}
            {[...LOGOS, ...LOGOS].map((logo, idx) => (
              <LogoItem key={`logo-${idx}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesSlide;