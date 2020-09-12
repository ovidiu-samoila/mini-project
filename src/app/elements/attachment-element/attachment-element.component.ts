import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachment-element',
  templateUrl: './attachment-element.component.html',
  styleUrls: ['./attachment-element.component.scss']
})
export class AttachmentElementComponent implements OnInit {
  @Input() att;
  constructor() { }

  ngOnInit(): void {
    console.log('atttt', this.att);
  }

}
