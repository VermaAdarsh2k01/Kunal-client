import React, { useState } from 'react';

const SvgButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      className={`navbar-toggler ${isExpanded ? 'expanded' : 'collapsed'}`}
      type="button"
      aria-controls="siteNavigation"
      aria-expanded={isExpanded}
      aria-label="Toggle navigation"
      onClick={toggleExpansion}
    >
      <svg viewBox="0 0 800 600">
        <path
          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
          id="top"
          stroke="#FFFFFF"
          fill="none"
          strokeWidth="22px"
        ></path>
        <path
          d="M300,320 L540,320"
          id="middle"
          stroke="#FFFFFF"
          fill="none"
          strokeWidth="22px"
        ></path>
        <path
          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
          id="bottom"
          transform="translate(480, 320) scale(1, -1) translate(-480, -318)"
          stroke="#FFFFFF"
          fill="none"
          strokeWidth="22px"
        ></path>
      </svg>
    </button>
  );
};

export default SvgButton;
