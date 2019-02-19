import { Component, OnInit } from '@angular/core';
import { Local } from '../model/local';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  MYDB: string = "localDB";

  locals : Local[]=[];
  newLocal : Local = <Local>{};
  
  constructor() { }

  ngOnInit() {
  }

}
