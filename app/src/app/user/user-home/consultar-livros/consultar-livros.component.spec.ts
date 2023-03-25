import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarLivrosComponent } from './consultar-livros.component';

describe('ConsultarLivrosComponent', () => {
  let component: ConsultarLivrosComponent;
  let fixture: ComponentFixture<ConsultarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
