export interface Muppet {
  _id: string;
  name: string;
  debutYear: number;
  commonality: string;
  speechType: string;
  mainSeries: string;
  creature: string;
  muppetRank: number;
  muppetPowerLevel: number;
  alignment: string;
  archived: boolean;
  appearanceAdjectives: string[];
  attitudeAdjectives: string[];
  imageLinks: string[];
  tags: string[];
  notes: string[];
  quotes: string[];
  // muppet stats
  starQuality: number;
  friendliness: number;
  imagination: number;
  showmanship: number;
  humor: number;
  absentmindedness: number;
  mischief: number;
  floppiness: number;
  softness: number;
  passion: number;
  // dnd stats
  strength: number;
  wisdom: number;
  intelligence: number;
  constitution: number;
  charisma: number;
  dexterity: number;
}
