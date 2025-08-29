import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Person } from '../../shared/models/person.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  public person$!: Observable<Person | null>;
  public isLoading = true;
  public hasError = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.person$ = this.apiService.getPersonById(+id).pipe(
        catchError(error => {
          console.error('Erro ao buscar detalhes da pessoa:', error);
          this.hasError = true;
          return of(null);
        })
      );
    }
  }

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = 'https://i.imgur.com/3c3bO9k.png';
  }
}
