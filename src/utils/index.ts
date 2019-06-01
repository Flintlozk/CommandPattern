import { Node } from '../app/commandpattern/node'
export const checkConditionIsValueAlreadyDeclare = (value:number,node:Node[],parenteValue:number) => {
    console.log('parenteValue->>',parenteValue);
    console.log('node->>',JSON.stringify(node));
    let found = true;
    if(node.length>0){
        if(Number(value) < Number(node[0].value)){

            alert('Less Value Declared')
        }else{
            console.log('node[0].childNode->>',JSON.stringify(node[0].childNode));
            alert('Greater Value Declared')
        }
    }
    return found;
} 