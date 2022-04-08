import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() accordionTitle: string;
  @Input() accordionBody: string;
  accordionClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // collapseAccordion() {
  //   this.accordionClicked = !this.accordionClicked; 
  //   return this.accordionClicked; 
  // }
}
