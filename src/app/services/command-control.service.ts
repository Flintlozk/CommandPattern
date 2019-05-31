import { Injectable } from '@angular/core';
import { ICommand } from '../app.model';

@Injectable({
  providedIn: 'root'
})

export class CommandControlService {
  constructor(){}

  AddNode(Command:ICommand){
    return Command.execute()
  }
  
}

