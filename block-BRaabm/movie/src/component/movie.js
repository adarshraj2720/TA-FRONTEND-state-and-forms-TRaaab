import React from "react";

import data from '../data.json'

import Moviedetails from "./moviedetails";

class Movie extends React.Component{
    constructor(props){
        super(props)

        this.state=({
            movie:data,
            isuser:true,
            user:"",
        })

    }

    handleclick= (list,i)=>{
        this.setState({
            isuser: !this.state.isuser,
            user:this.state.user === i ? "":i
            

        })
        console.log(this.state.isuser)

    }


    render(){
        return(
            <>
            {
                
                data.map((list ,i)=>{
                    return(
                        <div className="parent">
                        <figure> 
                        <img src={list.Images[0]} alt="/"></img>
                        </figure>
                        <h2>{list.Title}</h2>
                        <small>{list.Released}</small><br/>
                        <button className="more" onClick={()=>{this.handleclick(list,i) }}>More Info</button>
                        {
                           i===this.state.user ? <Moviedetails key={list.id} {...list} /> : ''
                        }
                        </div>
                    )
                })
            }
            </>
        )
    }

}

export default Movie;