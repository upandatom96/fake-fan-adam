import {PrimaryEvidence} from "./evidence.model";

export interface GhostType {
  name: string;
  primaryEvidence: PrimaryEvidence[];
  secondaryEvidence: string[];
}
