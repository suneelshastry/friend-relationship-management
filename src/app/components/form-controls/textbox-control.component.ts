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
            <mat-label>
                {{required ? label + ' *' : label}}
            </mat-label>
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
    /**
     * unique name for the component in a form-group.
     */
    @Input() key: string;

    /**
     * Label for the control
     */
    @Input() label: string;

    /**
     * Formgroup instance under which the control should be placed.
     */
    @Input() group: FormGroup;

    /**
     * input type value for the input element
     */
    @Input() inputType: string;

    /**
     * suffix to be added to the textbox
     */
    // TODO This can be content projected from the parent
    @Input() suffix: string;

    @Input() required: boolean;
}
