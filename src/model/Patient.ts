import TooOldError from "../errors/TooOldError";
import TooSmallError from "../errors/TooSmallError";
import Drug from "../model/Drug";


export default class Patient {
  private weight: number;
  private age: number;

  constructor(weight: number, age: number) {
    if (age < 2) {
      throw new TooSmallError("Please consult your doctor");
    }
    if (age >= 12) {
      throw new TooOldError("Use adult dose");
    }
    this.weight = weight;
    this.age = age;
  }

  getMaxDoseForWeight(d: Drug): number {
    const doses: readonly number[] = d.getDosesDescending();
    for (const dose of doses) {
      if (dose <= d.getDose(this.weight)) {
        return dose;
      }
    }
    throw new TooSmallError("Please consult your doctor");
  }

  getAge(): number {
    return this.age;
  }

}
