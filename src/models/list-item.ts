export class ListItem {
  public text: string;
  public date: string;
  constructor(text: string) {
    this.text = text;
    this.date = new Date().toDateString();
  }
}
