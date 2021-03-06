import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  FriendState,
  addFriend,
  getFriendsList,
  loadFriends,
} from '@friend-archive/state';
import { Person } from '@models';
import { FormConfigService } from './form-config.service';
import { FormComposeComponent, FormControlConfig } from '@components';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { sampleFriendFormData } from '@constants';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
  providers: [FormConfigService],
})
/**
 * This component abstracts the add-friend functionality.
 */
export class AddFriendComponent implements OnInit, OnDestroy {
  formControlConfig$: Observable<FormControlConfig[]>;
  @ViewChild(FormComposeComponent) form: FormComposeComponent;
  private stopSubscription = new Subject();

  constructor(
    private store: Store<FriendState>,
    private formConfigService: FormConfigService
  ) {}

  ngOnInit(): void {
    // TODO This can be a plain object
    this.formControlConfig$ = this.formConfigService.getFormConfig();

    // upon successful store update, reset the form.
    this.store
      .select(getFriendsList)
      .pipe(takeUntil(this.stopSubscription))
      .subscribe(() => {
        if (this.form && this.form.formGroup) {
          this.form.formGroup.reset();
        }
      });
  }

  addFriend(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      return;
    }

    // dispatch add-friend action
    this.store.dispatch(addFriend({ friend: formGroup.value as Person }));
  }

  loadSeedData(): void {
    this.store.dispatch(loadFriends({ friends: sampleFriendFormData }));
  }

  ngOnDestroy(): void {
    this.stopSubscription.next();
  }
}
