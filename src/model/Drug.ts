export default abstract class Drug {
  protected easyDoses: Map<number, DoseInfo> = new Map<number, DoseInfo>();

  // EFFECTS: return an unmodifiable list of all doses that can be easily obtained, sorted from small to large
  getDosesAscending(): ReadonlyArray<number> {
    const doses: number[] = Array.from(this.easyDoses.keys());
    const doseSmallToLarge: number[] = doses.slice().sort((a, b) => a - b);
    return Object.freeze(doseSmallToLarge);
  }

  // EFFECTS: return an unmodifiable list of all doses that can be easily obtained, sorted from large to small
  getDosesDescending(): ReadonlyArray<number> {
    const doses: number[] = Array.from(this.easyDoses.keys());
    const doseLargeToSmall: number[] = doses.slice().sort((a, b) => b - a);
    return Object.freeze(doseLargeToSmall);
  }

  getEasyDoses(): ReadonlyMap<number, DoseInfo> {
    return new Map(this.easyDoses);
  }

  // effects: returns the maximum effective dose of drug given a certain weight
  abstract getDose(weight: number): number;
}
