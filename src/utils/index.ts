export const checkConditionIsValueAlreadyDeclare = (value:number,array,parent) => {
    console.log('************ value->>',value);
    console.log('************ array->>',array);
    console.log('************ parent->>',parent);
    let found = true;
    if(Number(value) < Number(parent.value)){
        if(array.find(item=>Number(item.value) < Number(parent.value) && Number(parent.value) === 0)) {
            found = false;
            alert('Less Value Declared')
        }
    }else{
        if(array.find(item=>Number(item.value) >= Number(parent.value))) {
            found = false;
            alert('Greater Value Declared')
        }
    }
    return found;
} 