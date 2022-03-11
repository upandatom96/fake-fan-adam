import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TunnelGoonDetailsComponent } from './tunnel-goon-details.component';

describe('TunnelGoonDetailsComponent', () => {
  let component: TunnelGoonDetailsComponent;
  let fixture: ComponentFixture<TunnelGoonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunnelGoonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelGoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
