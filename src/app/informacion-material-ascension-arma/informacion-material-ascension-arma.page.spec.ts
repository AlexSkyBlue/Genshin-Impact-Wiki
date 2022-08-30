import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionMaterialAscensionArmaPage } from './informacion-material-ascension-arma.page';

describe('InformacionMaterialAscensionArmaPage', () => {
  let component: InformacionMaterialAscensionArmaPage;
  let fixture: ComponentFixture<InformacionMaterialAscensionArmaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionMaterialAscensionArmaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionMaterialAscensionArmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
