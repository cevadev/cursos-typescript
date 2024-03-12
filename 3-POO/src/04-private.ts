/**
 * Con private ninguna instancia de una clase puede acceder puede acceder directamente a las propiedades de la clase,
 * tampoco a los metodos private.
 */
export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
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

const myDate = new MyDate(1999, 7, 9);
console.info(myDate.printFormat());
myDate.add(3, 'days');
console.info(myDate.printFormat());
