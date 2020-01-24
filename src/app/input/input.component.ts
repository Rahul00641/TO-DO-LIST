import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title=""
  content=""
  @Output() sendDo=new EventEmitter()

  sendData()
  {
    const data={title:this.title,content:this.content}
    this.sendDo.emit(data)
    this.title=""
    this.content=""
  }

  constructor() { }

  ngOnInit() {
  }

}
