import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContestBeginComponent } from './components/contest-begin/contest-begin.component';
import { ContestQuestionComponent } from './components/contest-question/contest-question.component';
import { ContestSigninComponent } from './components/contest-signin/contest-signin.component';
import { ContestSigninScreenComponent } from './components/contest-signin-screen/contest-signin-screen.component';
import { ContestFinishComponent } from './components/contest-finish/contest-finish.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: ContestSigninScreenComponent },
  { path: 'contest-signin', component: ContestSigninComponent },
  { path: 'contest-question/:id', component: ContestQuestionComponent },
  { path: 'contest-begin', component: ContestBeginComponent },
  { path: 'contest-finish', component: ContestFinishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
