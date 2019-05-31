import { Injectable,Output,EventEmitter } from '@angular/core';
import {Node } from '../app.model'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  undoArray = [];
  redoArray = [];
  @Output() history:EventEmitter<Node[]> = new EventEmitter()

  constructor() { }

  storeHistory(value){
    console.log('STORE')
    this.undoArray.push(JSON.stringify(value))
  }
  undo(){
    if(this.undoArray && this.undoArray.length > 0){
      let storeToRedo = this.undoArray.pop();
      this.redoArray = storeToRedo
      return JSON.parse(storeToRedo)
    }
  }
  redo(){

  }
}
