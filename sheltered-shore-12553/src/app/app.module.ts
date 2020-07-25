import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContestSigninComponent } from './components/contest-signin/contest-signin.component';
import { ContestQuestionComponent } from './components/contest-question/contest-question.component';
import { ContestBeginComponent } from './components/contest-begin/contest-begin.component';
import { ContestTimerComponent } from './components/contest-timer/contest-timer.component';
import { ContestSigninScreenComponent } from './components/contest-signin-screen/contest-signin-screen.component';
import  {DialogBodyComponent} from './components/dialog-body/dialog-body.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContestFinishComponent } from './components/contest-finish/contest-finish.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    ContestSigninComponent,
    ContestQuestionComponent,
    ContestBeginComponent,
    ContestTimerComponent,
    ContestSigninScreenComponent,
    ContestFinishComponent,
    DialogBodyComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
