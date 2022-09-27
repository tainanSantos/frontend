import {Component, OnInit} from '@angular/core';
import {
  DialogElementsExampleDialogComponent
} from "../dialog-elements-example-dialog/dialog-elements-example-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Sprite} from "../models/Sprite";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  showDialog(event: any) {
    this.dialog.open(DialogElementsExampleDialogComponent, {data: {event: event}})
  }

}
