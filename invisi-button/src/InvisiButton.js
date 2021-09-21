import { html, css, LitElement } from 'lit';

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
      :host {
      display: inline-block;
      color: var(--invisi-button-text-color, white);
        --invisi-button-color: black;
        margin: 20px 20px 0;
      }
      a:hover {
        color: var(--invisi-button-color);
        background-color: transparent;
        border: 2px solid var(--invisi-button-color);
      }
      a:focus {
        color: var(--invisi-button-color);
        background-color: transparent;
      }
      a {
        display: block;
        color: var(--invisi-button-text-color);
        background-color: var(--invisi-button-color);
        transition: background 0.3s linear, border 0.1s linear,
          border-radius 0.1s linear;
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
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.link = "https://teuxdeux.com/signup";
    this.title = null;
    this.accentColor = "green";
    if (this.querySelector("a")) {
      this.link = this.querySelector("a").getAttribute("href");
      this.title = this.querySelector("a").innerText;
      this.innerHTML = null;
    }
  }

  render() {
    return html` <a href="${this.link}" role="button">
      <span><span id="title">${this.title}</span><slot></slot></span></a>
    `;
  }
}
