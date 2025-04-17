export default function Skill({ name }: { name: string }) {
  return (
    <div className="group/skill w-full uppercase pb-1 border-b border-primary/25 text-sm">
      <span className="group-hover/skill:ml-3 transition-all">{name}</span>
    </div>
  );
}
