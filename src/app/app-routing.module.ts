import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './components/resume/resume.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'login', component: ResumeComponent },
  { path: '**', component: RootComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
