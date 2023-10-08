import React, {Component} from 'react';
import './SortVisualizer.css';
import bubbleSort from '../../Algorithms/sorting/bubbleSort'
import insertionSort from '../../Algorithms/sorting/insertionSort'
import selectionSort from '../../Algorithms/sorting/selectionSort'
import driver from "./visualizerHelper"
import Header from '../Header'
import Button from '../Button';


class SortVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr : [],
            disable : false,
            SPEED: 10,
            SIZE : 60,
        }
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray(){
        const size=this.state.SIZE;
        const min=20;
        const max=500;
        const arr = [];
        for(let i=0;i<size;i++){
            arr.push(Math.floor(Math.random() * (max - min + 1) + min))
        }
        this.setState({arr});
        this.colorReset()

    }
    colorReset(){
        const barArr = document.getElementsByClassName("array-bars");
        const arr = this.state.arr;
        for(let i=0;i<arr.length;i++){
            barArr[i].style.backgroundColor="#0074D9";
        }
    }

    visualize(sortingAlgo,print){
        this.resetArray();
        this.setState({disable : true})
        driver(this.state.arr,sortingAlgo,this.state.SPEED,this.state.SIZE,this.enableButton);
        setTimeout(()=>this.setState({disable : false}),10000)
    }

    onSlideHandler(e){
        this.setState({SIZE : e.target.value});
        this.resetArray()
    }


    render() {
        const arr = this.state.arr;
        // const active = this.state.active;
        // const SPEED = this.state.SPEED;
        const SIZE = this.state.SIZE;
        const BOX_SIZE = Math.floor(800/SIZE);
        const disable = this.state.disable
        return (
            <div>
                <Header className="Headder">
                    <div style={{width : "780px" , margin : "auto" }}>
                        <Button value = "Array Reset" onClickListener={()=>this.resetArray()} disable={disable}/>
                        <Button value = "Bubble Sort" onClickListener={()=>this.visualize(bubbleSort)} disable={disable}/>
                        <Button value = "Insertion Sort" onClickListener={()=>this.visualize(insertionSort)} disable={disable}/>
                        <Button value = "Selection Sort" onClickListener={()=>this.visualize(selectionSort)} disable={disable}/>
                        <input className="slider" type={"range"} value={this.state.SIZE} min = "20" max = "100" onChange={(e)=>this.onSlideHandler(e)} disabled={disable}/>
                    </div>
                </Header>

                <div className="array-container"
                     style={{width :"100%" , height : "500px"}}>
                    {arr.map((item , index)=>(
                        <div key={index}
                             className="array-bars"
                             style={{fontSize : `${BOX_SIZE/3}px`,  height : `${item}px` ,width : `${BOX_SIZE}px`}}>
                            {item}
                        </div>))}
                </div>
                <div class = "footer"></div>
            </div>
        );
    }
}

export default SortVisualizer;