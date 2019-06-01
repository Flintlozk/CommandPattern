import { ICommand } from './icommand';
import { Node } from'./node'

export class AddCommand implements ICommand{
  private value:number;
  private node:Node[];
  private parentNode:Node;
  
  constructor(value:number, node:Node[],parentNode:Node) { 
    this.value = value;
    this.node = node;
    this.parentNode = parentNode;
  }

  public execute(){
    let check = this.greaterOrLess(this.value,this.node,this.parentNode)
    if(check){
      this.node.push({
        value:Number(this.value),
        childNode:[]
      })
    }
  }

  greaterOrLess(value:number,node:Node[],parentValue:Node){
    let found = true as boolean;
    if(node.length>0){
      if(value <= parentValue.value){
        if(node[0].value <= parentValue.value){
          console.log('LESS THAN PARENT')
          found = false
          alert('LESS THAN PARENT')
        }
      }else{
        if(node[0].value > parentValue.value){
          console.log('GREATER THAN PARENT')
          found = false
          alert('GREATER THAN PARENT')
        }
      }
    }
    return found;
  } 
}
