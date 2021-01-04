import React from 'react'

export default class ApiReqText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "-",
            isLoaded: false
        }
    }

    getValFromServer = () => {
        fetch("/api/get_val_from_server")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    val: result.val
                });
                },
                (error) => {
                console.log(error)
                this.setState({
                    isLoaded: true,
                    val: "Error"
                });
            })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.getValFromServer, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <h5>Data received from API GET REQUEST: {this.state.val}</h5>
        )
    }
}
