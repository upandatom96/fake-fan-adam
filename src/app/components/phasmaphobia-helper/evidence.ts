import {PrimaryEvidence} from "./evidence.model";

export const EMF_LEVEL_5: PrimaryEvidence = {
  name: "EMF Level 5",
  details: "Detected by getting an EMF reading of 5 in the Ghost Room.",
};

export const FINGERPRINTS: PrimaryEvidence = {
  name: "Fingerprints",
  details: "Detected by finding a fingerprint with the UV Light in the Ghost Room."
};

export const FREEZING_TEMPERATURE: PrimaryEvidence = {
  name: "Freezing temperature",
  details: "Detected by either seeing your breath or by detecting a freezing temperature with the Thermometer in the Ghost Room."
};

export const GHOST_ORBS: PrimaryEvidence = {
  name: "Ghost orbs",
  details: "Detected by finding Ghost Orbs on a Video Camera with Night Vision in the Ghost Room."
};

export const GHOST_WRITING: PrimaryEvidence = {
  name: "Ghost writing",
  details: "Detected by leaving the Ghost Writing Book in the Ghost Room.",
};

export const SPIRIT_BOX: PrimaryEvidence = {
  name: "Spirit box",
  details: "Detected by asking the ghost questions in the Ghost Room while the Spirit Box is turned on.",
};

export const ALL_PRIMARY_EVIDENCE = [
  EMF_LEVEL_5,
  FINGERPRINTS,
  FREEZING_TEMPERATURE,
  GHOST_ORBS,
  GHOST_WRITING,
  SPIRIT_BOX,
];
