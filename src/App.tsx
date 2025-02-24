import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { ModeToggle } from './components/mode-toggle';
import { questions } from './lib/questions';
import { usePersistedState } from './hooks/use-persisted-state';

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

    <path d='M 50 200 L 350 100' className='stroke-foreground' strokeWidth='2' fill='none' />
    <text x='360' y='100' className='text-sm fill-foreground'>
      Supply
    </text>

    <path d='M 50 100 L 350 200' className='stroke-foreground' strokeWidth='2' fill='none' />
    <text x='360' y='200' className='text-sm fill-foreground'>
      Demand
    </text>

    <text x='30' y='80' className='text-sm fill-foreground'>
      P₂
    </text>
    <line x1='45' y1='80' x2='350' y2='80' className='stroke-muted' strokeDasharray='4' />

    <text x='30' y='150' className='text-sm fill-foreground'>
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

    <text x='30' y='220' className='text-sm fill-foreground'>
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

    <text x='80' y='270' className='text-sm fill-foreground'>
      A
    </text>
    <line x1='80' y1='245' x2='80' y2='80' className='stroke-muted' strokeDasharray='4' />

    <text x='120' y='270' className='text-sm fill-foreground'>
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

    <text x='200' y='270' className='text-sm fill-foreground'>
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

    <text x='280' y='270' className='text-sm fill-foreground'>
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

    <text x='320' y='270' className='text-sm fill-foreground'>
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

    <text x='30' y='40' className='text-sm fill-foreground'>
      $
    </text>
    <text x='180' y='290' className='text-sm fill-foreground'>
      Quantity
    </text>

    <circle cx='200' cy='150' r='4' className='fill-foreground' />
    <text x='210' y='145' className='text-sm fill-foreground'>
      E
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
      <line x1='40' y1='280' x2='360' y2='280' className='stroke-foreground' strokeWidth='2' />
      <line x1='40' y1='20' x2='40' y2='280' className='stroke-foreground' strokeWidth='2' />

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
      <text x='250' y='80' className='text-sm fill-foreground'>
        Total Product
      </text>

      <text x='20' y='150' className='text-sm fill-foreground'>
        Total Product
      </text>
      <text x='180' y='300' className='text-sm fill-foreground'>
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
      <line x1='40' y1='280' x2='360' y2='280' className='stroke-foreground' strokeWidth='2' />
      <line x1='40' y1='20' x2='40' y2='280' className='stroke-foreground' strokeWidth='2' />

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
      <text x='250' y='80' className='text-sm fill-foreground'>
        Marginal Product
      </text>

      <path
        d='M 40 220 Q 120 150 200 120 T 360 180'
        className='stroke-red-500 dark:stroke-red-400'
        fill='none'
        strokeWidth='2'
      />
      <text x='250' y='140' className='text-sm fill-foreground'>
        Average Product
      </text>

      <text x='20' y='150' className='text-sm fill-foreground'>
        MP, AP
      </text>
      <text x='180' y='300' className='text-sm fill-foreground'>
        Units of Labour
      </text>
    </g>
  </svg>
);

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

interface QuizState {
  answeredQuestions: number[];
  correctAnswers: number;
  currentQuestion: number;
  selectedAnswer: number | null;
  showFeedback: boolean;
}

const App = () => {
  const [quizState, setQuizState] = usePersistedState<QuizState>(
    'quiz-state',
    {
      answeredQuestions: [],
      correctAnswers: 0,
      currentQuestion: 0,
      selectedAnswer: null,
      showFeedback: false
    }
  );

  const answeredQuestionsSet = new Set(quizState.answeredQuestions);

  const handleAnswerClick = (answerIndex: number) => {
    if (!answeredQuestionsSet.has(quizState.currentQuestion)) {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true,
        answeredQuestions: [...quizState.answeredQuestions, quizState.currentQuestion],
        correctAnswers: 
          answerIndex === questions[quizState.currentQuestion].answer
            ? quizState.correctAnswers + 1
            : quizState.correctAnswers
      });
    } else {
      setQuizState({
        selectedAnswer: answerIndex,
        showFeedback: true
      });
    }
  };

  const handleNextQuestion = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState({
        currentQuestion: quizState.currentQuestion + 1,
        selectedAnswer: null,
        showFeedback: false
      });
    }
  };

  const handlePrevQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState({
        currentQuestion: quizState.currentQuestion - 1,
        selectedAnswer: null,
        showFeedback: false
      });
    }
  };

  const handleReset = () => {
    setQuizState({
      answeredQuestions: [],
      correctAnswers: 0,
      currentQuestion: 0,
      selectedAnswer: null,
      showFeedback: false
    });
  };

  const currentQ = questions[quizState.currentQuestion];
  const isCorrect = quizState.selectedAnswer === currentQ.answer;

  return (
    <>
      <div className='flex items-center m-4 font-bold'>
        <a href='/'>microeconomics.study</a>
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </div>
      <div className='mx-auto max-w-4xl p-4'>
        <div className='m-4'>
          <div className='mb-4 flex items-center justify-between'>
            <span className='text-muted-foreground text-sm'>
              Question {quizState.currentQuestion + 1} of {questions.length}
            </span>
            {answeredQuestionsSet.size !== 0 ? <div className='text-muted-foreground text-sm'>
              {answeredQuestionsSet.size} answered
              {answeredQuestionsSet.size > 0 &&
                ` (${Math.round((quizState.correctAnswers / answeredQuestionsSet.size) * 100)}% correct)`}
            </div> : null}
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
                    quizState.showFeedback && index === currentQ.answer
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
              disabled={quizState.currentQuestion === questions.length - 1}
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

export default App;
