import {Component, OnInit} from "@angular/core";
import {GHOST_TYPES} from "./ghosts";
import {ALL_PRIMARY_EVIDENCE} from "./evidence";
import {EvidenceStatus, PrimaryEvidence} from "./evidence.model";
import {GhostType} from "./ghost-type.model";

@Component({
  selector: "app-phasmaphobia-helper",
  templateUrl: "./phasmaphobia-helper.component.html",
  styleUrls: ["./phasmaphobia-helper.component.scss"]
})
export class PhasmaphobiaHelperComponent implements OnInit {
  public allPrimaryEvidence = ALL_PRIMARY_EVIDENCE;

  public get foundEvidence(): PrimaryEvidence[] {
    return ALL_PRIMARY_EVIDENCE.filter((evidence) => {
      return evidence.status === EvidenceStatus.FOUND;
    });
  }

  public get viableGhostTypes(): GhostType[] {
    return GHOST_TYPES.filter((ghostType) => {
      return this.isGhostTypeViable(ghostType);
    });
  }

  public ngOnInit() {
    this.reset();
  }

  public reset() {
    ALL_PRIMARY_EVIDENCE.forEach((evidence) => {
      evidence.status = EvidenceStatus.UNKNOWN;
    });
  }

  public markFound(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.FOUND;
  }

  public markEliminated(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.ELIMINATED;
  }

  public markUnknown(evidence: PrimaryEvidence): void {
    evidence.status = EvidenceStatus.UNKNOWN;
  }

  public isEvidenceViable(evidence: PrimaryEvidence): boolean {
    return this.viableGhostTypes.some((ghostType) => {
      return ghostType.primaryEvidence.includes(evidence);
    });
  }

  public cannotBeEliminated(evidence: PrimaryEvidence): boolean {
    return this.viableGhostTypes.every((ghostType) => {
      return ghostType.primaryEvidence.includes(evidence);
    });
  }

  public evidenceConfirmed(evidence: PrimaryEvidence): boolean {
    return this.foundEvidence.includes(evidence) || this.cannotBeEliminated(evidence);
  }

  public cannotDeselectEvidence(evidence: PrimaryEvidence): boolean {
    return (!this.isEvidenceViable(evidence) || this.cannotBeEliminated(evidence)) && evidence.status === 0;
  }

  public showEvidenceUnknown(evidence: PrimaryEvidence): boolean {
    return evidence.status === EvidenceStatus.UNKNOWN && this.isEvidenceViable(evidence) && !this.cannotBeEliminated(evidence);
  }

  public evidenceImpossible(evidence: PrimaryEvidence): boolean {
    return evidence.status === EvidenceStatus.ELIMINATED || !this.isEvidenceViable(evidence)
  }

  private isGhostTypeViable(ghostType: GhostType): boolean {
    return this.noRequiredEvidenceEliminated(ghostType)
      && this.remainingEvidencePossible(ghostType);
  }

  private noRequiredEvidenceEliminated(ghostType: GhostType): boolean {
    return ghostType.primaryEvidence.every((evidence) => {
      return evidence.status !== EvidenceStatus.ELIMINATED;
    });
  }

  private remainingEvidencePossible(ghostType: GhostType): boolean {
    const requiredEvidenceNotYetFound = ghostType.primaryEvidence.filter((evidence) => {
      return evidence.status !== EvidenceStatus.FOUND;
    });
    return this.foundEvidence.length + requiredEvidenceNotYetFound.length <= 3;
  }

}
