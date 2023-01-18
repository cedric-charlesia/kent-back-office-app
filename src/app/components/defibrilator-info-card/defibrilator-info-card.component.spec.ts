import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefibrilatorInfoCardComponent } from './defibrilator-info-card.component';

describe('DefibrilatorInfoCardComponent', () => {
  let component: DefibrilatorInfoCardComponent;
  let fixture: ComponentFixture<DefibrilatorInfoCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DefibrilatorInfoCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefibrilatorInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
