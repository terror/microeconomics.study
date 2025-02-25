export const Figure9_2 = () => {
  /*
    Figure 9-2: A perfectly competitive industry in long-run equilibrium.
    Typically we show:
    - A horizontal supply curve at P = min(LRAC).
    - A downward-sloping demand.
    - Equilibrium at quantity Q* and price P* = minLRAC.
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
      {/* Labels */}
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

      {/* Demand (downward sloping) */}
      <line
        x1='80'
        y1='80'
        x2='500'
        y2='320'
        stroke='currentColor'
        strokeWidth='3'
      />
      <text
        x='510'
        y='320'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        D
      </text>

      {/* Horizontal supply at price = P* */}
      <line
        x1='50'
        y1='200'
        x2='550'
        y2='200'
        stroke='currentColor'
        strokeWidth='3'
        strokeDasharray='5,5'
      />
      <text x='20' y='205' fontSize='18' fontFamily='serif' fill='currentColor'>
        S = min LRAC
      </text>

      {/* Equilibrium E where supply meets demand */}
      <circle cx='300' cy='200' r='5' fill='currentColor' />
      <text
        x='310'
        y='195'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        E
      </text>
    </svg>
  );
};
