import { clsx, type ClassValue } from "clsx";
import { createTwc } from "react-twc";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twc = createTwc({ compose: cn });

const jsonModules = import.meta.glob("./data/*.json");
