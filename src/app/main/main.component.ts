import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  namePlayer = '';

  constructor() { }

  ngOnInit(): void {
    this.namePlayer =  localStorage.getItem("namePlayer") as string ;
  }

  resetLocalStorage() {
    localStorage.clear();
  }
}
