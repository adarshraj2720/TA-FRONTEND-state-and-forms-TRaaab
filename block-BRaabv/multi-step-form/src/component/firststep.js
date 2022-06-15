import React from "react";

import Secondstep from "./secondstep";

class Firststep extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            isnext: false,


        })
    }


    handlenext = () => {
        this.setState({
            isnext: !this.state.isnext,
        })
        console.log(this.state.isnext)
    }


    render() {
        return (
            <>
                {
                    this.state.isnext ?
                        <Secondstep />
                        : <div>

                            <div>
                                <span>
                                    <button>1</button>Sign Up
                                </span>
                                <span>
                                    <button >2</button>Message
                                </span>
                                <span>
                                    <button >3</button>Checkbox
                                </span>
                            </div>

                            <form>
                                <span>Step1/3</span>
                                <h2>Sign UP</h2>
                                <label htmlFor="firstname">First Name</label><br />
                                <input type="text" id="firstname" name="firstname"></input><br />
                                <label htmlFor="lastname">Last Name</label><br />
                                <input type="text" id="lastname" name="lastname"></input><br />
                                <label htmlFor="dob">Date of Birth</label><br />
                                <input type="date" id="dob" name="dob"></input><br />
                                <label htmlFor="email">Email Address</label><br />
                                <input type="text" id="email" name="email"></input><br />
                                <label htmlFor="address"> Address</label><br />
                                <input type="text" id="address" name="address"></input><br />
                                <button onClick={this.handlenext}> Next Step </button>
                            </form>
                        </div>
                }
            </>
        )
    }
}



export default Firststep