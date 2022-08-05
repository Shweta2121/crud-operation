import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgListComponent } from './ng-list.component';

describe('NgListComponent', () => {
  let component: NgListComponent;
  let fixture: ComponentFixture<NgListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
