import React from "react";
import './Clock.css'

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalID)
    }

    tick(){
        this.setState({
            time: new Date().toLocaleString()
        })
    }

    render(){
        return (<h3 className="time">{this.state.time}</h3>)
    }
}

export default Clock;