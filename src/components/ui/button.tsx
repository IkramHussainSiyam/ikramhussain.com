import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  indicatorClassName?: string;
  asChild?: boolean;
}

const buttonVariants = cva(
  "bg-primary text-primary-foreground uppercase font-medium border-r-[3px] border-b-[3px] border-primary-foreground shadow-[5px_5px_0] shadow-secondary/60 transition-all ease-out duration-100 relative flex items-center justify-center active:translate-x-1 active:translate-y-1 active:shadow-none",
  {
    variants: {
      variant: {
        default: "text-primary-foreground bg-primary",
        secondary:
          "bg-background text-primary shadow-primary-foreground/30 border-primary",
      },
      size: {
        default: "h-10 w-20 text-base",
        icon: "h-8 w-8 shadow-[3px_3px_0]",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      variant,
      indicatorClassName,
      children,
      asChild,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <button
        className={cn(buttonVariants({ size, variant }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
