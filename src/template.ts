import { html } from "lit-element";
import { expand_less, expand_more } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="card">
      <slot name="title"></slot>
      ${this.collapsible
        ? html`
            <div id="toggle" @click=${this._handleToggle}>
              ${this.collapsed ? expand_more : expand_less}
            </div>
          `
        : ""}
      <div id="body" ?hidden=${this.collapsed}>
        <slot name="body"></slot>
        <slot></slot>
      </div>
    </div>
  `;
}
