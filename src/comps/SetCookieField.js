import React from 'react'

export default class SetCookieField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "Not Yet"
        }
    }

    setCookieFlag = () => {
        fetch("/api/set_cookie_flag")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    result: result.res
                });
                },
                (error) => {
                console.log(error)
                this.setState({
                    result: "Error"
                });
            })
    }


    render() {
        return (
            <div>
                <h6 className={"cookieTxt"}>Set cookie Flag result: {this.state.result}</h6>
                <button className={"cookieBtn"} onClick={this.setCookieFlag}>Set Cookie Flag</button>
            </div>
        )
    }
}
