import * as React from "react";

import { cn } from "~/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  indicatorClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, indicatorClassName, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "h-9 w-20 font-semibold uppercase transition-all relative bg-primary text-primary-foreground group/btn",
          className
        )}
        ref={ref}
        {...props}
      >
        <div
          className={cn(
            "before:absolute before:-top-1 before:-left-1 before:border-t-2 before:border-l-2 before:border-border before:w-3 before:h-3 after:absolute after:rotate-180 after:-bottom-1 after:-right-1 after:border-t-2 after:border-l-2 after:border-border after:w-3 after:h-3 group-hover/btn:before:-top-1.5 group-hover/btn:before:-left-1.5 group-hover/btn:after:-bottom-1.5 group-hover/btn:after:-right-1.5 before:transition-all after:transition-all",
            indicatorClassName
          )}
        />
        {children}
        <div
          className={cn(
            "before:absolute before:-bottom-1 before:-left-1 before:-rotate-90 before:border-t-2 before:border-l-2 before:border-border before:w-3 before:h-3 after:absolute after:rotate-90 after:-top-1 after:-right-1 after:border-t-2 after:border-l-2 after:border-border after:w-3 after:h-3 group-hover/btn:before:-bottom-1.5 group-hover/btn:before:-left-1.5 group-hover/btn:after:-top-1.5 group-hover/btn:after:-right-1.5 before:transition-all after:transition-all",
            indicatorClassName
          )}
        />
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
