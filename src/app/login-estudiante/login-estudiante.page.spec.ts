import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEstudiantePage } from './login-estudiante.page';

describe('LoginEstudiantePage', () => {
  let component: LoginEstudiantePage;
  let fixture: ComponentFixture<LoginEstudiantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEstudiantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
