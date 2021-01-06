import './App.css';
import Header from "./comps/Header";
import List from "./comps/List";
import ApiReqText from "./comps/ApiReqText";
import WSItem from "./comps/WSItem";
import SetCookieField from "./comps/SetCookieField";
import GetCookieField from "./comps/GetCookieField";
import RemoveCookieField from "./comps/RemoveCookieField";
import React from "react";


function App() {
    return (
        <div className="App">
            <Header HeadName={50}/>
            <List/>
            <div className="cookieDiv">
                <SetCookieField/>
                <RemoveCookieField/>
                <GetCookieField/>
            </div>
            <ApiReqText/>
	        <div className={"container"}>
                <WSItem Interval={2000}/>
                <WSItem Interval={3000}/>
                <WSItem Interval={5000}/>
                <WSItem Interval={3000}/>
                <WSItem Interval={7000}/>
            </div>
        </div>
    );
}

export default App;
