import { html, css, LitElement } from 'lit';

export class InvisiButton extends LitElement {
  static get styles() {
    return css`
    :host {
      display inline-block;
      --invisi-button-color: var(
        --simple-colors-default-theme-accent-1,
        white
        );
        --invisi-button-outline: var(
          --simple-colors-default-theme-accent-12,
          black
        );
        --invisi-button-bg-color-is-user-selected: var(
          --simple-colors-default-theme-accent-10,
          transparent
        );
        --invisi-button-bg-color: var(
          --simple-colors-default-theme-accent-7,
          black
        );
        margin: 60px 0 0;
      }
      :hover{
        background-color: transparent;
        color: black;
        border: 2px solid var(--invisi-button-outline); 
      }
      :focus{
        background-color: transparent;
        color: black;
        border: 2px solid var(--invisi-button-outline);
        outline: transparent;
      }
      :is-user-selected {
        background-color: var(--invisi-button-bg-color-is-user-selected);
        outline: 1px solid var(--invisi-button-outline);
      }
      a {
        display: block;
        color: var(--invisi-button-color);
        background-color: var(--invisi-button-bg-color);
        transition: background 0.5s linear, border 0.3s linear,
          border-radius 0.3s linear, box-shadow 0.3s linear;
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
      a :hover {
        border: transparent;
      }
  `;
  
}

  static get properties() {
    return {
      link: { type: String },
      editMode: { type: Boolean },
      title: { type: String }
    };
  }

  constructor() {
    super();
    this.link = ""https://teuxdeux.com/signup";
    this.title = null;
    this.accentColor = "black";
    if (this.querySelector("a")) {
      this.link = this.querySelector("a").getAttribute("href");
      this.title = this.querySelector("a").innerText;
      this.innerHTML = null;
    }
  }

  _clickCard(e) {
    if (this.editMode) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  render() {
    return html` <a href="${this.link}" role="button" part="simple-cta-link" @click="${this._clickCard}" ?contenteditable="${this.editMode}">
      <span><span id="title">${this.title}</span><slot></slot></span></a>
    `;
  }
}
