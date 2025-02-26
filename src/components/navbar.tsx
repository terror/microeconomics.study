import { Bot } from 'lucide-react';
import { useState } from 'react';

import { LLMDialog } from './llm-dialog';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

export const Navbar = () => {
  const [llmDialogOpen, setLlmDialogOpen] = useState(false);

  return (
    <>
      <div className='m-4 flex items-center font-bold'>
        <a href='/microeconomics.study'>microeconomics.study</a>
        <div className='ml-auto flex items-center gap-x-2'>
          <Button
            variant='outline'
            size='icon'
            onClick={() => setLlmDialogOpen(true)}
          >
            <Bot />
          </Button>
          <ModeToggle />
        </div>
      </div>
      <LLMDialog
        open={llmDialogOpen}
        onOpenChange={(open) => setLlmDialogOpen(open)}
      />
    </>
  );
};
