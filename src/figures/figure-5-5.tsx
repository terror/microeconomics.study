export const Figure5_5 = () => (
  <svg viewBox='0 0 800 600' className='mx-auto w-full max-w-lg'>
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

    {/* Grid Lines */}
    <line
      x1='100'
      y1='500'
      x2='700'
      y2='500'
      className='stroke-foreground'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />
    <line
      x1='100'
      y1='500'
      x2='100'
      y2='100'
      className='stroke-foreground'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />

    {/* Horizontal Grid Lines and Price Labels */}
    <line
      x1='95'
      y1='150'
      x2='700'
      y2='150'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='70' y='155' className='fill-foreground text-sm'>
      70
    </text>

    <line
      x1='95'
      y1='260'
      x2='700'
      y2='260'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='70' y='265' className='fill-foreground text-sm'>
      50
    </text>

    <line
      x1='95'
      y1='340'
      x2='700'
      y2='340'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='70' y='345' className='fill-foreground text-sm'>
      30
    </text>

    <line
      x1='95'
      y1='420'
      x2='700'
      y2='420'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='70' y='425' className='fill-foreground text-sm'>
      15
    </text>

    {/* Vertical Grid Lines and Quantity Labels */}
    <line
      x1='200'
      y1='505'
      x2='200'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='200' y='530' className='fill-foreground text-sm'>
      1000
    </text>

    <line
      x1='300'
      y1='505'
      x2='300'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='300' y='530' className='fill-foreground text-sm'>
      2000
    </text>

    <line
      x1='400'
      y1='505'
      x2='400'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='400' y='530' className='fill-foreground text-sm'>
      3000
    </text>

    <line
      x1='500'
      y1='505'
      x2='500'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='500' y='530' className='fill-foreground text-sm'>
      4000
    </text>

    <line
      x1='600'
      y1='505'
      x2='600'
      y2='100'
      className='stroke-muted'
      strokeDasharray='4'
    />
    <text x='600' y='530' className='fill-foreground text-sm'>
      6000
    </text>

    {/* Supply and Demand Curves */}
    <path
      d='M 100 150 L 600 450'
      className='stroke-foreground'
      strokeWidth='2.5'
      fill='none'
    />
    <text x='620' y='430' className='fill-foreground text-sm font-bold'>
      Demand
    </text>

    <path
      d='M 100 500 L 600 150'
      className='stroke-foreground'
      strokeWidth='2.5'
      fill='none'
    />
    <text x='620' y='180' className='fill-foreground text-lg font-bold'>
      Supply
    </text>

    {/* Region Circles and Numbers */}
    {/* Region 1 */}
    <circle
      cx='140'
      cy='220'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='140'
      y='225'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      1
    </text>

    {/* Region 2 */}
    <circle
      cx='140'
      cy='295'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='140'
      y='300'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      2
    </text>

    {/* Region 3 */}
    <circle
      cx='140'
      cy='380'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='140'
      y='385'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      3
    </text>

    {/* Region 4 */}
    <circle
      cx='130'
      cy='450'
      r='20'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='130'
      y='455'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      4
    </text>

    {/* Region 5 */}
    <circle
      cx='250'
      cy='435'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='250'
      y='440'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      5
    </text>

    {/* Region 6 */}
    <circle
      cx='235'
      cy='285'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='235'
      y='290'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      6
    </text>

    {/* Region 7 */}
    <circle
      cx='235'
      cy='355'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='235'
      y='360'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      7
    </text>

    {/* Region 8 */}
    <circle
      cx='350'
      cy='435'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='350'
      y='440'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      8
    </text>

    {/* Region 9 */}
    <circle
      cx='450'
      cy='435'
      r='25'
      className='fill-white stroke-gray-400 dark:fill-gray-800'
      strokeWidth='1.5'
    />
    <text
      x='450'
      y='440'
      className='fill-foreground text-base font-bold'
      textAnchor='middle'
    >
      9
    </text>

    {/* Axis Labels */}
    <text
      transform='rotate(-90, 40, 300)'
      x='40'
      y='300'
      className='fill-foreground text-sm font-bold'
      textAnchor='middle'
    >
      Price ($s per hour)
    </text>
    <text
      x='400'
      y='570'
      className='fill-foreground text-sm font-bold'
      textAnchor='middle'
    >
      Quantity (number of hours of gardening service per month)
    </text>
  </svg>
);
