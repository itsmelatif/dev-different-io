import { Component, Input, OnInit } from '@angular/core';
import { FileComponent } from '../../commons/file/file.component';
import { IFile } from '../../../types/file';
import { FilesService } from '../../../services/files.service';

@Component({
  selector: 'app-uploded-files',
  standalone: true,
  imports: [FileComponent],
  providers: [FilesService],
  templateUrl: './uploded-files.component.html',
  styleUrl: './uploded-files.component.sass',
})
export class UplodedFilesComponent implements OnInit {
  listFiles: IFile[] = [];
  @Input() title = '';

  constructor(private file: FilesService) {}

  ngOnInit(): void {
    this.file.fetchData().subscribe((response) => {
      this.listFiles = response;
    });
  }

  trackList(index: number, course: IFile) {
    return course;
  }
}
