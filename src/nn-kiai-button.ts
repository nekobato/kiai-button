import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('nn-kiai-button')
export class NNKiaiButton extends LitElement {
  @property({ type: Number }) duration = 200;
  @property({ type: Number }) radius = 50;
  @property({ type: Number }) strokeWidth = 8;
  @property({ type: String }) color = '#000000';
  @state() isPressing: boolean = false;
  @state() value: number = 0;

  private increaseInterval: NodeJS.Timeout | null = null;

  private onPressing() {
    const incremental = 100 / this.duration;
    this.isPressing = true;
    if (this.increaseInterval) return;
    this.increaseInterval = setInterval(() => {
      if (this.isPressing) {
        if (this.value < 100) {
          this.value += incremental;
        }
      } else {
        this.value -= incremental * 2;
      }
      if (this.value <= 0) {
        this.value = 0;
        clearInterval(this.increaseInterval as NodeJS.Timeout);
        this.increaseInterval = null;
      }
      this.requestUpdate();
    }, 100 / 20); // 20fps
  }

  private onStopPress() {
    this.isPressing = false;
  }

  private onClick() {
    this.dispatchEvent(new CustomEvent('click'));
  }

  private onPressingByKey(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      this.onPressing();
    }
  }

  private onStopPressByKey(e: KeyboardEvent) {
    if (e.code === 'Space' || e.code === 'Enter') {
      this.onStopPress();
    }
  }

  render() {
    const { color, radius: outerR, strokeWidth, value } = this;

    const size = outerR * 2;
    const r = outerR - strokeWidth / 2;
    const circumference = 2 * Math.PI * r;
    const dashoffset = circumference * ((100 - value) / 100);

    return html`
      <style>
        :host {
          border-radius: 50%;
        }
        .container {
          position: relative;
          width: ${size}px;
          height: ${size}px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        button {
          width: 100%;
          height: 100%;
          border: none;
          background: none;
          border-radius: 50%;
          padding: 0;
          transition: transform 0.2s;
        }
        button.pressing slot {
          background-color: #444444;
        }
        button.activated {
          transform: scale(1.1);
        }
        button.activated slot {
          color: #000000;
          background-color: #dddddd;
        }
        svg {
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(-90deg);
          cursor: pointer;
          filter: drop-shadow(0 0 2px rgba(200, 200, 200, 0.8));
        }
        slot {
          display: inline-flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          background-color: #000000;
          border-radius: 50%;
          color: #efefef;
          font-weight: bold;
          font-size: 16px;
        }
      </style>
      <div id="container" class="container">
        <button
          @mousedown=${this.onPressing}
          @keydown=${this.onPressingByKey}
          @mouseup=${this.onStopPress}
          @mouseleave=${this.onStopPress}
          @keyup=${this.onStopPressByKey}
          @click=${this.onClick}
          class=${classMap({
            activated: this.value >= 100,
            pressing: this.isPressing,
          })}
        >
          <slot></slot>
          <svg width=${size} height=${size} viewBox=${`0 0 ${size} ${size}`}>
            <circle
              r=${r}
              cx=${outerR}
              cy=${outerR}
              stroke=${color}
              fill="transparent"
              stroke-width=${strokeWidth}
              stroke-dasharray=${circumference}
              stroke-dashoffset=${dashoffset}
            />
          </svg>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nn-kiai-button': NNKiaiButton;
  }
}
