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
}
