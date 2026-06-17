'use client'

export function Aurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Orb 1 — top right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(83,65,205,0.22) 0%, rgba(83,65,205,0.08) 50%, transparent 70%)',
          top: '-120px',
          right: '-100px',
          animation: 'aurora1 10s ease-in-out infinite',
        }}
      />
      {/* Orb 2 — mid left */}
      <div
        className="absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(155,138,251,0.18) 0%, rgba(155,138,251,0.06) 55%, transparent 75%)',
          top: '25%',
          left: '-80px',
          animation: 'aurora2 13s ease-in-out infinite',
        }}
      />
      {/* Orb 3 — bottom center */}
      <div
        className="absolute rounded-full"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(192,132,252,0.14) 0%, rgba(192,132,252,0.04) 60%, transparent 80%)',
          bottom: '0px',
          left: '35%',
          animation: 'aurora3 15s ease-in-out infinite',
        }}
      />
      {/* Orb 4 — small accent */}
      <div
        className="absolute rounded-full"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(228,55,144,0.1) 0%, transparent 70%)',
          top: '40%',
          right: '15%',
          animation: 'aurora2 18s ease-in-out infinite reverse',
        }}
      />
    </div>
  )
}
