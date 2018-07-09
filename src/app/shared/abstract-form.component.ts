import * as _ from 'lodash';

import {OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export class AbstractFormComponent implements OnInit {

    formGroup: FormGroup;

    ngOnInit(): void {
        let group = {};
        
        _.forIn(this, (value, key) => {
            if (key && key.startsWith('form')) {
                group[key] = new FormControl(value || '');
            }
        });
        this.formGroup = new FormGroup(group);
    }
}
