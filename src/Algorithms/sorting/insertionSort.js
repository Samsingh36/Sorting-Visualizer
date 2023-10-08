const COMPARE = 1,
    SWAP = 2,
    ALREDY_SORTED = 3,
    NEW_SORTED_COLOR = 4,
    PREVIOUS_COLOR = 5;

const insertionSort = (Arr) => {
    const objArr = []
    let arr = Arr.slice();
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            //COMPARE
            objArr.push({case : COMPARE,start : i,end : j})
            if(arr[i]>arr[j]){
                //SWAP
                objArr.push({case : SWAP , start : i , end : j , barOneHeight : `${arr[j]}px`,barTwoHeight : `${arr[i]}px`})
                const temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }else {
                //ALREDY SORTED
                objArr.push({case: ALREDY_SORTED, start: i, end: j})
            }
            //PREVIOUS COLOR
            objArr.push({case: PREVIOUS_COLOR, start: i, end: j})
        }
        //COLOR BARS WHICH IS NOW SORTED (FROM LEFT TO RIGHT IN INSERTION)
        objArr.push({case : NEW_SORTED_COLOR,start : i})
    }
    return objArr;
}
module.exports = insertionSort;