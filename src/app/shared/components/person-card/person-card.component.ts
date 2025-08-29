import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {
  @Input() person!: Person;
  public status: 'LOCALIZADO' | 'DESAPARECIDO' = 'DESAPARECIDO';

  private placeholderUrl = 'https://i.imgur.com/3c3bO9k.png';

  ngOnInit(): void {
    this.status = this.person.vivo || this.person.ultimaOcorrencia?.dataLocalizacao ? 'LOCALIZADO' : 'DESAPARECIDO';
  }

  get imageUrl(): string {
    return this.person.urlFoto || this.placeholderUrl;
  }

  onImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    if (element.src !== this.placeholderUrl) {
      element.src = this.placeholderUrl;
    }
  }

  get location(): string {
    if (this.person.ultimaOcorrencia?.localDesaparecimentoConcat) {
      const parts = this.person.ultimaOcorrencia.localDesaparecimentoConcat.split(' - ');
      return parts[1] || 'Não informado';
    }
    return 'Não informado';
  }
}
