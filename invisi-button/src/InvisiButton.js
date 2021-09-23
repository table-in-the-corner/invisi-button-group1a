import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
      display: inline-block;
      color: var(--invisi-button-text-color, white);
        --invisi-button-color: black;
        margin: 20px 20px 0;
      }
      a:hover, a:focus {
        color: var(--invisi-button-color);
        background-color: transparent;
        border: 2px solid var(--invisi-button-color);
      }
      a {
        display: block;
        color: var(--invisi-button-text-color);
        background-color: var(--invisi-button-color);
        text-decoration: none;
        font-size: 18px;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0 6px 26px 0 rgba(0, 0, 0, 0.16);
        padding: 15px 15px;
        font-family: Sans-serif;
        font-weight: 540;
        width: 150px;
      }
      a span {
        display: flex;
        justify-content: center;
      }
  `;
}

  static get properties() {
    return {
      link: { type: String },
      title: { type: String },
      icon: {type: String},
    };
  }

  constructor() {
    super();
    this.link = "";
    this.title = null;
    this.icon = false;
  }

  render() {
    return html` <a href="${this.link}" role="button">
    ${this.icon ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>` : ''}
    ${this.title}
    <slot></slot>
    </a>
    `;
  }
}
