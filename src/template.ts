import { html } from "lit-element";
import { expand_less, expand_more } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="header">
      <div id="title">
        <slot name="title"></slot>
      </div>
      ${this.collapsible
        ? html`
            <div id="toggle">
              <div id="icon" @click=${this._handleToggle}>
                ${this.collapsed ? expand_more : expand_less}
              </div>
            </div>
          `
        : ""}
    </div>
    <div id="body" ?hidden=${this.collapsed}>
      <slot name="body"></slot>
      <slot></slot>
    </div>
  `;
}
