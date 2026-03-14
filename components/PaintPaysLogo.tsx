import React from 'react';

interface PaintPaysLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function PPIcon({ size = 'md', className = '' }: PaintPaysLogoProps) {
  const dims = size === 'sm' ? 36 : size === 'lg' ? 64 : 48;
  return (
    <svg
      width={dims}
      height={dims}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="28" y="40" width="8" height="120" rx="4" fill="#F5C518"/>
      <text x="48" y="106" fontFamily="'Arial Black', 'Helvetica Neue', Impact, sans-serif" fontWeight="900" fontSize="56" letterSpacing="-1" fill="#FFFFFF">PP</text>
    </svg>
  );
}

export function PaintPaysWordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      width="180"
      height="56"
      viewBox="0 0 600 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="44" y="52" width="9" height="96" rx="4.5" fill="#F5C518"/>
      <text x="72" y="118" fontFamily="'Arial Black', 'Helvetica Neue', Impact, sans-serif" fontWeight="900" fontSize="66" letterSpacing="-1" fill="#FFFFFF">PAINT</text>
      <text x="72" y="176" fontFamily="'Arial Black', 'Helvetica Neue', Impact, sans-serif" fontWeight="900" fontSize="66" letterSpacing="-1" fill="#F5C518">PAYS</text>
      <circle cx="548" cy="84" r="10" fill="#F5C518"/>
      <circle cx="548" cy="112" r="7" fill="#F5C518" opacity="0.75"/>
      <circle cx="548" cy="134" r="4" fill="#F5C518" opacity="0.45"/>
    </svg>
  );
}

export function PaintPaysLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <PaintPaysWordmark />
    </div>
  );
}

export default PaintPaysLogo;
