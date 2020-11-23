import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrudctsComponent } from './all-prudcts.component';

describe('AllPrudctsComponent', () => {
  let component: AllPrudctsComponent;
  let fixture: ComponentFixture<AllPrudctsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPrudctsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPrudctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
