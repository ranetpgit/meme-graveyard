import {Attribute, Directive, forwardRef, OnDestroy} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[validateEqual]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true}
    ]
})
export class EqualValidatorDirective implements Validator, OnDestroy {

    private subscription: Subscription;

    constructor(@Attribute('validateEqual') public validateEqual: string) {
    }

    /* Un-subscribe from the value change events of the other form-field on destruction */
    ngOnDestroy(): void {
        if (this.subscription && !this.subscription.closed) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }

    validate(thisControl: AbstractControl): { [key: string]: any } {
        let targetControl = thisControl.root.get(this.validateEqual);
        if (!this.subscription && targetControl) {
            /* If we are not subscribed yet, start listening to the value change events of the other
             * form field and re-validate this form field if the other one changes.  */
            this.subscription = targetControl.valueChanges.subscribe(change => {
                if (thisControl) {
                    thisControl.updateValueAndValidity({onlySelf: true, emitEvent: false});
                }
            });
        }
        if (targetControl && thisControl.value !== targetControl.value) {
            return {
                validateEqual: {text: targetControl}
            };
        }
        return null;
    }
}
