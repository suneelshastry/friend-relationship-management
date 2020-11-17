import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-textbox',
    template: `
        <mat-form-field appearance="outline" [formGroup]="group">
            <mat-label>{{label + ' *'}}</mat-label>
            <input
                matInput
                [formControlName]="key"
                [type]="inputType"
            >
        </mat-form-field>
    `
})
/**
 * Wrapper for Angular material Text input component
 */
export class FormTextboxComponent {
    @Input() label: string;
    @Input() key: string;
    @Input() group: FormGroup;
    @Input() inputType: string;
}
