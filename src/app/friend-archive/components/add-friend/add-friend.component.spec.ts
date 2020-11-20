import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddFriendComponent } from './add-friend.component';
import { MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { addFriend, FriendState, getFriendsList } from '@friend-archive/state';
import { Person } from '@models';
import { FormConfigService } from './form-config.service';
import { of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormComposeComponent } from '@components';

describe('AddFriendComponent', () => {
  let component: AddFriendComponent;
  let fixture: ComponentFixture<AddFriendComponent>;
  let mockStore: MockStore;
  let mockFriendsListSelector: MemoizedSelector<FriendState, Person[]>;
  const formConfigService = {
    getFormConfig: () => of([]),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddFriendComponent,
      ],
      providers: [
        provideMockStore(),
        { provide: FormConfigService, useValue: formConfigService}
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFriendComponent);
    component = fixture.componentInstance;
    mockStore = TestBed.inject(MockStore);
    mockFriendsListSelector = mockStore.overrideSelector(
      getFriendsList,
      [
        {
          name: 'john',
          friends: [
            'jane'
          ],
          age: 29,
          weight: 80,
        }
      ]
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch add-friend action upon valid friend input', () => {
    spyOn(mockStore, 'dispatch');
    component.addFriend(new FormGroup({}));

    expect(mockStore.dispatch)
      .toHaveBeenCalledWith(
        addFriend( {friend: {}})
      );
  });
});
