import {Component, OnInit} from '@angular/core';
import {
  ModalComponent
} from "../modal/modal.component";
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
    this.dialog.open(ModalComponent, {data: {event: event}})
  }

}
