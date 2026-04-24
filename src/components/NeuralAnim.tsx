export default function NeuralAnim() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.28,
        overflow: 'visible',
      }}
      viewBox="0 0 400 400"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <style>{`
          @keyframes np  { 0%,100%{opacity:.3} 50%{opacity:.85} }
          @keyframes f0  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(2px,-4px)} }
          @keyframes f1  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(-3px,-2px)} }
          @keyframes f2  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(3px,3px)} }
          @keyframes f3  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(-2px,4px)} }
          @keyframes f4  { 0%,100%{transform:translate(0px,0px)} 50%{transform:translate(4px,-1px)} }
          @keyframes sig {
            0%  { stroke-dashoffset:220; opacity:0 }
            10% { opacity:.9 }
            90% { opacity:.9 }
            100%{ stroke-dashoffset:0; opacity:0 }
          }
          .ne { stroke:#111110; stroke-width:.65; opacity:.18; }
          .ns { stroke:#111110; stroke-width:1.5; stroke-dasharray:220; animation: sig 3.5s linear infinite; }
        `}</style>
      </defs>

      {/* ── Static edges ── */}
      <line className="ne" x1="200" y1="200" x2="200" y2="130"/>
      <line className="ne" x1="200" y1="200" x2="261" y2="165"/>
      <line className="ne" x1="200" y1="200" x2="261" y2="235"/>
      <line className="ne" x1="200" y1="200" x2="200" y2="270"/>
      <line className="ne" x1="200" y1="200" x2="139" y2="235"/>
      <line className="ne" x1="200" y1="200" x2="139" y2="165"/>
      <line className="ne" x1="200" y1="130" x2="200" y2="60"/>
      <line className="ne" x1="200" y1="130" x2="79"  y2="130"/>
      <line className="ne" x1="261" y1="165" x2="321" y2="130"/>
      <line className="ne" x1="261" y1="235" x2="340" y2="200"/>
      <line className="ne" x1="200" y1="270" x2="200" y2="340"/>
      <line className="ne" x1="139" y1="235" x2="79"  y2="270"/>
      <line className="ne" x1="139" y1="165" x2="60"  y2="200"/>
      <line className="ne" x1="200" y1="60"  x2="321" y2="130"/>
      <line className="ne" x1="340" y1="200" x2="321" y2="270"/>
      <line className="ne" x1="200" y1="340" x2="79"  y2="270"/>
      <line className="ne" x1="79"  y1="130" x2="60"  y2="200"/>

      {/* ── Animated signals ── */}
      <line className="ns" x1="200" y1="200" x2="200" y2="130" style={{animationDelay:'0s'}}/>
      <line className="ns" x1="261" y1="165" x2="321" y2="130" style={{animationDelay:'1.2s'}}/>
      <line className="ns" x1="200" y1="200" x2="200" y2="270" style={{animationDelay:'2.1s'}}/>
      <line className="ns" x1="139" y1="165" x2="60"  y2="200" style={{animationDelay:'.6s'}}/>
      <line className="ns" x1="261" y1="235" x2="340" y2="200" style={{animationDelay:'1.7s'}}/>
      <line className="ns" x1="200" y1="60"  x2="321" y2="130" style={{animationDelay:'2.8s'}}/>

      {/* ── Floating nodes (each has its own float + pulse keyframe) ── */}
      {/* Outer ring */}
      <circle fill="#111110" cx="200" cy="60"  r="4"   style={{animation:'np 3s ease-in-out infinite, f0 5.2s ease-in-out infinite', animationDelay:'0s, 0s'}}/>
      <circle fill="#111110" cx="321" cy="130" r="3.5" style={{animation:'np 3s ease-in-out infinite, f1 6.1s ease-in-out infinite', animationDelay:'.5s, .3s'}}/>
      <circle fill="#111110" cx="340" cy="200" r="4"   style={{animation:'np 3s ease-in-out infinite, f2 4.8s ease-in-out infinite', animationDelay:'1s, .8s'}}/>
      <circle fill="#111110" cx="321" cy="270" r="3.5" style={{animation:'np 3s ease-in-out infinite, f3 5.7s ease-in-out infinite', animationDelay:'1.5s, .2s'}}/>
      <circle fill="#111110" cx="200" cy="340" r="4"   style={{animation:'np 3s ease-in-out infinite, f4 6.3s ease-in-out infinite', animationDelay:'2s, 1s'}}/>
      <circle fill="#111110" cx="79"  cy="270" r="3.5" style={{animation:'np 3s ease-in-out infinite, f0 5s ease-in-out infinite',   animationDelay:'2.5s, .5s'}}/>
      <circle fill="#111110" cx="60"  cy="200" r="4"   style={{animation:'np 3s ease-in-out infinite, f1 5.5s ease-in-out infinite', animationDelay:'1.2s, 1.4s'}}/>
      <circle fill="#111110" cx="79"  cy="130" r="3.5" style={{animation:'np 3s ease-in-out infinite, f2 4.9s ease-in-out infinite', animationDelay:'.7s, .9s'}}/>
      {/* Inner ring */}
      <circle fill="#111110" cx="200" cy="130" r="4.5" style={{animation:'np 3s ease-in-out infinite, f3 5.3s ease-in-out infinite', animationDelay:'.3s, .6s'}}/>
      <circle fill="#111110" cx="261" cy="165" r="4"   style={{animation:'np 3s ease-in-out infinite, f4 6s ease-in-out infinite',   animationDelay:'.8s, .1s'}}/>
      <circle fill="#111110" cx="261" cy="235" r="4"   style={{animation:'np 3s ease-in-out infinite, f0 5.8s ease-in-out infinite', animationDelay:'1.3s, .7s'}}/>
      <circle fill="#111110" cx="200" cy="270" r="4.5" style={{animation:'np 3s ease-in-out infinite, f1 4.7s ease-in-out infinite', animationDelay:'1.8s, 1.2s'}}/>
      <circle fill="#111110" cx="139" cy="235" r="4"   style={{animation:'np 3s ease-in-out infinite, f2 6.2s ease-in-out infinite', animationDelay:'2.3s, .4s'}}/>
      <circle fill="#111110" cx="139" cy="165" r="4"   style={{animation:'np 3s ease-in-out infinite, f3 5.1s ease-in-out infinite', animationDelay:'.1s, 1.1s'}}/>
      {/* Center */}
      <circle fill="#111110" cx="200" cy="200" r="6"   style={{animation:'np 2s ease-in-out infinite, f4 5.4s ease-in-out infinite', animationDelay:'.5s, .3s'}}/>
    </svg>
  )
}
