import { Component, Input } from '@angular/core';
import { IDropdown } from '../../../types/dropdown';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.sass',
})
export class DropdownComponent {
  @Input() icon = '';
  @Input() label = '';
  @Input() list: IDropdown[] = [];
  @Input() hoverStyle = false;
  @Input() opacity = '';

  activeDrodown = false;

  trackList(index: number, course: IDropdown) {
    return course;
  }

  getHoverStyle(): string {
    let defaultClass = 'hover:bg-[#181822] hover:border hover:border-[#3D3D42]';
    if (this.opacity.length > 0) {
      defaultClass += ` hover:${this.opacity}`;
    } else {
      defaultClass += ` hover:bg-opacity-40`;
    }

    return defaultClass;
  }
}
