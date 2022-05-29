import React from "react";

import Billing from "./billing";

class Shipping extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            ischeckd: false,
            address: "",
            zip: "",
            city: "",
            country: "",
            billing: {
                address: "",
                zip: "",
                city: "",
                country: "",
            }
        })
    }

    handlechange = ({ target }) => {
        let { name, value } = target
        this.setState({ [name]: value })
    }



    oncheck = () => {
        this.setState({
            ischeckd: !this.state.ischeckd
        })
    }

    render() {
        return (
            <section>
                <form>
                    <h2 className="heading">Shipping Address</h2>
                    <label htmlFor="address">Address</label><br />
                    <input onChange={this.handlechange} value={this.address} type="text" name="address" id="address" placeholder="eg. New Delhi Vasant Vihar" /><br />
                    <label htmlFor="zip">ZIP/Postal Code</label><br />
                    <input onChange={this.handlechange} value={this.zip} type="number" name="zip" id="zip" placeholder="eg.17757" /><br />
                    <label htmlFor="city">City</label><br />
                    <input onChange={this.handlechange} value={this.city} type="text" name="city" id="city" placeholder="eg.New Delhi" /><br />
                    <label htmlFor="country">Country</label><br />
                    <input onChange={this.handlechange} value={this.country} type="text" name="country" id="country" placeholder="eg.India" /><br />
                </form>
                {
                    this.state.ischeckd ?
                        <form>
                            <h2 className="heading">Billing Address</h2>
                            <label className="checklabel">
                                <input className="check" onClick={this.oncheck} type="checkbox" name="ischecked" />
                                Same as the shipping address?
                            </label><br />
                            <label htmlFor="address">Address</label><br />
                            <input onClick={this.handlechange} value={this.state.address} type="text" name="address" id="address" placeholder="eg. New Delhi Vasant Vihar" /><br />
                            <label htmlFor="zip">ZIP/Postal Code</label><br />
                            <input onClick={this.handlechange} value={this.state.zip} type="number" name="zip"  id="zip" placeholder="eg.17757" /><br />
                            <label htmlFor="city">City</label><br />
                            <input onClick={this.handlechange} value={this.state.city} type="text" name="city" id="city" placeholder="eg.New Delhi" /><br />
                            <label htmlFor="country">Country</label><br />
                            <input onClick={this.handlechange} value={this.state.country} type="text" name="country" id="country" placeholder="eg.India" /><br />

                        </form> :
                        <form >
                            <h2 className="heading">Billing Address</h2>
                            <label className="checklabel" >
                                <input className="check" onClick={this.oncheck} type="checkbox" name="ischecked" />
                                Same as the shipping address?
                            </label><br />
                            <label htmlFor="address">Address</label><br />
                            <input onClick={this.handlechange} value={this.state.billing.address} type="text" name="address" id="address" placeholder="eg. New Delhi Vasant Vihar" /><br />
                            <label htmlFor="zip">ZIP/Postal Code</label><br />
                            <input onClick={this.handlechange} value={this.state.billing.address} type="number" name="zip"  id="zip" placeholder="eg.17757" /><br />
                            <label htmlFor="city">City</label><br />
                            <input onClick={this.handlechange} value={this.state.billing.address} type="text" name="city" id="city" placeholder="eg.New Delhi" /><br />
                            <label htmlFor="country">Country</label><br />
                            <input onClick={this.handlechange} value={this.state.billing.address} type="text" name="country" id="country" placeholder="eg.India" /><br />
                        </form>
                }


                {/* second way  */}


                
                {/* <form>
                    <h2 className="heading">Billing Address</h2>
                    <label className="checklabel" >
                        <input className="check" onClick={this.oncheck} type="checkbox" name="ischecked" />
                        Same as the shipping address?
                    </label><br />
                    {
                        this.state.ischeckd ?<Billing info={this.state}/> : <Billing info={this.state.billing}/>
                    }
                </form> */}
            </section>
        )
    }



}

export default Shipping