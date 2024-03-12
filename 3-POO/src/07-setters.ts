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
    private _month: number = 7,
    private day: number = 20
  ) {}

  getDay() {
    return this.day;
  }

  // 2da forma de definir una getter. Para usar este tipo de getter tuvimos que modificar la propiedad month por _month
  get month() {
    return this._month;
  }

  // 3era forma: indicamos lo que podria ser una funcion pero la presentamos como una propiedad por medio del get
  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return true;
    return this.year % 4 === 0;
  }

  // setter
  set month(newMonth: number) {
    try {
      if (newMonth >= 1 && newMonth <= 12) {
        this._month = newMonth;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error('The month value not allowed');
    }
  }

  private addPadding(value: number): string {
    if (value <= 9) {
      return `0${value}`;
    }
    return `${value}`;
  }

  // agregamos metodos a la clase
  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);

    return `${day}/${month}/${this.year}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'months') {
      this._month += amount;
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
// aunque es un getter lo llamamos como si fuesen propiedades de la clase tanto month como isLeapYear
console.info(brithday.month);
console.info(brithday.isLeapYear);
brithday.month = 78;
