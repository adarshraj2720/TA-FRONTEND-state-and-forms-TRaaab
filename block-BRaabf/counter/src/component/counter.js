import React from "react";



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:1,
        }


    }

    handleincrement5=(e)=>{
        console.log(e.target.innerText)
        this.setState({
            counter:this.state.counter  =Number(`${e.target.innerText}`) ,
        })
    }
    
  
    handleincrement=()=>{
        this.setState({
            counter:this.state.counter+1 ,
        })
    }
    handledecrement=()=>{
        this.setState({
            counter:this.state.counter -1,
        })
    }
    handlereset=()=>{
        this.setState({
            counter:0,
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.counter}</h1>
            <h2>Steps</h2>
            <button onClick={ (e)=>{this.handleincrement5(e)}}>5</button>
            <button onClick={this.handleincrement}>Increment</button>
            <button onClick={this.handledecrement}>Decrement</button>
            <button onClick={this.handlereset}>RESET</button>
           </>
        )
    }

}



export default Counter;