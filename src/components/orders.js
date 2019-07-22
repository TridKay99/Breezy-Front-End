import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { conditionalExpression } from '@babel/types';
import { Link } from 'react-router-dom';
import Icon from '../Group.svg';
import './Orders.css';


class Order extends Component {
    state = {
        cart: [],
        location: null,
        ids: [],
        heavyCoat: {
            name: "Heavy Coat",
            price: 24.20,
            quanity: 0,
            id: "5d281b5a95643703ba61b8d1"
        },
        Trousers: {
            name: "Trousers",
            price: 12.10,
            quanity: 0,
            id: "5d281b8595643703ba61b8d2"
        },
        Jacket: {
            name: "Jacket",
            price: 13.10,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d3"
        },

        Dress: {
            name: "Dress",
            price: 22,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d4"
        },
        Skirt: {
            name: "Skirt",
            price: 12.10,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d5"
        },
        Blouse: {
            name: "Blouse",
            price: 12.10,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d6"
        },
        Shirt: {
            name: "Shirt",
            price: 5,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d7"
        },
        Tie: {
            name: "Tie",
            price: 11,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d8"
        },
        Scarves: {
            name: "Scarf",
            price: 12.20,
            quanity: 0,
            id: "5d281b8d95643703ba61b8d9"
        }
    }

    handleLocation = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    HeavyCoatadd = () => {
        const addedClothes = this.state.cart
        console.log(this.state.cart)
        const addedIds = this.state.ids
        addedClothes.push(this.state.heavyCoat)
        addedIds.push(this.state.heavyCoat.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Jacketadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Jacket)
        addedIds.push(this.state.Jacket.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Trousersadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Trousers)
        addedIds.push(this.state.Trousers.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Dressadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Dress)
        addedIds.push(this.state.Dress.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Skirtadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Skirt)
        addedIds.push(this.state.Skirt.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Blouseadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Blouse)
        addedIds.push(this.state.Blouse.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Shirtadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Shirt)
        addedIds.push(this.state.Shirt.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Tieadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Tie)
        addedIds.push(this.state.Tie.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    Scarvesadd = () => {
        const addedClothes = this.state.cart
        const addedIds = this.state.ids
        addedClothes.push(this.state.Scarves)
        addedIds.push(this.state.Scarves.id)
        this.setState({
            clothes1: addedClothes,
            ids: addedIds
        })
    }

    handleLogin = async (e) => {
        e.preventDefault()
        let result = this.state.cart.map(a => a.price);
        let price = result.reduce((a, b) => a + b, 0);
        const order = {
            clothes: this.state.ids,
            location: this.state.location,
            price: price
        }
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-auth-token': `${localStorage.getItem('token')}`
                    }
                }

                // const body = JSON.stringify(order1)
                console.log('here')
                const res = await axios.post('/api/orders', order, config)
                console.log(res.data)
            } catch (err) {
                console.error(err.response.data)
            }
        }

       render() {
        let trousersCount = this.state.cart.filter((item) => item.name === "Trousers").length
        let jacketCount = this.state.cart.filter((item) => item.name === "Jacket").length
        let dressCount = this.state.cart.filter((item) => item.name === "Dress").length
        let skirtCount = this.state.cart.filter((item) => item.name === "Skirt").length
        let blouseCount = this.state.cart.filter((item) => item.name === "Blouse").length
        let shirtCount = this.state.cart.filter((item) => item.name === "Shirt").length
        let tieCount = this.state.cart.filter((item) => item.name === "Tie").length
        let scarvesCount = this.state.cart.filter((item) => item.name === "Scarves").length
        let heavycoatCount = this.state.cart.filter((item) => item.name === "Heavy Coat").length

        return (
            <Fragment>
            <div className="MainContainer-O">
                <div className="navbar-c" id="top">
                    <ul className="navbar">
                        <div className="title">
                            <li><Link className="Name" to={"/"}>IRON MAIDEN</Link></li>
                            <li><img src={Icon} alt="icon" className="icon"/></li>
                            <li><i className="fa fas fa-spinner fa-spin"></i></li>
                        </div>
                        <div className="content">
                            <li><Link className="Hiw" to={"/"}>HOW IT WORKS</Link></li>
                            <li><Link className="Price" to={"/"}>PRICING</Link></li>
                            <li><Link className="Faq" to={"/"}>FAQ</Link></li>
                            <li><Link className="Contact" to={"/"}>CONTACT</Link></li>
                            <li><Link className="Contact" to={"/profile"}>PROFILE</Link></li>
                            <li><Link className="Contact" to={"/"}>SIGN OUT</Link></li>
                        </div>
                    </ul>
                </div>
                <div className="Orders-Title">
                    <p className="welcome-o">WELCOME</p>
                    <p className="name-o">NAME, CHOOSE YOUR ORDERS</p>
                </div>
                <div className="Orders-grid-container">
                    <div className="Orders-grid-box">
                        <div className="Orders-left">
                            <div className="Orders-left-box">
                                <p className="clothings">Clothings</p>
                                <div className="content-grid-o">
                                    <div className="orders-name-left-box">
                                        <button className="trousers" onClick={this.Trousersadd}> ADD TROUSERS </button>
                                        <button className="jacket" onClick={this.Jacketadd}> ADD JACKET </button> 
                                        <button className="dress" onClick={this.Dressadd}> ADD DRESS </button>
                                        <button className="skirt" onClick={this.Skirtadd}> ADD SKIRT </button>
                                        <button className="blouse" onClick={this.Blouseadd}> ADD BLOUSE </button>
                                        <button className="shirt" onClick={this.Shirtadd}> ADD SHIRT </button>
                                        <button className="tie" onClick={this.Tieadd}> ADD TIE </button>
                                        <button className="scarves" onClick={this.Scarvesadd}> ADD SCARVES </button>
                                        <button className="heavy-coat" onClick={this.HeavyCoatadd}> ADD HEAVY COAT </button>
                                    </div>
                                    <div className="orders-name-right-box">
                                        <p>$12.10</p>
                                        <p>$13.10</p>
                                        <p>$22.00</p>
                                        <p>$12.10</p>
                                        <p>$12.10</p>
                                        <p>$5.00</p>     
                                        <p>$11.00</p>     
                                        <p>$12.20</p>     
                                        <p>$24.20</p>     
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="Order-right">
                            <div className="Order-right-box">
                                <div className="order-cart">
                                    <p className="order-cart-word">Order Cart</p>
                                </div>
                                <div className="cart-grid-o">
                                    <div className="cart-grid-container">
                                         <div className="cart-name-top-box">

                                           
                                        {trousersCount > 0 && <p>{trousersCount}</p>}
                                        {jacketCount > 0 && <p>{jacketCount}</p>}
                                        {dressCount > 0 && <p>{dressCount}</p>}
                                        {skirtCount > 0 && <p>{skirtCount}</p>}
                                        {blouseCount > 0 && <p>{blouseCount}</p>}
                                        {shirtCount > 0 && <p>{shirtCount}</p>}
                                        {tieCount > 0 && <p>{tieCount}</p>}
                                        {scarvesCount > 0 && <p>{scarvesCount}</p>}
                                        {heavycoatCount > 0 && <p>{heavycoatCount}</p>}
                                           
                                                
                                        </div>
                                        <div className="cart-name-left-box">
                                        {trousersCount > 0 && <button className="trousers" > TROUSERS </button> }
                                        {jacketCount > 0 && <button className="jacket" > JACKET </button> }
                                        {dressCount > 0 && <button className="dress" > DRESS </button> }
                                        {skirtCount > 0 && <button className="dress" > SKIRT </button> }
                                        {blouseCount > 0 && <button className="dress" > BLOUSE </button> }
                                        {shirtCount > 0 && <button className="dress" > SHIRT </button> }
                                        {tieCount > 0 && <button className="dress" > TIE </button> }
                                        {scarvesCount > 0 && <button className="dress" > SCARVES </button> }
                                        {heavycoatCount > 0 && <button className="dress" > HEAVY COAT </button> }

                                            <div><h1>TOTAL</h1></div>
                                        
                                        </div>
                                        <div className="cart-name-middle-box">
                                        {trousersCount > 0 &&  <p>$ {(trousersCount * this.state.Trousers.price).toFixed(2)}</p> }
                                        {jacketCount > 0 &&  <p>$ {(jacketCount * this.state.Jacket.price).toFixed(2)}</p> }
                                        {dressCount > 0 &&  <p>$ {(dressCount * this.state.Dress.price).toFixed(2)}</p> }
                                        {skirtCount > 0 &&  <p>$ {(skirtCount * this.state.Skirt.price).toFixed(2)}</p> }
                                        {blouseCount > 0 &&  <p>$ {(blouseCount * this.state.Blouse.price).toFixed(2)}</p> }
                                        {shirtCount > 0 &&  <p>$ {(shirtCount * this.state.Shirt.price).toFixed(2)}</p> }
                                        {tieCount > 0 &&  <p>$ {(tieCount * this.state.Tie.price).toFixed(2)}</p> }
                                        {scarvesCount > 0 &&  <p>$ {(scarvesCount * this.state.Scarves.price).toFixed(2)}</p> }
                                        {heavycoatCount > 0 &&  <p>$ {(heavycoatCount * this.state.heavyCoat.price).toFixed(2)}</p> }
                                           
                                            <div classname="total-price">
                                                <h1 id="total-price-number">{(trousersCount * this.state.Trousers.price + jacketCount * this.state.Jacket.price + dressCount * this.state.Dress.price + skirtCount * this.state.Skirt.price + blouseCount * this.state.Blouse.price + shirtCount * this.state.Shirt.price + tieCount * this.state.Tie.price + scarvesCount * this.state.Scarves.price + heavycoatCount * this.state.heavyCoat.price).toFixed(2)}</h1> <p className="total-price-p"> (including 10% GST.)</p>
                                            </div>
                                           
                                        </div>
                                        <div className="cart-name-right-box">
                                            <input type="button" id="check-out"  value="CHECK OUT" onClick={this.handleLogin} />
                                        </div>
                                    </div>
                                </div>
                        </div>
                                
                                </div>
                            
                        </div>
                        </div>
                    </div>                    
              
            </Fragment>
        )
    }
}

export default Order;



{/* <div className="Content-grid-O">
<div className="Content-grid-container-o">
    <div className="left-grid-container-o">
        <button onClick={this.HeavyCoatadd}> Add Heavy Coat </button>
        <button onClick={this.Jacketadd}> Add Jacket </button> 
        <button onClick={this.Trousersadd}> Add Trousers </button>
        <button onClick={this.Dressadd}> Add Dress </button>
        <button onClick={this.Skirtadd}> Add Skirt </button>
        <button onClick={this.Blouseadd}> Add Blouse </button>
        <button onClick={this.Shirtadd}> Add Shirt </button>
        <button onClick={this.Tieadd}> Add Tie </button>
        <button onClick={this.Scarvesadd}> Add Scarves </button>
    </div>
    <div className="right-grid-container-o">
        <form className="form">
            <div className="form-group">
                <input type="location" placeholder="Location" name="location" onChange={this.handleLocation} required />
            </div>

            <input type="button" id="Login"  value="Submit Order" onClick={this.handleLogin} />
        </form>
    </div>
</div>    
</div> */}