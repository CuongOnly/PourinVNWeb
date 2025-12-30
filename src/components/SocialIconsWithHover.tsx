'use client';

import React, { useState } from 'react';
import { FaPhone, FaFacebookMessenger, FaComment } from 'react-icons/fa';
import { SiZalo } from "react-icons/si";

const ContactIconsWithTooltip = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const contactLinks = [
    {
      name: 'Messenger',
      href: 'https://m.me/Pourinvietnam',
      color: 'bg-[#0084ff]',
      icon: <FaFacebookMessenger className="w-5 h-5" />,
      tooltip: 'Chat on Messenger'
    },
    {
      name: 'Zalo',
      href: 'https://zalo.me/0356729138',
      color: 'bg-[#0068ff]',
      icon: <SiZalo className="w-5 h-5" />,
      tooltip: 'Chat on Zalo'
    },
    {
      name: 'Điện thoại',
      href: 'tel:+840356729138',
      color: 'bg-green-500',
      icon: <FaPhone className="w-5 h-5" />,
      tooltip: '+840356729138'
    },
  ];

  return (
    <ul className="flex flex-col justify-center gap-3 items-center">
      {contactLinks.map((contact) => (
        <li key={contact.name} className="relative">
          {/* Tooltip hiển thị ở giữa bên trái */}
          <div
            className={`absolute top-1/2 left-full ml-3 transform -translate-y-1/2 
  text-white px-3 py-2 rounded-xl text-sm font-medium 
  transition-all duration-300 ease-out pointer-events-none whitespace-nowrap
  ${contact.color}
  ${activeTooltip === contact.name
                ? 'opacity-100 visible translate-x-0'
                : 'opacity-0 invisible -translate-x-2'
              }`}
          >
            {contact.tooltip}

            {/* Mũi tên chỉ vào icon */}
            <div
              className={`absolute top-1/2 -left-2 transform -translate-y-1/2 
    w-0 h-0 border-t-[6px] border-t-transparent 
    border-r-[6px]
    ${contact.name === 'Messenger'
                  ? 'border-r-[#0084ff]'
                  : contact.name === 'Zalo'
                    ? 'border-r-[#0068ff]'
                    : 'border-r-green-500'
                }
    border-b-[6px] border-b-transparent`}
            />
          </div>

          <a
            href={contact.href}
            aria-label={contact.name}
            target={contact.name !== 'Điện thoại' ? '_blank' : '_self'}
            rel={contact.name !== 'Điện thoại' ? 'noopener noreferrer' : ''}
            className="relative overflow-hidden flex justify-center items-center w-12 h-12 rounded-2xl text-gray-600 bg-white transition-all duration-300 ease-in-out hover:shadow-xl hover:text-white group border border-gray-200"
            onMouseEnter={() => setActiveTooltip(contact.name)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            <div
              className={`absolute top-auto bottom-0 left-0 w-full h-0 transition-all duration-300 ease-in-out ${contact.color
                } group-hover:h-full`}
            ></div>
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              {contact.icon}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactIconsWithTooltip;