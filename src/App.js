import './App.css';
import Header from "./comps/Header";
import List from "./comps/List";
import ApiReqText from "./comps/ApiReqText";
import React from "react";


function App() {
    return (
        <div className="App">
            <Header HeadName={50}/>
            <List/>
            <ApiReqText/>
        </div>
    );
}

export default App;
