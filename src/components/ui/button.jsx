import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from './utils'; // Path must match utils.js location

const Button = React.forwardRef(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-blue-600 transition',
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button };
