export const Figure10_7 = () => {
  /*
    Figure 10-7: A monopolist’s diagram showing:
    - Downward-sloping demand (D)
    - MR curve below demand
    - ATC or MC curve
    We can mark the single-price equilibrium vs. perfect price discrimination conceptually.
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

      {/* Demand curve (D) */}
      <line
        x1='80'
        y1='100'
        x2='480'
        y2='350'
        stroke='currentColor'
        strokeWidth='3'
      />
      <text
        x='490'
        y='350'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        D
      </text>

      {/* Marginal revenue curve (MR) - steeper than D */}
      <line
        x1='80'
        y1='100'
        x2='430'
        y2='350'
        stroke='currentColor'
        strokeWidth='2'
        strokeDasharray='5,5'
      />
      <text
        x='440'
        y='355'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        MR
      </text>

      {/* Marginal cost curve (MC) - typical upward slope */}
      <path
        d='M 100 300 Q 200 250 300 220 Q 400 200 480 210'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
      />
      <text
        x='485'
        y='215'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        MC
      </text>

      {/* Single-price monopoly equilibrium (where MR=MC) */}
      {/* For simplicity, let's pick an intersection around x=350, y=240 */}
      <circle cx='350' cy='240' r='5' fill='currentColor' />
      <text
        x='360'
        y='235'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        MR=MC
      </text>
    </svg>
  );
};
