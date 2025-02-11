import { Component, OnDestroy } from '@angular/core';
import { PageDataService } from '../../shared/services/page-data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnDestroy {

  public basicInfo: any = {};
  public employmentHistory: any = [];
  public date: Date = new Date();
  public isPrinting = false;

  private destroyed$ = new Subject<void>();

  constructor(private pageStateService: PageDataService) {
    this.pageStateService.GetBasicInfo().subscribe((data: any) => this.basicInfo = data);
    this.pageStateService.GetEmploymentHistory().subscribe((data: any) => this.employmentHistory = data);
    window.addEventListener('beforeprint', () => this.onBeforePrint());
    window.addEventListener('afterprint', () => this.onAfterPrint());
    setInterval(() => this.date = new Date(), 1000);
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
    window.removeEventListener('beforeprint', () => this.onBeforePrint());
    window.removeEventListener('afterprint', () => this.onAfterPrint());
  }

  onBeforePrint(): void {
    this.isPrinting = true;
  }

  onAfterPrint(): void {
    this.isPrinting = false;
  }

  getContainer(): string {
    if (this.isPrinting) {
      return 'container-fluid px-5';
    }
    return 'container';
  }

}
