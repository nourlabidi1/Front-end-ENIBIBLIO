import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequeLivreComponent } from './bibliotheque-livre.component';

describe('BibliothequeLivreComponent', () => {
  let component: BibliothequeLivreComponent;
  let fixture: ComponentFixture<BibliothequeLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliothequeLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliothequeLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
