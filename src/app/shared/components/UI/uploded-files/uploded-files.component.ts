import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FileComponent } from '../../commons/file/file.component';
import { IFile } from '../../../types/file';
import { FilesService } from '../../../services/files.service';
import { TitleHeaderComponent } from '../../commons/title-header/title-header.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-uploded-files',
  standalone: true,
  imports: [FileComponent, TitleHeaderComponent],
  providers: [FilesService],
  templateUrl: './uploded-files.component.html',
  styleUrl: './uploded-files.component.sass',
})
export class UplodedFilesComponent implements OnInit, OnDestroy {
  listFiles: IFile[] = [];
  @Input() title = '';
  protected _onDestroy = new Subject<void>();

  constructor(private file: FilesService) {}

  ngOnInit(): void {
    this.file
      .fetchData()
      .pipe(takeUntil(this._onDestroy))
      .subscribe((response) => {
        this.listFiles = response;
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  trackList(index: number, course: IFile) {
    return course;
  }
}
