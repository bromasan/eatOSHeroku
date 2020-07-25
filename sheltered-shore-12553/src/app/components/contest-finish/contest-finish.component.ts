import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";


@Component({
  selector: 'app-contest-finish',
  templateUrl: './contest-finish.component.html',
  styleUrls: ['./contest-finish.component.css']
})
export class ContestFinishComponent implements OnInit {
  score:number;
  constructor(
      public dialogRef: MatDialogRef<ContestFinishComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    ngOnInit(): void {
    }


    close() {
      this.dialogRef.close();
    }





}
