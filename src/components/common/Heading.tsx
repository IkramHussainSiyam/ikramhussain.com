import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/utils";

const headingVariants = cva("text-primary", {
  variants: {
    size: {
      h1: "text-9xl",
      h2: "text-8xl",
      h3: "text-6xl",
      h4: "text-4xl",
    },
    font: {
      heading: "font-heading",
      body: "font-body",
    },
  },
  defaultVariants: {
    size: "h1",
    font: "heading",
  },
});

const Heading = React.forwardRef<HTMLHeadingElement, IHeadingProps>(
  ({ className, size, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h1";

    return (
      <Comp
        ref={ref}
        {...props}
        className={cn(headingVariants({ size, font, className }))}
      />
    );
  }
);

export default Heading;

interface IHeadingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}
