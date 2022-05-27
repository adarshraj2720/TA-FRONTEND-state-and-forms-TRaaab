import React from "react";


import data from '../data.json'
class Moviedetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            isuser: true,

        })
    }

    handleclose = () => {
        this.setState({
            
                isuser: !(this.state.isuser),
            })

    
    }

    render() {
        return (
            <>
                {
                    this.state.isuser ?
                     <div className="datalist">
                        <p>{this.props.Year}</p>
                        <p>{this.props.Rated}</p>
                        <p>{this.props.Runtime}</p>
                        <p>{this.props.Genre}</p>
                        <p>{this.props.Director}</p>
                        <p>{this.props.Writer}</p>
                        <p>{this.props.Actors}</p>
                        <p>{this.props.Plot}</p>
                        <p>{this.props.Language}</p>
                        <p>{this.props.Country}</p>
                        <p>{this.props.Awards}</p>
                        <p>{this.props.Metascore}</p>
                        <p>{this.props.imbdRating}</p>
                        <p>{this.props.imbdVotes}</p>
                        <p>{this.props.Type}</p>
                        <p>{this.props.Response}</p>

                        <p>{
                            this.props.Images.map((img)=>{
                                return(
                                    <>
                                       <img className="images" src={img}></img>
                                    </>

                                )
                            })
                            }</p>




                        <button onClick={this.handleclose}>Close </button>
                    </div> : ""
                }
            </>
        )
    }


}


export default Moviedetails