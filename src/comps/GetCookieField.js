import React from 'react'

export default class GetCookieField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "-"
        }
    }

    setCookieFlag = () => {
        fetch("/api/get_cookie_flag")
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
                <h6 className={"cookieTxt"}>Get cookie Flag result: {this.state.result}</h6>
                <button className={"cookieBtn"} onClick={this.setCookieFlag}>Get Cookie Flag</button>
            </div>
        )
    }
}
