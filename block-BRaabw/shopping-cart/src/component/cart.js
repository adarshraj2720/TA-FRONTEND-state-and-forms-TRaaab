import React from "react";


class Cart extends React.Component {
    constructor(props) {
        super()
        this.state = ({
            istrue: true,

        })
    }


    handletrue = () => {
        this.setState({
            istrue: !this.state.istrue
        })
    }


    handleremove = () => {
        this.setState({
            istrue: !this.state.istrue
        })
    }


    render() {
        return (
            <>
                <div >
                    <figure>
                        <img className="bagicon" onClick={this.handletrue} src={'/static/bag-icon.png'} ></img>
                    </figure>
                    <small className="cartlength">{this.props.info.length}</small>
                </div>

                {
                    this.state.istrue ? ""
                        :
                        <div className="cartcategory">
                            <div className="shoppingsummary">
                                <p className="summary">Shopping Summary</p>
                                <button onClick={this.handleremove}>❌</button>
                            </div>

                            {
                                this.props.info.map((a) => {
                                    return (
                                        <div className="cartlist">
                                        <img className="cartproductimg" src={'/static/products/' + `${a.sku}` + '_1.jpg'}></img>
                                            <p>{a.title}</p>
                                            <p>Quantity:1</p>
                                            <p>Price:{a.currencyFormat}{a.price}</p>
                                        
                                        </div>
                                    )
                                })
                            }
                            <div className="shoppingsummary">
                                <p className="summary">SubTotal:{this.props.info.reduce((acc, cv) => {
                                    acc = acc + cv.price
                                    return acc;
                                }, 0)}</p>
                            </div>
                        </div>
                }
            </>
        )
    }

}

export default Cart