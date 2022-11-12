import { React, Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter() {
        // this.setState({
        //     count:this.state.count += 1
        // },
        // ()=> console.log(this.state.count))
        this.setState((prevState,props)=>({
            count:prevState.count+1
        }))
        
    }
    incrementFiveCounter(){
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }
    render() {
        return (
            <div>
                <div>Counter - {this.state.count}</div>
                <button onClick={() => this.incrementFiveCounter()}> Increment</button>
            </div>)
    }
}

export default Counter;