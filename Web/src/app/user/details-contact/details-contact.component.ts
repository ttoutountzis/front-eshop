import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactInfo } from '../user';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.css']
})
export class DetailsContactComponent implements OnInit {
  @Input() contactInfo;
  @Output() emitaction = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  askForValidation() {
    this.emitaction.emit();
  }

  validateInChild() {
    console.log('Something happens in children');
  }



}
