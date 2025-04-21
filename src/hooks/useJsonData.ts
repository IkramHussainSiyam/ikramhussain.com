import navlinks from "~/data/navlinks.json";
import skills from "~/data/skills.json";

const dataName = { navlinks, skills };

const useJsonData = <T>(type: keyof typeof dataName): T => {
  return dataName[type] as T;
};

export default useJsonData;
