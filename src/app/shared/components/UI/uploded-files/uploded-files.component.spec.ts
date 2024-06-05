import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodedFilesComponent } from './uploded-files.component';

describe('UplodedFilesComponent', () => {
  let component: UplodedFilesComponent;
  let fixture: ComponentFixture<UplodedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UplodedFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UplodedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
