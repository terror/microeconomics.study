import { Figure3_1 } from '@/figures/figure-3-1';
import { Figure4_2 } from '@/figures/figure-4-2';
import { Figure5_1 } from '@/figures/figure-5-1';
import { Figure5_5 } from '@/figures/figure-5-5';
import { Figure6_2 } from '@/figures/figure-6-2';
import { Figure7_1 } from '@/figures/figure-7-1';
import { Figure7_2 } from '@/figures/figure-7-2';
import { Figure9_2 } from '@/figures/figure-9-2';
import { Figure10_5 } from '@/figures/figure-10-5';
import { Figure10_6 } from '@/figures/figure-10-6';
import { Figure10_7 } from '@/figures/figure-10-7';
import { Figure16_1 } from '@/figures/figure-16-1';
import { Figure17_1 } from '@/figures/figure-17-1';
import { Figure32_1 } from '@/figures/figure-32-1';
import { Figure32_5 } from '@/figures/figure-32-5';
import { FigurePayoff2 } from '@/figures/figure-payoff-2';
import { FigurePayoffMatrix } from '@/figures/figure-payoff-matrix';

export type FigureId =
  | 'figure-10-5'
  | 'figure-10-6'
  | 'figure-10-7'
  | 'figure-16-1'
  | 'figure-17-1'
  | 'figure-3-1'
  | 'figure-32-1'
  | 'figure-32-5'
  | 'figure-4-2'
  | 'figure-5-1'
  | 'figure-5-5'
  | 'figure-6-2'
  | 'figure-7-1'
  | 'figure-7-2'
  | 'figure-9-2'
  | 'figure-payoff-2'
  | 'figure-payoff-matrix';

const getFigureFromId = (id: FigureId): JSX.Element => {
  switch (id) {
    case 'figure-10-5':
      return <Figure10_5 />;
    case 'figure-10-6':
      return <Figure10_6 />;
    case 'figure-10-7':
      return <Figure10_7 />;
    case 'figure-16-1':
      return <Figure16_1 />;
    case 'figure-17-1':
      return <Figure17_1 />;
    case 'figure-3-1':
      return <Figure3_1 />;
    case 'figure-32-1':
      return <Figure32_1 />;
    case 'figure-32-5':
      return <Figure32_5 />;
    case 'figure-4-2':
      return <Figure4_2 />;
    case 'figure-5-1':
      return <Figure5_1 />;
    case 'figure-5-5':
      return <Figure5_5 />;
    case 'figure-6-2':
      return <Figure6_2 />;
    case 'figure-7-1':
      return <Figure7_1 />;
    case 'figure-7-2':
      return <Figure7_2 />;
    case 'figure-9-2':
      return <Figure9_2 />;
    case 'figure-payoff-2':
      return <FigurePayoff2 />;
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
