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
      <section ref={ref} {...props} className={cn(className)}>
        {sectionTitle && (
          <h2
            className={cn(
              "pt-6 pb-4 border-y uppercase border-border/15 text-5xl md:text-8xl font-heading text-center breathing-text",
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
