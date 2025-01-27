import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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
    this.http.get(`https://dev-profile-backend.uc.r.appspot.com/api/user/${userId}/get/basic`)
      .pipe(
        map((data: any) => {
          if (data.mainDescription) {
            data.mainDescription = data.mainDescription.join('\n\n');
          }
          return data;
        })
      )
      .subscribe(
        data => this.baseInfoData.next(data),
        () => this.baseInfoData.next({})
      );
  }

  private loadEmploymentHistory(userId: string) {
    return this.http.get(`https://dev-profile-backend.uc.r.appspot.com/api/user/${userId}/get/employment`)
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
