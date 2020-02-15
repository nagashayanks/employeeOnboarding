import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { NotificationService } from 'src/app/service/notification-service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private router: Router,
    private api: Service,
    private messageService: NotificationService
  ) { }

  /* Go to the page basedon type
    @param credit go to login
    @param shopping go to product
  */
  public gotoPage(type: string) {
    sessionStorage.setItem('loginType', type);
    if (type === 'login') {
      this.router.navigate(['/login']);
    } else {
      this.messageService.clearMessages();
      this.router.navigate(['/register']);
    }
  }

  ngOnInit() {
    const user =  this.api.loggedUser();
    if (user) {
      this.gotoPage(user.type);
    }
  }

}
