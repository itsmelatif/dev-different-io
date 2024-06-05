import { Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { IDropdown } from '../../../types/dropdown';
import { IFile } from '../../../types/file';
import { NgClass, NgIf } from '@angular/common';
import { TrimTitlePipe } from '../../../pipes/trim-title.pipe';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [CardComponent, DropdownComponent, NgIf, NgClass, TrimTitlePipe],
  templateUrl: './file.component.html',
  styleUrl: './file.component.sass',
})
export class FileComponent {
  @Input() file: IFile = {} as IFile;
  listDropdown: IDropdown[] = [
    { icon: 'assets/icons/share.svg', label: 'Share' },
    { icon: 'assets/icons/edit.svg', label: 'Rename' },
    { icon: 'assets/icons/remove.svg', label: 'Delete' },
  ];

  getLoaderProcess(): string {
    if (this.file.process) {
      return `bg-[#6611F5] h-[5px] w-[60%]`;
    }

    return 'hidden';
  }
}
