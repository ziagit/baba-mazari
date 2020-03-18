import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefrenceComponent } from './refrence.component';

describe('Tab1Page', () => {
  let component: RefrenceComponent;
  let fixture: ComponentFixture<RefrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RefrenceComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
