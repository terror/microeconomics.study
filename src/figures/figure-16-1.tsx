export const Figure16_1 = () => (
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

    {/* MC Curves */}
    <path
      d='M 80 200 L 180 80'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='190' y='70' className='fill-foreground text-sm'>
      MC₁
    </text>

    <path
      d='M 120 200 L 220 80'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='230' y='70' className='fill-foreground text-sm'>
      S = MC₀
    </text>

    <path
      d='M 160 200 L 260 80'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='270' y='70' className='fill-foreground text-sm'>
      MC₂
    </text>

    {/* MB Curves */}
    <path
      d='M 200 80 L 300 200'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='310' y='200' className='fill-foreground text-sm'>
      D = MB₀
    </text>

    <path
      d='M 160 80 L 260 200'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='270' y='200' className='fill-foreground text-sm'>
      MB₁
    </text>

    {/* Intersection Points */}
    <circle cx='170' cy='140' r='4' className='fill-foreground' />
    <text x='170' y='130' className='fill-foreground text-sm'>
      A
    </text>

    <circle cx='140' cy='120' r='4' className='fill-foreground' />
    <text x='140' y='110' className='fill-foreground text-sm'>
      B
    </text>

    <circle cx='200' cy='180' r='4' className='fill-foreground' />
    <text x='200' y='170' className='fill-foreground text-sm'>
      C
    </text>

    <circle cx='240' cy='160' r='4' className='fill-foreground' />
    <text x='240' y='150' className='fill-foreground text-sm'>
      D
    </text>

    <circle cx='200' cy='120' r='4' className='fill-foreground' />
    <text x='200' y='110' className='fill-foreground text-sm'>
      E
    </text>

    <circle cx='170' cy='100' r='4' className='fill-foreground' />
    <text x='170' y='90' className='fill-foreground text-sm'>
      F
    </text>

    {/* Price line */}
    <line
      x1='50'
      y1='140'
      x2='350'
      y2='140'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='140' className='fill-foreground text-sm'>
      P₀
    </text>

    {/* Quantity line */}
    <line
      x1='170'
      y1='50'
      x2='170'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='170' y='270' className='fill-foreground text-sm'>
      Q₀
    </text>

    {/* Axis labels */}
    <text x='190' y='290' className='fill-foreground text-sm'>
      Quantity
    </text>
    <text
      x='-150'
      y='30'
      className='fill-foreground text-sm'
      transform='rotate(-90)'
    >
      Price
    </text>
  </svg>
);
