import React, { useState } from 'react';
import { GraduationCap, Zap, Landmark, Building2, Users, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HeroNodeVisualProps {
  currentLang: Language;
}

export const HeroNodeVisual: React.FC<HeroNodeVisualProps> = ({ currentLang }) => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 1,
      nameEn: "Education",
      nameHi: "शिक्षा",
      subEn: "Schools, Colleges & Exam Prep",
      subHi: "स्कूल, कॉलेज व प्रतियोगी परीक्षाएं",
      icon: GraduationCap,
      angle: -90, // Top
      color: "#BFA181", // Gold
      distance: 145,
    },
    {
      id: 2,
      nameEn: "Skills",
      nameHi: "कौशल",
      subEn: "Vernacular Micro-learning",
      subHi: "मातृभाषा में सूक्ष्म-कौशल",
      icon: Zap,
      angle: -18, // Top-Right
      color: "#178582", // Turquoise
      distance: 145,
    },
    {
      id: 3,
      nameEn: "Government",
      nameHi: "शासन व प्रशासन",
      subEn: "e-Gov & Field Assistants",
      subHi: "प्रशासनिक फाइलें व कार्यप्रणाली",
      icon: Landmark,
      angle: 54, // Bottom-Right
      color: "#BFA181",
      distance: 145,
    },
    {
      id: 4,
      nameEn: "Business",
      nameHi: "व्यापार व उद्योग",
      subEn: "Local Brands & Growth",
      subHi: "स्थानीय ब्रांड्स व AI मार्केटिंग",
      icon: Building2,
      angle: 126, // Bottom-Left
      color: "#178582",
      distance: 145,
    },
    {
      id: 5,
      nameEn: "Citizens",
      nameHi: "नागरिक",
      subEn: "Inclusive AI Literacy",
      subHi: "सुलभ AI साक्षरता व सशक्तिकरण",
      icon: Users,
      angle: 198, // Top-Left
      color: "#BFA181",
      distance: 145,
    },
  ];

  // Center coordinate of SVG
  const cx = 200;
  const cy = 200;

  return (
    <div className="relative w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background ambient orbit circles */}
      <div className="absolute inset-0 rounded-full border border-[#178582]/15 pointer-events-none" />
      <div className="absolute inset-10 rounded-full border border-[#BFA181]/15 pointer-events-none" />
      <div className="absolute inset-20 rounded-full border border-dashed border-[#178582]/20 pointer-events-none animate-[spin_120s_linear_infinite]" />

      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full select-none overflow-visible"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#178582" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#BFA181" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#178582" stopOpacity="0.2" />
          </linearGradient>

          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Radiating connecting lines from Center to 5 Outer Nodes */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);

          const isHovered = activeNode === node.id;

          return (
            <g key={`line-${node.id}`}>
              {/* Outer connecting line */}
              <line
                x1={cx}
                y1={cy}
                x2={x}
                y2={y}
                stroke={isHovered ? "#BFA181" : "#178582"}
                strokeWidth={isHovered ? 2.5 : 1.5}
                strokeDasharray={isHovered ? "none" : "4 4"}
                strokeOpacity={isHovered ? 1 : 0.45}
                className="transition-all duration-300"
              />

              {/* Animated subtle pulse packet moving outward along the line */}
              <circle
                r={isHovered ? 3.5 : 2.5}
                fill={node.color}
                opacity={0.8}
              >
                <animateMotion
                  path={`M ${cx} ${cy} L ${x} ${y}`}
                  dur={`${3 + node.id * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* CENTRAL NODE: INNOVEDAS AI CORE */}
        <g 
          className="cursor-pointer group"
          onClick={() => setActiveNode(null)}
        >
          {/* Outer glow ring */}
          <circle 
            cx={cx} 
            cy={cy} 
            r="44" 
            fill="#0A1828" 
            stroke="#BFA181" 
            strokeWidth="2" 
            filter="url(#softGlow)"
          />
          <circle 
            cx={cx} 
            cy={cy} 
            r="38" 
            fill="#0F2238" 
            stroke="#178582" 
            strokeWidth="1.5" 
          />
          {/* Subtle inner concentric orbit */}
          <circle 
            cx={cx} 
            cy={cy} 
            r="28" 
            fill="none" 
            stroke="#BFA181" 
            strokeWidth="1" 
            strokeDasharray="2 3"
            opacity="0.6"
          />

          {/* Central AI / InnoVedas Label */}
          <text 
            x={cx} 
            y={cy - 6} 
            textAnchor="middle" 
            fill="#FFFFFF" 
            fontSize="11" 
            fontWeight="700" 
            letterSpacing="0.05em"
            fontFamily="'Outfit', sans-serif"
          >
            InnoVedas
          </text>
          <text 
            x={cx} 
            y={cy + 10} 
            textAnchor="middle" 
            fill="#BFA181" 
            fontSize="9.5" 
            fontWeight="600" 
            letterSpacing="0.1em"
          >
            AI CORE
          </text>
        </g>

        {/* FIVE PERIPHERAL LABELED NODES */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const x = cx + node.distance * Math.cos(rad);
          const y = cy + node.distance * Math.sin(rad);
          const isHovered = activeNode === node.id;

          const label = currentLang === 'en' ? node.nameEn : node.nameHi;

          return (
            <g
              key={`node-${node.id}`}
              className="cursor-pointer transition-transform duration-200"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              {/* Outer hover bubble */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? 27 : 23}
                fill="#0A1828"
                stroke={isHovered ? "#BFA181" : "#178582"}
                strokeWidth={isHovered ? 2 : 1.5}
                className="transition-all duration-300"
                style={{
                  filter: isHovered ? "drop-shadow(0 0 10px rgba(191,161,129,0.5))" : undefined
                }}
              />

              <circle
                cx={x}
                cy={y}
                r={isHovered ? 21 : 18}
                fill={isHovered ? "#178582" : "#0F243A"}
                className="transition-all duration-300"
              />

              {/* Node Label underneath or above node */}
              <text
                x={x}
                y={node.angle > 0 ? y + 36 : y - 30}
                textAnchor="middle"
                fill={isHovered ? "#FFFFFF" : "#E2E8F0"}
                fontSize={isHovered ? "11.5" : "11"}
                fontWeight={isHovered ? "700" : "600"}
                className="transition-all duration-200"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* HTML OVERLAY FOR ACTIVE NODE MICRO-DETAIL */}
      {activeNode && (
        <div className="absolute bottom-1 bg-[#0A1828]/95 border border-[#BFA181]/40 px-3.5 py-1.5 rounded-full shadow-lg text-center backdrop-blur-md animate-in fade-in zoom-in-95 duration-150">
          <div className="text-xs font-semibold text-[#BFA181] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#BFA181]" />
            <span>
              {currentLang === 'en' 
                ? nodes.find(n => n.id === activeNode)?.subEn 
                : nodes.find(n => n.id === activeNode)?.subHi}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
