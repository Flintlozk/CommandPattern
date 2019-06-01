export class Node{
  value?:number;
  childNode?:Node[]
}

export interface ICommand{
  execute();
}