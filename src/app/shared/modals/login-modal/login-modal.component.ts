import { Component, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../core/user.service';
import { Subscription } from 'rxjs';
import { UserStore } from '../../../core/user.store';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  @Input() id: number;
  myForm: FormGroup;
  username: string = "";
  password: string = "";
  subscription: Subscription;
  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private userStore: UserStore) {
    this.createForm();
  }
 /* ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }*/
  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  private submitForm() {
    console.log(this.username);
    console.log(this.password);
    this.userStore.authenticate(this.username, this.password);
    this.activeModal.close(this.myForm.value);
  }
}