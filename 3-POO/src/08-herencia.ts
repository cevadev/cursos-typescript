/**
 *
 */
export class Animal {
  constructor(private name: string) {}
  move() {
    console.info('Im moving');
  }

  greeting() {
    return `I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(name: string, private owner: string) {
    super(name);
  }

  ladrar(times: number) {
    for (let i = 0; i < times; i++) {
      console.info('roof');
    }
  }
  showOwner() {
    console.info(`Mi dueño es ${this.owner}`);
  }
}

const animal1 = new Animal('Firulais');
animal1.move();
console.info(animal1.greeting());

const chato = new Dog('Chato', 'C.V.');
console.info(chato.greeting());
chato.ladrar(2);
chato.showOwner();
