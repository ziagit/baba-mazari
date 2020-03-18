import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShareAppComponent } from './share-app.component';

describe('Tab1Page', () => {
  let component: ShareAppComponent;
  let fixture: ComponentFixture<ShareAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShareAppComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShareAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
