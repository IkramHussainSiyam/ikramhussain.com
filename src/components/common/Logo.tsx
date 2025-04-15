import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to={"/"} className="flex items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        className="dark:text-white text-base-900 size-6 sm:size-5"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,16.37a86.4,86.4,0,0,1,16,3V212.67a86.4,86.4,0,0,1-16,3Zm32,9.26a87.81,87.81,0,0,1,16,10.54V195.83a87.81,87.81,0,0,1-16,10.54ZM40,128a88.11,88.11,0,0,1,80-87.63V215.63A88.11,88.11,0,0,1,40,128Zm160,50.54V77.46a87.82,87.82,0,0,1,0,101.08Z"></path>
      </svg>
      <span className="block font-display text-3xl lg:text-2xl sm:text-xl italic text-center">
        Ikram Hussain
      </span>
    </Link>
  );
}
