import { Name } from './name';
import { Address } from './address';
export class Person {
  constructor(public id: number, public pname: Name, public dob: Date, public address: Address) { }
}
