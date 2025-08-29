import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse, Person } from '../../shared/models/person.model';
import { PersonCardComponent } from '../../shared/components/person-card/person-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peopleResponse$!: Observable<PaginatedResponse<Person>>;
  public searchForm: FormGroup;
  public isLoading = false;
  public hasError = false;

  private emptyResponse: PaginatedResponse<Person> = {
    content: [],
    pageable: {},
    totalPages: 0,
    totalElements: 0,
    last: true,
    first: true,
    size: 0,
    number: 0,
    sort: {},
    numberOfElements: 0,
    empty: true
  };

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      nome: [''],
      idadeMinima: [null],
      idadeMaxima: [null],
      sexo: [''],
      status: ['DESAPARECIDO']
    });
  }

  ngOnInit(): void {
    this.onSearch();
  }

  onSearch(): void {
    this.isLoading = true;
    this.hasError = false;
    const filters = this.searchForm.value;

    this.peopleResponse$ = this.apiService.getPeople(0, 10, filters).pipe(
      finalize(() => this.isLoading = false),
      catchError(error => {
        console.error('Erro ao buscar pessoas:', error);
        this.hasError = true;
        return of(this.emptyResponse);
      })
    );
  }

  onClear(): void {
    this.searchForm.reset({
      nome: '',
      idadeMinima: null,
      idadeMaxima: null,
      sexo: '',
      status: 'DESAPARECIDO'
    });
    this.onSearch();
  }
}
