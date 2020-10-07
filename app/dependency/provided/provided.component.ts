import { SingleDataService } from '../../services/provided-data/single-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'provided',
  templateUrl: './provided.component.html',
  styleUrls: ['./provided.component.css']
})
export class ProvidedComponent implements OnInit {

  arrayData: Array<string> = [];

  constructor(private _arrayData: SingleDataService) { }

  ngOnInit(): void {
    this.arrayData = this._arrayData.singleData();
  }


}
