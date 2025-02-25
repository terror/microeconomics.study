import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Pause, Play, RotateCcw } from 'lucide-react';
import React, { useEffect, useState } from 'react';

type ExamTimerProps = {
  defaultDuration?: number; // in minutes
  onTimeUp?: () => void;
  isRunning?: boolean;
};

export const ExamTimer: React.FC<ExamTimerProps> = ({
  defaultDuration = 60, // Default to 60 minutes
  onTimeUp,
  isRunning: isRunningProp,
}) => {
  const [isRunning, setIsRunning] = useState<boolean>(Boolean(isRunningProp));

  const [timeRemaining, setTimeRemaining] = useState<number>(
    defaultDuration * 60
  ); // Convert to seconds

  const [initialDuration, setInitialDuration] = useState<number>(
    defaultDuration * 60
  );
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const [inputDuration, setInputDuration] = useState<string>(
    defaultDuration.toString()
  );

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeRemaining / initialDuration) * 100;

  const getBorderColor = (): string => {
    if (progress > 50) return 'border-green-500 dark:border-green-400';
    if (progress > 25) return 'border-yellow-500 dark:border-yellow-400';
    return 'border-red-500 dark:border-red-400';
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            if (onTimeUp) onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsRunning(false);
      if (onTimeUp) onTimeUp();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeRemaining, onTimeUp]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeRemaining(initialDuration);
  };

  const handleSetDuration = () => {
    const newDuration = parseInt(inputDuration, 10);

    if (!isNaN(newDuration) && newDuration > 0) {
      setInitialDuration(newDuration * 60);
      setTimeRemaining(newDuration * 60);
      setShowSettings(false);
    }
  };

  return (
    <Card
      className={`mb-4 w-full ${isRunning ? getBorderColor() : 'border-border'}`}
    >
      <CardHeader className='p-4 pb-2'>
        <CardTitle className='flex items-center justify-between'>
          <span className='flex items-center'>
            <Clock className='mr-2 h-5 w-5' />
            Timer
          </span>
          {!showSettings ? (
            <div className='flex items-center space-x-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={toggleTimer}
                className='h-8 px-3'
              >
                {isRunning ? (
                  <Pause className='h-4 w-4' />
                ) : (
                  <Play className='h-4 w-4' />
                )}
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={resetTimer}
                className='h-8 px-3'
              >
                <RotateCcw className='h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowSettings(true)}
                className='h-8'
              >
                Set Time
              </Button>
            </div>
          ) : (
            <div className='flex items-center space-x-2'>
              <input
                type='number'
                min='1'
                className='h-8 w-20 rounded border bg-background px-2'
                value={inputDuration}
                onChange={(e) => setInputDuration(e.target.value)}
              />
              <span className='text-sm'>min</span>
              <Button
                variant='outline'
                size='sm'
                onClick={handleSetDuration}
                className='h-8'
              >
                Apply
              </Button>
              <Button
                variant='outline'
                size='sm'
                onClick={() => setShowSettings(false)}
                className='h-8'
              >
                Cancel
              </Button>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4 pt-2'>
        <div className='relative pt-1'>
          <div className='flex items-center justify-between'>
            <div>
              <span className='text-2xl font-bold'>
                {formatTime(timeRemaining)}
              </span>
              {!isRunning && timeRemaining === 0 && (
                <span className='ml-2 text-red-500 dark:text-red-400'>
                  Time's up!
                </span>
              )}
            </div>
            <div className='text-sm text-muted-foreground'>
              {Math.floor(initialDuration / 60)} minute(s) total
            </div>
          </div>
          <div className='mb-1 mt-2 flex h-2 overflow-hidden rounded bg-muted text-xs'>
            <div
              style={{ width: `${progress}%` }}
              className={`flex flex-col justify-center whitespace-nowrap text-center text-white shadow-none ${
                progress > 50
                  ? 'bg-green-500 dark:bg-green-400'
                  : progress > 25
                    ? 'bg-yellow-500 dark:bg-yellow-400'
                    : 'bg-red-500 dark:bg-red-400'
              }`}
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
