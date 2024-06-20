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
    { icon: 'assets/icons/star-fill.svg', label: 'navbar.dropdown.favourites' },
    { icon: 'assets/icons/people.svg', label: 'navbar.dropdown.sharedFiles' },
    { icon: 'assets/icons/status.svg', label: 'navbar.dropdown.status' },
  ];
}
