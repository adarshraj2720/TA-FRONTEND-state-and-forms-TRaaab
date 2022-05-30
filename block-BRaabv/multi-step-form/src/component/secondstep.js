import React from "react";
import Firststep from "./firststep";

import Thirdstep from "./thirdstep";



class Secondstep extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            isnext: false,
            isback: false,

        })
    }


    handleback = () => {
        this.setState({
            isback: !this.state.isback
        })
        console.log(this.state.isback)
    }

    handlnext = () => {
        this.setState({
            isnext: !this.state.isnext,
        })
        console.log(this.state.isnext)
    }



    render() {
        return (
            <>
                {
                    this.state.isnext ? <Thirdstep /> :
                        <div>

                            <div>
                                <span>
                                    <button>☑️</button>Sign Up
                                </span>
                                <span>
                                    <button >2</button>Message
                                </span>
                                <span>
                                    <button >3</button>Checkbox
                                </span>
                            </div>

                            <form>
                                <span>Step2/3</span>
                                <h2>Message</h2>
                                <label htmlFor="message">Message</label><br />
                                <textarea type="text" id="message" name="message"></textarea><br />
                                <label htmlFor="onechoice">
                                    <input type="radio" name="onechoice" id="onechoice"></input>
                                    The number one choice
                                </label>
                                <label htmlFor="twochoice">
                                    <input type="radio" name="twochoice" id="twochoice"></input>
                                    The number two choice
                                </label><br/>   
                                <button onClick={this.handleback}>Back
                                </button>
                                <button onClick={this.handlnext}>Next Step</button>
                            </form>
                        </div>
                }
                {
                    this.state.isback ? <Firststep /> : ""
                }
            </>
        )
    }
}



export default Secondstep