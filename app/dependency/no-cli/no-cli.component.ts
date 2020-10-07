import { NoCliService } from '../../services/data-no-cli/data-no-cli.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-cli',
  templateUrl: './no-cli.component.html',
  styleUrls: ['./no-cli.component.css']
})
export class NoCliComponent implements OnInit {

  arrayData: Array<string> = [];
  noCli: NoCliService;

  constructor() {
    this.noCli = new NoCliService();
  };

  ngOnInit(): void {
    this.arrayData = this.noCli.noCliData();
  }

}
