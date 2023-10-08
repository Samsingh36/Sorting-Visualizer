import React, {Component} from 'react';
import Node from "./Node";
import Dijakstra from '../../Algorithms/pathfinding/Dijakstra';
import Header from "../Header";
import Button from "../Button";
import Footer from './footer'

const NO_OF_ROWS = 20;
const NO_OF_COLUMS = 61;
const SPEED = 10;
class PathfindingVisualizer extends Component {
    constructor() {
        super();
        this.state = {
            grid : [],
            START_ROW: 15,
            START_COL : 0,
            FINISH_ROW : 15,
            FINISH_COL : 59,
            SPEED: SPEED,
            processing : false,
            size : 0,
        }
    }
    createNode(row,col){
        const{START_ROW,START_COL,FINISH_ROW,FINISH_COL} = this.state;
        return {
            row,
            col,
            isStart : row === START_ROW && col === START_COL,
            isFinish : row === FINISH_ROW && col === FINISH_COL,
            distance : Infinity,
            isVisited : false,
            parent : null
        }
    }

    initGrid(){
        let grid = [];
        for(let row = 0;row < NO_OF_ROWS ; row++){
            let arr = []
            for(let col = 0; col< NO_OF_COLUMS ;col++){
                arr.push(this.createNode(row,col))
            }
            grid.push(arr);
        }
        this.setState({grid})
    }

    componentDidMount() {
        const width = window.innerWidth;
        const size = Math.floor(width/NO_OF_COLUMS);
        this.setState({size})
        this.initGrid();
    }

    animateDijakstra(animation , animateSortestPath , SPEED){
        for(let i=0;i<=animation.length;i++){
            if(i===animation.length){
                setTimeout(()=>animateSortestPath(animation,SPEED),i*SPEED)
            }else{
                const node = animation[i];
                const isStart = node.isStart;
                const isFinish = node.isFinish;
                setTimeout(()=>{
                    document.getElementById(`node-${node.row}-${node.col}`).className=`${isStart?"node visited start":isFinish ?"node finish visited" :"node visited"}`
                },SPEED*i)
            }
        }
    }

    animateShortestPath(animation , SPEED){
        let currentNode = animation[animation.length-1];
        let i=1;
        while(true){
            if(currentNode.parent!=null){
                const row = currentNode.row;
                const col = currentNode.col;
                const isStart = currentNode.isStart;
                const isFinish = currentNode.isFinish
                setTimeout(()=>document.getElementById(`node-${row}-${col}`).className=`${isStart?"node shortedPath start": isFinish ?" node finish shortedPath" :'node shortestPath'}` ,SPEED*i)
                i++;
                currentNode=currentNode.parent;
            }else if(currentNode.parent==null){
                // this.setState({processing : false})
                break;
            }
        }
    }
    visualizeDijakstra(){
        this.setState({processing  : true})
        const {grid,START_ROW,START_COL,SPEED} = this.state;
        const animation = (Dijakstra(grid,grid[START_ROW][START_COL]))
        console.log(animation[animation.length-1].parent)
        this.animateDijakstra(animation,this.animateShortestPath,SPEED);

    }

    render() {
        const {grid,size} = this.state;
        if(grid.length!==0){
            // this.test()
            return (<div>
                        <Header textAlign={true}  width = {"100%"}>
                            <Button value="Visualize Dijakstra" onClickListener={()=>this.visualizeDijakstra()} disable={false} />
                        </Header>
                        <div style={{textAlign : "center",backgroundColor : "white"}}>
                            {grid.map((row , rowId)=>{
                                return <div style = {{height : "25px"}} key={rowId}>{row.map((node,nodeId)=>{
                                    const {row,col,isFinish,isStart,isWall} = node
                                    return (<Node
                                        key = {nodeId}
                                        row={row}
                                        col={col}
                                        isFinish={isFinish}
                                        isStart={isStart}
                                        isWall={isWall}
                                        width = {size}
                                    />)
                                })}</div>
                            })}
                        </div>
                <Footer/>
            </div>);
        }else{
            return <div>
                <h1>Loading</h1>
            </div>
        }

    }
}

export default PathfindingVisualizer;