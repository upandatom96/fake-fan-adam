import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuppetFormComponent } from './muppet-form.component';

describe('MuppetFormComponent', () => {
  let component: MuppetFormComponent;
  let fixture: ComponentFixture<MuppetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuppetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
