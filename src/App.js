import './App.css';
import Header from "./comps/Header";
import List from "./comps/List";
import ApiReqText from "./comps/ApiReqText";
import WSItem from "./comps/WSItem";
import React from "react";


function App() {
    return (
        <div className="App">
            <Header HeadName={50}/>
            <List/>
            <ApiReqText/>
            <div className={"container"}>
                <WSItem Interval={1000}/>
                <WSItem Interval={3000}/>
                <WSItem Interval={5000}/>
                <WSItem Interval={3000}/>
                <WSItem Interval={1000}/>
                <WSItem Interval={3000}/>
                <WSItem Interval={5000}/>

            </div>
        </div>
    );
}

export default App;
