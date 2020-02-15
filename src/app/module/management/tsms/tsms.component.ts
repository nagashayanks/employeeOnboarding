import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { SchemaSummary } from 'src/app/model/model';

@Component({
  selector: 'app-tsms',
  templateUrl: './tsms.component.html',
  styleUrls: ['./tsms.component.css']
})
export class TsmsComponent implements OnInit {
  gridColumns = [];
  tsmsList: SchemaSummary[];

  constructor(
    private api: Service,
    private url: UrlConfig
  ) { }

  ngOnInit() {
    this.getSchemadetails();
  }
  /**
   * method to fetch all schema details
   */
  public getSchemadetails() {
    this.generateGridColumn();
    // const params = `/${id}`;
    this.api.getList(this.url.urlConfig().schemes).subscribe(data => {
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
      colName: 'User Name',
      rowName: 'doctorName',
    },
    {
      colName: 'Scheme Name',
      rowName: 'rating',
    },
    {
      colName: 'Payment Mode',
      rowName: 'specialization',
    },
    {
      colName: 'Email Id',
      rowName: 'consultationFees',
    }
  ];
}
}
