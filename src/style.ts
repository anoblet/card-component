import { css } from "lit-element";

export default css`
  #card {
    display: grid;
    grid-gap: 1em;
    align-items: center;
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
    text-align: end;
  }

  #body {
    grid-column-start: 1;
    grid-column-end: -1;
  }
`;
