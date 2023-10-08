const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;


const bubbleSort = (Arr)=>{
    const objArr = []
    let arr = Arr.slice();
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            objArr.push({case : COMPARE , start : j , end : j+1})
            if(arr[j+1]<arr[j]){
                objArr.push({case : SWAP , start : j , end : j+1 , barOneHeight : `${arr[j+1]}px`,barTwoHeight : `${arr[j]}px`})
                const temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }else {
                objArr.push({case: ALREDY_SORTED, start: j, end: j+1})
            }
            objArr.push({case: PREVIOUS_COLOR, start: j, end: j+1})
        }
        objArr.push({case : NEW_SORTED_COLOR,start : arr.length-i-1})
    }
    return objArr;
}
module.exports = bubbleSort;