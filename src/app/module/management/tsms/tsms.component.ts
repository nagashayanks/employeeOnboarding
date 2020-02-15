import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { SchemaSummary } from 'src/app/model/model';
import { CommonService } from 'src/app/service/common-service';
import { ConstantService } from 'src/app/service/constant';

@Component({
  selector: 'app-tsms',
  templateUrl: './tsms.component.html',
  styleUrls: ['./tsms.component.css']
})
export class TsmsComponent implements OnInit {
  gridColumns = [];
  tsmsList: SchemaSummary[];
  hours: number;
  userId: number;
  constructor(
    private api: Service,
    private url: UrlConfig,
    public common: CommonService,
    private userConstant: ConstantService,

  ) { }

  ngOnInit() {
    this.getSchemadetails();
  }
  /**
   * method to fetch all schema details
   */
  public getSchemadetails() {
    this.generateGridColumn();
    const params = `/${this.common.loggedUser() ? this.common.loggedUser().userId : null}`;
    this.api.getList(this.url.urlConfig().schemes.concat(params)).subscribe(data => {
      this.tsmsList = data;
      console.log('data', data);
    });
  }
  /* configure the grid columns */
  private generateGridColumn(): void {
    this.gridColumns = [
      {
        colName: 'Date',
        rowName: 'date',
      },
      {
        colName: 'Hours',
        rowName: 'hours',
      },
      {
        colName: 'Status',
        rowName: 'status',
      },
    ];
  }
  submit() {
    // const params = `/${this.userId}`;
    const object = {
      employeeId: this.common.loggedUser() ? this.common.loggedUser().userId : null,
      hours: this.hours
    };
    this.api.postCall(this.url.urlConfig().time, object, 'post').subscribe(user => {
      if (user.statusCode === 200) {
        this.common.alertConfig = this.common.modalConfig(
          'Error', this.userConstant.messageConstant()[user.statusCode],
          true, [{ name: 'Ok' }]
        );
      }
    });
  }
}
