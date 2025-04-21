import { Link } from "react-router";
import useJsonData from "~/hooks/useJsonData";
import { type INavLinksData } from "~/types/data";

export default function Navlinks() {
  const { navlinks } = useJsonData<INavLinksData>("navlinks");

  return (
    <ul>
      {navlinks?.map((link, index) => (
        <Link
          key={link.id}
          to={link.href}
          className="group/link block border-b border-secondary/65 py-4 tracking-wider text-5xl"
        >
          <li className="w-0 text-nowrap px-8 py-4 flex items-center gap-6 text-primary-foreground font-display italic transition-all ease-in-out group-hover/link:bg-primary-foreground group-hover/link:text-primary group-hover/link:w-full">
            <span>0{index + 1}.</span>
            <span>{link.name}</span>
          </li>
        </Link>
      ))}
    </ul>
  );
}
