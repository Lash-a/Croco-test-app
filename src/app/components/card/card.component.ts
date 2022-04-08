import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardTitle: string;
  @Input() cardBody: string;
  @Input() buttonText: string;
  @Input() navigateTo: string;
  @Input() imageSource: string;
  @Input() showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
