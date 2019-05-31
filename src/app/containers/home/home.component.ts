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
    let currentNode = this.command.AddNode(new AddCommand(value,this.nodeList,this.nodeStore,isInit)) 
    if(!isInit && currentNode) this.inputBox = false
  }

  enableInputBox(node){
    if(node.length<2){
      this.inputBox = true;
      this.nodeStore = node
    }
  }

}
