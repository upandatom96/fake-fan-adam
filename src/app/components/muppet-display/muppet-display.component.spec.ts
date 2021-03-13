import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuppetDisplayComponent } from './muppet-display.component';

describe('MuppetDisplayComponent', () => {
  let component: MuppetDisplayComponent;
  let fixture: ComponentFixture<MuppetDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuppetDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
