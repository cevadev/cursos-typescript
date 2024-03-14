/**
 * La palabra reservada abstract nos permite restringir o evitar que se creen instancias de dicha clase
 */
import { Animal, Dog } from './09-protected';

const animal1 = new Animal('Doggie');

const animal2 = new Dog('El ChAtO', 'Carlos V.');
animal2.showOwner();
animal2.ladrar(2);
