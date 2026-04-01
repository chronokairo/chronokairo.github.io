const InvisibleScarsIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scars-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#scars-grad)" width="400" height="250" />
    {/* Book (visual novel) */}
    <rect x="50" y="100" width="60" height="80" rx="4" fill="currentColor" fillOpacity="0.2" />
    <rect x="55" y="105" width="50" height="5" rx="2" fill="currentColor" fillOpacity="0.3" />
    <rect x="55" y="115" width="40" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="55" y="125" width="45" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    <rect x="55" y="135" width="35" height="3" rx="1" fill="currentColor" fillOpacity="0.2" />
    {/* Clock (timeless) */}
    <circle cx="300" cy="80" r="25" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeOpacity="0.2" />
    <line x1="300" y1="80" x2="300" y2="65" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    <line x1="300" y1="80" x2="310" y2="80" stroke="currentColor" strokeOpacity="0.6" strokeWidth="2" />
    {/* Sword (soulslike) */}
    <rect x="180" y="120" width="4" height="60" fill="currentColor" fillOpacity="0.3" />
    <polygon points="178,120 182,120 185,100 177,100" fill="currentColor" fillOpacity="0.4" />
    {/* Shield */}
    <ellipse cx="250" cy="160" rx="15" ry="25" fill="currentColor" fillOpacity="0.15" />
    <rect x="245" y="155" width="10" height="10" rx="2" fill="currentColor" fillOpacity="0.2" />
  </svg>
);

export default InvisibleScarsIllustration;