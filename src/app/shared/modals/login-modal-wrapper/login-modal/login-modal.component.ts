import { Component, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserStore } from '../../../../core/user.store';
import { AbstractFormComponent } from '../../../abstract-form.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent extends AbstractFormComponent implements OnDestroy {



  @Input() id: number;
  formGroup: FormGroup;
  formPassword: string = undefined;
  formUsername: string = undefined;
 
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
    console.log(this.formUsername);
    console.log(this.formPassword);
    this.subscription = this.userStore.authenticate(this.formUsername, this.formPassword).subscribe(user => {
      if (user && !user.isEmpty()) {
        this.showAlert = false;
        this.activeModal.close(this.formGroup.value);
      } else {
        this.showAlert = true;
      }
    });
    setTimeout(x=>{
      this.showAlert=false;
    },3000)

  }
}
