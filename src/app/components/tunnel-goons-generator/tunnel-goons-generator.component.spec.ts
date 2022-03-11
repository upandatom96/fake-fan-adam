import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TunnelGoonsGeneratorComponent} from './tunnel-goons-generator.component';

describe('TunnelGoonsGeneratorComponent', () => {
  let component: TunnelGoonsGeneratorComponent;
  let fixture: ComponentFixture<TunnelGoonsGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TunnelGoonsGeneratorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelGoonsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
