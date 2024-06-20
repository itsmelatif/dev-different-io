import { NgClass, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass',
})
export class CardComponent implements OnChanges {
  @Input() addClass = '';
  @Input() footer = false;
  @Input() imageUrl = '';
  @Input() loader = false;
  @Input() percentage = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percentage'].currentValue) {
      this.percentage = changes['percentage'].currentValue;
    }
  }

  getPercentage(): string {
    return `${this.percentage}%`;
  }
}
