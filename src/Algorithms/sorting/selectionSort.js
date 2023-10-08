const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;

const selectionSort = (Arr) =>{
    let arr = Arr.slice();
    const objArr = []
    for(let i=0;i<arr.length;i++){
        let min = i;
        for(let j=i+1;j<arr.length;j++){
            //compare
            objArr.push({case : COMPARE , start : min, end : j})
            if(arr[j]<arr[min]){
                objArr.push({case: PREVIOUS_COLOR, start: min, end: j})
                min=j;
            }else{
                objArr.push({case: ALREDY_SORTED, start: min, end: j})
                objArr.push({case: PREVIOUS_COLOR, start: min, end: j})
            }


        }
        //swap
        objArr.push({case : SWAP , start : i , end : min , barOneHeight : `${arr[min]}px`,barTwoHeight : `${arr[i]}px`})
        objArr.push({case: PREVIOUS_COLOR, start: i, end: min})
        let temp = arr[i]
        arr[i]=arr[min]
        arr[min]=temp
        objArr.push({case : NEW_SORTED_COLOR,start : i})
    }
    return objArr
}

module.exports = selectionSort;