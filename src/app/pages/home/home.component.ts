import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse, Person, Statistics } from '../../shared/models/person.model';
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
export class HomeComponent implements OnInit, OnDestroy {

  public people: Person[] = [];
  public statistics$!: Observable<Statistics>;

  public response: PaginatedResponse<Person> | null = null;

  public currentPage = 0;
  public totalPages = 0;
  public isFirstPage = true;
  public isLastPage = false;

  public searchForm: FormGroup;
  public isLoading = false;
  public hasError = false;

  private peopleSubscription?: Subscription;

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
    this.loadStatistics();
    this.fetchPeople(0);
  }

  ngOnDestroy(): void {
    this.peopleSubscription?.unsubscribe();
  }

  fetchPeople(page: number): void {
    this.isLoading = true;
    this.hasError = false;
    const filters = this.searchForm.value;

    this.peopleSubscription?.unsubscribe();

    this.peopleSubscription = this.apiService.getPeople(page, 10, filters).subscribe({
      next: (response) => {
        this.response = response;
        this.people = response.content;
        this.currentPage = response.number;
        this.totalPages = response.totalPages;
        this.isFirstPage = response.first;
        this.isLastPage = response.last;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao buscar pessoas:', err);
        this.hasError = true;
        this.isLoading = false;
        this.people = [];
        this.response = null;
      }
    });
  }

  onSearch(): void {
    this.fetchPeople(0);
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

  nextPage(): void {
    if (!this.isLastPage) {
      this.fetchPeople(this.currentPage + 1);
    }
  }

  previousPage(): void {
    if (!this.isFirstPage) {
      this.fetchPeople(this.currentPage - 1);
    }
  }

  loadStatistics(): void {
    this.statistics$ = this.apiService.getStatistics().pipe(
      catchError(error => {
        console.error('Erro ao buscar estatísticas:', error);
        return of({ quantPessoasDesaparecidas: 0, quantPessoasEncontradas: 0 });
      })
    );
  }
}
