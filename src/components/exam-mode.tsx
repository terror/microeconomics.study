// Import the shadcn utility function
import { ExamTimer } from '@/components/exam-timer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  ChevronUp,
  ClipboardList,
  Pencil,
  Timer,
} from 'lucide-react';
import React, { useState } from 'react';

type ExamModeProps = {
  categoryName: string;
  totalQuestions: number;
  onStart: (duration: number) => void;
  isActive: boolean;
  onEnd: () => void;
};

export const ExamMode: React.FC<ExamModeProps> = ({
  categoryName,
  totalQuestions,
  onStart,
  isActive,
  onEnd,
}) => {
  // Recommended time based on number of questions (1.5 minutes per question)
  const recommendedTime = Math.ceil(totalQuestions * 1.5);
  const presetTimes = [
    { label: 'Short', minutes: 30 },
    { label: 'Standard', minutes: recommendedTime },
    { label: 'Extended', minutes: recommendedTime * 1.5 },
  ];

  // Initialize selectedDuration with the first preset (Short)
  const [selectedDuration, setSelectedDuration] = useState<number>(
    presetTimes[0].minutes
  );
  // Track whether the card is expanded
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Format total time: show hours if more than 60 minutes
  const formatTotalTime = (minutes: number): string => {
    if (minutes > 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      if (remainingMinutes === 0) {
        return `${hours}h`;
      } else {
        return `${hours}h ${remainingMinutes}m`;
      }
    } else {
      return `${minutes}m`;
    }
  };

  // Format time per question: show seconds if less than 1 minute
  const formatTimePerQuestion = (timeInMinutes: number): string => {
    if (timeInMinutes < 1) {
      // Convert to seconds and round to nearest second
      const seconds = Math.round(timeInMinutes * 60);
      return `${seconds} sec/q`;
    } else {
      // Round to 2 decimal places for minutes
      return `${Math.round(timeInMinutes * 100) / 100} min/q`;
    }
  };

  const handleTimeUp = () => {
    onEnd();
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (isActive) {
    return (
      <ExamTimer
        isRunning={true}
        defaultDuration={selectedDuration}
        onTimeUp={handleTimeUp}
      />
    );
  }

  return (
    <Card className='mb-4 w-full border-primary/20'>
      <CardHeader
        className={cn(
          'cursor-pointer rounded-md pb-6 transition-colors',
          isExpanded ? 'border-b border-border' : '',
          'hover:bg-accent/10'
        )}
        onClick={toggleExpanded}
      >
        <div className='flex items-center justify-between'>
          <CardTitle className='flex items-center'>
            <Pencil className='mr-2 h-4 w-4' />
            Exam Simulation Mode
          </CardTitle>
          <Button variant='ghost' size='sm' className='h-8 w-8 p-0'>
            {isExpanded ? (
              <ChevronUp className='h-4 w-4' />
            ) : (
              <ChevronDown className='h-4 w-4' />
            )}
          </Button>
        </div>
        <CardDescription>
          Simulate a timed exam environment for "{categoryName}" with{' '}
          {totalQuestions} questions
        </CardDescription>
      </CardHeader>

      {isExpanded && (
        <>
          <CardContent className='pt-4'>
            <div className='space-y-4'>
              <div>
                <h4 className='mb-2 flex items-center text-sm font-medium'>
                  <Timer className='mr-2 h-4 w-4' />
                  Select exam duration:
                </h4>
                <div className='flex flex-wrap gap-2'>
                  {presetTimes.map((preset) => (
                    <Button
                      key={preset.label}
                      variant={
                        selectedDuration === preset.minutes
                          ? 'default'
                          : 'outline'
                      }
                      size='sm'
                      onClick={() => setSelectedDuration(preset.minutes)}
                      className='flex-grow md:flex-grow-0'
                    >
                      {preset.label} ({formatTotalTime(preset.minutes)},{' '}
                      {formatTimePerQuestion(preset.minutes / totalQuestions)})
                    </Button>
                  ))}
                  <div className='flex items-center gap-2'>
                    <input
                      type='number'
                      min='1'
                      max='180'
                      value={selectedDuration}
                      onChange={(e) =>
                        setSelectedDuration(Number(e.target.value))
                      }
                      className='h-8 w-16 rounded-md border bg-background px-2 text-foreground'
                    />
                    <span className='text-sm text-muted-foreground'>
                      minute(s)
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className='mb-2 flex items-center text-sm font-medium'>
                  <ClipboardList className='mr-2 h-4 w-4' />
                  Rules:
                </h4>
                <ul className='list-disc space-y-1 pl-6 text-sm text-muted-foreground'>
                  <li>Timer will run continuously once exam starts</li>
                  <li>You can pause the timer if needed</li>
                  <li>All {totalQuestions} questions must be completed</li>
                  <li>
                    You'll receive your score when exam is complete or time runs
                    out
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className='pt-2'>
            <Button
              onClick={() => onStart(selectedDuration)}
              className='w-full'
            >
              Start
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};
