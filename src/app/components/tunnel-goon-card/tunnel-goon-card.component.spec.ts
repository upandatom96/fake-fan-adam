import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TunnelGoonCardComponent} from './tunnel-goon-card.component';

describe('TunnelGoonCardComponent', () => {
  let component: TunnelGoonCardComponent;
  let fixture: ComponentFixture<TunnelGoonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TunnelGoonCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelGoonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
