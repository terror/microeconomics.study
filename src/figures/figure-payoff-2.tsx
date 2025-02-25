export const FigurePayoff2 = () => {
  /*
    Figure Payoff-2: A 2x2 payoff matrix for two firms (A and B),
    each choosing High Capacity (HC) or Low Capacity (LC).
    We'll label cells with example payoffs (A,B).
  */
  return (
    <svg viewBox='0 0 600 400' className='mx-auto w-full max-w-lg'>
      {/* Draw a rectangle for the matrix */}
      <rect
        x='100'
        y='50'
        width='400'
        height='300'
        fill='none'
        stroke='currentColor'
        strokeWidth='3'
      />
      {/* Horizontal dividing line */}
      <line
        x1='100'
        y1='200'
        x2='500'
        y2='200'
        stroke='currentColor'
        strokeWidth='2'
      />
      {/* Vertical dividing line */}
      <line
        x1='300'
        y1='50'
        x2='300'
        y2='350'
        stroke='currentColor'
        strokeWidth='2'
      />

      {/* Labels for rows (Firm B’s strategies) */}
      <text x='60' y='130' fontSize='18' fontFamily='serif' fill='currentColor'>
        B: HC
      </text>
      <text x='60' y='280' fontSize='18' fontFamily='serif' fill='currentColor'>
        B: LC
      </text>

      {/* Labels for columns (Firm A’s strategies) */}
      <text x='180' y='40' fontSize='18' fontFamily='serif' fill='currentColor'>
        A: HC
      </text>
      <text x='380' y='40' fontSize='18' fontFamily='serif' fill='currentColor'>
        A: LC
      </text>

      {/* Payoffs in each cell: (Payoff to A, Payoff to B) */}
      {/* Top-left cell (HC, HC) */}
      <text
        x='180'
        y='130'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        (π₁, π₁)
      </text>

      {/* Top-right cell (LC, HC) */}
      <text
        x='380'
        y='130'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        (π₂, π₃)
      </text>

      {/* Bottom-left cell (HC, LC) */}
      <text
        x='180'
        y='280'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        (π₃, π₂)
      </text>

      {/* Bottom-right cell (LC, LC) */}
      <text
        x='380'
        y='280'
        fontSize='16'
        fontFamily='serif'
        fill='currentColor'
      >
        (π₄, π₄)
      </text>

      {/* Title / general label */}
      <text
        x='300'
        y='20'
        textAnchor='middle'
        fontSize='20'
        fontFamily='serif'
        fill='currentColor'
      >
        Payoff Matrix (Firms A & B)
      </text>
    </svg>
  );
};
