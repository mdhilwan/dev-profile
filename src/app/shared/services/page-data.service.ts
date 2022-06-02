import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  private baseInfoData = new BehaviorSubject<any>({});
  private employmentHistoryData = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) { }

  LoadAllData() {
    this.loadBasicInfo();
    this.loadEmploymentHistory();
  }

  private loadBasicInfo() {
    this.http.get('https://dev-profile-backend.uc.r.appspot.com/api/user/get/basic').subscribe(data => {
      this.baseInfoData.next(data);
    })
  }

  private loadEmploymentHistory() {
    return this.http.get('https://dev-profile-backend.uc.r.appspot.com/api/user/get/employment').subscribe(data => {
      this.employmentHistoryData.next(data);
    });
  }

  GetBasicInfo(): Observable<any> {
    return this.baseInfoData.asObservable();
  }

  GetEmploymentHistory(): Observable<any> {
    return this.employmentHistoryData.asObservable();
  }
}
