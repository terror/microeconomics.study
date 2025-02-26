import { ThemeProvider } from '@/providers/theme-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import LLMProvider from './providers/llm-provider.tsx';
import { QuizProvider } from './providers/quiz-provider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <QuizProvider>
        <LLMProvider autoInitialize={true}>
          <App />
        </LLMProvider>
      </QuizProvider>
    </ThemeProvider>
  </React.StrictMode>
);
