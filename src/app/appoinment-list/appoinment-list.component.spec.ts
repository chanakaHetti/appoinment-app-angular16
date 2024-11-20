import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentListComponent } from './appoinment-list.component';

describe('AppoinmentListComponent', () => {
  let component: AppoinmentListComponent;
  let fixture: ComponentFixture<AppoinmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppoinmentListComponent]
    });
    fixture = TestBed.createComponent(AppoinmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
