export const Figure7_2 = () => {
  /*
    Figure 7-2: A total product curve with a region of increasing marginal returns 
    (steep slope), then diminishing returns (flatter slope), labeled points if needed.
  */
  return (
    <svg viewBox='0 0 600 500' className='mx-auto w-full max-w-lg'>
      {/* Axes: Output (TP) on vertical, Labour on horizontal */}
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
      {/* Labels */}
      <text x='20' y='230' fontSize='24' fontFamily='serif' fill='currentColor'>
        TP
      </text>
      <text
        x='300'
        y='440'
        fontSize='24'
        fontFamily='serif'
        textAnchor='middle'
        fill='currentColor'
      >
        Labour
      </text>

      {/* Total product curve (S-shaped) */}
      <path
        d='M 80 380 
           Q 150 240 250 150
           T 450 90'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
      />

      {/* Optional reference points, e.g., A, B, C along the curve */}
      <circle cx='150' cy='240' r='4' fill='currentColor' />
      <text
        x='160'
        y='235'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        A
      </text>
      <circle cx='250' cy='150' r='4' fill='currentColor' />
      <text
        x='260'
        y='145'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        B
      </text>
      <circle cx='400' cy='100' r='4' fill='currentColor' />
      <text x='410' y='95' fontSize='16' fontFamily='serif' fill='currentColor'>
        C
      </text>
    </svg>
  );
};
