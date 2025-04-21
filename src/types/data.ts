export interface INavlinks {
  id: number;
  name: string;
  href: string;
}

export interface ISkills {
  groupHeading: string;
  groupSerial: number;
  skills: string[];
}

export interface INavLinksData {
  navlinks: INavlinks[];
}

export interface ISkillGroupData {
  skills: ISkills[];
}
