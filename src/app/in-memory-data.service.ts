import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { People } from '../People';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  
  constructor() { }

  createDb(){
    const people = [
      {
          "email": "Gina@gmail1",
          "fname": "Gina1",
          "id": 1,
          "lname": "Chihwayi1"
      },
      {
          "email": "Prisca@pee",
          "fname": "Prisca",
          "id": 2,
          "lname": "Chihwayi"
      },
      {
          "email": "Test@test",
          "fname": "Test",
          "id": 3,
          "lname": "Test"
      },
      {
          "email": "Priscilla@gmail",
          "fname": "Priscilla",
          "id": 4,
          "lname": "Mutemachani"
      },
      {
          "email": "Tawanda@gmail",
          "fname": "Tawanda",
          "id": 5,
          "lname": "Mutemachani"
      }
  ];

  return {people};
  
  }
  genId(people : People[]) : number{
    return people.length > 0 ? Math.max(...people.map(person => person.id)) + 1 : 11;

  }
}
