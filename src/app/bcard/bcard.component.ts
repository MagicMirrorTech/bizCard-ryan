import { Component, OnInit } from '@angular/core';

import { Data } from "../data";
// import { INFO } from "../data.service";

@Component({
  selector: 'app-bcard',
  templateUrl: './bcard.component.html',
  styleUrls: ['./bcard.component.css']
})
export class BcardComponent implements OnInit {



  constructor (
    // private dataService: DataService
  ) { }

  ngOnInit(): void {
    // this.getData();
  }

  // getData() {
  //   data: INFO[] = [];
  // }

}
