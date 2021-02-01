export interface Evidence {
  _id: string;
  name: string;
}

export interface Witness {
  _id: string;
  name: string;
}

export interface Issue {
  _id: string;
  name: string;
}

export interface Case {
  _id: string;
  name: string;
  fullCaseName: string;
  closedDate: string;
  openedDate: string;
  isCustom: boolean;
}

export interface SortedCases {
  openCases: Case[];
  closedCases: Case[];
  limboCases: Case[];
}
