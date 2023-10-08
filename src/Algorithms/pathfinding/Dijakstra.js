const Dijakstra = (grid, startNode)=>{

    startNode.distance = 0;
    let unvisitedNode = []
    for(const row of grid){
        for(const node of row){
            unvisitedNode.push(node);
        }
    }
    let visitedNodeInOrder =  []
    while(unvisitedNode.length>0){
        unvisitedNode.sort((nodeA,nodeB)=>nodeA.distance-nodeB.distance);
        let currentNode = unvisitedNode.shift();
        visitedNodeInOrder.push(currentNode);
        currentNode.isVisited=true;
        if(currentNode.isWall) continue;
        if(currentNode.isFinish) return visitedNodeInOrder;
        updateNeighbourNodeDistance(currentNode,grid);
    }
}


const updateNeighbourNodeDistance = (node,grid) => {
    // console.log(node.distance)
    let X = [1,0,-1,0]
    let Y = [0,-1,0,1]
    let {col,row} = node
    for(let i=0;i<4;i++){
        let newX = col + X[i]
        let newY = row + Y[i];
        if(isValid(grid,newY,newX) && !grid[newY][newX].isVisited){
            grid[newY][newX].distance = (node.distance+1);
            grid[newY][newX].parent = node;
        }
    }
}

const isValid = (grid,row,col) => {
    if(row>=0 && row<grid.length && col>=0 && col<grid[0].length) return true;
    return false;
}
// module.exports = Dijakstra
export default Dijakstra;