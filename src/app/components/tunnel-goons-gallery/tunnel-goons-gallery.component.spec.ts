import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TunnelGoonsGalleryComponent} from './tunnel-goons-gallery.component';

describe('TunnelGoonsGalleryComponent', () => {
  let component: TunnelGoonsGalleryComponent;
  let fixture: ComponentFixture<TunnelGoonsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TunnelGoonsGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TunnelGoonsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
