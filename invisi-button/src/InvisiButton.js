import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
      display: block;
      padding: 10px;
      --invisi-button-color: white;
      --invisi-button-background-color: black;
      --invisi-button-disabled-background-color: lightgray;
      }
      :host([dark]) {
        --invisi-button-color: black;
        --invisi-button-background-color: white;
      }
      :host([disabled]) {
        pointer-events:none;
        color: var(--invisi-button-background-color);
        cursor: not-allowed;
      }
      .invisi {
        color: var(--invisi-button-color);
        background-color: var(--invisi-button-background-color);
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        text-decoration: none;
        font-size: 18px;
        border-radius: 5px;
        padding: 15px 15px;
        font-family: Sans-serif;
        font-weight: 540;
        text-align: center;
        border: 2px solid var(--invisi-button-background-color);
      }
      .invisi:disabled {
        color: var(--invisi-button-background-color);
        background-color: var(--invisi-button-disabled-background-color);
        cursor: not-allowed;
      }
     .invisi:focus, .invisi:active {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        border: 2px solid var(--invisi-button-background-color);
      }
      .invisi:hover
      {
        color: var(--invisi-button-background-color);
        background-color: transparent;
        border: 2px solid var(--invisi-button-background-color);
        cursor:pointer;
        
      }
      .arrowrotate:hover 
      {
        transform:rotate(360deg);
        transition: all 0.5s ease;
      }
      a {
        color: var(--invisi-button-color);
        text-decoration: none
      }
  `;
}

  static get properties() {
    return {
      link: { type: String },
      title: { type: String },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true }
    };
  }

  constructor() {
    super();
    this.link = "https://teuxdeux.com/";
    this.title = "Join now for free";
    this.icon = false;
    this.disabled = false;
  }

  render() {
    return html`
    <a href="${this.link}" tabindex=-1 role="button" rel="noopener noreferrer" part="invisi-button-link">
    <button class = "invisi" ?disabled="${this.disabled}">
    ${this.title}
    ${this.icon ? html`<simple-icon-lite  class= "arrowrotate" icon="${this.icon}"></simple-icon-lite>` : ''}
    </button>
    </a>
    `;
  }
}
