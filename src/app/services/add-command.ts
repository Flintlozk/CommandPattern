import { Injectable } from '@angular/core';
import { Node,ICommand } from '../app.model'
import * as utils from '../../utils'

@Injectable({
  providedIn: 'root'
})
export class AddCommand implements ICommand{
  private value:number;
  private node:Node[];
  private store:Node[];
  private isInit:boolean;
  
  constructor(value:number,node:Node[],store:Node[],isInit:boolean) { 
    this.value = value;
    this.node = node;
    this.store = store;
    this.isInit = isInit;
  }

  execute(){
    if(this.isInit) return this.addParentNode()
    else return this.addChildNode()
    }

  addParentNode(){
    this.node.push({
      value:Number(this.value),
      childNode:[]
    })

    return this.node;
  }

  addChildNode(){
    console.log('this.value,this.store,this.node->>',this.value,this.store,this.node);
    let check = utils.checkConditionIsValueAlreadyDeclare(this.value,this.store,this.node)
    if(check){
      this.store.push({
        value:Number(this.value),
        childNode:[]
      })
      return this.store
    }
  }

}
