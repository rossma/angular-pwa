import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineFormsComponent } from './offline-forms.component';

describe('OfflineFormsComponent', () => {
  let component: OfflineFormsComponent;
  let fixture: ComponentFixture<OfflineFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
