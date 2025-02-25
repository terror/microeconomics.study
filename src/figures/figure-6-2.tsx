export const Figure6_2 = () => {
  /*
    Figure 6-2: An indifference map showing two indifference curves, IC1 and IC2,
    where IC2 lies “above” (i.e., to the northeast of) IC1. 
    We label axes as X and Y, and highlight a point E on IC2.
  */
  return (
    <svg viewBox='0 0 600 500' className='mx-auto w-full max-w-lg'>
      {/* Axes for Good X (horizontal) and Good Y (vertical) */}
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

      {/* Axis labels */}
      <text x='20' y='230' fontSize='24' fontFamily='serif' fill='currentColor'>
        Y
      </text>
      <text
        x='300'
        y='440'
        fontSize='24'
        fontFamily='serif'
        textAnchor='middle'
        fill='currentColor'
      >
        X
      </text>

      {/* Indifference Curve IC1 (lower) */}
      <path
        d='M 80 350 Q 200 250 320 180 Q 420 120 500 100'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
      />
      <text
        x='510'
        y='105'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        IC₁
      </text>

      {/* Indifference Curve IC2 (higher) */}
      <path
        d='M 80 300 Q 200 200 320 130 Q 420 70 500 60'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
        strokeDasharray='5,5'
      />
      <text x='510' y='65' fontSize='18' fontFamily='serif' fill='currentColor'>
        IC₂
      </text>

      {/* Point E on IC2 */}
      {/* Just pick a spot on the second curve: e.g. x=250, y=160 */}
      <circle cx='250' cy='160' r='5' fill='currentColor' />
      <text
        x='260'
        y='155'
        fontSize='18'
        fontFamily='serif'
        fill='currentColor'
      >
        E
      </text>
    </svg>
  );
};
