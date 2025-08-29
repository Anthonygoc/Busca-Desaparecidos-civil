import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PaginatedResponse, Person } from '../../shared/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // URL base da API ajustada para o /v1
  private readonly apiUrl = 'https://abitus-api.geia.vip/v1/pessoas';

  constructor(private http: HttpClient) { }

  /**
   * Busca uma lista paginada de pessoas usando o endpoint público de filtro.
   * @param page O número da página (começa em 0).
   * @param size O número de itens por página.
   * @param filters Filtros de busca opcionais.
   * @returns Um Observable com a resposta paginada.
   */
  public getPeople(page: number = 0, size: number = 10, filters: any = {}): Observable<PaginatedResponse<Person>> {
    // Constrói a URL completa para o endpoint de filtro
    const url = `${this.apiUrl}/aberto/filtro`;

    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    // Adiciona os filtros aos parâmetros, se eles existirem e não forem nulos/vazios
    Object.keys(filters).forEach(key => {
      const value = filters[key];
      if (value !== null && value !== '') {
        params = params.set(key, value);
      }
    });

    return this.http.get<PaginatedResponse<Person>>(url, { params });
  }

  /**
   * Busca os detalhes de uma única pessoa pelo ID.
   * @param id O ID da pessoa.
   * @returns Um Observable com os dados da pessoa.
   */
  public getPersonById(id: number): Observable<Person> {
    // Note que este endpoint pode precisar ser ajustado se também for um endpoint "aberto"
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Person>(url);
  }
}
