import React from 'react';

interface PaintPaysLogoProps {
  size?: number;
  className?: string;
}

export function PPMonogram({ size = 48, className = '' }: PaintPaysLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="4" fill="#0a0a0a" />
      {/* Left P */}
      <rect x="6" y="10" width="4" height="28" fill="#F5C518" />
      <rect x="6" y="10" width="12" height="4" fill="#F5C518" />
      <rect x="14" y="10" width="4" height="14" fill="#F5C518" />
      <rect x="6" y="20" width="12" height="4" fill="#F5C518" />
      {/* Right P */}
      <rect x="24" y="10" width="4" height="28" fill="#F5C518" />
      <rect x="24" y="10" width="12" height="4" fill="#F5C518" />
      <rect x="32" y="10" width="4" height="14" fill="#F5C518" />
      <rect x="24" y="20" width="12" height="4" fill="#F5C518" />
    </svg>
  );
}

export function PaintPaysWordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-black text-xl tracking-tight ${className}`}>
      <span className="text-white">Paint</span>
      <span className="text-[#F5C518]">Pays</span>
    </span>
  );
}

export function PaintPaysLogo({ size = 48, className = '' }: PaintPaysLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <PPMonogram size={size} />
      <PaintPaysWordmark />
    </div>
  );
}

export default PaintPaysLogo;
