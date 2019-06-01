import { Injectable } from '@angular/core';
import { ICommand } from './icommand';

@Injectable({
  providedIn: 'root'
})

export class ControlService {
  constructor(){}

  AddNode(Command:ICommand){
    Command.execute()
  }
  
}

