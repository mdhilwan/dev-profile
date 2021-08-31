import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as employmentHistoryData from '../../data/employment-history.json'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public employmentHistory: any;

  constructor() { }

  ngOnInit(): void {
    this.employmentHistory = employmentHistoryData.employmentEntry;
    console.log(this.employmentHistory);
  }

}
