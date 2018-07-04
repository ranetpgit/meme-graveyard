import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[validEmail]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})

export class EmailValidatorDirective implements Validator {
    pattern: RegExp = new RegExp('[^@]+@[^@.]+[.][a-zA-Z]{2,10}');

    validate(rootControl: AbstractControl): { [key: string]: any } {

        if (rootControl.value !== null && rootControl.value !== undefined) {

            if (this.pattern.test(rootControl.value)) {
                return null;
            }
            return {
                validEmail: {value: false}
            };
        }
    }
}
