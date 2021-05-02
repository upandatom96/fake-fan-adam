import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PhasmaphobiaHelperComponent} from './phasmaphobia-helper.component';
import {CardComponent} from "../simple/card/card.component";

describe('PhasmaphobiaHelperComponent', () => {
  let component: PhasmaphobiaHelperComponent;
  let fixture: ComponentFixture<PhasmaphobiaHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhasmaphobiaHelperComponent, CardComponent,]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhasmaphobiaHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
