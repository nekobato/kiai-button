import { LitElement } from 'lit';
export declare class NNKiaiButton extends LitElement {
    duration: number;
    radius: number;
    strokeWidth: number;
    color: string;
    isPressing: boolean;
    value: number;
    private increaseInterval;
    private onPressing;
    private onStopPress;
    private onClick;
    private onPressingByKey;
    private onStopPressByKey;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'nn-kiai-button': NNKiaiButton;
    }
}
//# sourceMappingURL=nn-kiai-button.d.ts.map