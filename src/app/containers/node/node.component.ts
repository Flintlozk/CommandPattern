import { Component, OnInit,Input } from '@angular/core';
import { HistoryService } from '../../services/history.service'
import { CommandControlService} from '../../services/command-control.service'
import { AddCommand } from '../../services/add-command'

import { Node } from '../../app.model'

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  @Input() nodeLevel:number
  @Input() parentNode:Node[];
  widthInit = 600;
  nodeStore:Node[];
  inputBox2:boolean;
  constructor(public historyService:HistoryService,public command:CommandControlService) { }

  ngOnInit() {
  }

  calculatePosition(){
    let value =`${this.widthInit/this.nodeLevel}px` as string
    return value;
  }

  
  addNode(value:number){
    let currentNode = this.command.AddNode(new AddCommand(value,this.parentNode,this.nodeStore,false)) 
    if(currentNode) this.inputBox2 = false
  }

  enableInputBox(node){
    if(node.length<2){
      this.inputBox2 = true;
      this.nodeStore = node
    }
  }

}
