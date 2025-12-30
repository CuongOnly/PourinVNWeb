"use client";
import React from 'react';

interface NavigationButtonProps {
  sectionNumber: number;
  title: string;
  currentSection: number;
  getColor: () => string;
  scrollToSection: (sectionNumber: number) => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  sectionNumber,
  title,
  currentSection,
  getColor,
  scrollToSection
}) => {
  const isActive = currentSection === sectionNumber;
  const color = getColor();

  return (
    <button
      onClick={() => scrollToSection(sectionNumber)}
      className="relative flex items-center justify-center group"
      aria-label={`Navigate to ${title}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {/* Ping animation khi active - KÍCH THƯỚC NHỎ HƠN */}
      {isActive && (
        <div 
          className="absolute rounded-full border-2 animate-ping"
          style={{
            width: '32px',
            height: '32px',
            borderColor: color,
            animationDuration: '1.5s'
          }}
          aria-hidden="true"
        />
      )}
      
      {/* Nút chính - KÍCH THƯỚC NHỎ HƠN */}
      <div 
        className="rounded-full cursor-pointer relative transition-all duration-500 hover:scale-110"
        style={{
          width: isActive ? '24px' : '8px',
          height: isActive ? '24px' : '8px',
          backgroundColor: isActive ? color : '#9ca3af',
          boxShadow: isActive ? `0 4px 12px -2px ${color}80` : 'none',
        }}
        aria-hidden="true"
      >
        {/* Hiệu ứng pulse bên trong khi active - KÍCH THƯỚC NHỎ HƠN */}
        {isActive && (
          <div 
            className="absolute inset-1 rounded-full animate-pulse"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
            aria-hidden="true"
          />
        )}
      </div>
      
      {/* Số hiển thị khi active - KÍCH THƯỚC NHỎ HƠN */}
      <span 
        className="absolute font-bold text-white text-sm pointer-events-none z-10 transition-all duration-500"
        style={{
          opacity: isActive ? 1 : 0,
          transform: isActive ? 'scale(1)' : 'scale(0)'
        }}
        aria-hidden="true"
      >
        {sectionNumber + 1}
      </span>
      
      {/* Tooltip hiển thị khi hover */}
      {!isActive && (
        <div 
          className="absolute left-full ml-3 px-2 py-1.5 rounded-lg bg-white border border-gray-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-50"
          role="tooltip"
        >
          <span className="font-medium text-gray-800 text-xs">{title}</span>
        </div>
      )}

      <span className="sr-only">
        {title} {isActive ? '(current section)' : ''}
      </span>
    </button>
  );
};

export default NavigationButton;