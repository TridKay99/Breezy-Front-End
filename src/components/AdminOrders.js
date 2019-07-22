import React from 'react'
import axios from 'axios'

class AdminOrders extends React.Component {
  state = {
    orders: null
  }

  async componentDidMount() {
    const config = {
      headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${localStorage.getItem('token')}`
      }
    }
    const response = await axios.get('http://localhost:5000/api/orders', config)
    console.log(response.data)
    this.setState({
      orders: response.data
    })
  }

  handleOrderInfo(order) {
    this.props.orderSingle(order)
  }

  render() {
    const { orders } = this.state
    if (!orders) {
      return null
    } else {
      return(
        <>
        <h1>you have {orders.length}'s orders</h1>
        {orders.map((order, index) => {
        return <button className="orderButtons" key={index} onClick={() => this.handleOrderInfo(order)}>{order.location} ${order.price.toFixed(2)}</button>
        })}
        </>
      )
    }
  }
}

export default AdminOrders