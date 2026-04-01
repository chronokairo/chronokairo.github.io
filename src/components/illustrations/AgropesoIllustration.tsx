const FlutterIcon = () => (
  <g transform="translate(300, 12)">
    <polygon points="0,32 20,12 34,26 14,46" fill="#02569B" />
    <polygon points="0,60 14,46 34,66 20,80" fill="#0175C2" />
    <polygon points="14,46 34,26 48,40 28,60" fill="#13B9FD" />
  </g>
);

const SQLiteIcon = () => (
  <g transform="translate(330, 10)">
    <ellipse cx="18" cy="10" rx="18" ry="8" fill="#003B57" />
    <rect x="0" y="10" width="36" height="20" fill="#005D8F" />
    <ellipse cx="18" cy="30" rx="18" ry="8" fill="#003B57" />
  </g>
);

const AgropesoIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="agro-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#agro-grad)" width="400" height="250" />
    <rect x="150" y="180" width="100" height="15" rx="2" fill="currentColor" fillOpacity="0.2" />
    <rect x="190" y="140" width="20" height="40" fill="currentColor" fillOpacity="0.15" />
    <rect x="170" y="130" width="60" height="15" rx="4" fill="currentColor" fillOpacity="0.2" />
    <rect x="175" y="85" width="50" height="35" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
    <text x="200" y="108" fontSize="14" fill="currentColor" fillOpacity="0.6" textAnchor="middle" fontWeight="bold">450kg</text>
    <ellipse cx="80" cy="145" rx="35" ry="25" fill="currentColor" fillOpacity="0.1" />
    <ellipse cx="55" cy="130" rx="15" ry="12" fill="currentColor" fillOpacity="0.1" />
    <rect x="60" y="165" width="6" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="75" y="165" width="6" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="90" y="165" width="6" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="100" y="165" width="6" height="20" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="280" y="60" width="100" height="130" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.1" />
    <rect x="290" y="75" width="80" height="8" rx="2" fill="currentColor" fillOpacity="0.15" />
    <rect x="290" y="93" width="60" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="290" y="108" width="70" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="290" y="123" width="55" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="290" y="138" width="65" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="290" y="153" width="50" height="6" rx="2" fill="currentColor" fillOpacity="0.1" />
    <FlutterIcon />
    <SQLiteIcon />
  </svg>
);

export default AgropesoIllustration;
