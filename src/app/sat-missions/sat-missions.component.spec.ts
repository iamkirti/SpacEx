import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatMissionsComponent } from './sat-missions.component';

describe('SatMissionsComponent', () => {
  let component: SatMissionsComponent;
  let fixture: ComponentFixture<SatMissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatMissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
