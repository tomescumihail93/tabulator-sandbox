import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabulatorConfirmationComponent } from './tabulator-confirmation.component';

describe('TabulatorConfirmationComponent', () => {
  let component: TabulatorConfirmationComponent;
  let fixture: ComponentFixture<TabulatorConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabulatorConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabulatorConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
