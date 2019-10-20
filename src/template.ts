import { html } from "lit-element";
import { expand_less, expand_more } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="card" part="card">
      <div id="header">
        <slot name="title"></slot>${this.collapsible
          ? html`
              <span id="icon"
                >${this.collapsed ? expand_more : expand_less}</span
              >
            `
          : ""}
      </div>
      <div id="body">
        ${!this.collapsed
          ? html`
              <slot name="body"></slot>
              <slot></slot>
            `
          : ""}
      </div>
      <div id="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  `;
}
