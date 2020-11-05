import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { People } from '../People';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private path = 'http://localhost:8080/path/person';

  constructor(private http: HttpClient) { }

  getAllPeople(): Observable<People[]>{
    return this.http.get<People[]>(this.path)
  }

  getPerson(id: number): Observable<any>{
    const url = `${this.path}/${id}`;
    return this.http.get<People[]>(url)
    .pipe(
      catchError(this.handleError<People[]>('getPerson', []))
    );
  }

  createPerson(person: Object): Observable<Object> {
    return this.http.post(`${this.path}`, person);
  }

  updatePerson(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.path}/${id}`, value);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`, { responseType: 'text' });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    }
  }

  
}
