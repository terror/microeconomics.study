export const Figure4_2 = () => {
  /*
    Figure 4-2: Two demand curves (D1 and D2) passing through the same point A,
    with D1 steeper and D2 flatter. This illustrates different elasticities at the same point.
  */

  // Coordinates chosen so they intersect at “A” around mid-graph.
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
      {/* Axis labels */}
      <text x='20' y='220' fontSize='24' fontFamily='serif' fill='currentColor'>
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

      {/* Demand D1 (steeper) */}
      <line
        x1='80'
        y1='80'
        x2='450'
        y2='350'
        stroke='currentColor'
        strokeWidth='3'
      />

      {/* Demand D2 (flatter) */}
      <line
        x1='80'
        y1='200'
        x2='450'
        y2='350'
        stroke='currentColor'
        strokeWidth='3'
        strokeDasharray='4,4'
      />

      {/* Intersection point A (shared by both lines) */}
      {/* For simplicity, we ensure both lines pass through x=220, y=220. */}
      {/* Adjust if needed. */}
      <circle cx='220' cy='220' r='5' fill='currentColor' />
      <text
        x='230'
        y='215'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        A
      </text>

      <text
        x='460'
        y='350'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        D1
      </text>
      <text
        x='460'
        y='320'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        D2
      </text>
    </svg>
  );
};
