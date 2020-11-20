import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendArchiveComponent } from './friend-archive.component';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FriendState, getFriendsList } from './state';
import { Person } from '../models/person';

describe('FriendArchiveComponent', () => {
  let component: FriendArchiveComponent;
  let fixture: ComponentFixture<FriendArchiveComponent>;
  let mockStore: MockStore;
  let mockFriendsListSelector: MemoizedSelector<FriendState, Person[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FriendArchiveComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendArchiveComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockFriendsListSelector = mockStore.overrideSelector(getFriendsList, [
      {
        name: 'john',
        friends: ['jane'],
        age: 29,
        weight: 80,
      },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
