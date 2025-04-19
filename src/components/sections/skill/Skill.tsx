export default function Skill({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between group/skill w-full uppercase pb-1 border-b border-border/25 hover:font-semibold">
      <span className="group-hover/skill:ml-1 transition-all duration-500 text-primary">
        {name}
      </span>
      <span className="block w-1 h-1 bg-primary/40 group-hover/skill:bg-primary/60" />
    </div>
  );
}
