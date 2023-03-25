import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCadastrarLivroComponent } from './admin-cadastrar-livro.component';

describe('AdminCadastrarLivroComponent', () => {
  let component: AdminCadastrarLivroComponent;
  let fixture: ComponentFixture<AdminCadastrarLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCadastrarLivroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCadastrarLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
