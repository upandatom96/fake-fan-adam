import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsBookClubComponent } from './kids-book-club.component';

describe('KidsBookClubComponent', () => {
  let component: KidsBookClubComponent;
  let fixture: ComponentFixture<KidsBookClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsBookClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsBookClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
