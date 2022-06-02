import { Component } from '@angular/core';
import { PageDataService } from '../shared/services/page-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  constructor(private pageStateService: PageDataService) {
    this.pageStateService.LoadAllData();
  }

}
