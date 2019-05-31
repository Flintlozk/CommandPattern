export const checkConditionIsValueAlreadyDeclare = (value:number,array,parent) => {
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