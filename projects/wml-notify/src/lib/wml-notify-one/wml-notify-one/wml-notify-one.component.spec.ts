import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WMLNotifyOneComponent } from './wml-notify-one.component';

describe('WMLNotifyOneComponent', () => {
  let component: WMLNotifyOneComponent;
  let fixture: ComponentFixture<WMLNotifyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WMLNotifyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WMLNotifyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
