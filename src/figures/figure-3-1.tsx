export const Figure3_1 = () => {
  /*
    Figure 3-1: A typical supply and demand diagram with:
    - Equilibrium price P0 (horizontal dashed line).
    - Price floor P2 above P0 (another dashed line).
    - We label “S” for supply, “D” for demand, equilibrium E, etc.
  */
  return (
    <svg viewBox='0 0 600 500' className='mx-auto w-full max-w-lg'>
      {/* Axes */}
      <line
        x1='50'
        y1='400'
        x2='50'
        y2='50'
        stroke='currentColor'
        strokeWidth='3'
      />
      <line
        x1='50'
        y1='400'
        x2='550'
        y2='400'
        stroke='currentColor'
        strokeWidth='3'
      />
      {/* Labels for axes */}
      <text x='20' y='230' fontSize='24' fontFamily='serif' fill='currentColor'>
        Price
      </text>
      <text
        x='300'
        y='440'
        fontSize='24'
        fontFamily='serif'
        textAnchor='middle'
        fill='currentColor'
      >
        Quantity
      </text>

      {/* Supply (upward sloping) */}
      <line
        x1='100'
        y1='350'
        x2='500'
        y2='100'
        stroke='currentColor'
        strokeWidth='4'
      />
      {/* Demand (downward sloping) */}
      <line
        x1='100'
        y1='100'
        x2='500'
        y2='350'
        stroke='currentColor'
        strokeWidth='4'
      />

      {/* Equilibrium price line (P0) */}
      <line
        x1='50'
        y1='230'
        x2='550'
        y2='230'
        stroke='currentColor'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
        strokeWidth='2'
      />
      <text x='20' y='235' fontSize='20' fontFamily='serif' fill='currentColor'>
        P₀
      </text>

      {/* Price Floor line (P2) - above equilibrium */}
      <line
        x1='50'
        y1='160'
        x2='550'
        y2='160'
        stroke='currentColor'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
        strokeWidth='2'
      />
      <text x='20' y='165' fontSize='20' fontFamily='serif' fill='currentColor'>
        P₂
      </text>

      {/* Equilibrium point E */}
      <circle cx='300' cy='230' r='5' fill='currentColor' />
      <text
        x='310'
        y='225'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        E
      </text>

      {/* Supply & Demand labels */}
      <text
        x='510'
        y='120'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        S
      </text>
      <text
        x='510'
        y='340'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        D
      </text>
    </svg>
  );
};
