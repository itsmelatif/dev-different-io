import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  private activeDropdownIndexSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(null);
  activeDropdownIndex$ = this.activeDropdownIndexSubject.asObservable();
  constructor() {}

  setActiveDropdown(id: string | null): void {
    this.activeDropdownIndexSubject.next(id);
  }
}
