import React from "react"

import Secondstep from "./secondstep"

class Thirdstep extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            isback: false,
        })

    }

    handleback = () => {
        this.setState({
            isback: !this.state.isback
        })

    }


    render() {
        return (
            <>
                <>

                    {
                        this.state.isback ?

                            <Secondstep /> :
                            <div>
                                <div>
                                    <span>
                                        <button>☑️</button>Sign Up
                                    </span>
                                    <span>
                                        <button >☑️</button>Message
                                    </span>
                                    <span>
                                        <button >3</button>Checkbox
                                    </span>
                                </div>

                                <form>
                                    <span>Step3/3</span>
                                    <h2>Checkbox</h2>
                                    <label htmlFor="addoption">
                                        <input type="radio" name="addoption" id="addoption"></input>
                                        I want to add this option
                                    </label><br/>
                                    <label htmlFor="clickoption">
                                        <input type="radio" name="clickoption" id="clickoption"></input>
                                        Let me click on this checkbox and choose some cool stuf
                                    </label><br/>
                                    <button onClick={this.handleback}>Back</button>
                                    <button>Submit</button>
                                </form>
                            </div>
                    }
                </>
            </>
        )
    }
}
export default Thirdstep