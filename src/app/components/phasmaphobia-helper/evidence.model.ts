export interface PrimaryEvidence {
  name: string;
  status?: EvidenceStatus;
}

export const enum EvidenceStatus {
  UNKNOWN,
  FOUND,
  ELIMINATED
}
