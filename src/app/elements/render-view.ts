export abstract class RenderView {
  protected render(): void {
  }

  constructor(
    protected parentNode: HTMLElement,
    protected name: string,
    protected size: 'big' | 'medium' | 'small'
  ) {
    this.name = (this.name) ? this.constructor.name + ':' + this.name : this.constructor.name;
    this.render();
  }
}
