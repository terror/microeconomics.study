export const FigurePayoffMatrix = () => (
  <svg viewBox='0 0 500 300' className='mx-auto w-full max-w-lg'>
    <line
      x1='100'
      y1='120'
      x2='450'
      y2='120'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />
    <line
      x1='100'
      y1='200'
      x2='450'
      y2='200'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />
    <line
      x1='100'
      y1='280'
      x2='450'
      y2='280'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />
    <line
      x1='100'
      y1='120'
      x2='100'
      y2='280'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />
    <line
      x1='275'
      y1='80'
      x2='275'
      y2='280'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />
    <line
      x1='450'
      y1='120'
      x2='450'
      y2='280'
      stroke='hsl(var(--muted-foreground))'
      strokeOpacity='0.5'
      strokeWidth='2'
    />

    <text
      x='275'
      y='40'
      fontFamily='system-ui'
      fontSize='22'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Firm B
    </text>
    <text
      x='40'
      y='205'
      fontFamily='system-ui'
      fontSize='22'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Firm A
    </text>

    <text
      x='187.5'
      y='85'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Produce
    </text>
    <text
      x='187.5'
      y='105'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      1000 Units
    </text>

    <text
      x='362.5'
      y='85'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Produce
    </text>
    <text
      x='362.5'
      y='105'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      2000 Units
    </text>

    <text
      x='75'
      y='145'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='end'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Produce
    </text>
    <text
      x='85'
      y='165'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='end'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      1000 Units
    </text>

    <text
      x='75'
      y='240'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='end'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      Produce
    </text>
    <text
      x='85'
      y='260'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='end'
      fontWeight='bold'
      fill='hsl(var(--foreground))'
    >
      2000 Units
    </text>

    <text
      x='187.5'
      y='160'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fill='hsl(var(--primary))'
    >
      (100, 100)
    </text>
    <text
      x='362.5'
      y='160'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fill='hsl(var(--primary))'
    >
      (10, 150)
    </text>
    <text
      x='187.5'
      y='240'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fill='hsl(var(--primary))'
    >
      (150, 10)
    </text>
    <text
      x='362.5'
      y='240'
      fontFamily='system-ui'
      fontSize='16'
      textAnchor='middle'
      fill='hsl(var(--primary))'
    >
      (30, 30)
    </text>
  </svg>
);
