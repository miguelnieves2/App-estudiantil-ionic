import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainEstudiantePage } from './main-estudiante.page';

describe('MainEstudiantePage', () => {
  let component: MainEstudiantePage;
  let fixture: ComponentFixture<MainEstudiantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainEstudiantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainEstudiantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
