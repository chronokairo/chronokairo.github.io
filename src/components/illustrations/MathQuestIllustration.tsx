const MathQuestIllustration = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="math-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect fill="url(#math-grad)" width="400" height="250" />
    {/* Math symbols */}
    <text x="50" y="80" fontSize="40" fill="currentColor" fillOpacity="0.6">π</text>
    <text x="100" y="80" fontSize="30" fill="currentColor" fillOpacity="0.6">∫</text>
    <text x="140" y="80" fontSize="35" fill="currentColor" fillOpacity="0.6">∑</text>
    <text x="190" y="80" fontSize="32" fill="currentColor" fillOpacity="0.6">√</text>
    {/* Quiz bubbles */}
    <ellipse cx="300" cy="60" rx="40" ry="25" fill="currentColor" fillOpacity="0.1" />
    <text x="300" y="68" fontSize="12" fill="currentColor" fillOpacity="0.7" textAnchor="middle">2+2=?</text>
    <ellipse cx="320" cy="100" rx="35" ry="20" fill="currentColor" fillOpacity="0.1" />
    <text x="320" y="108" fontSize="10" fill="currentColor" fillOpacity="0.7" textAnchor="middle">4</text>
    {/* AI brain */}
    <ellipse cx="80" cy="150" rx="30" ry="20" fill="currentColor" fillOpacity="0.15" />
    <ellipse cx="80" cy="140" rx="15" ry="10" fill="currentColor" fillOpacity="0.2" />
    <rect x="65" y="160" width="30" height="10" rx="5" fill="currentColor" fillOpacity="0.1" />
    {/* Equation */}
    <text x="200" y="180" fontSize="18" fill="currentColor" fillOpacity="0.6">E = mc²</text>
  </svg>
);

export default MathQuestIllustration;