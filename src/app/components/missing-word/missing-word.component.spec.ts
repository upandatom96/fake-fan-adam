import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MissingWordComponent} from './missing-word.component';

describe('MissingWordComponent', () => {
  let component: MissingWordComponent;
  let fixture: ComponentFixture<MissingWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissingWordComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
