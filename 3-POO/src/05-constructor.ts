/**
 * Con private ninguna instancia de una clase puede acceder puede acceder directamente a las propiedades de la clase,
 * tampoco a los metodos private.
 */
export class MyDate {
  // forma abreviada para trabajar con propiedades dentro del constructor: definiendolas y asignando un valor a ellas.
  // esto se logra unicamente si le colocamos los modificadores de acceso explicitamente  a las propiedades
  constructor(
    // asignamos valores por defecto.
    private year: number = 1982,
    private month: number = 7,
    private day: number = 20
  ) {}

  private addPadding(value: number): string {
    if (value <= 9) {
      return `0${value}`;
    }
    return `${value}`;
  }

  // agregamos metodos a la clase
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate();
console.info(myDate.printFormat()); // imprime la fecha con los valores por defecto.

// asigamos solo la propiedad year
const brithday = new MyDate(2024);
console.info(brithday);
