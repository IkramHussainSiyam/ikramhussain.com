import React from "react";
import { cn } from "~/lib/utils";

interface ISectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  titleClassName?: string;
  sectionTitle?: string;
}

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  ({ children, className, titleClassName, sectionTitle, ...props }, ref) => {
    return (
      <section ref={ref} {...props} className={cn("my-36 sm:my-20", className)}>
        {/* section title */}
        {sectionTitle && (
          <h2
            className={cn(
              "pt-8 pb-4 border-y border-border/15 text-8xl font-heading text-center breathing-text text-primary",
              titleClassName
            )}
          >
            {sectionTitle}
          </h2>
        )}

        {children}
      </section>
    );
  }
);

export default Section;
