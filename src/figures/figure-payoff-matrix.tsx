export const FigurePayoffMatrix = () => (
  <svg viewBox='0 0 400 300' className='mx-auto w-full max-w-lg'>
    <rect
      x='50'
      y='50'
      width='300'
      height='200'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
    />

    {/* Horizontal dividers */}
    <line
      x1='50'
      y1='100'
      x2='350'
      y2='100'
      stroke='currentColor'
      strokeWidth='1'
    />
    <line
      x1='50'
      y1='150'
      x2='350'
      y2='150'
      stroke='currentColor'
      strokeWidth='1'
    />

    {/* Vertical dividers */}
    <line
      x1='200'
      y1='50'
      x2='200'
      y2='250'
      stroke='currentColor'
      strokeWidth='1'
    />
    <line
      x1='275'
      y1='50'
      x2='275'
      y2='100'
      stroke='currentColor'
      strokeWidth='1'
    />
    <line
      x1='125'
      y1='150'
      x2='125'
      y2='250'
      stroke='currentColor'
      strokeWidth='1'
    />

    {/* Table headers */}
    <text
      x='200'
      y='75'
      textAnchor='middle'
      className='fill-foreground font-semibold'
    >
      Firm B
    </text>
    <text x='237.5' y='90' textAnchor='middle' className='fill-foreground'>
      Produce 1000 Units
    </text>
    <text x='312.5' y='90' textAnchor='middle' className='fill-foreground'>
      Produce 2000 Units
    </text>

    <text
      x='87.5'
      y='125'
      textAnchor='middle'
      className='fill-foreground font-semibold'
    >
      Firm A
    </text>
    <text x='87.5' y='175' textAnchor='middle' className='fill-foreground'>
      Produce 1000 Units
    </text>
    <text x='87.5' y='225' textAnchor='middle' className='fill-foreground'>
      Produce 2000 Units
    </text>

    {/* Payoff values */}
    <text x='162.5' y='175' textAnchor='middle' className='fill-foreground'>
      (100, 100)
    </text>
    <text x='275' y='175' textAnchor='middle' className='fill-foreground'>
      (10, 150)
    </text>
    <text x='162.5' y='225' textAnchor='middle' className='fill-foreground'>
      (150, 10)
    </text>
    <text x='275' y='225' textAnchor='middle' className='fill-foreground'>
      (30, 30)
    </text>
  </svg>
);
