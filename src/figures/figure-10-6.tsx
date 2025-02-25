export const Figure10_6 = () => (
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
    />
    <line
      x1='50'
      y1='250'
      x2='50'
      y2='50'
      className='stroke-foreground'
      strokeWidth='2'
    />

    {/* Curves */}
    <path
      d='M 50 200 Q 150 250 200 200 Q 250 150 350 100'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='100' className='fill-foreground text-sm'>
      MC
    </text>

    <path
      d='M 50 230 Q 150 270 200 230 Q 250 180 350 150'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='150' className='fill-foreground text-sm'>
      ATC
    </text>

    {/* Horizontal price lines */}
    <line
      x1='50'
      y1='100'
      x2='350'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='100' className='fill-foreground text-sm'>
      $5
    </text>

    <line
      x1='50'
      y1='120'
      x2='350'
      y2='120'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='120' className='fill-foreground text-sm'>
      $4
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
      $3.25
    </text>

    <line
      x1='50'
      y1='150'
      x2='350'
      y2='150'
      className='stroke-foreground'
      strokeWidth='1'
    />
    <text x='30' y='150' className='fill-foreground text-sm'>
      $3
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
      $2
    </text>

    <line
      x1='50'
      y1='220'
      x2='350'
      y2='220'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='30' y='220' className='fill-foreground text-sm'>
      $1
    </text>

    {/* Vertical quantity lines */}
    <line
      x1='150'
      y1='50'
      x2='150'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='150' y='270' className='fill-foreground text-sm'>
      600
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
      1000
    </text>

    <line
      x1='220'
      y1='50'
      x2='220'
      y2='250'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='220' y='270' className='fill-foreground text-sm'>
      1200
    </text>

    {/* Points on curves */}
    <circle cx='150' cy='100' r='4' className='fill-foreground' />
    <circle cx='150' cy='120' r='4' className='fill-foreground' />
    <circle cx='200' cy='140' r='4' className='fill-foreground' />

    {/* X-axis label */}
    <text x='180' y='290' className='fill-foreground text-center text-sm'>
      Quantity (units per day)
    </text>

    {/* Y-axis label */}
    <text
      x='-180'
      y='30'
      className='fill-foreground text-sm'
      transform='rotate(-90)'
    >
      $ per unit
    </text>
  </svg>
);
