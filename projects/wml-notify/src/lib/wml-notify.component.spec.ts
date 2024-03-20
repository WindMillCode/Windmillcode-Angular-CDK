import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmlNotifyComponent } from './wml-notify.component';

describe('WmlNotifyComponent', () => {
  let component: WmlNotifyComponent;
  let fixture: ComponentFixture<WmlNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmlNotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WmlNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
