import { LitElement, customElement } from "lit-element";

import Style from "./Style";
import Template from "./Template";

@customElement("card-component")
export class CardComponent extends LitElement {
  public static styles = Style;
  public render = Template.bind(this);
}
