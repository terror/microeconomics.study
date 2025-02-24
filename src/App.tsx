import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const Figure5_1 = () => (
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
        <polygon points='0 0, 10 3.5, 0 7' fill='black' />
      </marker>
    </defs>

    {/* Axes */}
    <line
      x1='50'
      y1='250'
      x2='350'
      y2='250'
      stroke='black'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />
    <line
      x1='50'
      y1='250'
      x2='50'
      y2='50'
      stroke='black'
      strokeWidth='2'
      markerEnd='url(#arrowhead)'
    />

    {/* Supply curve */}
    <path d='M 50 200 L 350 100' stroke='black' strokeWidth='2' fill='none' />
    <text x='360' y='100' className='text-sm'>
      Supply
    </text>

    {/* Demand curve */}
    <path d='M 50 100 L 350 200' stroke='black' strokeWidth='2' fill='none' />
    <text x='360' y='200' className='text-sm'>
      Demand
    </text>

    {/* Price labels */}
    <text x='30' y='80' className='text-sm'>
      P₂
    </text>
    <line x1='45' y1='80' x2='350' y2='80' stroke='gray' strokeDasharray='4' />

    <text x='30' y='150' className='text-sm'>
      P₀
    </text>
    <line
      x1='45'
      y1='150'
      x2='350'
      y2='150'
      stroke='gray'
      strokeDasharray='4'
    />

    <text x='30' y='220' className='text-sm'>
      P₃
    </text>
    <line
      x1='45'
      y1='220'
      x2='350'
      y2='220'
      stroke='gray'
      strokeDasharray='4'
    />

    {/* Quantity labels */}
    <text x='80' y='270' className='text-sm'>
      A
    </text>
    <line x1='80' y1='245' x2='80' y2='80' stroke='gray' strokeDasharray='4' />

    <text x='120' y='270' className='text-sm'>
      B
    </text>
    <line
      x1='120'
      y1='245'
      x2='120'
      y2='80'
      stroke='gray'
      strokeDasharray='4'
    />

    <text x='200' y='270' className='text-sm'>
      F
    </text>
    <line
      x1='200'
      y1='245'
      x2='200'
      y2='150'
      stroke='gray'
      strokeDasharray='4'
    />

    <text x='280' y='270' className='text-sm'>
      D
    </text>
    <line
      x1='280'
      y1='245'
      x2='280'
      y2='80'
      stroke='gray'
      strokeDasharray='4'
    />

    <text x='320' y='270' className='text-sm'>
      C
    </text>
    <line
      x1='320'
      y1='245'
      x2='320'
      y2='80'
      stroke='gray'
      strokeDasharray='4'
    />

    {/* Axis labels */}
    <text x='30' y='40' className='text-sm'>
      $
    </text>
    <text x='180' y='290' className='text-sm'>
      Quantity
    </text>

    {/* Equilibrium point */}
    <circle cx='200' cy='150' r='4' fill='black' />
    <text x='210' y='145' className='text-sm'>
      E
    </text>
  </svg>
);

const Figure5_5 = () => (
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
        <polygon points='0 0, 10 3.5, 0 7' fill='black' />
      </marker>
    </defs>

    {/* Axes */}
    <line x1='50' y1='250' x2='350' y2='250' stroke='black' strokeWidth='2' />
    <line x1='50' y1='250' x2='50' y2='50' stroke='black' strokeWidth='2' />

    {/* Price axis labels */}
    <text x='20' y='70' className='text-sm'>
      70
    </text>
    <text x='20' y='120' className='text-sm'>
      60
    </text>
    <text x='20' y='170' className='text-sm'>
      50
    </text>
    <text x='20' y='220' className='text-sm'>
      40
    </text>

    {/* Supply curve */}
    <path d='M 50 220 L 350 100' stroke='black' strokeWidth='2' fill='none' />
    <text x='360' y='120' className='text-sm'>
      Supply
    </text>

    {/* Demand curve */}
    <path d='M 50 80 L 350 200' stroke='black' strokeWidth='2' fill='none' />
    <text x='360' y='200' className='text-sm'>
      Demand
    </text>

    {/* Areas */}
    <path d='M 50 80 L 150 100 L 150 150 Z' fill='#e5e7eb' fillOpacity='0.5' />
    <text x='100' y='110' className='text-sm'>
      1
    </text>

    <path
      d='M 150 100 L 250 120 L 150 150 Z'
      fill='#d1d5db'
      fillOpacity='0.5'
    />
    <text x='180' y='120' className='text-sm'>
      2
    </text>

    <path
      d='M 150 150 L 250 120 L 250 170 Z'
      fill='#9ca3af'
      fillOpacity='0.5'
    />
    <text x='200' y='150' className='text-sm'>
      6
    </text>

    <path
      d='M 150 150 L 250 170 L 150 200 Z'
      fill='#6b7280'
      fillOpacity='0.5'
    />
    <text x='180' y='180' className='text-sm'>
      7
    </text>

    {/* Axis labels */}
    <text x='20' y='40' className='text-sm'>
      Price ($/per hour)
    </text>
    <text x='180' y='280' className='text-sm'>
      Quantity (number of hours of gardening service per month)
    </text>
  </svg>
);

const Figure7_1 = () => (
  <svg viewBox='0 0 400 600' className='mx-auto w-full max-w-lg'>
    {/* Total Product Graph */}
    <g transform='translate(0,0)'>
      <rect
        x='40'
        y='20'
        width='320'
        height='260'
        fill='none'
        stroke='#ccc'
        strokeWidth='1'
      />
      <line x1='40' y1='280' x2='360' y2='280' stroke='black' strokeWidth='2' />
      <line x1='40' y1='20' x2='40' y2='280' stroke='black' strokeWidth='2' />

      {/* Grid lines */}
      <g stroke='#eee' strokeWidth='1'>
        <line x1='40' y1='150' x2='360' y2='150' />
        <line x1='200' y1='20' x2='200' y2='280' />
      </g>

      {/* Total Product curve */}
      <path
        d='M 40 260 Q 100 200 200 100 T 360 60'
        stroke='black'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='80' className='text-sm'>
        Total Product
      </text>

      {/* Axis labels */}
      <text x='20' y='150' className='text-sm'>
        Total Product
      </text>
      <text x='180' y='300' className='text-sm'>
        Units of Labour
      </text>
    </g>

    {/* MP and AP Graph */}
    <g transform='translate(0,320)'>
      <rect
        x='40'
        y='20'
        width='320'
        height='260'
        fill='none'
        stroke='#ccc'
        strokeWidth='1'
      />
      <line x1='40' y1='280' x2='360' y2='280' stroke='black' strokeWidth='2' />
      <line x1='40' y1='20' x2='40' y2='280' stroke='black' strokeWidth='2' />

      {/* Grid lines */}
      <g stroke='#eee' strokeWidth='1'>
        <line x1='40' y1='150' x2='360' y2='150' />
        <line x1='200' y1='20' x2='200' y2='280' />
      </g>

      {/* MP curve */}
      <path
        d='M 40 200 Q 100 100 200 50 T 360 250'
        stroke='blue'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='80' className='text-sm'>
        Marginal Product
      </text>

      {/* AP curve */}
      <path
        d='M 40 220 Q 120 150 200 120 T 360 180'
        stroke='red'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='140' className='text-sm'>
        Average Product
      </text>

      {/* Axis labels */}
      <text x='20' y='150' className='text-sm'>
        MP, AP
      </text>
      <text x='180' y='300' className='text-sm'>
        Units of Labour
      </text>
    </g>
  </svg>
);

const questions = [
  {
    id: 1,
    question: 'In free and competitive markets, surpluses are eliminated by',
    options: [
      'black markets.',
      'government price controls.',
      'price decreases.',
      'government purchases.',
      'price increases.',
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    question:
      'Refer to Figure 5-1. If the diagram applies to the market for rental housing and P3 represents the maximum rent that can be charged, then',
    options: [
      'there will be excess demand for rental units equal to FC.',
      'there will be an excess supply of rental units equal to BD.',
      'there will be excess demand for rental units equal to AF.',
      'windfall profits will be earned by landlords.',
      'units supplied will be reduced relative to the competitive equilibrium by AF rental units.',
    ],
    correctAnswer: 4,
    figure: 'figure-5-1',
  },
  {
    id: 3,
    question: 'Which statement best describes a "supply schedule"?',
    options: [
      'a numerical table showing the quantities supplied at various prices',
      'the graphical relationship between quantity supplied and price',
      'a functional statement of the supply relationship',
      'a graph showing the positive relationship between quantity supplied and price',
      'a timetable showing the quantity supplied at different time periods',
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question:
      'Suppose an economist tells you that the unemployment rate in Canada last year was 7.8%. This is an example of a(n) ________ statement.',
    options: ['normative', 'positive', 'imputed', 'autonomous', 'induced'],
    correctAnswer: 1,
  },
  {
    id: 5,
    question:
      'Suppose a firm with the usual U-shaped cost curves is producing a level of output such that its short run costs are as follows: ATC = $0.37 per unit, AVC = $0.32 per unit, AFC = $0.05 per unit, MC = $0.43 per unit. Given these short run costs, which of the following statements is true?',
    options: [
      'The firm is operating at capacity.',
      'The firm has no capacity constraints.',
      'The firm is operating with excess capacity.',
      'The firm is producing a level of output where capacity is increasing.',
      'The firm is operating above capacity.',
    ],
    correctAnswer: 4,
  },
  {
    id: 6,
    question: 'Which is an example of a positive statement?',
    options: [
      'Canada should reduce its imports of consumer goods.',
      'Corporations in Canada should pay more taxes.',
      'The higher the price for gasoline, the less of it will be consumed.',
      'There should be one price for gasoline throughout Canada.',
      'Substitutes for fossil fuels should be developed.',
    ],
    correctAnswer: 2,
  },
  {
    id: 7,
    question:
      'Suppose capital costs $8 per unit and labour costs $4 per unit. For a profit-maximizing firm operating at its optimal factor mix, if the marginal product of capital is 60, the marginal product of labour must be',
    options: ['10.', '120.', '30.', '90.', '20.'],
    correctAnswer: 2,
  },
  {
    id: 8,
    question:
      "Geoff is willing to pay $13 for a sixth entrance to a mountain bike park. The market price for entrance is $10.50. The bike park is willing to accept $8.75. The total economic surplus generated from Geoff's sixth trip to the bike park is",
    options: ['$10.50.', '$4.25.', '$2.50.', '$1.75.', '$13.00.'],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: 'The opportunity cost to a firm of using an asset is zero if',
    options: [
      'the asset was given to the firm for free.',
      'the asset is already owned by the firm.',
      'the asset has no alternative uses.',
      'the asset has zero sunk costs associated with it.',
      'no money was spent to acquire the asset.',
    ],
    correctAnswer: 2,
  },
  {
    id: 10,
    question:
      'Consider the various forms of organization of firms. Which of the following statements about a corporation are true? 1. It is an entity separate from the individuals who own it. 2. It can incur debt that is an obligation of the corporation but not of its individual owners. 3. It is legally obliged to distribute all profits to shareholders.',
    options: ['1 only', '2 only', '3 only', '1 and 2 only', '2 and 3 only'],
    correctAnswer: 3,
  },
  {
    id: 11,
    question:
      'Consider the total, average, and marginal product curves for a firm in the short run. If AP = MP and both are positive, then total product',
    options: [
      'may be either increasing or decreasing as extra units of the variable factor are employed.',
      'is decreasing as extra units of the variable factor are employed.',
      'is increasing as extra units of the variable factor are employed.',
      'is at a maximum.',
      'is at its minimum.',
    ],
    correctAnswer: 2,
  },
  {
    id: 12,
    question:
      'Consider an excise tax imposed on daily parking charges in the downtown of a small city. Before the imposition of the tax, equilibrium price and quantity are $15 and 100 cars parked. (P = $15, Q = 100). The city government imposes a tax of $3 per car parked per day. Market equilibrium adjusts to P = $16 and Q = 95. How much tax revenue does the city government collect per day?',
    options: ['$285', '$1710', '$100', '$95', '$300'],
    correctAnswer: 0,
  },
  {
    id: 13,
    question:
      "If a product's income elasticity of demand is -1.7, then we can conclude that",
    options: [
      'the product is a luxury good.',
      'a decrease in income will lead to an increase in demand for the product.',
      'an increase in income will lead to an increase in demand for the product.',
      'the product is certainly a necessity.',
      'the product is a normal good.',
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question:
      'The time period to which quantity demanded refers when constructing demand curves is',
    options: [
      'a moment in time.',
      'a long period of time.',
      'a period shorter than one year.',
      'any specified time period.',
      'one year.',
    ],
    correctAnswer: 3,
  },
  {
    id: 15,
    question:
      'Suppose a production function for a firm takes the following algebraic form: Q = (0.25)K × (1.5)L2, where Q is the output of garage doors produced per month. Now suppose the firm is operating with 10 units of capital (K = 10) and 8 units of labour (L = 8). What is the output of garage doors per month?',
    options: ['3000', '2400', '300', '240', '24'],
    correctAnswer: 3,
  },
  {
    id: 16,
    question:
      'When national income falls, sales of vacation packages also fall, even at constant prices. This fact suggests that the ________ elasticity of demand for vacation packages is ________.',
    options: [
      'income; positive',
      'price; positive',
      'cross; positive',
      'income; negative',
      'price; negative',
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question:
      "Consider the following factors of production: - a pharmaceutical research centre - a hairstylist's scissors - Google headquarters - a cloud computing system - a stapler at a checkout counter. Each of these is an example of",
    options: ['land.', 'capital.', 'goods.', 'labour.', 'services.'],
    correctAnswer: 1,
  },
  {
    id: 18,
    question:
      'Each point on a demand curve shows the ________ price that consumers will pay to consume that quantity. The demand curve therefore shows the ________ to consumers from consuming the product.',
    options: [
      'minimum; value',
      'equilibrium; equilibrium price',
      'maximum; value',
      'minimum; cost',
      'maximum; cost',
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question:
      'When a cost-minimizing firm is faced with an increase in the relative price of labour, it adjusts its factor usage so as to',
    options: [
      'use more labour per unit of output than before.',
      'increase the marginal product of capital relative to the marginal product of labour.',
      'use more of both capital and labour per unit of output.',
      'maintain the previous usage of labour.',
      'increase the marginal product of labour relative to the marginal product of capital.',
    ],
    correctAnswer: 4,
  },
  {
    id: 20,
    question:
      "A firm's short-run cost curves, as conventionally drawn, show that",
    options: [
      'AFC increases as output increases.',
      'the MC curve intersects the AVC and ATC curves at their maximum points.',
      'ATC = TFC+TVC.',
      'AVC decreases as long as MC > AVC.',
      'ATC decreases and then increases as output increases.',
    ],
    correctAnswer: 4,
  },
  {
    id: 21,
    question:
      'Suppose that as the price of some product increases from $4.00 to $5.00 per unit the quantity supplied rises from 500 to 1000 units per month. The price elasticity of supply for this product is',
    options: ['1.0.', '2.0.', '3.0.', '2.5.', '0.33.'],
    correctAnswer: 2,
  },
  {
    id: 22,
    question:
      'For a given year, an index number of average prices across the economy (in Canada, the Consumer Price Index) is the ratio of the',
    options: [
      'weighted prices of a typical bundle of goods purchased in the base year to that in the given year.',
      'price of several goods in the given year to that in the base year.',
      'weighted prices of a typical bundle of goods purchased in a given year to that in the base year.',
      'simple average price of all goods in the given year to that in the base year.',
      'average price of several goods in the base year to that in the given year.',
    ],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: 'The key decision makers in a market economy are',
    options: [
      'individuals, firms, and government.',
      'governments and all institutions under government control.',
      'individuals, non-profit organizations, and the Bank of Canada.',
      'large corporations and labour organizations.',
      'corporations and governments.',
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: 'An example of "real" capital is',
    options: [
      'shares in a corporation.',
      "a firm's computer systems.",
      'corporate bonds.',
      "a firm's retained earnings.",
      "a firm's balance in a bank account.",
    ],
    correctAnswer: 1,
  },
  {
    id: 25,
    question:
      'Suppose a firm producing digital cameras is operating such that marginal costs are higher than average costs. If the firm produces one more camera, average costs will',
    options: [
      'reach a point of diminishing returns.',
      'remain constant.',
      'reach their maximum.',
      'rise.',
      'fall.',
    ],
    correctAnswer: 3,
  },
  {
    id: 26,
    question:
      'The idea that the utility a consumer derives from successive units of a good diminishes as total consumption of the good increases is known as',
    options: [
      'the utility theory of demand.',
      'the paradox of value.',
      'diminishing total utility.',
      'diminishing marginal utility.',
      'utility maximization.',
    ],
    correctAnswer: 3,
  },
  {
    id: 27,
    question: 'Karl Marx argued that',
    options: [
      'the unfettered market system driven by self-interest leads to the best social outcome.',
      'benevolence, not self-interest, produced an effective economic order.',
      'a free-market system would produce a low level of total output.',
      'technological change was not important in improving living standards.',
      'centrally planned economies could provide a more equitable distribution of total output than capitalist economies.',
    ],
    correctAnswer: 4,
  },
  {
    id: 28,
    question:
      'Refer to Figure 5-5. At the market-clearing price and quantity of $30 per hour and 4000 hours of gardening services purchased, the economic surplus is',
    options: [
      'the sum of the areas above the supply curve and below the demand curve — i.e., areas 1, 2, 3, 4, 6, 7.',
      'the sum of the areas below the demand curve, up to 4000 hours — i.e., areas 1, 2, 3, 4, 5, 6, 7, 8.',
      'the sum of the areas below the demand curve, but above the market-clearing price of $30 — i.e., areas 1, 2, 6.',
      'the sum of the areas above the supply curve, but below the market-clearing price of $30 — i.e., areas 3, 4, 7.',
      'the sum of the areas below the demand curve — i.e., areas 1, 2, 3, 4, 5, 6, 7, 8, 9.',
    ],
    correctAnswer: 0,
    figure: 'figure-5-5',
  },
  {
    id: 29,
    question:
      'In a market where we observe a disequilibrium, quantity exchanged is determined by',
    options: [
      'the quantity demanded.',
      'the lesser of quantity demanded and quantity supplied.',
      'the greater of quantity demanded and quantity supplied.',
      'the quantity supplied.',
      'neither quantity demanded nor quantity supplied.',
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question:
      'Consider the income and substitution effects of price changes. If the price of a normal good changes, the income effect of the price change will',
    options: [
      'always be to increase quantity demanded.',
      'oppose the substitution effect.',
      'produce a positively sloped demand curve.',
      'reinforce the substitution effect.',
      'always be larger than the substitution effect.',
    ],
    correctAnswer: 3,
  },
  {
    id: 31,
    question:
      'Which of the following statements most accurately makes the distinction between the long run and the very-long run with respect to the long-run average cost (LRAC) curve?',
    options: [
      'In the long run, the firm is moving along the existing LRAC curve, whereas in the very-long run, the LRAC curve is shifting up.',
      'In the long run, the LRAC curve is shifting up, whereas in the very-long run the firm is moving along the existing LRAC curve.',
      'In the long run, the LRAC curve is shifting down, whereas in the very-long run the firm is moving along the existing LRAC curve.',
      'In the long run, the firm is moving along the existing LRAC curve, whereas in the very-long run, the LRAC curve is shifting down.',
      'There is no distinction between the long run and the very-long run with respect to the LRAC curve.',
    ],
    correctAnswer: 3,
  },
  {
    id: 32,
    question:
      'An index number expresses the value of a variable in any given period',
    options: [
      'as a weighted average.',
      'as an average of its value in the base period.',
      'as an absolute compared to the base period.',
      'as a percentage of its value in the base period.',
      'as a proportional weighted average.',
    ],
    correctAnswer: 3,
  },
  {
    id: 33,
    question:
      'In the Canadian economy, most decisions regarding resource allocation are made by',
    options: [
      'consumers and producers interacting in the price system.',
      'business firms only.',
      'the various levels of government.',
      'legal contract.',
      'negotiation between unions and firms.',
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question:
      'The market supply curve for wooden shipping crates would shift to the right',
    options: [
      'if a government subsidy for shipping crates is withdrawn.',
      'if the price of lumber falls.',
      'if suppliers leave the industry.',
      'if a tax is applied to shipping crates.',
      'if technological conditions for the production of crates deteriorates.',
    ],
    correctAnswer: 1,
  },
  {
    id: 35,
    question:
      'The supply and demand schedules for dozens of roses are given below: Price $10, $20, $30, $40, $50; Quantity Supplied 200, 300, 400, 500, 600; Quantity Demanded 500, 450, 400, 350, 300. How many dozens of roses would actually be purchased if the price in this market were $10?',
    options: ['300', '400', '350', '500', '200'],
    correctAnswer: 4,
  },
  {
    id: 36,
    question:
      'The statement that a 2% increase in the money supply leads to a 2% increase in the price level is an example of a(n)',
    options: [
      'model.',
      'normative statement.',
      'prediction.',
      'assumption.',
      'variable.',
    ],
    correctAnswer: 2,
  },
  {
    id: 37,
    question:
      'Choose the statement that best describes how endogenous variables differ from exogenous variables.',
    options: [
      'An exogenous variable is a function of the endogenous variable, and both are flow variables.',
      'An endogenous variable is a function of the exogenous variable, and both are stock variables.',
      'An endogenous variable is a flow, while an exogenous variable is a stock.',
      'An endogenous variable is explained within the theory, while an exogenous variable influences the endogenous variables but is determined outside the theory.',
      'An endogenous variable is explained outside the theory and influences an exogenous variable while an exogenous variable is explained within the theory.',
    ],
    correctAnswer: 3,
  },
  {
    id: 38,
    question:
      'The formula for the price elasticity of demand for a commodity can be written as which of the following?',
    options: [
      'percentage change in one price / percentage change in the other price',
      'percentage change in price / percentage change in quantity demanded',
      'percentage change in quantity demanded / percentage change in price',
      'change in price / change in quantity demanded',
      'change in quantity demanded / change in price',
    ],
    correctAnswer: 2,
  },
  {
    id: 39,
    question:
      'Refer to Figure 7-1. The marginal product of labour curve intersects the average product of labour curve when',
    options: [
      'the firm is at its capacity.',
      'total product is at its maximum.',
      'average product is at its maximum.',
      'the firm achieves increasing returns.',
      'diminishing returns sets in.',
    ],
    correctAnswer: 2,
    figure: 'figure-7-1',
  },
  {
    id: 40,
    question:
      'Suppose capital costs $10 per unit and labour costs $5 per unit. For a profit-maximizing firm operating at its optimal factor mix, if the marginal product of capital is 50, the marginal product of labour must be',
    options: ['50.', '20.', '100.', '10.', '25.'],
    correctAnswer: 4,
  },
  {
    id: 41,
    question:
      'Suppose a firm is producing 100 units of output, incurring a total cost of $10,000 and total variable cost of $6000. It can be concluded that average fixed cost is',
    options: ['160.', '40.', '60.', '4000.', '100.'],
    correctAnswer: 1,
  },
  {
    id: 42,
    question:
      "An individual's consumer surplus from some product can be eliminated entirely by: 1. raising the price until very few units are bought. 2. charging a price for each unit that is equal to the individual's marginal value for each unit. 3. raising the price until zero units are purchased.",
    options: ['1 only', '2 only', '3 only', '2 or 3', '1 or 2, but not 3'],
    correctAnswer: 3,
  },
  {
    id: 43,
    question:
      'Consider the following equation: Y = 10 + 5X - X². This equation is an expression of',
    options: [
      'a functional relation in a verbal format.',
      'a functional relation in a schedule format.',
      'two independent variables in a functional relation.',
      'two dependent variables in a functional relation.',
      'a functional relation between X and Y.',
    ],
    correctAnswer: 4,
  },
  {
    id: 44,
    question:
      'Suppose a firm is producing 500 units of output, incurring a total cost of $700,000 and total fixed cost of $100,000. It can be concluded that average variable cost is',
    options: ['200.', '1600.', '1200.', '600.', '1400.'],
    correctAnswer: 2,
  },
  {
    id: 45,
    question: 'A surplus exists in the market when',
    options: [
      'supply and demand are equal.',
      'the quantity demanded exceeds the quantity supplied.',
      'the supply curve has shifted to the left.',
      'the quantity demanded is less than the quantity supplied.',
      'the equilibrium price is too low.',
    ],
    correctAnswer: 3,
  },
  {
    id: 46,
    question:
      'When the percentage change in quantity demanded is less than the percentage change in price that brought it about, demand is said to be',
    options: [
      'elastic.',
      'unit elastic.',
      'unelastic.',
      'inelastic.',
      'zero elastic.',
    ],
    correctAnswer: 3,
  },
  {
    id: 47,
    question:
      "Consider the total, average, and marginal product curves for a firm in the short run. When a firm's total-product curve is increasing at a decreasing rate,",
    options: [
      'average product is zero.',
      'marginal product is negative and decreasing.',
      'the marginal-product curve lies below the average-product curve.',
      'marginal product is positive but declining.',
      'average product is falling.',
    ],
    correctAnswer: 3,
  },
  {
    id: 48,
    question:
      'Suppose a firm employs two inputs, X and Y, and that at their current levels of use MPX/PX > MPY/PY. To minimize the cost of production, the firm should hire',
    options: [
      'more input Y only if its price falls.',
      'more input Y and less input X.',
      'more input X and less input Y.',
      'more input X only if its price decreases.',
      'more input X only if its price increases.',
    ],
    correctAnswer: 2,
  },
  {
    id: 49,
    question:
      'Four of the five statements below contain a stock and a flow. Which statement describes ONLY flow variables?',
    options: [
      'Country X spends an average of $1 million per year for flood relief and has an emergency services fund of $20 million.',
      'The Transit Authority of Mytown collects $22,000 in fares per day and has an operating budget of $2 million per year.',
      'Chris earns $1500 per month and has $4000 in his savings account at the bank.',
      'The Canadian Federal government has a debt of approximately $750 billion and an annual deficit of over $25 billion dollars.',
      'Nancy spends $400 per month on her credit card and has a balance owing of $2567.',
    ],
    correctAnswer: 1,
  },
  {
    id: 50,
    question:
      'Assume an individual with a downward-sloping demand curve is paying a single price for each unit of some commodity. He will experience consumer surplus on',
    options: [
      'the first unit only.',
      'all units that were not bought at that particular price.',
      'all of the units bought.',
      'all units bought with the possible exception of the last unit.',
      'none of the units.',
    ],
    correctAnswer: 3,
  },
  {
    id: 51,
    question:
      'Consider an excise tax imposed on daily parking charges in the downtown of a small city. Before the imposition of the tax, equilibrium price and quantity are $15 and 100 cars parked. (P = $15, Q = 100). The city government imposes a tax of $3 per car parked per day. Market equilibrium adjusts to P = $16 and Q = 95. After imposition of the tax, what is the daily after-tax price received by the seller per car parked?',
    options: ['$15', '$3', '$1', '$16', '$13'],
    correctAnswer: 4,
  },
  {
    id: 52,
    question: 'A limited partnership differs from an ordinary partnership by',
    options: [
      'including some partners whose liability is restricted to the amount that they invested in the firm.',
      'having unlimited liability for all partners.',
      'having a limited number of partners.',
      'having a limited number of partners, each with limited liability.',
      'having limited liability of all partners.',
    ],
    correctAnswer: 0,
  },
  {
    id: 53,
    question: 'Which of the following best describes the study of economics?',
    options: [
      'how to distribute income as equally as possible',
      'why resources are scarce',
      'the allocation of scarce resources among alternative uses',
      'how to limit human wants so that scarce resources are sufficient',
      'how to plan an economy',
    ],
    correctAnswer: 2,
  },
  {
    id: 54,
    question: 'The "law" of diminishing marginal utility implies that the',
    options: [
      "last unit of a good consumed will contribute most to the consumer's satisfaction.",
      'marginal utility of a good diminishes as the consumer gets older.',
      'total utility is negative.',
      "first unit of a good consumed will contribute most to the consumer's satisfaction.",
      'total utility is constant as more units are consumed.',
    ],
    correctAnswer: 3,
  },
  {
    id: 55,
    question: 'A basic underlying point in economics is that',
    options: [
      'people have unlimited wants in the face of limited resources.',
      'governments should never interfere in the workings of a market economy.',
      'there are unlimited resources.',
      'governments should satisfy the needs of the people.',
      'people have limited wants in the face of limited resources.',
    ],
    correctAnswer: 0,
  },
  {
    id: 56,
    question:
      'Suppose a production function for a firm takes the following algebraic form: Q = (0.5)KL - 40L, where Q is the output of paintbrushes per week. Now suppose the firm is operating with 100 units of capital (K = 100) and 30,000 units of labour (L = 30,000). What is the output of paintbrushes per week?',
    options: ['3,000,000', '30,000', '1,500,000', '300,000', '1,200,000'],
    correctAnswer: 3,
  },
  {
    id: 57,
    question: 'Which of the following pairs of words have similar meanings?',
    options: [
      'induced and autonomous',
      'endogenous and autonomous',
      'independent and exogenous',
      'dependent and exogenous',
      'induced and exogenous',
    ],
    correctAnswer: 2,
  },
  {
    id: 58,
    question: 'The equation Q = 0.5KL - (0.4)L + 2L² is an example of',
    options: [
      'a factor of production equation.',
      'a technological change equation.',
      'an arithmetic expression of output quantities.',
      'a production function.',
      'an economic input function.',
    ],
    correctAnswer: 3,
  },
  {
    id: 59,
    question:
      'The supply and demand schedules for dozens of roses are given below: Price $10, $20, $30, $40, $50; Quantity Supplied 200, 300, 400, 500, 600; Quantity Demanded 500, 450, 400, 350, 300. The equilibrium price for a dozen roses is',
    options: ['$10.', '$40.', '$20.', '$30.', '$50.'],
    correctAnswer: 3,
  },
  {
    id: 60,
    question:
      'Consider the following list: a worker with training in video gaming technology, 10 hectares of arable land in southern Ontario, a fishing trawler in Nova Scotia, an ice-cream truck at a park in Quebec. Each of these is an example of',
    options: [
      'a factor of production.',
      'a commodity.',
      'an economic service.',
      'goods and services.',
      'a capital resource.',
    ],
    correctAnswer: 0,
  },
  {
    id: 61,
    question:
      'Although capital is a variable factor in the long run, once chosen, it often becomes a fixed factor for a long time. A profit-maximizing firm must therefore select a method of production that is',
    options: [
      'technologically advanced beyond methods currently used.',
      'adaptable to wide ranges of output over time.',
      'labour intensive, as labour is always a variable factor.',
      'economically efficient at current factor prices and sufficiently flexible to adapt to changing factor prices over time.',
      'economically efficient at current factor prices.',
    ],
    correctAnswer: 3,
  },
  {
    id: 62,
    question:
      'Which of the following conditions indicate cost minimization, assuming two inputs, labour (L) and capital (K)?',
    options: [
      'MPK/PL = MPL/PK',
      'MPL = MPK',
      'MPK/PK = MPL/PL',
      'PK ∙ MPK = PL ∙ MPL',
      'PK = PL',
    ],
    correctAnswer: 2,
  },
];

const getFigure = (figureId: string) => {
  switch (figureId) {
    case 'figure-5-1':
      return <Figure5_1 />;
    case 'figure-7-1':
      return <Figure7_1 />;
    default:
      return null;
  }
};

export default function FlashcardApp() {
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    setShowFeedback(true);

    if (!answeredQuestions.has(currentQuestion)) {
      setAnsweredQuestions((prev) => {
        const newSet = new Set(prev);
        newSet.add(currentQuestion);
        return newSet;
      });

      if (answerIndex === questions[currentQuestion].correctAnswer) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setAnsweredQuestions(new Set());
    setCorrectAnswers(0);
  };

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <>
      <div className='m-4 font-bold'><a href='/'>microeconomics.study</a></div>
      <div className='mx-auto max-w-4xl p-4'>
        <div className='m-4'>
          <div className='mb-4 flex items-center justify-between'>
            <span className='text-sm text-gray-500'>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className='text-sm text-gray-500'>
              Progress: {answeredQuestions.size} answered
              {answeredQuestions.size > 0 &&
                ` (${Math.round((correctAnswers / answeredQuestions.size) * 100)}% correct)`}
            </div>
          </div>

          <div className='mb-6'>
            <h2 className='mb-4 text-xl font-semibold'>{currentQ.question}</h2>

            {currentQ.figure && (
              <div className='mb-6 rounded-lg border bg-gray-50 p-4'>
                {getFigure(currentQ.figure)}
              </div>
            )}

            <div className='space-y-3'>
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full rounded border p-3 text-left transition-colors ${
                    selectedAnswer === index
                      ? showFeedback
                        ? isCorrect
                          ? 'border-green-500 bg-green-100'
                          : 'border-red-500 bg-red-100'
                        : 'border-blue-500 bg-blue-100'
                      : 'hover:bg-gray-50'
                  } ${
                    showFeedback && index === currentQ.correctAnswer
                      ? 'border-green-500 bg-green-100'
                      : ''
                  } `}
                  disabled={showFeedback}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <Button
              variant='outline'
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
              className='flex items-center'
            >
              <ChevronLeft className='mr-2 h-4 w-4' />
              Previous
            </Button>

            <Button
              variant='outline'
              onClick={handleReset}
              className='flex items-center'
            >
              <RotateCcw className='mr-2 h-4 w-4' />
              Reset
            </Button>

            <Button
              variant='outline'
              onClick={handleNextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className='flex items-center'
            >
              Next
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
