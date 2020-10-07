import { Component } from '@angular/core';

@Component({
  selector: 'ngs',
  templateUrl: './ngs.component.html',
  styleUrls: ['./ngs.component.css']
})
export class NgsComponent {

  paragraph: string = "something";
  falseResult: number = 0;
  arrayData: Array<string> = ["Test1", "Test2", "Test3"];

  constructor() { }

  changeParagraph() {
    this.paragraph = "";
  }

}
