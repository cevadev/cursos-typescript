const fecha = new Date();
console.info(fecha);

/**
 * Los atributos de una clases obligatoriamente debe inicializarse
 */
class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
}

// creando un objeto de tipo MyDate
const myDate = new MyDate(2024, 2, 10);
console.info(`La nueva fecha creada es ${myDate}`);
