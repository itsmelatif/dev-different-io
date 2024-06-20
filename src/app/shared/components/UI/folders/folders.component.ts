import { Component, Input } from '@angular/core';
import { DropdownComponent } from '../../commons/dropdown/dropdown.component';
import { IDropdown } from '../../../types/dropdown';
import { IFolder } from '../../../types/folder';
import { CardComponent } from '../../commons/card/card.component';
import { TitleHeaderComponent } from '../../commons/title-header/title-header.component';

@Component({
  selector: 'app-folders',
  standalone: true,
  imports: [DropdownComponent, CardComponent, TitleHeaderComponent],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.sass',
})
export class FoldersComponent {
  @Input() title = '';
  listDropdown: IDropdown[] = [
    { icon: 'assets/icons/share.svg', label: 'folders.dropdown.share' },
    { icon: 'assets/icons/edit.svg', label: 'folders.dropdown.rename' },
    { icon: 'assets/icons/remove.svg', label: 'folders.dropdown.delete' },
  ];

  listFolders: IFolder[] = [
    {
      icon: 'assets/icons/star.svg',
      name: 'Spider Man 2025',
      description: 'Shared folder',
      size: '11.2 TB',
    },
    {
      icon: 'assets/icons/star.svg',
      name: 'AMAZON SS23',
      description: 'Shared folder',
      size: '60 GB',
    },
    {
      icon: 'assets/icons/folder.svg',
      name: 'Bulk Uploads',
      description: 'Shared folder',
      size: '29 GB',
    },
    {
      icon: 'assets/icons/folder.svg',
      name: 'KAKE',
      description: 'Shared folder',
      size: '12.2 GB',
    },
    {
      icon: 'assets/icons/folder.svg',
      name: 'TVC Raw Uploads',
      description: 'Shared folder',
      size: '1.2 TB',
    },
  ];

  trackList(index: number, course: IFolder) {
    return course;
  }
}
