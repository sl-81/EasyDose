export default class DoseInfo {
  private tabletStrength: string;
  private partialTab: string;

  constructor(doseCode: number, tabletStrength: string) {
    this.partialTab = "";
    this.tabletStrength = tabletStrength;
    this.processDoseCode(doseCode);
  }

  private processDoseCode(doseCode: number): void {
    if (doseCode === 1) {
      this.partialTab = "1/4";
    } else if (doseCode === 2) {
      this.partialTab = "1/2";
    } else if (doseCode === 3) {
      this.partialTab = "3/4";
    } else if (doseCode === 4) {
      this.partialTab = "1";
    } else if (doseCode === 5) {
      this.partialTab = "1 and 1/4";
    } else if (doseCode === 6) {
      this.partialTab = "1 and 1/2";
    } else if (doseCode === 7) {
      this.partialTab = "1 and 3/4";
    } else {
      this.partialTab = "2";
    }
  }

  getTabletStrength(): string {
    return this.tabletStrength;
  }

  getPartialTab(): string {
    return this.partialTab;
  }
}
