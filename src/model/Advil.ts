import Drug from "../model/Drug";
import DoseInfo from "./DoseInfo";

export default class Advil extends Drug {
  private static readonly REGULAR_STRENGTH = 200;
  private static readonly MAXIMUM_DOSE_PER_KG = 10;

  constructor() {
    super();
    let doseCode = 0;
    for (let i = 1; i <= 4; i++) {
      doseCode++;
      this.easyDoses.set(
        Advil.REGULAR_STRENGTH * (i / 4),
        new DoseInfo(doseCode, "Regular Strength")
      );
    }
    for (let i = 1; i <= 4; i++) {
      doseCode++;
      this.easyDoses.set(
        Advil.REGULAR_STRENGTH + Advil.REGULAR_STRENGTH * (i / 4),
        new DoseInfo(doseCode, "Regular Strength")
      );
    }
  }

  getDose(weight: number): number {
    return Advil.MAXIMUM_DOSE_PER_KG * weight;
  }
}
