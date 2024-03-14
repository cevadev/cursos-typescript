/**
 * Este patron de disenio permite que solos se cree una instancia de una clase durante la ejecucion de la aplicacion
 */
export class MyService {
  // almacenamos la instancia que se va a entregar, la instancia inicia en null
  static instance: MyService | null = null;
  // private constructor -> indica que solo dentro de la clase se puede llamar al constructor
  private constructor(private name: string) {}
  getName() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.info('Deberia entrar solo una vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const service1 = MyService.create('service 1');
const service2 = MyService.create('service 2');
const service3 = MyService.create('service 3');
