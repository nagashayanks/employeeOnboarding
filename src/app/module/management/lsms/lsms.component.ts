import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { SchemaSummary } from 'src/app/model/model';


@Component({
  selector: 'app-lsms',
  templateUrl: './lsms.component.html',
  styleUrls: ['./lsms.component.css']
})
export class LsmsComponent implements OnInit {
  gridColumns = [];
  lsmsList: SchemaSummary[];

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
      this.lsmsList = data;
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
      rowName: 'doctorName',
    },
    {
      colName: 'Status',
      rowName: 'rating',
    },
  ];
}
}
