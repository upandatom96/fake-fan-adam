export abstract class StringHelper {
  public static toTitleCase(text) {
    return text.toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
  }

  public static fromHtmlToLabel(text) {
    const spacedName = text.replace(/-/gi, " ");
    return StringHelper.toTitleCase(spacedName);
  }

  public static convertDateStringToDisplayDateWithTimezone(date) {
    const dateWithTimezone = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US"));
    return this.getDateString(dateWithTimezone) + " " + this.getTimeString(dateWithTimezone);
  }

  // https://stackoverflow.com/questions/3066586/get-string-in-yyyymmdd-format-from-js-date-object
  public static getDateString(date: Date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();

    const year = date.getFullYear();
    const month = (mm > 9 ? "" : "0") + mm;
    const day = (dd > 9 ? "" : "0") + dd;
    return [day, month, year].join("-");
  }

  public static convertSecondsToHoursMinutesSeconds(seconds: number): string {
    const dayLengthDate = new Date(null);
    dayLengthDate.setSeconds(seconds);
    return dayLengthDate.toISOString().split("T")[1].split(".")[0];
  }

  public static getTimeString(date) {
    return date.toLocaleTimeString();  // -> "7:38:05 AM"
  }
}
