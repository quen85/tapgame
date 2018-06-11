import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapgameComponent } from './tapgame.component';

describe('TapgameComponent', () => {
  let component: TapgameComponent;
  let fixture: ComponentFixture<TapgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
