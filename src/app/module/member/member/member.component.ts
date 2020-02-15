import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/service/service';
import { MessageService } from 'src/app/service/message-service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(
    private router: Router,
    private api: Service,
    private messageService: MessageService
  ) { }

  /* Go to the page basedon type
    @param credit go to login
    @param shopping go to product
  */
  public gotoPage(type: string) {
    sessionStorage.setItem('loginType', type);
    if (type === 'credit') {
      this.router.navigate(['/login']);
    } else {
      sessionStorage.clear();
      this.messageService.clearMessages();
      this.router.navigate(['/product']);
    }
  }

  ngOnInit() {
    const user =  this.api.loggedUser();
    if (user) {
      this.gotoPage(user.type);
    }
  }

}
