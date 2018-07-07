import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-modal-wrapper',
  templateUrl: './login-modal-wrapper.component.html',
  styleUrls: ['./login-modal-wrapper.component.css']
})
export class LoginModalWrapperComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
