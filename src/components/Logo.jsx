import './Logo.css'

function Logo({ className = '' }) {
  return (
    <div className={`logo-container ${className}`}>
      <svg
        viewBox="0 0 200 80"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Sound wave icons - left (bənövşəyi) */}
        <g className="sound-wave-left">
          <rect x="10" y="25" width="4" height="8" rx="2" fill="currentColor" />
          <rect x="16" y="20" width="4" height="18" rx="2" fill="currentColor" />
          <rect x="22" y="15" width="4" height="28" rx="2" fill="currentColor" />
          <rect x="28" y="10" width="4" height="38" rx="2" fill="currentColor" />
        </g>

        {/* Central circular graphic (gümüşü kontur, bənövşəyi vurğu) */}
        <circle cx="100" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="2" className="logo-circle" />
        <circle cx="100" cy="30" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="logo-circle" />
        <circle cx="100" cy="30" r="12" fill="none" stroke="currentColor" strokeWidth="1" className="logo-circle" />
        <rect x="92" y="20" width="3" height="20" rx="1.5" fill="currentColor" className="logo-bar" />
        <rect x="97" y="15" width="3" height="30" rx="1.5" fill="currentColor" className="logo-bar" />
        <rect x="102" y="18" width="3" height="24" rx="1.5" fill="currentColor" className="logo-bar" />
        <rect x="107" y="22" width="3" height="16" rx="1.5" fill="currentColor" className="logo-bar" />

        {/* Sound wave - right (bənövşəyi) */}
        <g className="sound-wave-right">
          <rect x="172" y="10" width="4" height="38" rx="2" fill="currentColor" />
          <rect x="178" y="15" width="4" height="28" rx="2" fill="currentColor" />
          <rect x="184" y="20" width="4" height="18" rx="2" fill="currentColor" />
          <rect x="190" y="25" width="4" height="8" rx="2" fill="currentColor" />
        </g>

        <line x1="50" y1="50" x2="65" y2="50" stroke="currentColor" strokeWidth="2" className="logo-line" />
        <text x="100" y="58" textAnchor="middle" className="logo-text-main">
          BARİYER PM
        </text>
        <line x1="135" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="2" className="logo-line" />
        <line x1="30" y1="68" x2="50" y2="68" stroke="currentColor" strokeWidth="1.5" className="logo-line" />
        <line x1="150" y1="68" x2="170" y2="68" stroke="currentColor" strokeWidth="1.5" className="logo-line" />
        <text x="100" y="75" textAnchor="middle" className="logo-text-tagline">
          SOUND INSULATION
        </text>
      </svg>
    </div>
  )
}

export default Logo
