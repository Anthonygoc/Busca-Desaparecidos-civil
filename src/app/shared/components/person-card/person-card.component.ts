import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent {
  // @Input() permite que este componente receba o objeto 'person' da Home
  @Input() person!: Person;

  onImageError(event: Event): void {
    const placeholder = 'https://via.placeholder.com/300x400.png?text=Foto+Indisponível';
    (event.target as HTMLImageElement).src = placeholder;
  }
}
