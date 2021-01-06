import React from "react"

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const socket_url = new URL("api/socket", window.location.href);  // create url for socket
socket_url.protocol = socket_url.protocol.replace('http', 'ws');

export default class WSItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    }

    feed_server_wrapper = (s) => {
        let n = 1;
        function feed_server() {
            if (s.readyState) {
                s.send(`Hello server ${n}`);  // send message to socket here
                n = n + 1;
                if (n === 10) {
                    s.send("close");
                }
            }
        }
        return feed_server
    }

    componentDidMount() {
        this.connection = new WebSocket(socket_url)
        this.connection.onopen = () => {
            this.connection.send('Start server work!');
            this.state.messages.push('Start server work!');
            this.setState({
                messages: this.state.messages
            })
        }

        this.connection.onclose = (e) => {
            this.state.messages.push("Closed");
            this.setState({
                messages: this.state.messages
            })
            clearInterval(this.intervalId); // remove sender since socket was closed
        }

        this.connection.onmessage = (e) => {
            this.state.messages.push(e.data);
            this.setState({
                messages: this.state.messages
            })
        }
        this.intervalId = setInterval(this.feed_server_wrapper(this.connection), new Number(this.props.Interval))
    }

    showList = () => {
        let liArray = []
        for (let i of this.state.messages) {
            liArray.push(<li key={`${i}-${getRandomInt(100000)}`}> {i} </li>)
        }
        return liArray
    }


    render() {
        return (
            <div className={"flexDiv"}>
                <ul>{this.showList()}</ul>
            </div>
        )
    }
}
