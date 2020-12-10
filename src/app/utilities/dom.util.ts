export abstract class DomHelper {
  public static setBackground(url: string): void {
    document.getElementById("scene").style.backgroundImage = `url(${url})`;
  }
}
