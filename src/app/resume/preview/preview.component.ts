import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataService } from '../../shared/services/page-data.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  public basicInfo: any = {};
  public employmentHistory: any = [];

  constructor(private http: HttpClient,
              private pageStateService: PageDataService,
              public authService: AuthService) {
    this.pageStateService.GetBasicInfo().subscribe((data: any) => this.basicInfo = data);
    this.pageStateService.GetEmploymentHistory().subscribe((data: any) => this.employmentHistory = data);
  }

}
