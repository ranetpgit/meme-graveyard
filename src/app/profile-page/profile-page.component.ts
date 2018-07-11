import { Component, OnInit } from '@angular/core';
import { UserStore } from '../core/user.store';
import { UserService } from '../core/user.service';
import { UserAccount } from '../shared/types/user-account';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private user: Observable<UserAccount> = undefined;

  constructor(private userStore: UserStore, private userService: UserService, private route: ActivatedRoute,
    private router: Router, ) {

  }

  ngOnInit() {
    //this is readable
    this.user = this.route.paramMap.pipe(switchMap((params: ParamMap) => this.userStore.filterDatabase(acc => acc.accountName.toLowerCase() === params.get('userName').toLowerCase())));

  }

}
