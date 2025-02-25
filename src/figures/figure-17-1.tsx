export const Figure17_1 = () => (
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

    {/* MCS - Marginal Cost to Society curve */}
    <path
      d='M 100 200 L 300 80'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='310' y='80' className='fill-foreground text-sm'>
      MC_S
    </text>

    {/* MCP - Marginal Cost to Private firms curve */}
    <path
      d='M 100 220 L 300 120'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='310' y='120' className='fill-foreground text-sm'>
      MC_P
    </text>

    {/* MB - Marginal Benefit curve */}
    <path
      d='M 100 100 L 300 220'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='310' y='220' className='fill-foreground text-sm'>
      MB
    </text>

    {/* Price labels */}
    <line
      x1='50'
      y1='100'
      x2='350'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='100' className='fill-foreground text-sm'>
      P_4
    </text>

    <line
      x1='50'
      y1='140'
      x2='350'
      y2='140'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='140' className='fill-foreground text-sm'>
      P_3
    </text>

    <line
      x1='50'
      y1='170'
      x2='350'
      y2='170'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='170' className='fill-foreground text-sm'>
      P_2
    </text>

    <line
      x1='50'
      y1='200'
      x2='350'
      y2='200'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='200' className='fill-foreground text-sm'>
      P_1
    </text>

    {/* Quantity labels */}
    <line
      x1='100'
      y1='50'
      x2='100'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='100' y='270' className='fill-foreground text-sm'>
      Q_1
    </text>

    <line
      x1='160'
      y1='50'
      x2='160'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='160' y='270' className='fill-foreground text-sm'>
      Q_2
    </text>

    <line
      x1='200'
      y1='50'
      x2='200'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='200' y='270' className='fill-foreground text-sm'>
      Q_3
    </text>

    {/* Intersection points */}
    <circle cx='160' cy='200' r='3' className='fill-foreground' />
    <circle cx='200' cy='170' r='3' className='fill-foreground' />
    <circle cx='160' cy='140' r='3' className='fill-foreground' />

    {/* Axis labels */}
    <text x='180' y='290' className='fill-foreground text-sm'>
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
