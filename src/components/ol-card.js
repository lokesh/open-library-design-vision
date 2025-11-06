import { LitElement, css, html } from 'lit';

export class OlCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .ol-card {
      background-color: var(--card-surface);
      color: var(--card-on-surface);
      border: var(--card-border-width) solid var(--card-outline);
      border-radius: var(--radius-card);
      padding: var(--card-padding);
      transition: box-shadow 0.2s ease;
    }
  `;

  render() {
    return html`
      <div class="ol-card">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('ol-card', OlCard);

