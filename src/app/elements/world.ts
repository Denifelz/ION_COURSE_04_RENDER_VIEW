import { RenderView } from './render-view';
import { Tree } from './tree';
import { House } from './house';
import { Vehicle } from './vehicle';
import { Bushes } from './bushes';
import { Animal } from './animal';
import { Bird } from './bird';

const sizes = {
  big: {width: '1600px', height: '900px'},
  medium: {width: '200px', height: '150px'},
  small: {width: '100px', height: '100px'}
}

export class World extends RenderView {
  protected override render() {
    const node = document.createElement('div');
    node.id = this.parentNode.id + this.name;
    node.style.position = 'absolute';
    node.style.top = '50%';
    node.style.left = '50%';
    node.style.transform = 'translate(-50%, -50%)';
    node.style.width = sizes[this.size].width;
    node.style.height = sizes[this.size].height;
    node.style.border = '1px solid';
    node.style.display = 'table';
    this.parentNode.appendChild(node);
  }

  constructor(
    parentNode: HTMLElement,
    name: string,
    size: 'big' | 'medium' | 'small'
  ) {
    super(parentNode, name, size);
    const node = <HTMLElement>this.parentNode.lastElementChild;
    const oak = new Tree(node, 'Oak', 'medium');
    const willow = new Tree(node, 'Willow', 'small');
    const fir = new Tree(node, 'Fir', 'small');
    const pine = new Tree(node, 'Pine', 'small');
    const house = new House(node, '', 'small');
    const mazda = new Vehicle(node, 'Mazda', 'small');
    const toyota = new Vehicle(node, 'Toyota', 'small');
    const audi = new Vehicle(node, 'Audi', 'small');
    const bushes = new Bushes(node, '', 'small');
    const rabbit = new Animal(node, 'Rabbit', 'medium');
    const wolf = new Animal(node, 'Wolf', 'small');
    const lion = new Animal(node, 'Lion', 'small');
    const camel = new Animal(node, 'Camel', 'small');
    const vulture = new Bird(node, 'Vulture', 'small');
    const hawk = new Bird(node, 'Hawk', 'small');
    const ostrich = new Bird(node, 'Ostrich', 'medium');
    const penguin = new Bird(node, 'Penguin', 'medium');
  }
}
