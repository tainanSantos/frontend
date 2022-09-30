import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalCustomComponent} from "../modal-custom/modal-custom.component";

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
    this.dialog.open(ModalCustomComponent, {data: {event: event}})
  }

}
