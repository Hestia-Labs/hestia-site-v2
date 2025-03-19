'use client';

import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import TransitionScreen from '../TransitionScreen';

interface TransitionContextType {
  startTransition: (callback?: () => void) => void;
  endTransition: () => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [onCompleteCallback, setOnCompleteCallback] = useState<(() => void) | undefined>(undefined);

  // Start the transition and optionally register a callback for when it completes
  const startTransition = useCallback((callback?: () => void) => {
    // Store callback first, then show the transition
    if (callback) {
      setOnCompleteCallback(() => callback);
    }
    setIsVisible(true);
  }, []);

  // End the transition
  const endTransition = useCallback(() => {
    setIsVisible(false);
  }, []);

  // Handle the transition completion - this is called by TransitionScreen
  // when the exit animation completes
  const handleTransitionComplete = useCallback(() => {
    console.log("Animation completed, executing callback if any");
    if (onCompleteCallback) {
      // Execute the callback and then clear it
      setTimeout(() => {
        onCompleteCallback();
        setOnCompleteCallback(undefined);
      }, 100);
    }
  }, [onCompleteCallback]);

  return (
    <TransitionContext.Provider 
      value={{ 
        startTransition, 
        endTransition, 
        isTransitioning: isVisible 
      }}
    >
      {children}
      <TransitionScreen 
        isVisible={isVisible} 
        onAnimationComplete={handleTransitionComplete} 
      />
    </TransitionContext.Provider>
  );
};

export const useTransition = (): TransitionContextType => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

export default useTransition; 