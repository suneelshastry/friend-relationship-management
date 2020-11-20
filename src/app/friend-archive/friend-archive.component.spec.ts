import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendArchiveComponent } from './friend-archive.component';

describe('FriendArchiveComponent', () => {
  let component: FriendArchiveComponent;
  let fixture: ComponentFixture<FriendArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
