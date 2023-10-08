const COMPARE_COLOR = "red";
const SORTED_COLOR="green";
const SWAP_COLOR="yellow";
const PREVIOUS_COLOR="#0074D9"
const NEW_COLOR="#00d999";

const COMPARE_CASE = 1,
    SWAP_CASE = 2,
    ALREDY_SORTED_CASE = 3,
    NEW_SORTED_COLOR_CASE = 4,
    PREVIOUS_COLOR_CASE = 5;

module.exports = function driver (arr , algorithm , speed, size,enableButton) {
    const SPEED = ((speed**2)/size);
    const barArr = document.getElementsByClassName("array-bars");
    const Arr=algorithm(arr)
    for(let i=0;i<Arr.length;i++){
        const obj = Arr[i];
        switch (obj.case) {
            case COMPARE_CASE : setTimeout(()=>{
                const startIdx = obj.start
                const endIdx = obj.end
                const barOneStyle = barArr[startIdx].style;
                const barTwoStyle = barArr[endIdx].style;
                barOneStyle.backgroundColor=COMPARE_COLOR;
                barTwoStyle.backgroundColor=COMPARE_COLOR;
            },i*SPEED)
                break;
            case SWAP_CASE : setTimeout(()=>{
                const startIdx = obj.start
                const endIdx = obj.end
                const barOneStyle = barArr[startIdx].style;
                const barTwoStyle = barArr[endIdx].style;
                barOneStyle.backgroundColor=SWAP_COLOR;
                barTwoStyle.backgroundColor=SWAP_COLOR;
                barOneStyle.height=obj.barOneHeight;
                barTwoStyle.height=obj.barTwoHeight;
                barArr[startIdx].innerText=obj.barOneHeight.substr(0,obj.barOneHeight.length-2);;
                barArr[endIdx].innerText=obj.barTwoHeight.substr(0,obj.barTwoHeight.length-2);
            },i*SPEED)
                break;
            case ALREDY_SORTED_CASE : setTimeout(()=>{
                const startIdx = obj.start
                const endIdx = obj.end
                const barOneStyle = barArr[startIdx].style;
                const barTwoStyle = barArr[endIdx].style;
                barOneStyle.backgroundColor=SORTED_COLOR;
                barTwoStyle.backgroundColor=SORTED_COLOR;
            },i*SPEED)
                break;
            case NEW_SORTED_COLOR_CASE : setTimeout(()=>{
                const startIdx = obj.start;
                const barOneStyle = barArr[startIdx].style;
                barOneStyle.backgroundColor=NEW_COLOR;
            },i*SPEED)
                break;
            case PREVIOUS_COLOR_CASE: setTimeout(()=>{
                const startIdx = obj.start
                const endIdx = obj.end
                const barOneStyle = barArr[startIdx].style;
                const barTwoStyle = barArr[endIdx].style;
                barOneStyle.backgroundColor=PREVIOUS_COLOR;
                barTwoStyle.backgroundColor=PREVIOUS_COLOR;
            },i*SPEED)
                break;
            default : console.log("Something weng wrong!");
        }
    }
    // setTimeout(()=>{enableButton()},Arr.length*SPEED);
}