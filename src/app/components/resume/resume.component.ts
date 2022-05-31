import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as employmentHistoryData from '../../data/employment-history.json';
// @ts-ignore
import * as basicInfoData from '../../data/basic-info.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public basicInfo: any;
  public employmentHistory: any;

  constructor() { }

  ngOnInit(): void {
    this.basicInfo = basicInfoData.basicInfo;
    this.employmentHistory = employmentHistoryData.employmentEntry;
  }
}
