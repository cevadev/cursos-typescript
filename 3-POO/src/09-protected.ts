/**
 *
 */
export class Animal {
  // al hacer protected la propiedad name, hacemos disponible el atributo name solo a las clases que heredan de Animal.
  constructor(protected name: string) {}
  // al hacer un metodo procted dicho metodo solo puede ser invocado por las clases que heredan de Animal
  // cuando un metodo no tiene un modificador de acceso por defecto es public
  protected move() {
    console.info('Im moving');
  }

  protected greeting() {
    return `I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, private owner: string) {
    super(name);
  }

  move() {
    console.info(`Soy ${this.name}, me estoy moviendo`);
  }

  ladrar(times: number) {
    for (let i = 0; i < times; i++) {
      console.info(`roof`);
    }
  }
  showOwner() {
    console.info(`${this.greeting()}, Mi dueño es ${this.owner}`);
  }
}

const chato = new Dog('Chato', 'C.V.');
chato.showOwner();
chato.move();
chato.ladrar(2);
