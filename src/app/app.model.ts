export interface Node{
  value:number;
  childNode?:[]
}

export interface ICommand{
  execute()
}