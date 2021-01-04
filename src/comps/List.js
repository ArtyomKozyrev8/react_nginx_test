import React from "react";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                "Fantasy",
                "Magic",
                "Test",
                "Array"
            ],
            inputValue: ""
        }
    }

    showList = () => {
        let liArray = []
        for (let i of this.state.items) {
            liArray.push(<li> {i} </li>)
        }
        return liArray
    }

    addList = (e) => {
        if (this.state.inputValue !== "") {
            this.state.items.push(`Item - ${this.state.inputValue}`);
        } else {
            this.state.items.push(`Random Item - ${Math.floor(Math.random()*100)}`);
        }
        this.setState({items: this.state.items})
        this.setState({inputValue: ""})
    }

    changeInputValue = (e) => {
        this.setState({inputValue: e.target.value})
    }


    render() {
        return (
            <div>
                <ul>
                    {this.showList()}
                </ul>
                <input value={this.state.inputValue} type={'text'} onInput={(e) => this.changeInputValue(e)}/>
                <button onClick={(e) => this.addList(e)}>Add Item</button>
            </div>
        )
    }
}