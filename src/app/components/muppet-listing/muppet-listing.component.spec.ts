import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuppetListingComponent } from './muppet-listing.component';

describe('MuppetListingComponent', () => {
  let component: MuppetListingComponent;
  let fixture: ComponentFixture<MuppetListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuppetListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuppetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
