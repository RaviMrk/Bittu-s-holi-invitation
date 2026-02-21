export function Pichkari({ className = "", color1 = "#ff1493", color2 = "#fbbf24" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tank */}
      <rect x="15" y="40" width="40" height="50" rx="8" fill={color1} opacity="0.85" />
      <rect x="20" y="45" width="30" height="20" rx="4" fill="white" opacity="0.25" />
      {/* Barrel */}
      <rect x="55" y="55" width="50" height="12" rx="4" fill={color2} opacity="0.9" />
      <rect x="100" y="52" width="8" height="18" rx="3" fill={color2} />
      {/* Nozzle tip */}
      <circle cx="112" cy="61" r="5" fill={color1} opacity="0.7" />
      {/* Handle */}
      <rect x="25" y="90" width="20" height="10" rx="4" fill={color2} opacity="0.8" />
      {/* Water splash from nozzle */}
      <circle cx="120" cy="55" r="3" fill={color1} opacity="0.4" />
      <circle cx="118" cy="65" r="2" fill={color2} opacity="0.3" />
      <circle cx="122" cy="60" r="2.5" fill={color1} opacity="0.3" />
    </svg>
  );
}

export function GulalBowl({ className = "", color = "#ff6b35" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bowl */}
      <ellipse cx="50" cy="70" rx="38" ry="18" fill={color} opacity="0.3" />
      <path d="M15 55 Q15 80 50 80 Q85 80 85 55 L80 55 Q78 72 50 72 Q22 72 20 55 Z" fill={color} opacity="0.7" />
      <ellipse cx="50" cy="55" rx="35" ry="14" fill={color} opacity="0.85" />
      {/* Powder mound */}
      <ellipse cx="50" cy="52" rx="25" ry="10" fill={color} />
      <ellipse cx="50" cy="50" rx="18" ry="7" fill="white" opacity="0.2" />
      {/* Floating powder particles */}
      <circle cx="35" cy="38" r="3" fill={color} opacity="0.5" />
      <circle cx="55" cy="35" r="2.5" fill={color} opacity="0.4" />
      <circle cx="65" cy="40" r="2" fill={color} opacity="0.45" />
      <circle cx="42" cy="32" r="1.5" fill={color} opacity="0.35" />
      <circle cx="60" cy="30" r="2" fill={color} opacity="0.3" />
    </svg>
  );
}

export function ColorBalloon({ className = "", color = "#3b82f6" }) {
  return (
    <svg className={className} viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Balloon */}
      <ellipse cx="30" cy="32" rx="22" ry="28" fill={color} opacity="0.8" />
      <ellipse cx="24" cy="24" rx="6" ry="8" fill="white" opacity="0.2" />
      {/* Knot */}
      <polygon points="28,58 32,58 30,64" fill={color} opacity="0.9" />
      {/* String */}
      <path d="M30 64 Q25 72 32 80 Q28 85 30 90" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
    </svg>
  );
}

export function Dhol({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="50" cy="85" rx="32" ry="12" fill="#c7930f" opacity="0.4" />
      <rect x="20" y="25" width="60" height="55" rx="6" fill="#d4a017" opacity="0.8" />
      {/* Drum skins */}
      <ellipse cx="50" cy="25" rx="30" ry="12" fill="#fde68a" opacity="0.9" />
      <ellipse cx="50" cy="80" rx="30" ry="12" fill="#fde68a" opacity="0.7" />
      {/* Decorative bands */}
      <rect x="20" y="42" width="60" height="4" rx="2" fill="#ff1493" opacity="0.6" />
      <rect x="20" y="56" width="60" height="4" rx="2" fill="#10b981" opacity="0.6" />
      {/* Zig-zag rope */}
      <path d="M24 30 L30 50 L24 70 M76 30 L70 50 L76 70" stroke="#c7930f" strokeWidth="2" opacity="0.6" />
      {/* Sticks */}
      <line x1="8" y1="35" x2="35" y2="55" stroke="#8b4513" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <line x1="92" y1="35" x2="65" y2="55" stroke="#8b4513" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

export function ColorPowderHand({ className = "", color = "#8b5cf6" }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big splash cloud */}
      <circle cx="40" cy="30" r="18" fill={color} opacity="0.25" />
      <circle cx="32" cy="25" r="12" fill={color} opacity="0.3" />
      <circle cx="50" cy="28" r="10" fill={color} opacity="0.35" />
      <circle cx="40" cy="20" r="8" fill={color} opacity="0.4" />
      {/* Smaller particles */}
      <circle cx="25" cy="15" r="4" fill={color} opacity="0.3" />
      <circle cx="55" cy="18" r="3.5" fill={color} opacity="0.25" />
      <circle cx="38" cy="10" r="3" fill={color} opacity="0.2" />
      <circle cx="48" cy="12" r="2.5" fill={color} opacity="0.3" />
      {/* Open palm */}
      <ellipse cx="40" cy="55" rx="14" ry="10" fill="#f5deb3" opacity="0.7" />
      <rect x="28" y="42" width="5" height="14" rx="2.5" fill="#f5deb3" opacity="0.65" />
      <rect x="34" y="38" width="5" height="18" rx="2.5" fill="#f5deb3" opacity="0.65" />
      <rect x="40" y="37" width="5" height="18" rx="2.5" fill="#f5deb3" opacity="0.65" />
      <rect x="46" y="40" width="5" height="16" rx="2.5" fill="#f5deb3" opacity="0.65" />
      {/* Color on palm */}
      <ellipse cx="40" cy="52" rx="8" ry="5" fill={color} opacity="0.4" />
    </svg>
  );
}

export function Thandai({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 70 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glass */}
      <path d="M18 25 L15 80 Q15 90 35 90 Q55 90 55 80 L52 25 Z" fill="#fef3c7" opacity="0.7" />
      <path d="M18 25 L15 80 Q15 90 35 90 Q55 90 55 80 L52 25 Z" stroke="#d4a017" strokeWidth="1.5" opacity="0.4" />
      {/* Drink */}
      <path d="M20 30 L17 75 Q17 85 35 85 Q53 85 53 75 L50 30 Z" fill="#fbbf24" opacity="0.4" />
      {/* Foam top */}
      <ellipse cx="35" cy="27" rx="17" ry="6" fill="white" opacity="0.5" />
      <ellipse cx="35" cy="26" rx="14" ry="4" fill="#fef3c7" opacity="0.6" />
      {/* Garnish */}
      <circle cx="30" cy="24" r="2" fill="#10b981" opacity="0.6" />
      <circle cx="38" cy="23" r="1.5" fill="#ff6b35" opacity="0.5" />
      {/* Almonds */}
      <ellipse cx="28" cy="50" rx="3" ry="1.5" fill="#d4a017" opacity="0.3" transform="rotate(-20 28 50)" />
      <ellipse cx="40" cy="60" rx="3" ry="1.5" fill="#d4a017" opacity="0.25" transform="rotate(15 40 60)" />
    </svg>
  );
}
