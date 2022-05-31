import React from "react";

import menu from '../data.json'

class Food extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            menu: menu,
        })
    }

    handlecategory = (event) => {
        let cat = event.target.innerText;
        let menulist = menu.filter((list) => list.category === cat)
        if (cat === "All") {
            this.setState({
                menu: menu
            })
        } else {
            this.setState({
                menu: menulist
            })
        }

        console.log(menulist)
    }


    render() {
        return (
            <>
                <div className="btn">
                    <button onClick={(event) => { this.handlecategory(event) }}>All</button>
                    <button onClick={(event) => { this.handlecategory(event) }}>Breakfast</button>
                    <button onClick={(event) => { this.handlecategory(event) }}>Lunch</button>
                    <button onClick={(event) => { this.handlecategory(event) }}>Shakes</button>
                </div>
                <div className="Allcard">
                {
                    
                    this.state.menu.map((item) => {

                        return (

                        <>

                            {/* { <h3>{item.category}</h3> } */}
                            <div className="menu-card">
                                <figure>
                                    <img src={item.img} alt="/"></img>
                                </figure>

                                <div className="menu-details">
                                    <div className="menu-title">
                                        <h2>{item.title}</h2>
                                        <small>{item.price}</small>
                                    </div>

                                    <p>{item.desc}</p>
                                </div>

                            </div>
                        </>

                        )
                    })
                   
                }
                 </div>
            </>
        )
    }

}

export default Food;