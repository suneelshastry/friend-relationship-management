import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { FriendState, addFriend } from '@friend-archive/state';
import { Person } from '@models';
import { FormConfigService } from './form-config.service';
import { FormControlConfig } from '@components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.scss'],
  providers: [
    FormConfigService
  ]
})
export class AddFriendComponent implements OnInit {
  formControlConfig$: Observable<FormControlConfig[]>;
  constructor(
    private store: Store<FriendState>,
    private formConfigService: FormConfigService,
  ) { }

  ngOnInit(): void {
    // TODO This can be a plain object
    this.formControlConfig$ =
      this.formConfigService.getFormConfig();
  }

  addPerson(formGroup: FormGroup): void {
    if (formGroup.invalid) {
      formGroup.markAllAsTouched();
      return;
    }

    this.store.dispatch(
      addFriend(
        {friend: formGroup.value as Person}
      )
    );
    formGroup.reset();
  }
}
