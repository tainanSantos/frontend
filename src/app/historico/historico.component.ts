import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  typesOfShoes: string[] = ['Julia'];


  constructor() { }

  ngOnInit(): void {
  }

}
