import {Component, OnInit} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


  useDefault(): boolean {
    return localStorage.getItem('som')==='true' ? true : false
  }

  toggle($event: MatSlideToggleChange) {
    localStorage.setItem('som', String($event.checked));
  }
}
