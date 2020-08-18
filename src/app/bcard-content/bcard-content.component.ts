import { Component, OnInit } from '@angular/core';


import { DATA } from "../data-content";

@Component({
  selector: 'app-bcard-content',
  templateUrl: './bcard-content.component.html',
  styleUrls: ['./bcard-content.component.css']
})
export class BcardContentComponent implements OnInit {

  data = DATA;

  constructor() { }

  ngOnInit(): void {
  }


  getVcard(): void {
    window.open('../assets/cards/ryan.vcf');
  }



  openUp(x): string {
    try {
      let l = x;
      let link = 'https://'+ l + '.com';
      window.open(link);
      return 'linked';
    } catch (e) {
        return(e);
    }
  }

}
