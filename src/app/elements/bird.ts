import { RenderView } from './render-view';

const sizes = {
  big: {width: '1600px', height: '900px'},
  medium: {width: '200px', height: '150px'},
  small: {width: '100px', height: '100px'}
}

export class Bird extends RenderView {
  protected override render() {
    const node = document.createElement('div');
    node.id = this.parentNode.id + this.name;
    node.innerHTML = this.name;
    node.style.width = sizes[this.size].width;
    node.style.height = sizes[this.size].height;
    node.style.boxSizing = 'border-box';
    node.style.border = '1px solid';
    node.style.float = 'left';
    node.style.clear = 'right';
    node.style.textAlign = 'center';
    node.style.verticalAlign = 'middle';
    this.parentNode.appendChild(node);
  }
}
