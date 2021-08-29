import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ResumeComponent } from './components/resume/resume.component';
import { RootComponent } from './components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainContentComponent,
    ResumeComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
