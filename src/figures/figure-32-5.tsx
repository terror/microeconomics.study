export const Figure32_5 = () => (
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

    {/* Supply Curve */}
    <path
      d='M 50 200 L 350 100'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='100' className='fill-foreground text-sm'>
      S
    </text>

    {/* Demand Curve */}
    <path
      d='M 50 100 L 350 200'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='200' className='fill-foreground text-sm'>
      D
    </text>

    {/* Price lines */}
    <line
      x1='50'
      y1='100'
      x2='350'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='100' className='fill-foreground text-sm'>
      P_A
    </text>

    <line
      x1='50'
      y1='150'
      x2='350'
      y2='150'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='150' className='fill-foreground text-sm'>
      P_B
    </text>

    <line
      x1='50'
      y1='180'
      x2='350'
      y2='180'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='180' className='fill-foreground text-sm'>
      P_C
    </text>

    {/* Quantity lines */}
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
      x1='140'
      y1='50'
      x2='140'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='140' y='270' className='fill-foreground text-sm'>
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

    <line
      x1='260'
      y1='50'
      x2='260'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='260' y='270' className='fill-foreground text-sm'>
      Q_4
    </text>

    <line
      x1='300'
      y1='50'
      x2='300'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='300' y='270' className='fill-foreground text-sm'>
      Q_5
    </text>

    {/* Axis labels */}
    <text x='180' y='290' className='fill-foreground text-sm'>
      Market for Newsprint
    </text>
    <text
      x='-180'
      y='30'
      className='fill-foreground text-sm'
      transform='rotate(-90)'
    >
      Price of Newsprint
    </text>
  </svg>
);
