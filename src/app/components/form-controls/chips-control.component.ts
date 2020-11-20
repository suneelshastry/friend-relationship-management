import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
    selector: 'app-chips',
    template: `
        <mat-form-field [formGroup]="group"
            class="form-element chips">
            <mat-label>{{label + ' *'}}</mat-label>
            <mat-chip-list #chipList [formControl]="formControl">
                <mat-chip
                    *ngFor="let item of formControl.value"
                    [selectable]="true"
                    [removable]="true"
                    (removed)="remove(item)"
                >
                {{item}}
                    <mat-icon
                        matChipRemove
                        *ngIf="true"
                    >
                    cancel
                    </mat-icon>
                </mat-chip>
                <input
                    #formInput
                    [class]="key"
                    [formControl]="inputFormControl"
                    [matChipInputFor]="chipList"
                    [matAutocomplete]="auto"
                    (matChipInputTokenEnd)="add($event)"
                >
            </mat-chip-list>
            <mat-autocomplete
                #auto="matAutocomplete"
                (optionSelected)="selected($event)"
            >
                <mat-option
                    *ngFor="let suggestion of suggestions"
                    [value]="suggestion"
                >
                {{suggestion}}
                </mat-option>
            </mat-autocomplete>
        </mat-form-field>
    `,
    styles: ['.form-element {width: 100%}']
})
/**
 * Wrapper for Angular material chip component
 */
export class FormChipsComponent implements OnInit {
    @Input() key: string;
    @Input() suggestions: string[] = [];
    @Input() group: FormGroup;
    @Input() label: string;

    @ViewChild('formInput') formInput: ElementRef<HTMLInputElement>;
    inputFormControl = new FormControl();
    formControl: FormControl;

    ngOnInit(): void {
        this.formControl = this.group.get(this.key) as FormControl;
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;

        if ((value || '').trim()) {
            // TODO Remvoe this workaround in future
            if (this.formControl.value === null) {
                this.formControl.setValue([]);
                this.formControl.updateValueAndValidity();
            }
            this.formControl.value.push(value.trim());
            this.formControl.updateValueAndValidity();
        }

        if (input) {
          input.value = '';
        }

        this.inputFormControl.setValue(null);
      }

      remove(fruit: string): void {
        const index = this.formControl.value.indexOf(fruit);

        if (index >= 0) {
          this.formControl.value.splice(index, 1);
          this.formControl.updateValueAndValidity();
        }
      }

      selected(event: MatAutocompleteSelectedEvent): void {
        this.formControl.value.push(event.option.viewValue);
        this.formControl.updateValueAndValidity();
        this.formInput.nativeElement.value = '';
        this.inputFormControl.setValue(null);
      }
}
