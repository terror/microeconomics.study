export const Figure10_5 = () => (
  <svg viewBox='0 0 400 300' className='mx-auto w-full max-w-lg'>
    <defs>
      <marker
        id='arrowhead'
        markerWidth='10'
        markerHeight='7'
        refX='9'
        refY='3.5'
        orient='auto'
      >
        <polygon points='0 0, 10 3.5, 0 7' className='fill-foreground' />
      </marker>
    </defs>

    {/* Axes */}
    <line
      x1='50'
      y1='250'
      x2='350'
      y2='250'
      className='stroke-foreground'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />
    <line
      x1='50'
      y1='250'
      x2='50'
      y2='50'
      className='stroke-foreground'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />

    {/* Demand curve */}
    <path
      d='M 50 80 L 350 220'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='220' className='fill-foreground text-sm'>
      Demand
    </text>

    {/* Marginal Revenue curve */}
    <path
      d='M 50 80 Q 120 150 200 250'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
      strokeDasharray='4'
    />
    <text x='200' y='270' className='fill-foreground text-sm'>
      MR
    </text>

    {/* Marginal Cost curve */}
    <path
      d='M 70 250 Q 150 180 200 100 Q 250 60 350 50'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='60' className='fill-foreground text-sm'>
      MC
    </text>

    {/* Average Total Cost curve */}
    <path
      d='M 90 250 Q 150 200 200 150 Q 250 120 300 130'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='310' y='140' className='fill-foreground text-sm'>
      ATC
    </text>

    {/* Points */}
    <circle cx='200' cy='150' r='4' className='fill-foreground' />
    <text x='190' y='140' className='fill-foreground text-sm'>
      e
    </text>

    {/* Price labels */}
    <text x='30' y='80' className='fill-foreground text-sm'>
      P₅
    </text>
    <text x='30' y='120' className='fill-foreground text-sm'>
      P₄
    </text>
    <text x='30' y='150' className='fill-foreground text-sm'>
      P₃
    </text>
    <text x='30' y='180' className='fill-foreground text-sm'>
      P₂
    </text>
    <text x='30' y='220' className='fill-foreground text-sm'>
      P₁
    </text>
    <text x='30' y='250' className='fill-foreground text-sm'>
      P₀
    </text>

    {/* Quantity labels */}
    <text x='70' y='270' className='fill-foreground text-sm'>
      Q₀
    </text>
    <text x='120' y='270' className='fill-foreground text-sm'>
      Q₁
    </text>
    <text x='160' y='270' className='fill-foreground text-sm'>
      Q₂
    </text>
    <text x='200' y='270' className='fill-foreground text-sm'>
      Q₃
    </text>
    <text x='280' y='270' className='fill-foreground text-sm'>
      Q₄
    </text>
    <text x='350' y='270' className='fill-foreground text-sm'>
      Q₅
    </text>

    {/* Point labels */}
    <circle cx='120' cy='120' r='3' className='fill-foreground' />
    <text x='125' y='115' className='fill-foreground text-sm'>
      a
    </text>

    <circle cx='160' cy='180' r='3' className='fill-foreground' />
    <text x='165' y='175' className='fill-foreground text-sm'>
      b
    </text>

    <circle cx='200' cy='150' r='3' className='fill-foreground' />
    <text x='205' y='145' className='fill-foreground text-sm'>
      c
    </text>

    <circle cx='200' cy='190' r='3' className='fill-foreground' />
    <text x='205' y='185' className='fill-foreground text-sm'>
      d
    </text>

    <circle cx='200' cy='220' r='3' className='fill-foreground' />
    <text x='205' y='215' className='fill-foreground text-sm'>
      f
    </text>

    <circle cx='350' cy='220' r='3' className='fill-foreground' />
    <text x='355' y='215' className='fill-foreground text-sm'>
      g
    </text>
  </svg>
);
