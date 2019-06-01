import { Component, OnInit,Input } from '@angular/core';
import { HistoryService } from '../../services/history.service'
import { ControlService} from '../../commandpattern/control.service'
import { AddCommand } from '../../commandpattern/add-command'

import { Node } from '../../commandpattern/node'

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit{
  @Input() nodeLevel:number
  @Input() parentNode:Node[];
  @Input() parentNodeValue:Node[];
  widthInit = 200;
  childInputBox:boolean;
  selectNode:number;
  constructor(public historyService:HistoryService,public control:ControlService) { }

  ngOnInit() {
  }

  calculatePosition(){
    let value =`${this.widthInit/this.nodeLevel}px` as string
    return value;
  }
  
  addNode(value:number,childNode:Node[],parentValue:Node){
      this.control.AddNode(new AddCommand(value,childNode,parentValue))
      this.childInputBox = false;
  }

  enableInputBox(node){
    if(node.length<2){
      this.childInputBox = true;
    }
  }

}
