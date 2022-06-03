import {Component, OnInit} from '@angular/core';
import { PageDataService } from '../shared/services/page-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private pageStateService: PageDataService) {}

  ngOnInit(): void {
    this.pageStateService.LoadAllData();
  }

}
