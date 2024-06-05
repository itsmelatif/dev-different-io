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
    { icon: 'assets/icons/share.svg', label: 'Share' },
    { icon: 'assets/icons/edit.svg', label: 'Rename' },
    { icon: 'assets/icons/remove.svg', label: 'Delete' },
  ];
}
