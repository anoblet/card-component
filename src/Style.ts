import { css } from "lit-element";

export default css`
  :host {
    display: flex;
    flex: 1;
  }

  #card {
    /* display: grid; */
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    grid-template-rows: auto;
    padding: 1rem;
    flex: 1;
  }

  #body {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  ::slotted([slot="content"]) {
    flex: 1;
  }

  #header,
  #footer {
    display: contents;
  }
`;
