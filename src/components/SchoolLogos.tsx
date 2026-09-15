import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * EXACT REPLICA of SD.jpg uploaded by the user:
 * - Dark maroon shield (#521c23) with pointed ears and bottom tip
 * - White school building roof silhouette at top
 * - Bold red "SD" text in front of building with black contour
 * - Two elementary students (boy on left, girl on right) in white uniforms holding open books
 * - Red jagged/sunburst circle with 5-petal white flower & red center star
 * - Rice stalk (padi) on left, cotton stalk (kapas) on right
 * - Tied ribbon at bottom
 */
export const LogoSD: React.FC<LogoProps> = ({ className = 'w-24 h-28' }) => {
  return (
    <svg
      viewBox="0 0 300 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo SD Sesuai Seragam"
    >
      <defs>
        <filter id="sd-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Main Shield Body (Dark Maroon / Cokelat Tua Khas Badge SD) */}
      <path
        d="M 150 18 C 190 12 250 10 280 40 C 285 100 285 200 240 280 C 205 330 155 350 150 352 C 145 350 95 330 60 280 C 15 200 15 100 20 40 C 50 10 110 12 150 18 Z"
        fill="#541B22"
        stroke="#1C1917"
        strokeWidth="6"
        filter="url(#sd-drop)"
      />

      {/* Inner White/Cream Shield Border */}
      <path
        d="M 150 25 C 188 20 242 18 270 46 C 274 102 274 195 233 270 C 200 318 154 338 150 340 C 146 338 100 318 67 270 C 26 195 26 102 30 46 C 58 18 112 20 150 25 Z"
        fill="none"
        stroke="#FDF6E2"
        strokeWidth="2.5"
      />

      {/* School Building (Gedung Sekolah Putih) */}
      <polygon
        points="70,95 230,95 210,65 90,65"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="4"
      />
      <rect
        x="80"
        y="95"
        width="140"
        height="10"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="3"
      />

      {/* Big Bold Red "SD" Title */}
      <g>
        {/* Letter S */}
        <path
          d="M 132 50 C 132 40 122 35 110 35 C 96 35 88 44 88 56 C 88 78 132 68 132 94 C 132 110 118 118 102 118 C 86 118 78 108 78 96 L 94 94 C 94 102 100 106 104 106 C 112 106 116 100 116 94 C 116 74 72 82 72 56 C 72 40 86 24 110 24 C 130 24 148 36 148 52 Z"
          fill="#E11D48"
          stroke="#1C1917"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Letter D */}
        <path
          d="M 152 26 H 182 C 208 26 226 44 226 71 C 226 98 208 116 182 116 H 152 Z M 168 40 V 102 H 182 C 198 102 210 90 210 71 C 210 52 198 40 182 40 Z"
          fill="#E11D48"
          stroke="#1C1917"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>

      {/* Two Students (Siswa Putra di kiri & Siswa Putri di kanan) */}
      {/* Student 1: Boy (Kiri) */}
      <g id="sd-student-boy">
        {/* Hair */}
        <path
          d="M 100 95 C 100 85 110 82 120 85 C 130 82 140 85 140 95 C 140 105 138 112 136 115 C 130 110 124 112 120 108 C 116 112 110 110 104 115 C 102 112 100 105 100 95 Z"
          fill="#1C1917"
        />
        {/* Face & Neck */}
        <ellipse cx="120" cy="112" rx="14" ry="16" fill="#FDF6E2" stroke="#1C1917" strokeWidth="2" />
        {/* Eyes & Smile */}
        <circle cx="115" cy="110" r="1.5" fill="#1C1917" />
        <circle cx="125" cy="110" r="1.5" fill="#1C1917" />
        <path d="M 117 118 Q 120 121 123 118" stroke="#1C1917" strokeWidth="1.5" fill="none" />
        {/* Uniform White Shirt */}
        <path
          d="M 104 128 L 92 145 L 94 185 L 146 185 L 148 145 L 136 128 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Shirt Collar & Buttons */}
        <polygon points="120,132 112,126 120,140 128,126" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
        <line x1="120" y1="140" x2="120" y2="185" stroke="#1C1917" strokeWidth="1.5" />
        {/* Pocket */}
        <rect x="100" y="148" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
        {/* Open Book in Hand */}
        <path
          d="M 98 165 C 110 160 120 162 120 168 L 120 185 C 112 180 102 180 96 185 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2"
        />
        <path
          d="M 142 165 C 130 160 120 162 120 168 L 120 185 C 128 180 138 180 144 185 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2"
        />
      </g>

      {/* Student 2: Girl (Kanan) */}
      <g id="sd-student-girl">
        {/* Long Hair framing face */}
        <path
          d="M 160 95 C 160 85 170 82 180 85 C 190 82 200 85 200 95 C 200 108 204 125 204 135 C 198 135 196 122 196 112 C 192 114 186 112 180 108 C 174 112 168 114 164 112 C 164 122 162 135 156 135 C 156 125 160 108 160 95 Z"
          fill="#1C1917"
        />
        {/* Face */}
        <ellipse cx="180" cy="112" rx="14" ry="16" fill="#FDF6E2" stroke="#1C1917" strokeWidth="2" />
        {/* Eyes & Smile */}
        <circle cx="175" cy="110" r="1.5" fill="#1C1917" />
        <circle cx="185" cy="110" r="1.5" fill="#1C1917" />
        <path d="M 177 118 Q 180 121 183 118" stroke="#1C1917" strokeWidth="1.5" fill="none" />
        {/* Uniform White Shirt */}
        <path
          d="M 164 128 L 152 145 L 154 185 L 206 185 L 208 145 L 196 128 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Collar */}
        <polygon points="180,132 172,126 180,140 188,126" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
        <line x1="180" y1="140" x2="180" y2="185" stroke="#1C1917" strokeWidth="1.5" />
        {/* Pocket */}
        <rect x="190" y="148" width="10" height="12" rx="1" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.5" />
        {/* Open Book in Hand */}
        <path
          d="M 158 165 C 170 160 180 162 180 168 L 180 185 C 172 180 162 180 156 185 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2"
        />
        <path
          d="M 202 165 C 190 160 180 162 180 168 L 180 185 C 188 180 198 180 204 185 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2"
        />
      </g>

      {/* Center Sunburst / Lingkaran Bergerigi Merah */}
      <g transform="translate(150, 230)">
        {/* Jagged Sawtooth Red Sunburst */}
        <polygon
          points="
            0,-56 8,-50 17,-54 23,-46 33,-47 37,-38 47,-36 48,-26 56,-22 54,-12 60,-6 56,4 59,14 53,22 53,32 45,39 42,48 32,53 27,60 16,63 9,68 0,68
            -9,68 -16,63 -27,60 -32,53 -42,48 -45,39 -53,32 -53,22 -59,14 -56,4 -60,-6 -54,-12 -56,-22 -48,-26 -47,-36 -37,-38 -33,-47 -23,-46 -17,-54 -8,-50
          "
          fill="#DC2626"
          stroke="#FFFFFF"
          strokeWidth="2.5"
        />

        {/* Five-Petal White Flower (Bunga Melati) */}
        {/* Top Petal */}
        <path
          d="M 0 0 C -14 -18 -18 -38 0 -48 C 18 -38 14 -18 0 0 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Top Right Petal */}
        <path
          d="M 0 0 C 12 -20 32 -26 44 -14 C 42 6 22 12 0 0 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Bottom Right Petal */}
        <path
          d="M 0 0 C 22 0 38 16 32 32 C 14 36 6 20 0 0 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Bottom Left Petal */}
        <path
          d="M 0 0 C -6 20 -14 36 -32 32 C -38 16 -22 0 0 0 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />
        {/* Top Left Petal */}
        <path
          d="M 0 0 C -22 12 -42 6 -44 -14 C -32 -26 -12 -20 0 0 Z"
          fill="#FFFFFF"
          stroke="#1C1917"
          strokeWidth="2.5"
        />

        {/* Small Red Star in Center */}
        <polygon
          points="0,-8 3,-2 8,-2 4,2 6,8 0,4 -6,8 -4,2 -8,-2 -3,-2"
          fill="#B91C1C"
          stroke="#1C1917"
          strokeWidth="1"
        />

        {/* Vertical Center Stem */}
        <line x1="0" y1="32" x2="0" y2="70" stroke="#1C1917" strokeWidth="3" />
      </g>

      {/* Left: Rice Stalk (Padi Putih) */}
      <g stroke="#1C1917" strokeWidth="2" fill="#FFFFFF">
        {/* Stem */}
        <path d="M 68 285 C 48 240 44 170 65 110" fill="none" strokeWidth="3" />
        {/* Grains */}
        <ellipse cx="62" cy="115" rx="5" ry="10" transform="rotate(-30 62 115)" />
        <ellipse cx="54" cy="132" rx="5" ry="10" transform="rotate(-35 54 132)" />
        <ellipse cx="48" cy="152" rx="5" ry="10" transform="rotate(-40 48 152)" />
        <ellipse cx="44" cy="174" rx="5" ry="10" transform="rotate(-45 44 174)" />
        <ellipse cx="42" cy="198" rx="5" ry="10" transform="rotate(-50 42 198)" />
        <ellipse cx="43" cy="222" rx="5" ry="10" transform="rotate(-55 43 222)" />
        <ellipse cx="48" cy="245" rx="5" ry="10" transform="rotate(-60 48 245)" />
        <ellipse cx="58" cy="266" rx="5" ry="10" transform="rotate(-65 58 266)" />
      </g>

      {/* Right: Cotton Stalk (Kapas Putih Berkelopak) */}
      <g stroke="#1C1917" strokeWidth="2" fill="#FFFFFF">
        {/* Stem */}
        <path d="M 232 285 C 252 240 256 170 235 110" fill="none" strokeWidth="3" />
        {/* Cotton bolls */}
        <circle cx="236" cy="120" r="8" />
        <circle cx="245" cy="144" r="8.5" />
        <circle cx="251" cy="170" r="9" />
        <circle cx="254" cy="198" r="9.5" />
        <circle cx="251" cy="225" r="9" />
        <circle cx="243" cy="250" r="8.5" />
        <circle cx="232" cy="270" r="8" />
      </g>

      {/* Bottom Tied Ribbon (Pita Bawah) */}
      <path
        d="M 60 278 Q 150 310 240 278 L 225 304 Q 150 334 75 304 Z"
        fill="#FFFFFF"
        stroke="#1C1917"
        strokeWidth="3.5"
      />
      {/* Ribbon Ribs */}
      <line x1="100" y1="290" x2="105" y2="310" stroke="#1C1917" strokeWidth="2" />
      <line x1="125" y1="295" x2="128" y2="316" stroke="#1C1917" strokeWidth="2" />
      <line x1="150" y1="298" x2="150" y2="320" stroke="#1C1917" strokeWidth="2" />
      <line x1="175" y1="295" x2="172" y2="316" stroke="#1C1917" strokeWidth="2" />
      <line x1="200" y1="290" x2="195" y2="310" stroke="#1C1917" strokeWidth="2" />

      {/* Bottom Tip Leaves */}
      <path
        d="M 130 326 C 145 320 150 336 150 342 C 150 336 155 320 170 326"
        stroke="#1C1917"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

/**
 * EXACT REPLICA of SMP.png uploaded by the user:
 * - Red, white, red arched rainbow top
 * - Bright vibrant yellow inside background (#FACC15 / #FFE600)
 * - 5-petal crystalline faceted white flower with internal geometric crease lines
 * - Two warm reddish-terracotta open hands (#B91C1C) cupped upward
 * - Black keyhole / stem in the middle
 * - Open white book with black outlines
 * - Rice on left, green leaf cotton on right
 * - Terracotta banner with bold white "OSIS" text
 * - Black base with side ribbons
 */
export const LogoSMP: React.FC<LogoProps> = ({ className = 'w-24 h-28' }) => {
  return (
    <svg
      viewBox="0 0 300 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo OSIS SMP"
    >
      <defs>
        <filter id="smp-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Outer Black Border Base */}
      <path
        d="M 60 145 C 60 60 90 20 150 20 C 210 20 240 60 240 145 C 240 220 260 250 260 280 C 260 305 240 330 150 335 C 60 330 40 305 40 280 C 40 250 60 220 60 145 Z"
        fill="#18181B"
        filter="url(#smp-drop)"
      />

      {/* Inside Vibrant Yellow Background */}
      <path
        d="M 72 145 C 72 75 98 42 150 42 C 202 42 228 75 228 145 C 228 215 220 260 220 275 C 190 290 110 290 80 275 C 80 260 72 215 72 145 Z"
        fill="#FFDF00"
      />

      {/* Top Rainbow Arch (Pelangi Merah Putih): Red - White - Red */}
      {/* Outer Red Stripe */}
      <path
        d="M 64 145 C 64 65 92 25 150 25 C 208 25 236 65 236 145 L 224 145 C 224 75 200 37 150 37 C 100 37 76 75 76 145 Z"
        fill="#DC2626"
        stroke="#18181B"
        strokeWidth="2"
      />
      {/* Middle White Stripe */}
      <path
        d="M 76 145 C 76 75 100 37 150 37 C 200 37 224 75 224 145 L 214 145 C 214 83 194 48 150 48 C 106 48 86 83 86 145 Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="1.5"
      />
      {/* Inner Red Stripe */}
      <path
        d="M 86 145 C 86 83 106 48 150 48 C 194 48 214 83 214 145 L 206 145 C 206 90 188 58 150 58 C 112 58 94 90 94 145 Z"
        fill="#DC2626"
        stroke="#18181B"
        strokeWidth="1.5"
      />

      {/* Five-Petal Faceted White Flower (Bunga Teratai OSIS) */}
      <g id="smp-flower" transform="translate(150, 115)">
        {/* Petal 1: Top */}
        <polygon points="0,-48 24,-18 0,0 -24,-18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="0" y1="-48" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 2: Top Right */}
        <polygon points="46,-15 38,18 0,0 24,-18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="46" y1="-15" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 3: Bottom Right */}
        <polygon points="28,40 -4,34 0,0 38,18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="28" y1="40" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 4: Bottom Left */}
        <polygon points="-28,40 -38,18 0,0 -4,34" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="-28" y1="40" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 5: Top Left */}
        <polygon points="-46,-15 -24,-18 0,0 -38,18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="-46" y1="-15" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Center Pentagon Hub */}
        <polygon points="0,-8 8,-2 5,7 -5,7 -8,-2" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
      </g>

      {/* Two Terracotta / Red Cupped Hands (Tangan Terbuka SMP) */}
      <g id="smp-hands">
        {/* Left Hand */}
        <path
          d="M 144 200 C 136 198 126 194 116 182 C 104 168 100 144 102 130 C 106 130 114 146 122 158 C 130 170 140 176 144 178 Z"
          fill="#B91C1C"
          stroke="#18181B"
          strokeWidth="3"
        />
        {/* Right Hand */}
        <path
          d="M 156 200 C 164 198 174 194 184 182 C 196 168 200 144 198 130 C 194 130 186 146 178 158 C 170 170 160 176 156 178 Z"
          fill="#B91C1C"
          stroke="#18181B"
          strokeWidth="3"
        />
      </g>

      {/* Center Black Stem & Keyhole (Kunci Pas OSIS) */}
      <g id="smp-key">
        <path
          d="M 147 160 H 153 V 205 H 147 Z"
          fill="#18181B"
        />
        <circle cx="150" cy="216" r="11" fill="#18181B" />
        <circle cx="150" cy="216" r="4" fill="#FFDF00" />
      </g>

      {/* Open Book (Buku Putih Terbuka) */}
      <g id="smp-book">
        {/* Left Page */}
        <path
          d="M 150 226 C 130 220 112 222 104 228 L 102 258 C 114 250 132 250 150 258 Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="3"
        />
        {/* Right Page */}
        <path
          d="M 150 226 C 170 220 188 222 196 228 L 198 258 C 186 250 168 250 150 258 Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="3"
        />
        <line x1="150" y1="226" x2="150" y2="258" stroke="#18181B" strokeWidth="3" />
      </g>

      {/* Left: Rice Stalk (Padi) */}
      <g stroke="#18181B" strokeWidth="2" fill="#FFFFFF">
        <path d="M 86 250 C 64 210 68 160 92 125" fill="none" strokeWidth="3" />
        <ellipse cx="90" cy="132" rx="4" ry="8" transform="rotate(-30 90 132)" />
        <ellipse cx="80" cy="148" rx="4" ry="8" transform="rotate(-35 80 148)" />
        <ellipse cx="74" cy="168" rx="4" ry="8" transform="rotate(-40 74 168)" />
        <ellipse cx="70" cy="190" rx="4" ry="8" transform="rotate(-45 70 190)" />
        <ellipse cx="70" cy="212" rx="4" ry="8" transform="rotate(-50 70 212)" />
        <ellipse cx="74" cy="234" rx="4" ry="8" transform="rotate(-55 74 234)" />
      </g>

      {/* Right: Cotton Stalk with Green Leaves & White Cotton */}
      <g>
        <path d="M 214 250 C 236 210 232 160 208 125" fill="none" stroke="#18181B" strokeWidth="3" />
        {/* Green leaf base + White cotton puffs */}
        <circle cx="212" cy="135" r="7" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="212" cy="135" r="5" fill="#FFFFFF" />

        <circle cx="222" cy="155" r="7.5" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="222" cy="155" r="5.5" fill="#FFFFFF" />

        <circle cx="228" cy="178" r="8" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="228" cy="178" r="6" fill="#FFFFFF" />

        <circle cx="228" cy="202" r="8" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="228" cy="202" r="6" fill="#FFFFFF" />

        <circle cx="224" cy="226" r="7.5" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="224" cy="226" r="5.5" fill="#FFFFFF" />
      </g>

      {/* Side Ribbons on Left & Right Base */}
      <g stroke="#18181B" strokeWidth="2.5" fill="#FFFFFF">
        <path d="M 44 260 L 78 260 L 80 274 L 46 274 Z" />
        <path d="M 38 274 L 76 274 L 74 288 L 36 288 Z" />
        <path d="M 222 260 L 256 260 L 254 274 L 220 274 Z" />
        <path d="M 224 274 L 262 274 L 264 288 L 226 288 Z" />
      </g>

      {/* OSIS Banner: Terracotta curved banner with 2 white dots & bold OSIS text */}
      <g id="smp-osis-banner">
        <path
          d="M 54 268 Q 150 290 246 268 L 240 312 Q 150 334 60 312 Z"
          fill="#B91C1C"
          stroke="#18181B"
          strokeWidth="4"
        />
        {/* Left rivet dot */}
        <circle cx="72" cy="286" r="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
        {/* Right rivet dot */}
        <circle cx="228" cy="286" r="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />

        {/* Text "OSIS" in stylized thick white block */}
        <text
          x="150"
          y="302"
          textAnchor="middle"
          fill="#FFFFFF"
          fontWeight="900"
          fontSize="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="8"
        >
          OSIS
        </text>
      </g>
    </svg>
  );
};

/**
 * EXACT REPLICA of sma.jpg uploaded by the user:
 * - Red, white, red arched rainbow top
 * - Warm golden amber / darker golden-yellow inside background
 * - 5-petal crystalline faceted white flower
 * - Two deep brown / dark chocolate open hands (#5C2416)
 * - Black keyhole / stem
 * - Open white book with black outlines
 * - Rice on left, cotton with green leaves on right
 * - Dark brown banner with white dots and bold "OSIS" text
 * - Black base with side ribbons
 */
export const LogoSMA: React.FC<LogoProps> = ({ className = 'w-24 h-28' }) => {
  return (
    <svg
      viewBox="0 0 300 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Logo OSIS SMA"
    >
      <defs>
        <filter id="sma-drop" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.25" />
        </filter>
        <linearGradient id="sma-gold-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>

      {/* Outer Black Border Base */}
      <path
        d="M 60 145 C 60 60 90 20 150 20 C 210 20 240 60 240 145 C 240 220 260 250 260 280 C 260 305 240 330 150 335 C 60 330 40 305 40 280 C 40 250 60 220 60 145 Z"
        fill="#18181B"
        filter="url(#sma-drop)"
      />

      {/* Inside Golden Amber Background (Khas OSIS SMA) */}
      <path
        d="M 72 145 C 72 75 98 42 150 42 C 202 42 228 75 228 145 C 228 215 220 260 220 275 C 190 290 110 290 80 275 C 80 260 72 215 72 145 Z"
        fill="url(#sma-gold-bg)"
      />

      {/* Top Rainbow Arch (Pelangi Merah Putih): Red - White - Red */}
      {/* Outer Red Stripe */}
      <path
        d="M 64 145 C 64 65 92 25 150 25 C 208 25 236 65 236 145 L 224 145 C 224 75 200 37 150 37 C 100 37 76 75 76 145 Z"
        fill="#DC2626"
        stroke="#18181B"
        strokeWidth="2"
      />
      {/* Middle White Stripe */}
      <path
        d="M 76 145 C 76 75 100 37 150 37 C 200 37 224 75 224 145 L 214 145 C 214 83 194 48 150 48 C 106 48 86 83 86 145 Z"
        fill="#FFFFFF"
        stroke="#18181B"
        strokeWidth="1.5"
      />
      {/* Inner Red Stripe */}
      <path
        d="M 86 145 C 86 83 106 48 150 48 C 194 48 214 83 214 145 L 206 145 C 206 90 188 58 150 58 C 112 58 94 90 94 145 Z"
        fill="#DC2626"
        stroke="#18181B"
        strokeWidth="1.5"
      />

      {/* Five-Petal Faceted White Flower (Bunga Teratai OSIS) */}
      <g id="sma-flower" transform="translate(150, 115)">
        {/* Petal 1: Top */}
        <polygon points="0,-48 24,-18 0,0 -24,-18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="0" y1="-48" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 2: Top Right */}
        <polygon points="46,-15 38,18 0,0 24,-18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="46" y1="-15" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 3: Bottom Right */}
        <polygon points="28,40 -4,34 0,0 38,18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="28" y1="40" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 4: Bottom Left */}
        <polygon points="-28,40 -38,18 0,0 -4,34" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="-28" y1="40" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Petal 5: Top Left */}
        <polygon points="-46,-15 -24,-18 0,0 -38,18" fill="#FFFFFF" stroke="#18181B" strokeWidth="2.5" />
        <line x1="-46" y1="-15" x2="0" y2="0" stroke="#18181B" strokeWidth="1.5" />

        {/* Center Pentagon Hub */}
        <polygon points="0,-8 8,-2 5,7 -5,7 -8,-2" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
      </g>

      {/* Two Dark Brown Open Hands (Tangan Cokelat Tua Khas OSIS SMA) */}
      <g id="sma-hands">
        {/* Left Hand */}
        <path
          d="M 144 200 C 136 198 126 194 116 182 C 104 168 100 144 102 130 C 106 130 114 146 122 158 C 130 170 140 176 144 178 Z"
          fill="#5C2416"
          stroke="#18181B"
          strokeWidth="3"
        />
        {/* Right Hand */}
        <path
          d="M 156 200 C 164 198 174 194 184 182 C 196 168 200 144 198 130 C 194 130 186 146 178 158 C 170 170 160 176 156 178 Z"
          fill="#5C2416"
          stroke="#18181B"
          strokeWidth="3"
        />
      </g>

      {/* Center Black Stem & Keyhole (Kunci Pas) */}
      <g id="sma-key">
        <path
          d="M 147 160 H 153 V 205 H 147 Z"
          fill="#18181B"
        />
        <circle cx="150" cy="216" r="11" fill="#18181B" />
        <circle cx="150" cy="216" r="4" fill="#F59E0B" />
      </g>

      {/* Open Book (Buku Putih Terbuka) */}
      <g id="sma-book">
        {/* Left Page */}
        <path
          d="M 150 226 C 130 220 112 222 104 228 L 102 258 C 114 250 132 250 150 258 Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="3"
        />
        {/* Right Page */}
        <path
          d="M 150 226 C 170 220 188 222 196 228 L 198 258 C 186 250 168 250 150 258 Z"
          fill="#FFFFFF"
          stroke="#18181B"
          strokeWidth="3"
        />
        <line x1="150" y1="226" x2="150" y2="258" stroke="#18181B" strokeWidth="3" />
      </g>

      {/* Left: Rice Stalk (Padi) */}
      <g stroke="#18181B" strokeWidth="2" fill="#FFFFFF">
        <path d="M 86 250 C 64 210 68 160 92 125" fill="none" strokeWidth="3" />
        <ellipse cx="90" cy="132" rx="4" ry="8" transform="rotate(-30 90 132)" />
        <ellipse cx="80" cy="148" rx="4" ry="8" transform="rotate(-35 80 148)" />
        <ellipse cx="74" cy="168" rx="4" ry="8" transform="rotate(-40 74 168)" />
        <ellipse cx="70" cy="190" rx="4" ry="8" transform="rotate(-45 70 190)" />
        <ellipse cx="70" cy="212" rx="4" ry="8" transform="rotate(-50 70 212)" />
        <ellipse cx="74" cy="234" rx="4" ry="8" transform="rotate(-55 74 234)" />
      </g>

      {/* Right: Cotton Stalk with Green Leaves & White Cotton */}
      <g>
        <path d="M 214 250 C 236 210 232 160 208 125" fill="none" stroke="#18181B" strokeWidth="3" />
        {/* Green leaf base + White cotton puffs */}
        <circle cx="212" cy="135" r="7" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="212" cy="135" r="5" fill="#FFFFFF" />

        <circle cx="222" cy="155" r="7.5" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="222" cy="155" r="5.5" fill="#FFFFFF" />

        <circle cx="228" cy="178" r="8" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="228" cy="178" r="6" fill="#FFFFFF" />

        <circle cx="228" cy="202" r="8" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="228" cy="202" r="6" fill="#FFFFFF" />

        <circle cx="224" cy="226" r="7.5" fill="#15803D" stroke="#18181B" strokeWidth="1.5" />
        <circle cx="224" cy="226" r="5.5" fill="#FFFFFF" />
      </g>

      {/* Side Ribbons on Left & Right Base */}
      <g stroke="#18181B" strokeWidth="2.5" fill="#FFFFFF">
        <path d="M 44 260 L 78 260 L 80 274 L 46 274 Z" />
        <path d="M 38 274 L 76 274 L 74 288 L 36 288 Z" />
        <path d="M 222 260 L 256 260 L 254 274 L 220 274 Z" />
        <path d="M 224 274 L 262 274 L 264 288 L 226 288 Z" />
      </g>

      {/* OSIS Banner: Dark Brown curved banner with 2 white dots & bold OSIS text */}
      <g id="sma-osis-banner">
        <path
          d="M 54 268 Q 150 290 246 268 L 240 312 Q 150 334 60 312 Z"
          fill="#5C2416"
          stroke="#18181B"
          strokeWidth="4"
        />
        {/* Left rivet dot */}
        <circle cx="72" cy="286" r="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />
        {/* Right rivet dot */}
        <circle cx="228" cy="286" r="4" fill="#FFFFFF" stroke="#18181B" strokeWidth="1.5" />

        {/* Text "OSIS" in stylized thick white block */}
        <text
          x="150"
          y="302"
          textAnchor="middle"
          fill="#FFFFFF"
          fontWeight="900"
          fontSize="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="8"
        >
          OSIS
        </text>
      </g>
    </svg>
  );
};
