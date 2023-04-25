import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireBibComponent } from './formulaire-bib.component';

describe('FormulaireBibComponent', () => {
  let component: FormulaireBibComponent;
  let fixture: ComponentFixture<FormulaireBibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireBibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireBibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
