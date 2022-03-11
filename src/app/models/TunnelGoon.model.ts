export interface TunnelGoon {
  _id: string;
  characterName: string;
  playerName: string;
  portraitURL: string;
  level: number;
  brute: number;
  skulker: number;
  erudite: number;
  maxHealthPoints: number;
  currentHealthPoints: number;
  maxInventoryScore: number;
  currentInventoryScore: number;
  items: string[];
  traits: string[];
  notes: string[];
  isPrivate: boolean
  createdDate;
  createdDateDatePart: string;
  createdDateTimePart: string;
}
