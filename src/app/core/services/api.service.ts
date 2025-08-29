import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse, Person } from '../../shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL base da API
  private readonly apiUrl = 'https://abitus-api.geia.vip/pessoas';

  constructor(private http: HttpClient) { }

  /**
   * Busca uma lista paginada de pessoas.
   * @param page O número da página (começa em 0).
   * @param size O número de itens por página.
   * @param filters Filtros de busca opcionais.
   * @returns Um Observable com a resposta paginada.
   */
  public getPeople(page: number = 0, size: number = 10, filters: any = {}): Observable<PaginatedResponse<Person>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // Adiciona os filtros aos parâmetros, se eles existirem
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value) {
        params = params.set(key, value);
      }
    });

    return this.http.get<PaginatedResponse<Person>>(this.apiUrl, { params });
  }

  /**
   * Busca os detalhes de uma única pessoa pelo ID.
   * @param id O ID da pessoa.
   * @returns Um Observable com os dados da pessoa.
   */
  public getPersonById(id: number): Observable<Person> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }
}
