import {GhostType} from "./ghost-type.model";
import {EMF_LEVEL_5, FINGERPRINTS, FREEZING_TEMPERATURE, GHOST_ORBS, GHOST_WRITING, SPIRIT_BOX} from "./evidence";

export const SPIRIT: GhostType = {
  name: "Spirit",
  primaryEvidence: [
    FINGERPRINTS,
    GHOST_WRITING,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "smudge sticks stop attacks for a long time",
  ],
};

export const WRAITH: GhostType = {
  name: "Wraith",
  primaryEvidence: [
    FINGERPRINTS,
    FREEZING_TEMPERATURE,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "flying, no footprints",
    "toxic reaction to salt",
    "travelling through walls",
  ],
};

export const PHANTOM: GhostType = {
  name: "Phantom",
  primaryEvidence: [
    EMF_LEVEL_5,
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
  ],
  secondaryEvidence: [
    "looking at the ghost drops sanity considerably",
    "taking a photo makes the ghost temporarily disappear",
    "summoned by a Ouija Board",
    "possesses the living",
  ],
};

export const POLTERGEIST: GhostType = {
  name: "Poltergeist",
  primaryEvidence: [
    FINGERPRINTS,
    SPIRIT_BOX,
    GHOST_ORBS,
  ],
  secondaryEvidence: [
    "throws multiple objects at once",
  ],
};

export const BANSHEE: GhostType = {
  name: "Banshee",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    FREEZING_TEMPERATURE,
  ],
  secondaryEvidence: [
    "targets and hunts one person at a time",
    "scared off easily by the Crucifix",
  ],
};

export const JINN: GhostType = {
  name: "Jinn",
  primaryEvidence: [
    EMF_LEVEL_5,
    GHOST_ORBS,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "territorial ghost that attacks when threatened",
    "travels fast when victim is far away",
    "turning off the locations power source slows down ghost movement",
  ],
};

export const MARE: GhostType = {
  name: "Mare",
  primaryEvidence: [
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "most powerful in the dark",
    "increased chance of an attack in the dark",
    "lower chance of an attack when lights are on",
  ],
};

export const REVENANT: GhostType = {
  name: "Revenant",
  primaryEvidence: [
    EMF_LEVEL_5,
    FINGERPRINTS,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "travels at significantly high speeds when hunting",
    "hiding slows the ghost significantly",
  ],
};

export const SHADE: GhostType = {
  name: "Shade",
  primaryEvidence: [
    EMF_LEVEL_5,
    GHOST_ORBS,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "shy ghost with no activity/hunting when multiple people are nearby",
  ],
};

export const DEMON: GhostType = {
  name: "Demon",
  primaryEvidence: [
    FREEZING_TEMPERATURE,
    GHOST_WRITING,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "attacks often and without reason",
    "sanity is not lowered when asking successful Ouija Board questions",
  ],
};

export const YUREI: GhostType = {
  name: "Yurei",
  primaryEvidence: [
    FREEZING_TEMPERATURE,
    GHOST_ORBS,
    GHOST_WRITING,
  ],
  secondaryEvidence: [
    "reduces sanity more quickly",
    "smudging the room will stop it from wandering around for a long time",
  ],
};

export const ONI: GhostType = {
  name: "Oni",
  primaryEvidence: [
    EMF_LEVEL_5,
    GHOST_WRITING,
    SPIRIT_BOX,
  ],
  secondaryEvidence: [
    "objects moved at great speeds",
    "more active when people are nearby",
  ],
};

export const GHOST_TYPES: GhostType[] = [
  SPIRIT,
  ONI,
  YUREI,
  DEMON,
  SHADE,
  REVENANT,
  MARE,
  JINN,
  BANSHEE,
  POLTERGEIST,
  PHANTOM,
  WRAITH,
];
