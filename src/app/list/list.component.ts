import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() lists=[]

  delete(index)
  {
    this.lists.splice(index,1)
  }
  constructor() { }

  ngOnInit() {
  }

}
