import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLLM } from '@/providers/llm-provider';
import { AlertTriangle, Check, Cpu, Loader2 } from 'lucide-react';
import React from 'react';

interface LLMProgressProps {
  className?: string;
}

export const LLMProgress: React.FC<LLMProgressProps> = ({ className = '' }) => {
  const { initialized, supported, initProgress, initialize, systemInfo } =
    useLLM();

  if (initialized || !supported) {
    return null;
  }

  return (
    <Card className={`mb-4 ${className}`}>
      <CardHeader className='py-3'>
        <CardTitle className='flex items-center justify-between text-sm font-medium'>
          <div className='flex items-center'>
            <Cpu className='mr-2 h-4 w-4' />
            WebLLM AI Assistant
          </div>
          {!initialized && (
            <div className='text-xs text-muted-foreground'>
              {Math.round(initProgress.progress * 100)}%
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className='px-4 py-2'>
        <div className='space-y-3'>
          {!initialized ? (
            <div>
              <div className='mb-2 flex items-center'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                <span className='text-sm'>{initProgress.text}</span>
              </div>

              <div className='w-full'>
                <Progress
                  value={initProgress.progress * 100}
                  className='mb-2 h-1.5 w-full'
                  aria-label='Model loading progress'
                />
                <p className='text-xs text-muted-foreground'>
                  This may take a few moments depending on your internet
                  connection and device.
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-3'>
              <p className='text-sm'>
                Initialize WebLLM to enable AI-powered hints and explanations.
              </p>

              <div className='space-y-1 text-xs text-muted-foreground'>
                <div className='flex items-center'>
                  {systemInfo.webGPUAvailable ? (
                    <Check className='mr-2 h-3 w-3 text-green-500' />
                  ) : (
                    <AlertTriangle className='mr-2 h-3 w-3 text-amber-500' />
                  )}
                  <span>
                    WebGPU:{' '}
                    {systemInfo.webGPUAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>

                <div className='flex items-center'>
                  {systemInfo.webGLAvailable ? (
                    <Check className='mr-2 h-3 w-3 text-green-500' />
                  ) : (
                    <AlertTriangle className='mr-2 h-3 w-3 text-amber-500' />
                  )}
                  <span>
                    WebGL:{' '}
                    {systemInfo.webGLAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>

              <Button onClick={() => initialize()} className='w-full'>
                <Cpu className='mr-2 h-4 w-4' />
                Initialize WebLLM
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
