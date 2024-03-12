/**
 * Por defecto en typescript las propiedades y metodos de una clase son public
 */
export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  // agregamos metodos a la clase
  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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
