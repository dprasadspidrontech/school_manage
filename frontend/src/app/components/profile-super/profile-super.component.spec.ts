import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSuperComponent } from './profile-super.component';

describe('ProfileSuperComponent', () => {
  let component: ProfileSuperComponent;
  let fixture: ComponentFixture<ProfileSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
