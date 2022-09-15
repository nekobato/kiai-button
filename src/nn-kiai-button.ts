import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

@customElement('nn-kiai-button')
export class NNKiaiButton extends LitElement {
  @property({ type: Number }) duration = 200;
  @property({ type: String }) color = '#000000';

  render() {
    const currentDamage = 100 - (this.gauge / this.hp) * 100;
    return html`
      <style>
        .gauge-container {
          position: relative;
          cursor: pointer;
        }
        .gauge-container.dead .content {
          animation: 0.4s ease-out 0s 1 forwards dead;
        }
        .gauge {
          display: inline-flex;
          position: absolute;
          top: -6px;
          right: -50%;
          border: 2px solid #fff;
          border-width: 2px 3px;
          border-radius: 4px;
          background: rgba(0, 0, 0, 0.72);
          width: 100px;
          height: 12px;
          overflow: hidden;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.48);
          visibility: hidden;
        }
        .gauge.active {
          visibility: visible;
        }
        .current {
          width: 100%;
          height: 100%;
          background: #f93131;
          border-radius: 2px;
        }
        .sub {
          border-radius: 1px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
          transition: transform 0.6s ease-out;
        }
        @keyframes dead {
          0% {
            opacity: 1;
            filter: blur(0);
          }
          100% {
            opacity: 0;
            filter: blur(4px);
          }
        }
      </style>
      <div id="container" class="container">
        <slot></slot>
        <div class="pivot"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nn-kiai-button': NNKiaiButton;
  }
}
