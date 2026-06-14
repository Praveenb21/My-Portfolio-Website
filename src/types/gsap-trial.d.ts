declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: Element | string, vars?: Record<string, unknown>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: Record<string, unknown>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTop(value?: number): number | void;
    paused(value?: boolean): boolean | void;
    scrollTo(target: string | Element, smooth?: boolean, position?: string): void;
  }
}