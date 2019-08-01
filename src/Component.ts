import { LitElement, customElement, property, query } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("card-component")
export class CardComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);

  @property() collapsible;
  @property() collapsed;

  @query("#header") public header: Element;

  public firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    this.addListeners();
  }

  protected addListeners() {
    if (this.collapsible)
      this.header.addEventListener("click", () => this.toggle());
  }

  public toggle() {
    this.collapsed = !this.collapsed;
  }
}
