
import React from "react";

type MotionProps = {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  whileInView?: Record<string, any>;
  viewport?: Record<string, any>;
  whileHover?: Record<string, any>;
  className?: string;
  children: React.ReactNode;
};

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    whileInView, 
    viewport, 
    whileHover,
    className, 
    children, 
    ...props 
  }: MotionProps & React.HTMLAttributes<HTMLDivElement>) => {
    return (
      <div 
        className={`transition-all duration-500 ease-out ${className}`} 
        {...props}
      >
        {children}
      </div>
    );
  }
};
