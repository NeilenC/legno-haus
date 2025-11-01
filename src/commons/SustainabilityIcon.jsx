import React from 'react'

export default function SustainabilityIcon({ width = 56, height = 56, className = '', stroke = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 21h18" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 21V8h12v13" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11c2-2 4-1.5 4-1.5s-1 1.8-3 3c-1 0.8-2 1.2-3 1.5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
