import { Component, OnInit } from '@angular/core';
import {flyInOut} from "../../animations";

@Component({
  selector: 'app-bee',
  templateUrl: './bee.component.html',
  styleUrls: ['./bee.component.css'],
  animations: [flyInOut]
})
export class BeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
