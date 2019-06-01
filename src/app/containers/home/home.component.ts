import { Component, OnInit,DoCheck} from '@angular/core';

import { ControlService } from '../../commandpattern/control.service'
import { AddCommand } from '../../commandpattern/add-command'
import { Node } from '../../commandpattern/node'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,DoCheck{

  node:Node[] = [];
  inputBox:boolean;

  constructor(public control:ControlService) { 
  }

  ngOnInit() {
  }

  ngDoCheck(){
  }

  addNode(value:number,bInit:boolean){
    bInit?
      this.control.AddNode(new AddCommand(value, this.node,this.node[0])):
      this.control.AddNode(new AddCommand(value, this.node[0].childNode,this.node[0]))
    this.inputBox = false;
  }

  enableInputBox(node){
    if(node.length<2){
      this.inputBox = true;
    }
  }
}
