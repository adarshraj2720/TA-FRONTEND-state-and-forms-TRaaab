import React from "react";


class Billing extends React.Component {
    constructor(props) {
        super()
        this.state = ({

        })
    }
    render() {
        return (
            <>
                <from>
                    <label htmlFor="address">Address</label><br />
                    <input onChange={this.handleInput} value={this.props.info.address} type="text" name="address" id="address" placeholder="eg. New Delhi Vasant Vihar" /><br />
                    <label htmlFor="zip">ZIP/Postal Code</label><br />
                    <input onChange={this.handleInput} value={this.props.info.zip} type="number" name="zip" id="zip" placeholder="eg.17757" /><br />
                    <label htmlFor="city">City</label><br />
                    <input onChange={this.handleInput} value={this.props.info.city} type="text" name="city" id="city" placeholder="eg.New Delhi"/><br />
                    <label htmlFor="country">Country</label><br />
                    <input onChange={this.handleInput} value={this.props.info.country} type="text" name="country" id="country" placeholder="eg.India" /><br />
                </from>

            </>
        )
    }
}

export default Billing