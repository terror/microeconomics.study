export const Figure7_1 = () => (
  <svg viewBox='0 0 400 650' className='mx-auto w-full max-w-lg'>
    <g transform='translate(0,0)'>
      <rect
        x='60'
        y='20'
        width='320'
        height='260'
        fill='none'
        className='stroke-muted'
        strokeWidth='1'
      />

      <line
        x1='60'
        y1='280'
        x2='380'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <line
        x1='60'
        y1='20'
        x2='60'
        y2='281'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <g className='stroke-muted/30' strokeWidth='1'>
        <line x1='61' y1='150' x2='380' y2='150' />
        <line x1='220' y1='20' x2='220' y2='279' />
      </g>

      <path
        d='M 60 260 Q 100 200 200 100 T 360 60'
        className='stroke-foreground'
        fill='none'
        strokeWidth='2'
      />

      <text x='250' y='80' className='fill-foreground text-sm'>
        Total Product
      </text>

      <text
        x='0'
        y='150'
        transform='rotate(-90, 50, 150)'
        className='fill-foreground text-sm'
      >
        Total Product
      </text>

      <text x='180' y='300' className='fill-foreground text-sm'>
        Units of Labour
      </text>
    </g>

    <g transform='translate(0,320)'>
      <rect
        x='60'
        y='20'
        width='320'
        height='260'
        fill='none'
        className='stroke-muted'
        strokeWidth='1'
      />

      <line
        x1='60'
        y1='280'
        x2='380'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <line
        x1='60'
        y1='20'
        x2='60'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <g className='stroke-muted/30' strokeWidth='1'>
        <line x1='61' y1='150' x2='380' y2='150' />
        <line x1='220' y1='20' x2='220' y2='279' />
      </g>

      <path
        d='M 60 200 Q 100 100 125 50 T 360 250'
        className='stroke-blue-500 dark:stroke-blue-400'
        fill='none'
        strokeWidth='2'
      />

      <text x='210' y='80' className='fill-foreground text-sm'>
        Marginal Product
      </text>

      <path
        d='M 60 220 Q 120 150 200 120 T 360 180'
        className='stroke-red-500 dark:stroke-red-400'
        fill='none'
        strokeWidth='2'
      />

      <text x='280' y='140' className='fill-foreground text-sm'>
        Average Product
      </text>

      <text
        x='25'
        y='150'
        transform='rotate(-90, 50, 150)'
        className='fill-foreground text-sm'
      >
        MP, AP
      </text>

      <text x='180' y='300' className='fill-foreground text-sm'>
        Units of Labour
      </text>
    </g>
  </svg>
);
