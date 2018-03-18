import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniraknareComponent } from './miniraknare.component';

describe('MiniraknareComponent', () => {
  let component: MiniraknareComponent;
  let fixture: ComponentFixture<MiniraknareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniraknareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniraknareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
