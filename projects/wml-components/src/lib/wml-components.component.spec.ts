import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmlComponentsComponent } from './wml-components.component';

describe('WmlComponentsComponent', () => {
  let component: WmlComponentsComponent;
  let fixture: ComponentFixture<WmlComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmlComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WmlComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
