import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { conditionalExpression } from '@babel/types';




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
            name: "Tie",
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
        return (
            <Fragment>
            <h1>Orders page</h1>
            <button onClick={this.HeavyCoatadd}> Add Heavy Coat </button>
            <button onClick={this.Jacketadd}> Add Jacket </button> 
            <button onClick={this.Trousersadd}> Add Trousers </button>
            <form className="form">
            <div className="form-group">
            <input type="location" placeholder="Location" name="location" onChange={this.handleLocation} required />
            </div>

            <input type="submit" className="btn btn-primary" value="Log In" onClick={this.handleLogin} />
            </form>
            </Fragment>
        )
    }
}

export default Order;