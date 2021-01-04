import React from "react";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1
        }
    }

    changeNumber = (e, n) => {
        this.setState({number: n + Math.floor(Math.random() * 100)});
    }

    render() {
        return (
            <div>
                <h1 className="ReadHeader">
                    This is Test React App # {this.state.number} with Nginx and Backend {this.props.HeadName}
                </h1>
                <button type="button" onClick={(e, n) => this.changeNumber(e, 10000)}>
                    Change Header
                </button>
            </div>
        );
    }
}
