import Drug from "../model/Drug";
import DoseInfo from "./DoseInfo";

export default class Tylenol extends Drug {
  private static readonly REGULAR_STRENGTH = 325;
  private static readonly EXTRA_STRENGTH = 500;
  private static readonly MAXIMUM_DOSE_PER_KG = 15;

  constructor() {
    super();
    let doseCode = 0;
    for (let i = 1; i <= 4; i++) {
      doseCode++;
      this.easyDoses.set(
        Tylenol.REGULAR_STRENGTH * (i / 4),
        new DoseInfo(doseCode, "Regular Strength")
      );
      this.easyDoses.set(
        Tylenol.EXTRA_STRENGTH * (i / 4),
        new DoseInfo(doseCode, "Extra Strength")
      );
    }
  }

  getDose(weight: number): number {
    return Tylenol.MAXIMUM_DOSE_PER_KG * weight;
  }
}
