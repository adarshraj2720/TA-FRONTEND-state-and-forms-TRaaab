import React from "react";
import  ReactDOM  from "react-dom";

import { render } from "react-dom";


class Createui extends React.Component{
    constructor(props){
    super(props)
    this.state={
        image: '/images/Gallery-design-beauty-name.png',
    }

}
handleimage=(e)=>{
    console.log(e.target.innerHTML)
    this.setState({
        image:`/images/${e.target.innerHTML}.jpg`
    })
    console.log(this.setState.image)
}
// handlecricket=()=>{
//     this.setState({
//         image:'images/cricket.jpg'
//     })
//     console.log(this.setState.image)
// }
// handlelaptop=()=>{
//     this.setState({
//         image:'images/laptop.jpg'
//     })
//     console.log(this.setState.image)
// }
// handlephone=()=>{
//     this.setState({
//         image:'images/phone.jpg'
//     })
//     console.log(this.setState.image)
// }
handlepubg=()=>{
    this.setState({
        image:'images/pubg.jpeg'
    })
    console.log(this.setState.image)
}

// handletiger=()=>{
//     this.setState({
//         image:'images/tiger.jpg'
//     })
//     console.log(this.setState.image)
// }
    render(){
        return(
            <>
            <h1>Images</h1>
                <img src={this.state.image} alt="/"/>
                <button onClick={ (e)=>{ this.handleimage(e)} }>
                    basketball
                </button>
                <button onClick={ (e)=>{ this.handleimage(e)} }>
                    cricket
                </button>
                <button onClick={ (e)=>{ this.handleimage(e)} }>
                    laptop
                </button>
                <button onClick={ (e)=>{ this.handleimage(e)} }>
                    phone
                </button>
                <button onClick={this.handlepubg} >
                    PUBG
                </button>
                <button onClick={ (e)=>{ this.handleimage(e)} }>
                    tiger
                </button>
            </>
        )
    }

}

export default Createui