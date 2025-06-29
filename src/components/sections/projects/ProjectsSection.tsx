import { ArrowUpRight } from "lucide-react";
import Section from "~/components/common/section";
import Button from "~/components/ui/button";
import { Cursor } from "~/components/ui/cursor";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <Section id="projects" sectionTitle="projects">
      <div className="py-0 lg:py-28">
        <div className="section-padding-x">
          <Cursor
            attachToParent
            variants={{
              initial: { height: 0, opacity: 0 },
              animate: { height: "auto", opacity: 1 },
              exit: { height: 0, opacity: 0 },
            }}
            transition={{
              type: "spring",
              bounce: 0.1,
            }}
          >
            <Button className="hidden xl:flex rounded-full gap-2 w-40 text-sm select-none pointer-events-none">
              See Details
              <ArrowUpRight className="size-5 stroke-2 stroke-primary-foreground" />
            </Button>
          </Cursor>
          <ProjectCard
            projectLink="https://github.com/ikramhussainsiyam/libris"
            title="Libris - The next-generation book platform"
            description="A full-stack book tracking platform, designed to simplify how users track, explore, and share their thoughts on books."
          />
          <ProjectCard
            projectLink="https://github.com/ikramhussainsiyam/the-chronicles"
            title="The Chronicles - A Clean and Responsive Medium UI Clone"
            description="A polished, beautiful, and responsive Medium UI clone built with React, Next.js, and Tailwind CSS."
          />
          <ProjectCard
            projectLink="https://github.com/ikramhussainsiyam/unified-glow-vscode-theme"
            title="Unified Glow - All of your favorite themes in one place"
            description="Enjoy your favorite themes and icons in one extension—no need to download multiple packages. Unified Glow has it all."
          />
        </div>
      </div>
    </Section>
  );
}
