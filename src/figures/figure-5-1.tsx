export const Figure5_1 = () => {
  return (
    <svg viewBox='0 0 600 500' className='mx-auto w-full max-w-lg'>
      <line
        x1='50'
        y1='400'
        x2='50'
        y2='50'
        stroke='currentColor'
        strokeWidth='3'
      />
      <line
        x1='50'
        y1='400'
        x2='550'
        y2='400'
        stroke='currentColor'
        strokeWidth='3'
      />
      <text x='0' y='230' fontSize='24' fontFamily='serif' fill='currentColor'>
        $
      </text>
      <text
        x='300'
        y='450'
        fontSize='24'
        fontFamily='serif'
        textAnchor='middle'
        fill='currentColor'
      >
        Quantity
      </text>
      <line
        x1='50'
        y1='350'
        x2='500'
        y2='75'
        stroke='currentColor'
        strokeWidth='4'
      />{' '}
      {/* Supply */}
      <line
        x1='50'
        y1='75'
        x2='500'
        y2='350'
        stroke='currentColor'
        strokeWidth='4'
      />{' '}
      {/* Demand */}
      <line
        x1='50'
        y1='100'
        x2='540'
        y2='100'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* P₂ */}
      <line
        x1='50'
        y1='212'
        x2='540'
        y2='212'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* P₀ */}
      <line
        x1='50'
        y1='300'
        x2='540'
        y2='300'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* P₃ */}
      <text x='20' y='105' fontSize='20' fontFamily='serif' fill='currentColor'>
        P₂
      </text>
      <text x='20' y='217' fontSize='20' fontFamily='serif' fill='currentColor'>
        P₀
      </text>
      <text x='20' y='305' fontSize='20' fontFamily='serif' fill='currentColor'>
        P₃
      </text>
      <line
        x1='100'
        y1='50'
        x2='100'
        y2='400'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* A */}
      <line
        x1='150'
        y1='50'
        x2='150'
        y2='400'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* B */}
      <line
        x1='275'
        y1='50'
        x2='275'
        y2='400'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* F */}
      <line
        x1='400'
        y1='50'
        x2='400'
        y2='400'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* D */}
      <line
        x1='450'
        y1='50'
        x2='450'
        y2='400'
        stroke='currentColor'
        strokeWidth='1'
        strokeDasharray='5,5'
        strokeOpacity='0.6'
      />{' '}
      {/* C */}
      <text x='50' y='420' fontSize='20' fontFamily='serif' fill='currentColor'>
        0
      </text>
      <text
        x='100'
        y='420'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        A
      </text>
      <text
        x='150'
        y='420'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        B
      </text>
      <text
        x='275'
        y='420'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        F
      </text>
      <text
        x='400'
        y='420'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        D
      </text>
      <text
        x='450'
        y='420'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        C
      </text>
      <circle cx='275' cy='212' r='6' fill='currentColor' />
      <text
        x='285'
        y='207'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        E
      </text>
      <text x='520' y='75' fontSize='24' fontFamily='serif' fill='currentColor'>
        Supply
      </text>
      <text
        x='515'
        y='350'
        fontSize='24'
        fontFamily='serif'
        fill='currentColor'
      >
        Demand
      </text>
    </svg>
  );
};
