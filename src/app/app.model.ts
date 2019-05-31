export interface Node{
  value:number;
  childNode?:[]
}

export interface ExecuteModel{
  value:number;
  store:Node[];
  list:Node[];
}

export interface ICommand{
  execute()
}