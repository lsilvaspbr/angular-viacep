import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCepComponent } from './view-cep.component';

describe('ViewCepComponent', () => {
  let component: ViewCepComponent;
  let fixture: ComponentFixture<ViewCepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
