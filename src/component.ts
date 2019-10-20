import { LitElement, customElement, property, query } from "lit-element";

import style from "./style";
import template from "./template";

@customElement("card-component")
export class CardComponent extends LitElement {
  public static styles = style;
  public render = template.bind(this);

  @property({ type: Boolean, reflect: true }) collapsible: boolean = false;
  @property({ type: Boolean, reflect: true }) collapsed: boolean = false;

  @query("#icon") public toggleIcon: Element;

  public firstUpdated(changedProperties: any) {
    super.firstUpdated(changedProperties);
    this.addListeners();
  }

  protected addListeners() {
    if (this.collapsible)
      this.toggleIcon.addEventListener("click", this.toggle.bind(this));
  }

  public toggle() {
    this.collapsed = !this.collapsed;
  }
}
