import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IDropdown } from '../../../types/dropdown';
import { NgClass, NgIf } from '@angular/common';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownService } from '../../../services/dropdown.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass, NgIf, ClickOutsideDirective, TranslateModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit, OnDestroy {
  @Input() id = '';
  @Input() icon = '';
  @Input() label = '';
  @Input() list: IDropdown[] = [];
  @Input() hoverStyle = false;
  @Input() opacity = '';
  protected _onDestroy = new Subject<void>();

  activeDropdown = false;

  constructor(private dropdownService: DropdownService) {}

  ngOnInit(): void {
    this.dropdownService.activeDropdownIndex$
      .pipe(takeUntil(this._onDestroy))
      .subscribe((res) => {
        this.activeDropdown = res === this.id;
      });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  trackList(index: number, course: IDropdown) {
    return course;
  }

  getHoverStyle(): string {
    let defaultClass =
      'hover:bg-purpleSecond hover:border hover:border-grayMain';
    if (this.opacity.length > 0) {
      defaultClass += ` hover:${this.opacity}`;
    } else {
      defaultClass += ` hover:bg-opacity-40`;
    }

    return defaultClass;
  }

  getActive(): string {
    return `bg-purpleSecond border border-grayMain rounded`;
  }

  getActiveStyle(): string {
    let defaultClass =
      'bg-purpleSecond border border-grayMain bg-opacity-40 rounded';
    return defaultClass;
  }

  toggle(id: string | null) {
    if (this.activeDropdown) {
      this.dropdownService.setActiveDropdown(null);
    } else {
      this.dropdownService.setActiveDropdown(this.id);
    }
  }

  closeDropdown(): void {
    this.activeDropdown = false;
    this.dropdownService.setActiveDropdown(null);
  }
}
