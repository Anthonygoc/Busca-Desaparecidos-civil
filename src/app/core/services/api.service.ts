import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaginatedResponse, Person, Statistics} from '../../shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://abitus-api.geia.vip/v1/pessoas';

  constructor(private http: HttpClient) { }


  public getPeople(page: number = 0, size: number = 10, filters: any = {}): Observable<PaginatedResponse<Person>> {
    const url = `${this.apiUrl}/aberto/filtro`;

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value !== null && value !== '') {
        params = params.set(key, value);
      }
    });

    return this.http.get<PaginatedResponse<Person>>(url, { params });
  }


  public getPersonById(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }

  public getStatistics(): Observable<Statistics> {
    const url = `${this.apiUrl}/aberto/estatistico`;
    return this.http.get<Statistics>(url);
  }
}
