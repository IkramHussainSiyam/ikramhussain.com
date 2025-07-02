import { ArrowUpRight } from "lucide-react";
import Button from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function ProjectCard({
  className,
  title,
  description,
  projectLink,
  inProgress = false,
}: Props) {
  return (
    <a
      rel="noopener noreferrer"
      href={projectLink}
      target="_blank"
      className={cn(
        "flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-12 justify-between py-14 last:border-b-0 border-b border-border/15 xl:pl-3 xl:pr-12 group/card select-none cursor-none",
        className
      )}
    >
      <article className="flex-1 flex flex-col gap-3">
        {inProgress ? (
          <div className="mb-2 xl:mb-4">
            <span className="text-primary-foreground bg-primary text-xs px-1.5 py-[3px] shadow-[4px_4px_0] shadow-secondary/40">
              In Progress
            </span>
          </div>
        ) : null}
        <h4 className="text-2xl sm:text-4xl lg:text-5xl font-display italic tracking-[0.03em]">
          {title}
        </h4>
        <p className="text-sm md:text-xl">{description}</p>
      </article>

      <Button className="w-32 text-xs gap-1 xl:rounded-full xl:size-10 xl:shadow-[4px_4px_0] xl:shadow-secondary/60 xl:group-hover/card:scale-150 xl:group-active/card:scale-100 xl:transition-all xl:duration-300 cursor-none">
        <h6 className="xl:hidden">Learn More</h6>
        <ArrowUpRight className="size-5 stroke-2 stroke-primary-foreground" />
      </Button>
    </a>
  );
}

type Props = {
  className?: string;
  title: string;
  description: string;
  projectLink: string;
  inProgress?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
