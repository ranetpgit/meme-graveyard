import { Component, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserStore } from '../../../core/user.store';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnDestroy {



  @Input() id: number;
  myForm: FormGroup;
  username = '';
  password = '';
  subscription: Subscription;
  showAlert = false;
  submittedForm = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private userStore: UserStore) {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  public submitForm() {
    console.log(this.username);
    console.log(this.password);
    this.subscription = this.userStore.authenticate(this.username, this.password).subscribe(user => {
      if (user && !user.isEmpty()) {
        this.showAlert = false;
        this.activeModal.close(this.myForm.value);
      } else {
        this.showAlert = true;
      }
    });
    setTimeout(x=>{
      this.showAlert=false;
    },3000)

  }
}
