import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserStore } from '../../../../core/user.store';
import { AbstractFormComponent } from '../../../abstract-form.component';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.css']
})
export class RegisterModalComponent extends AbstractFormComponent {

  @Input() id: number;
  formGroup: FormGroup;
  formUsername: string = undefined;
  formEmail: string = undefined;
  formEmailSecond: string = undefined;
  formPassword: string = undefined;
  formPasswordSecond: string = undefined;
  subscription: Subscription;
  showAlert = false;
  submittedForm = false;


  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private userStore: UserStore) {
    super();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public submitForm() {


  }
}
