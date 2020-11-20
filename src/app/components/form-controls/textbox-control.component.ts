import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-textbox',
    template: `
        <mat-form-field
            appearance="outline"
            [formGroup]="group"
            class="form-element textbox"
        >
            <mat-label>{{label + ' *'}}</mat-label>
            <input
                matInput
                [formControlName]="key"
                [type]="inputType"
                [class]="key"
            >
            <span
                matSuffix
                *ngIf="suffix"
            >
                <strong>{{suffix}}</strong>
            </span>
        </mat-form-field>
    `,
    styles: ['.form-element {width: 100%}']
})
/**
 * Wrapper for Angular material Text input component
 */
export class FormTextboxComponent {
    @Input() label: string;
    @Input() key: string;
    @Input() group: FormGroup;
    @Input() inputType: string;
    @Input() suffix: string;
}
