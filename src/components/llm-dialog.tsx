import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useLLM } from '@/providers/llm-provider';
import { AlertTriangle, Bot, Check } from 'lucide-react';
import React from 'react';

interface LLMDialogProps {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const LLMDialog: React.FC<LLMDialogProps> = ({ open, onOpenChange }) => {
  const { initialized, supported, initProgress, systemInfo } = useLLM();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='mb-1 flex items-center gap-2'>
            <Bot className='h-5 w-5' />
            Language Model Integration
          </DialogTitle>
          <DialogDescription>
            {!initialized
              ? 'Loading the AI model. This may take a minute depending on your connection.'
              : 'Loaded! We use WebLLM to provide AI-powered hints and explanations for questions.'}
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-4'>
          {!initialized ? (
            <div className='space-y-4'>
              <div className='flex items-center gap-2 text-sm'>
                <span>{initProgress.text}</span>
              </div>

              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='font-medium text-primary'>
                    {Math.round(initProgress.progress * 100)}%
                  </span>
                </div>

                <Progress
                  value={initProgress.progress * 100}
                  className='h-2 w-full'
                  aria-label='Model loading progress'
                />

                <p className='mt-2 text-xs text-muted-foreground'>
                  The first load may take longer as we need to download the
                  model. The model will be cached for faster loading in the
                  future.
                </p>
              </div>
            </div>
          ) : (
            <div className='space-y-4'>
              <div className='grid gap-2'>
                <div className='flex items-center gap-2 text-sm'>
                  {systemInfo.webGPUAvailable ? (
                    <Check className='h-4 w-4 text-green-500' />
                  ) : (
                    <AlertTriangle className='h-4 w-4 text-amber-500' />
                  )}
                  <span>
                    [WebGPU]{' '}
                    {systemInfo.webGPUAvailable
                      ? 'Supported (preferred)'
                      : 'Not supported'}
                  </span>
                </div>

                <div className='flex items-center gap-2 text-sm'>
                  {systemInfo.webGLAvailable ? (
                    <Check className='h-4 w-4 text-green-500' />
                  ) : (
                    <AlertTriangle className='h-4 w-4 text-amber-500' />
                  )}
                  <span>
                    [WebGL]{' '}
                    {systemInfo.webGLAvailable
                      ? 'Supported (fallback)'
                      : 'Not supported'}
                  </span>
                </div>

                <div className='flex items-center gap-2 text-sm'>
                  {systemInfo.sharedArrayBufferAvailable ? (
                    <Check className='h-4 w-4 text-green-500' />
                  ) : (
                    <AlertTriangle className='h-4 w-4 text-amber-500' />
                  )}
                  <span>
                    [SharedArrayBuffer]{' '}
                    {systemInfo.sharedArrayBufferAvailable
                      ? 'Supported (faster)'
                      : 'Not supported'}
                  </span>
                </div>
              </div>

              {!supported && (
                <div className='rounded-md border border-amber-500/30 bg-amber-500/15 px-4 py-3 text-sm'>
                  <div className='flex items-center gap-2'>
                    <AlertTriangle className='h-4 w-4 text-amber-500' />
                    <span className='font-medium text-amber-700 dark:text-amber-400'>
                      WebLLM not fully supported
                    </span>
                  </div>
                  <p className='mt-1 text-muted-foreground'>
                    Your browser may not fully support WebLLM. Some features may
                    be disabled.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
