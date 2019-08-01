import { html } from "lit-element";
import { expand_less, expand_more } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="header">
      <slot name="title"></slot>${this.collapsible
        ? html`
            <span id="icon">${this.collapsed ? expand_less : expand_more}</span>
          `
        : ""}
    </div>
    <div id="body">
      <slot name="body"></slot>
    </div>
    <div id="footer">
      <slot name="footer"></slot>
    </div>
  `;
}
