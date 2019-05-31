import { Component, OnInit} from '@angular/core';
import { HistoryService } from '../../services/history.service'
import { CommandControlService} from '../../services/command-control.service'
import { AddCommand } from '../../services/add-command'

import { Node } from'../../app.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  nodeList:Node[];
  nodeStore:Node[];
  inputBox:boolean;
  
  constructor(public historyService:HistoryService,public command:CommandControlService) { }

  ngOnInit() {  
    this.nodeList = []
  }

  addNode(value:number,isInit:boolean){
    let object = new AddCommand(value,this.nodeList,this.nodeStore,isInit)
    let currentNode = this.command.AddNode(object)
    if(!isInit && currentNode) this.inputBox = false
  }

  enableInputBox(node){
    if(node.length<2){
      this.inputBox = true;
      this.nodeStore = node
    }
  }

}
