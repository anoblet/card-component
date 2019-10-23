import { LitElement, customElement, property, query } from "lit-element";

import style from "./style";
import template from "./template";

@customElement("card-component")
export class CardComponent extends LitElement {
  public static styles = style;
  public render = template.bind(this);

  @property({ type: Boolean}) collapsible: boolean = false;
  @property({ type: Boolean}) collapsed: boolean = false;

  public _handleToggle() {
    this.collapsed = !this.collapsed;
  }
}
