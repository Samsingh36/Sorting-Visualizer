import React from 'react';
import './App.css';
import { HashRouter, Route,} from "react-router-dom";

import SortVisualizer from "./Components/sorting/SortVisualizer";
import PathfindingVisualizer from "./Components/pathfinding/pathfindingVisualizer";
function App() {

    return <HashRouter basename={process.env.PUBLIC_URL}>
                <div className={"App"}>
                    <Route exact path={'/'} component = {SortVisualizer}/>
                    <Route exact path={'/pathfinding'} component = {PathfindingVisualizer}/>
                </div>
            </HashRouter>
}

// function App() {
//     return <div className={"App"}><PathfindingVisualizer/></div>
// }


export default App;
