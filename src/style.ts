import { css } from "lit-element";

export default css`
  :host {
    display: grid;
    grid-template-rows: max-content;
    grid-gap: 1em;
    padding: 1rem;
  }

  :host([collapsible]) #header {
    display: grid;
    grid-template-columns: auto max-content;
  }

  :host(:not([collapsible])) #header {
    display: contents;
  }

  #title {
    display: contents;
  }

  #toggle {
    display: flex;
    justify-content: flex-end;
  }

  /*
  Vertically align the title
 */
  ::slotted([slot="title"]) {
    display: flex;
    align-items: center;
    height: 100%;
  }

  #body {
    display: flex;
  }

  [hidden] {
    display: none !important;
  }
`;
