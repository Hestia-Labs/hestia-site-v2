import React, { createContext, useContext, useState } from 'react';
import TransitionScreen from '../components/TransitionScreen';

interface TransitionContextType {
  startTransition: (callback?: () => void) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider: React.FC<{children: React.ReactNode}> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const startTransition = (callback?: () => void) => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
      if (callback) callback();
    }, 300);
  };

  return (
    <TransitionContext.Provider value={{ startTransition }}>
      {children}
      <TransitionScreen isVisible={isVisible} />
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
}; 