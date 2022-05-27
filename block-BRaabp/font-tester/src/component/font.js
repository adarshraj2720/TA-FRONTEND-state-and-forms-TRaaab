import React from "react";

class Font extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            text: "",

        })
    }

    handlechange = (event) => {
        this.setState({ text: event.target.value })

    }

    render() {
        return (
            <>
                <form>
                <input onChange={this.handlechange} type="text" placeholder="Type Someting"></input>
                </form>

                <section className="box">
                    <div className="fontstyle">
                        <div className="design">
                            <div>
                                <h2>Bebas Neue</h2>
                                <p>Ryoichi Tsunekawa</p>
                            </div>


                            <span>1 Style</span>

                        </div>

                        <p className="one">{this.state.text}</p>

                    </div>
                    <div className="fontstyle">
                        <div className="design">
                            <div >
                                <h2>Blaka</h2>
                                <p>Mohamed Gaber</p>
                            </div>

                            <span>1 Style</span>
                        </div>

                        <p className="two">{this.state.text}</p>

                    </div>
                    <div className="fontstyle">
                        <div className="design">
                            <div>
                                <h2>Playfair Display</h2>
                                <p>Claus Eggers Sørensen</p>
                            </div>

                            <span>Variable</span>
                        </div>

                        <p className="three">{this.state.text}</p>

                    </div>
                </section>

            </>
        )

    }


}



export default Font
