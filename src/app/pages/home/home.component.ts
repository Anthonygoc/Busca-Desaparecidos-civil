import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { ApiService } from '../../core/services/api.service';
import { PaginatedResponse, Person } from '../../shared/models/person.model';
import { PersonCardComponent } from '../../shared/components/person-card/person-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Essencial para o nosso formulário
    PersonCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public peopleResponse$!: Observable<PaginatedResponse<Person>>;
  public searchForm: FormGroup;
  public isLoading = false;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    // Inicializa o formulário de busca
    this.searchForm = this.fb.group({
      nome: [''],
      idadeMinima: [null],
      idadeMaxima: [null],
      sexo: [''],
      status: ['DESAPARECIDO'] // Começa com 'Desaparecido' selecionado
    });
  }

  ngOnInit(): void {
    // Carrega os dados iniciais ao iniciar a página
    this.onSearch();
  }

  onSearch(): void {
    this.isLoading = true;
    const filters = this.searchForm.value;
    // Por enquanto, apenas a busca paginada. Depois ligamos os filtros.
    this.peopleResponse$ = this.apiService.getPeople(0, 10);

    // Simulando o fim do loading (o 'async' pipe vai tratar isso melhor)
    this.peopleResponse$.subscribe(() => this.isLoading = false);
  }

  onClear(): void {
    this.searchForm.reset({
      status: 'DESAPARECIDO' // Volta ao estado inicial
    });
    this.onSearch();
  }
}
