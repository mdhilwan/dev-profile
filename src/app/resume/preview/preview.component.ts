import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  public basicInfo: any;
  public employmentHistory: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://dev-profile-backend.uc.r.appspot.com/api/user/get/basic').subscribe((data: any) => {
      this.basicInfo = data.basicInfo;
    });

    this.http.get('https://dev-profile-backend.uc.r.appspot.com/api/user/get/employment').subscribe((data: any) => {
      this.employmentHistory = data.employmentEntry;
    });
  }

}
