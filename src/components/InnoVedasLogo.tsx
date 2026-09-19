import React from 'react';

interface InnoVedasLogoProps {
  variant?: 'dark-bg' | 'light-bg' | 'gold-bg';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const InnoVedasLogo: React.FC<InnoVedasLogoProps> = ({
  variant = 'dark-bg',
  size = 'md',
  showText = true,
  className = '',
}) => {
  // Dimensions
  const sizeMap = {
    sm: { icon: 34, title: 'text-base', sub: 'text-[9px]' },
    md: { icon: 42, title: 'text-lg', sub: 'text-[10px]' },
    lg: { icon: 54, title: 'text-2xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  // Palette styling
  // Primary Dark Blue: #0A1828
  // Turquoise: #178582
  // Gold: #BFA181
  const isDarkBg = variant === 'dark-bg';
  const circleFill = isDarkBg ? '#0A1828' : '#BFA181';
  const circleBorder = isDarkBg ? '#BFA181' : '#0A1828';
  const iconStroke = isDarkBg ? '#BFA181' : '#0A1828';
  const iconFill = isDarkBg ? '#BFA181' : '#0A1828';
  const textPrimary = isDarkBg ? 'text-white' : 'text-[#0A1828]';
  const textSecondary = isDarkBg ? 'text-[#BFA181]' : 'text-[#178582]';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblem SVG */}
      <div 
        className="relative flex-shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
        style={{
          width: currentSize.icon + 4,
          height: currentSize.icon + 4,
          background: circleFill,
          border: `1.5px solid ${circleBorder}`,
          boxShadow: isDarkBg ? '0 0 16px rgba(191, 161, 129, 0.18)' : '0 2px 8px rgba(10, 24, 40, 0.12)'
        }}
      >
        <svg
          viewBox="0 0 200 200"
          width={currentSize.icon}
          height={currentSize.icon}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1"
        >
          {/* Cradling Open Hand at the bottom */}
          <g stroke={iconStroke} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            {/* Hand wrist and palm contour */}
            <path d="M48 152 L62 168 C66 172 73 172 77 168 L98 147 C103 142 110 142 115 146 L134 159 C138 162 144 161 147 157 L158 141 C160 137 159 133 155 130 L136 118" />
            <path d="M52 148 L80 125 C84 122 90 122 94 125 L116 140" />
            <path d="M60 166 L42 148 C39 145 39 140 42 137 L56 123" />
          </g>

          {/* Open Book beneath bulb and above hand */}
          <g stroke={iconStroke} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Left page */}
            <path d="M100 120 C82 108 55 110 38 122 L45 98 C62 88 84 90 100 102 Z" />
            {/* Right page */}
            <path d="M100 120 C118 108 145 110 162 122 L155 98 C138 88 116 90 100 102 Z" />
            {/* Center spine */}
            <line x1="100" y1="102" x2="100" y2="122" />
          </g>

          {/* Circuit nodes branching left and right */}
          <g stroke={iconStroke} strokeWidth="4.5" strokeLinecap="round">
            {/* Left branch 1 */}
            <path d="M42 100 H26 V84 H18" />
            <circle cx="16" cy="84" r="5" fill={iconFill} />
            {/* Left branch 2 */}
            <path d="M38 110 H22 V122" />
            <circle cx="22" cy="124" r="4.5" fill={iconFill} />

            {/* Right branch 1 */}
            <path d="M158 100 H174 V84 H182" />
            <circle cx="184" cy="84" r="5" fill={iconFill} />
            {/* Right branch 2 */}
            <path d="M162 110 H178 V122" />
            <circle cx="178" cy="124" r="4.5" fill={iconFill} />
          </g>

          {/* Lightbulb base ribs / screw threads */}
          <g stroke={iconStroke} strokeWidth="5" strokeLinecap="round">
            <line x1="88" y1="94" x2="112" y2="94" />
            <line x1="85" y1="87" x2="115" y2="87" />
            <line x1="83" y1="80" x2="117" y2="80" />
            <line x1="80" y1="73" x2="120" y2="73" />
          </g>

          {/* Raised Fist inside the bulb (empowerment) */}
          <g stroke={iconStroke} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Fist outline */}
            <path d="M92 72 V58 C92 56 94 54 96 54 C98 54 100 56 100 58 V72" />
            <path d="M96 54 C98 51 103 51 105 54 V72" />
            <path d="M105 54 C107 51 112 51 114 54 V72" />
            {/* Thumb tucked across */}
            <path d="M88 64 C88 60 92 60 94 62 L94 72" />
            {/* Upward arrow / radiant burst */}
            <path d="M80 62 L80 48 M76 52 L80 48 L84 52" strokeWidth="4" />
            {/* Little energy ticks */}
            <line x1="72" y1="42" x2="76" y2="45" strokeWidth="3" />
            <line x1="124" y1="42" x2="120" y2="45" strokeWidth="3" />
          </g>

          {/* Stylized lightbulb contour & swirling "brain/spark" vortex top */}
          <g stroke={iconStroke} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Lower bulb curve */}
            <path d="M80 73 C72 65 68 54 72 40 C76 26 90 18 100 18 C115 18 128 27 129 42 C130 54 126 65 120 73" />
            
            {/* Swirling brain vortex / cosmic spark spirals at top */}
            <path d="M100 18 C92 12 78 18 78 28 C78 38 90 42 100 36 C112 30 118 18 108 10 C96 2 80 8 74 20" strokeWidth="4.5" />
            <path d="M92 26 C90 22 95 18 100 19 C105 20 107 26 102 28 C98 30 94 28 92 26 Z" fill={iconFill} />
          </g>
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold tracking-tight ${currentSize.title} ${textPrimary} font-['Outfit']`}>
              Inno<span className="text-[#BFA181]">Vedas</span>
            </span>
          </div>
          <span className={`font-medium tracking-wider uppercase text-[#178582] ${currentSize.sub}`}>
            EdTech Pvt. Ltd.
          </span>
        </div>
      )}
    </div>
  );
};
