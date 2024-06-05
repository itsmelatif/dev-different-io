import { Component } from '@angular/core';
import { IDropdown } from '../../../types/dropdown';
import { DropdownComponent } from '../../commons/dropdown/dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass',
})
export class NavbarComponent {
  listDropdown: IDropdown[] = [
    { icon: 'assets/icons/star-fill.svg', label: 'Favourites' },
    { icon: 'assets/icons/people.svg', label: 'Shared Files' },
    { icon: 'assets/icons/status.svg', label: 'Status' },
  ];
}
