import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ModalCustomComponent} from "../modal-custom/modal-custom.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  namePlayer?: string;

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }


  onNextPage() {

    if (this.namePlayer === null || this.namePlayer === "" || this.namePlayer === undefined) {
      this.dialog.open(ModalCustomComponent, {
        data: {
          event: {
            message: "informe seu nome para inciar o jogo.", fase: 1, status: status
          }
        }
      })
    } else {
      localStorage.setItem("namePlayer", this.namePlayer)
      this.router.navigate(['/app/partida'])
    }

  }
}
