import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonserviceComponent } from './buttonservice.component';

describe('ButtonserviceComponent', () => {
  let component: ButtonserviceComponent;
  let fixture: ComponentFixture<ButtonserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
