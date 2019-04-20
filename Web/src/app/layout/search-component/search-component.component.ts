import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  searchBoxValue: string;
  orderbyValue = 'lastname';
  attributeGroup = [];
  batch = 1;
  batchSize = 40;
  constructor(private data: MainService) { }

  ngOnInit() {
    this.searchWord();
  }

  searchWord() {
    this.data.loadAttributesGroupBySearch(this.searchBoxValue, this.orderbyValue, '', '').subscribe(res => {
      this.attributeGroup = res;

    }, error => {

    });
  }

  loadMore() {
    this.batch = this.batch + 1;
    this.searchWord();
  }

  orderby(whichORder) {
    if (this.orderbyValue === whichORder) {
      this.orderbyValue = whichORder + '_desc';
      this.searchWord();
      return;
    }
    this.orderbyValue = whichORder;
    this.searchWord();
  }
}

