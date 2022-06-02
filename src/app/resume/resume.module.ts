import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import { PreviewComponent } from './preview/preview.component';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AuthService } from '../shared/services/auth.service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EditableComponent } from './editable/editable.component';


@NgModule({
  declarations: [
    AdminBarComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ResumeComponent,
    PreviewComponent,
    EditableComponent
  ],
  providers: [AuthService],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    ResumeRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule
  ]
})
export class ResumeModule {
}
