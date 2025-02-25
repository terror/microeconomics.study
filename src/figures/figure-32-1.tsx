export const Figure32_1 = () => (
  <svg viewBox='0 0 800 300' className='mx-auto w-full max-w-lg'>
    {/* Ireland Graph */}
    <g transform='translate(0,0)'>
      <text
        x='150'
        y='30'
        className='fill-foreground text-center text-lg font-semibold'
      >
        Ireland
      </text>

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

      {/* Production possibilities curve (solid) */}
      <path
        d='M 50 100 L 250 250'
        className='stroke-foreground'
        strokeWidth='2'
        fill='none'
      />

      {/* Consumption possibilities curve (dashed) */}
      <path
        d='M 50 75 L 350 250'
        className='stroke-foreground'
        strokeWidth='2'
        fill='none'
        strokeDasharray='5,5'
      />

      {/* Axis labels */}
      <text
        x='-150'
        y='30'
        className='fill-foreground text-sm'
        transform='rotate(-90)'
      >
        Units of Wool
      </text>
      <text x='180' y='280' className='fill-foreground text-sm'>
        Units of Steel
      </text>

      {/* Scale markers */}
      <text x='50' y='265' className='fill-foreground text-sm'>
        0
      </text>
      <text x='90' y='265' className='fill-foreground text-sm'>
        1
      </text>
      <text x='130' y='265' className='fill-foreground text-sm'>
        2
      </text>
      <text x='170' y='265' className='fill-foreground text-sm'>
        3
      </text>
      <text x='210' y='265' className='fill-foreground text-sm'>
        4
      </text>
      <text x='250' y='265' className='fill-foreground text-sm'>
        5
      </text>
      <text x='290' y='265' className='fill-foreground text-sm'>
        6
      </text>
      <text x='330' y='265' className='fill-foreground text-sm'>
        7
      </text>

      <text x='35' y='250' className='fill-foreground text-sm'>
        0
      </text>
      <text x='35' y='210' className='fill-foreground text-sm'>
        1
      </text>
      <text x='35' y='170' className='fill-foreground text-sm'>
        2
      </text>
      <text x='35' y='130' className='fill-foreground text-sm'>
        3
      </text>
      <text x='35' y='90' className='fill-foreground text-sm'>
        4
      </text>
      <text x='35' y='50' className='fill-foreground text-sm'>
        5
      </text>
    </g>

    {/* Japan Graph */}
    <g transform='translate(400,0)'>
      <text
        x='150'
        y='30'
        className='fill-foreground text-center text-lg font-semibold'
      >
        Japan
      </text>

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

      {/* Production possibilities curve (solid) */}
      <path
        d='M 50 125 L 300 250'
        className='stroke-foreground'
        strokeWidth='2'
        fill='none'
      />

      {/* Consumption possibilities curve (dashed) */}
      <path
        d='M 50 75 L 350 250'
        className='stroke-foreground'
        strokeWidth='2'
        fill='none'
        strokeDasharray='5,5'
      />

      {/* Axis labels */}
      <text
        x='-150'
        y='30'
        className='fill-foreground text-sm'
        transform='rotate(-90)'
      >
        Units of Wool
      </text>
      <text x='180' y='280' className='fill-foreground text-sm'>
        Units of Steel
      </text>

      {/* Scale markers */}
      <text x='50' y='265' className='fill-foreground text-sm'>
        0
      </text>
      <text x='90' y='265' className='fill-foreground text-sm'>
        1
      </text>
      <text x='130' y='265' className='fill-foreground text-sm'>
        2
      </text>
      <text x='170' y='265' className='fill-foreground text-sm'>
        3
      </text>
      <text x='210' y='265' className='fill-foreground text-sm'>
        4
      </text>
      <text x='250' y='265' className='fill-foreground text-sm'>
        5
      </text>
      <text x='290' y='265' className='fill-foreground text-sm'>
        6
      </text>
      <text x='330' y='265' className='fill-foreground text-sm'>
        7
      </text>

      <text x='35' y='250' className='fill-foreground text-sm'>
        0
      </text>
      <text x='35' y='210' className='fill-foreground text-sm'>
        1
      </text>
      <text x='35' y='170' className='fill-foreground text-sm'>
        2
      </text>
      <text x='35' y='130' className='fill-foreground text-sm'>
        3
      </text>
      <text x='35' y='90' className='fill-foreground text-sm'>
        4
      </text>
      <text x='35' y='50' className='fill-foreground text-sm'>
        5
      </text>
    </g>
  </svg>
);
