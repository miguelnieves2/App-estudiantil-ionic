import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainAdminPage } from './main-admin.page';

describe('MainAdminPage', () => {
  let component: MainAdminPage;
  let fixture: ComponentFixture<MainAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
