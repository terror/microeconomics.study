import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

import { ModeToggle } from './components/mode-toggle';
import { usePersistedState } from './hooks/use-persisted-state';
import { questions as originalQuestions } from './lib/questions';

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

const Figure5_5 = () => (
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

const Figure7_1 = () => (
  <svg viewBox='0 0 400 600' className='mx-auto w-full max-w-lg'>
    <g transform='translate(0,0)'>
      <rect
        x='40'
        y='20'
        width='320'
        height='260'
        fill='none'
        className='stroke-muted'
        strokeWidth='1'
      />
      <line
        x1='40'
        y1='280'
        x2='360'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />
      <line
        x1='40'
        y1='20'
        x2='40'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <g className='stroke-muted/30' strokeWidth='1'>
        <line x1='40' y1='150' x2='360' y2='150' />
        <line x1='200' y1='20' x2='200' y2='280' />
      </g>

      <path
        d='M 40 260 Q 100 200 200 100 T 360 60'
        className='stroke-foreground'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='80' className='fill-foreground text-sm'>
        Total Product
      </text>

      <text x='20' y='150' className='fill-foreground text-sm'>
        Total Product
      </text>
      <text x='180' y='300' className='fill-foreground text-sm'>
        Units of Labour
      </text>
    </g>

    <g transform='translate(0,320)'>
      <rect
        x='40'
        y='20'
        width='320'
        height='260'
        fill='none'
        className='stroke-muted'
        strokeWidth='1'
      />
      <line
        x1='40'
        y1='280'
        x2='360'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />
      <line
        x1='40'
        y1='20'
        x2='40'
        y2='280'
        className='stroke-foreground'
        strokeWidth='2'
      />

      <g className='stroke-muted/30' strokeWidth='1'>
        <line x1='40' y1='150' x2='360' y2='150' />
        <line x1='200' y1='20' x2='200' y2='280' />
      </g>

      <path
        d='M 40 200 Q 100 100 200 50 T 360 250'
        className='stroke-blue-500 dark:stroke-blue-400'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='80' className='fill-foreground text-sm'>
        Marginal Product
      </text>

      <path
        d='M 40 220 Q 120 150 200 120 T 360 180'
        className='stroke-red-500 dark:stroke-red-400'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='140' className='fill-foreground text-sm'>
        Average Product
      </text>

      <text x='20' y='150' className='fill-foreground text-sm'>
        MP, AP
      </text>
      <text x='180' y='300' className='fill-foreground text-sm'>
        Units of Labour
      </text>
    </g>
  </svg>
);

const getFigure = (figureId: string) => {
  switch (figureId) {
    case 'figure-5-1':
      return <Figure5_1 />;
    case 'figure-5-5':
      return <Figure5_5 />;
    case 'figure-7-1':
      return <Figure7_1 />;
    default:
      return null;
  }
};

interface RandomizedQuestion {
  id: number;
  question: string;
  options: string[];
  originalIndices: number[];
  correctIndex: number;
  figure?: string;
}

interface QuizState {
  answeredQuestions: number[];
  correctAnswers: number;
  currentQuestion: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
  randomizedQuestions: RandomizedQuestion[];
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const randomizeQuestions = () => {
  const shuffledQuestions = shuffleArray([...originalQuestions]);

  return shuffledQuestions.map((q) => {
    const indices = q.options.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(indices);

    return {
      id: q.id,
      question: q.question,
      options: shuffledIndices.map((i) => q.options[i]),
      originalIndices: shuffledIndices,
      correctIndex: shuffledIndices.indexOf(q.answer),
      figure: q.figure,
    };
  });
};

const INITIAL_STATE: QuizState = {
  answeredQuestions: [],
  correctAnswers: 0,
  currentQuestion: 0,
  selectedAnswer: null,
  showFeedback: false,
  randomizedQuestions: randomizeQuestions(),
};

const App = () => {
  const [quizState, setQuizState] = usePersistedState<QuizState>(
    'quiz-state',
    INITIAL_STATE
  );

  const answeredQuestionsSet = new Set(quizState.answeredQuestions);

  const handleAnswerClick = (answerIndex: number) => {
    if (!answeredQuestionsSet.has(quizState.currentQuestion)) {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true,
        answeredQuestions: [
          ...quizState.answeredQuestions,
          quizState.currentQuestion,
        ],
        correctAnswers:
          answerIndex ===
          quizState.randomizedQuestions[quizState.currentQuestion].correctIndex
            ? quizState.correctAnswers + 1
            : quizState.correctAnswers,
      });
    } else {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true,
      });
    }
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < quizState.randomizedQuestions.length - 1) {
      setQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        selectedAnswer: null,
        showFeedback: false,
      });
    }
  };

  const handlePrevQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        currentQuestion: quizState.currentQuestion - 1,
        selectedAnswer: null,
        showFeedback: false,
      });
    }
  };

  const handleReset = () => {
    const newState = {
      ...INITIAL_STATE,
      randomizedQuestions: randomizeQuestions(),
    };

    setQuizState(newState);
  };

  if (!quizState.randomizedQuestions?.length) {
    setQuizState(INITIAL_STATE);
    return null;
  }

  const currentQ = quizState.randomizedQuestions[quizState.currentQuestion];
  const isCorrect = quizState.selectedAnswer === currentQ.correctIndex;

  return (
    <>
      <div className='m-4 flex items-center font-bold'>
        <a href='/microeconomics.study'>microeconomics.study</a>
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </div>
      <div className='mx-auto max-w-4xl p-4'>
        <div className='m-4'>
          <div className='mb-4 flex items-center justify-between'>
            <span className='text-sm text-muted-foreground'>
              Question {quizState.currentQuestion + 1} of{' '}
              {quizState.randomizedQuestions.length}
            </span>
            {answeredQuestionsSet.size !== 0 ? (
              <div className='text-sm text-muted-foreground'>
                {answeredQuestionsSet.size} answered
                {answeredQuestionsSet.size > 0 &&
                  ` (${Math.round((quizState.correctAnswers / answeredQuestionsSet.size) * 100)}% correct)`}
              </div>
            ) : null}
          </div>

          <div className='mb-6'>
            <h2 className='mb-4 text-xl font-semibold'>{currentQ.question}</h2>

            {currentQ.figure && (
              <div className='mb-6 rounded-lg border bg-muted/50 p-4'>
                {getFigure(currentQ.figure)}
              </div>
            )}

            <div className='space-y-3'>
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className={`w-full rounded border p-3 text-left transition-colors ${
                    quizState.selectedAnswer === index
                      ? quizState.showFeedback
                        ? isCorrect
                          ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                          : 'border-red-500 bg-red-500/10 dark:bg-red-500/20'
                        : 'border-blue-500 bg-blue-500/10 dark:bg-blue-500/20'
                      : 'hover:bg-muted/50'
                  } ${
                    quizState.showFeedback && index === currentQ.correctIndex
                      ? 'border-green-500 bg-green-500/10 dark:bg-green-500/20'
                      : ''
                  } `}
                  disabled={quizState.showFeedback}
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
              disabled={quizState.currentQuestion === 0}
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
              disabled={
                quizState.currentQuestion ===
                quizState.randomizedQuestions.length - 1
              }
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
};

export default App;
