import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{


  @Output() name:EventEmitter<any> =  new EventEmitter<string>();
  counter:number = 3;
  constructor() { }

  ngOnInit() {
    this.updateName()
  }

  updateName(){
    this.counter++;
    this.name.emit('Vijay '+this.counter);
  }

}
