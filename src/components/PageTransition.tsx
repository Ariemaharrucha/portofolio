
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  // This component can be enhanced with framer-motion for more advanced animations
  return (
    <div className={`page-transition fade-in ${className}`}>
      {children}
    </div>
  );
}
