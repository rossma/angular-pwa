import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineFormDetailComponent } from './offline-form-detail.component';

describe('OfflineFormDetailComponent', () => {
  let component: OfflineFormDetailComponent;
  let fixture: ComponentFixture<OfflineFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
