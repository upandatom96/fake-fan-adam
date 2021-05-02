export interface PrimaryEvidence {
  name: string;
  details: string;
  status?: EvidenceStatus;
}

export const enum EvidenceStatus {
  UNKNOWN,
  FOUND,
  ELIMINATED
}
