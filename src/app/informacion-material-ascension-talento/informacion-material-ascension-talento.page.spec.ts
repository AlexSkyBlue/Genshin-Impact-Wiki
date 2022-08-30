import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionMaterialAscensionTalentoPage } from './informacion-material-ascension-talento.page';

describe('InformacionMaterialAscensionTalentoPage', () => {
  let component: InformacionMaterialAscensionTalentoPage;
  let fixture: ComponentFixture<InformacionMaterialAscensionTalentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionMaterialAscensionTalentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionMaterialAscensionTalentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
