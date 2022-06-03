import { Component, Input } from '@angular/core';
import { PageDataService } from '../../shared/services/page-data.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.scss']
})
export class EditableComponent {

  public randomWidthArray: string[] = ['100%'];

  @Input() set count(c: number) {
    this.randomWidthArray = Array(c).fill(1).map((x, i) => this.randomWidth());
  };

  basicInfo: any;

  constructor(public pageStateService: PageDataService,
              public authService: AuthService) {
    this.pageStateService.GetBasicInfo().subscribe(data => this.basicInfo = data);
  }

  randomWidth(): string {
    return (Math.floor(Math.random() * (100 - 60 + 1)) + 60) + '%';
  }

  onNameChange($event: Event) {
    const htmlElement = $event.target as HTMLElement;
  }
}
