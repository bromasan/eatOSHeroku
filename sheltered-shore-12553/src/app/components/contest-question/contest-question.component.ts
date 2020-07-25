import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { ContestFinishComponent } from '../contest-finish/contest-finish.component';

@Component({
  selector: 'app-contest-question',
  templateUrl: './contest-question.component.html',
  styleUrls: ['./contest-question.component.css']
})
export class ContestQuestionComponent implements OnInit {
  Question:any;
  submitted = false;
  User:any;
  timeLeft:number = 15;
  seconds;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog
  ) {
    console.log("CONSTRUCTORRR")
  }

  ngOnInit() {
    this.startTimer();
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apiService.getQuestion(params.get('id'))
      )
    ).subscribe(question => this.Question = question);
    let user = this.apiService.getUser(this.apiService.getId());
    user.subscribe(user => this.User = user);
    console.log("INIT");


  }

  setTimer() {
    this.timeLeft = 15;
  }

  stopTimer() {
    console.log("stopTimer");
    clearInterval(this.seconds);
  }

  startTimer() {
    console.log("startTimer");
    this.seconds = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.stopTimer();
        this.onClick("");
      }
    }, 1000)
  }

  onClick(answer) {
    this.stopTimer();
    console.log("onCLick");
    this.submitted = true;

    this.apiService.submit({answer: answer, question: this.Question.question._id, user: this.User._id, qid: this.Question.question.id}).subscribe(
      (res) => {
        this.openDialog(res);
      }, (error) => {
        console.log(error);
      });
    }

  openDialog(res) {
    console.log("openDialog");
    if (res.alert === "fin") {
      this.apiService.getPoints(this.User._id).subscribe(
        (resP) => {
          console.log("RESP:",resP);
          let dialogRefEnd = this.matDialog.open(ContestFinishComponent, {
                                                                              height : "15em",
                                                                              width : "30em",
                                                                              hasBackdrop : true,
                                                                              autoFocus : false,
                                                                              data : resP
                                                                            });
          dialogRefEnd.afterClosed().subscribe(results => {
              this.router.navigate(['/home']);
            }
          );
        }, (error) => {
          console.log(error);
        }
      )

    } else {

      let dialogRefContinue = this.matDialog.open(DialogBodyComponent, {
                                                                          height : "10em",
                                                                          width : "20em",
                                                                          hasBackdrop : true,
                                                                          autoFocus : false,
                                                                          data : {isCorrect: res.isCorrect}
                                                                        });

      dialogRefContinue.afterClosed().subscribe(results => {
        this.setTimer();
        this.startTimer();
        this.router.navigate(['/contest-question/' + res.id]);
        }
      );
    }



  }





}
