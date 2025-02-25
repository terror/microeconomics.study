import { Figure5_1 } from '@/figures/figure-5-1';
import { Figure5_5 } from '@/figures/figure-5-5';
import { Figure7_1 } from '@/figures/figure-7-1';
import { Figure10_5 } from '@/figures/figure-10-5';
import { Figure10_6 } from '@/figures/figure-10-6';
import { Figure16_1 } from '@/figures/figure-16-1';
import { Figure17_1 } from '@/figures/figure-17-1';
import { Figure32_1 } from '@/figures/figure-32-1';
import { Figure32_5 } from '@/figures/figure-32-5';
import { FigurePayoffMatrix } from '@/figures/figure-payoff-matrix';
import type { FigureId } from '@/lib/types';

const getFigureFromId = (id: FigureId): JSX.Element => {
  switch (id) {
    case 'figure-5-1':
      return <Figure5_1 />;
    case 'figure-5-5':
      return <Figure5_5 />;
    case 'figure-7-1':
      return <Figure7_1 />;
    case 'figure-10-5':
      return <Figure10_5 />;
    case 'figure-10-6':
      return <Figure10_6 />;
    case 'figure-16-1':
      return <Figure16_1 />;
    case 'figure-32-1':
      return <Figure32_1 />;
    case 'figure-32-5':
      return <Figure32_5 />;
    case 'figure-17-1':
      return <Figure17_1 />;
    case 'figure-payoff-matrix':
      return <FigurePayoffMatrix />;
  }
};

interface FigureDisplayProps {
  figureId: FigureId;
  className?: string;
}

export const FigureDisplay = ({
  figureId,
  className = '',
}: FigureDisplayProps) => {
  return (
    <div className={`mb-6 rounded-lg border bg-muted/50 p-4 ${className}`}>
      {getFigureFromId(figureId)}
    </div>
  );
};
