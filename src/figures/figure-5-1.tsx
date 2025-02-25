export const Figure5_1 = () => (
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

    <path
      d='M 50 200 L 350 100'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='100' className='fill-foreground text-sm'>
      Supply
    </text>

    <path
      d='M 50 100 L 350 200'
      className='stroke-foreground'
      strokeWidth='2'
      fill='none'
    />
    <text x='360' y='200' className='fill-foreground text-sm'>
      Demand
    </text>

    <text x='30' y='80' className='fill-foreground text-sm'>
      P₂
    </text>
    <line
      x1='45'
      y1='80'
      x2='350'
      y2='80'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='30' y='150' className='fill-foreground text-sm'>
      P₀
    </text>
    <line
      x1='45'
      y1='150'
      x2='350'
      y2='150'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='30' y='220' className='fill-foreground text-sm'>
      P₃
    </text>
    <line
      x1='45'
      y1='220'
      x2='350'
      y2='220'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='80' y='270' className='fill-foreground text-sm'>
      A
    </text>
    <line
      x1='80'
      y1='245'
      x2='80'
      y2='80'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='120' y='270' className='fill-foreground text-sm'>
      B
    </text>
    <line
      x1='120'
      y1='245'
      x2='120'
      y2='80'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='200' y='270' className='fill-foreground text-sm'>
      F
    </text>
    <line
      x1='200'
      y1='245'
      x2='200'
      y2='150'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='280' y='270' className='fill-foreground text-sm'>
      D
    </text>
    <line
      x1='280'
      y1='245'
      x2='280'
      y2='80'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='320' y='270' className='fill-foreground text-sm'>
      C
    </text>
    <line
      x1='320'
      y1='245'
      x2='320'
      y2='80'
      className='stroke-muted'
      strokeDasharray='4'
    />

    <text x='30' y='40' className='fill-foreground text-sm'>
      $
    </text>
    <text x='180' y='290' className='fill-foreground text-sm'>
      Quantity
    </text>

    <circle cx='200' cy='150' r='4' className='fill-foreground' />
    <text x='210' y='145' className='fill-foreground text-sm'>
      E
    </text>
  </svg>
);
