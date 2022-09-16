var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
let NNKiaiButton = class NNKiaiButton extends LitElement {
    duration = 200;
    radius = 50;
    strokeWidth = 8;
    color = '#000000';
    isPressing = false;
    value = 0;
    increaseInterval = null;
    onPressing() {
        const incremental = 100 / this.duration;
        this.isPressing = true;
        if (this.increaseInterval)
            return;
        this.increaseInterval = setInterval(() => {
            if (this.isPressing) {
                if (this.value < 100) {
                    this.value += incremental;
                }
            }
            else {
                this.value -= incremental * 2;
            }
            if (this.value <= 0) {
                this.value = 0;
                clearInterval(this.increaseInterval);
                this.increaseInterval = null;
            }
            this.requestUpdate();
        }, 100 / 20); // 20fps
    }
    onStopPress() {
        this.isPressing = false;
    }
    onClick() {
        this.dispatchEvent(new CustomEvent('click'));
    }
    onPressingByKey(e) {
        if (e.code === 'Space' || e.code === 'Enter') {
            this.onPressing();
        }
    }
    onStopPressByKey(e) {
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
        return html `
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
};
__decorate([
    property({ type: Number })
], NNKiaiButton.prototype, "duration", void 0);
__decorate([
    property({ type: Number })
], NNKiaiButton.prototype, "radius", void 0);
__decorate([
    property({ type: Number })
], NNKiaiButton.prototype, "strokeWidth", void 0);
__decorate([
    property({ type: String })
], NNKiaiButton.prototype, "color", void 0);
__decorate([
    state()
], NNKiaiButton.prototype, "isPressing", void 0);
__decorate([
    state()
], NNKiaiButton.prototype, "value", void 0);
NNKiaiButton = __decorate([
    customElement('nn-kiai-button')
], NNKiaiButton);
export { NNKiaiButton };
//# sourceMappingURL=nn-kiai-button.js.map