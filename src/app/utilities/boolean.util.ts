export abstract class BooleanHelper {
  public static notNull(value: any): boolean {
    return value !== null;
  }

  public static notUndefined(value: any): boolean {
    return value !== undefined;
  }

  public static notEmptyText(value: any): boolean {
    return value !== "";
  }

  public static notInRange(value: number, min: number, max: number): boolean {
    return !BooleanHelper.inRange(value, min, max);
  }

  public static inRange(value: number, min: number, max: number): boolean {
    return BooleanHelper.hasValue(value) && value >= min && value <= max;
  }

  public static hasNoValue(value: any): boolean {
    return !BooleanHelper.hasValue(value);
  }

  public static hasValue(value: any): boolean {
    return BooleanHelper.notNull(value) &&
      BooleanHelper.notUndefined(value) &&
      BooleanHelper.notEmptyText(value);
  }
}
