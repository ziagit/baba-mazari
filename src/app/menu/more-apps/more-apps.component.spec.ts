import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreAppsComponent } from './more-apps.component';

describe('Tab1Page', () => {
  let component: MoreAppsComponent;
  let fixture: ComponentFixture<MoreAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoreAppsComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
