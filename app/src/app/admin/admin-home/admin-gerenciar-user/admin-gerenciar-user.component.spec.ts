import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGerenciarUserComponent } from './admin-gerenciar-user.component';

describe('AdminGerenciarUserComponent', () => {
  let component: AdminGerenciarUserComponent;
  let fixture: ComponentFixture<AdminGerenciarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGerenciarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGerenciarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
