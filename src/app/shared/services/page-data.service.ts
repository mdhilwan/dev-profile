import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  private baseInfoData = new BehaviorSubject<any>({});
  private employmentHistoryData = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient,
              private route: ActivatedRoute) { }

  LoadAllData() {
    this.route.firstChild?.params.subscribe((data) => {
      this.loadBasicInfo(data.userId);
      this.loadEmploymentHistory(data.userId);
    });
  }

  private loadBasicInfo(userId: string) {
    this.http.get(`http://localhost:50075/api/user/${userId}/get/basic`)
      .subscribe(
        data => this.baseInfoData.next(data),
        () => this.baseInfoData.next({})
      );
  }

  private loadEmploymentHistory(userId: string) {
    return this.http.get(`http://localhost:50075/api/user/${userId}/get/employment`)
      .subscribe(
        data => this.employmentHistoryData.next(data),
        () => this.employmentHistoryData.next([])
      );
  }

  GetBasicInfo(): Observable<any> {
    return this.baseInfoData.asObservable();
  }

  GetEmploymentHistory(): Observable<any> {
    return this.employmentHistoryData.asObservable();
  }
}
