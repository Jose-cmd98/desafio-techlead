import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutLivroModalComponent } from './put-livro-modal.component';

describe('PutLivroModalComponent', () => {
  let component: PutLivroModalComponent;
  let fixture: ComponentFixture<PutLivroModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutLivroModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutLivroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
