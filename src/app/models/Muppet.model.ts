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
  // muppet stats
  starQuality: number;
  cuteness: number;
  imagination: number;
  storytelling: number;
  humor: number;
  aloofness: number;
  mischief: number;
  floppiness: number;
  fuzziness: number;
  softness: number;
  // dnd stats
  strength: number;
  wisdom: number;
  intelligence: number;
  constitution: number;
  charisma: number;
  dexterity: number;
}
