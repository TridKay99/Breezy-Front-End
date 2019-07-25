import React from 'react'
import axios from 'axios'
import './cssComponents/AdminOrders.css'

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
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}api/orders`, config)
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
          <div className="adminOrderTitle">
            <h3>you have {orders.length}'s orders</h3>
          </div>
          <div className="adminOrdersContainer2">
            <div className="adminOrders2">
              {orders.map((order, index) => {
              return <button className="orderButtons" key={index} onClick={() => this.handleOrderInfo(order)}>{order.location} ${order.price.toFixed(2)}</button>
              })}
            </div>
          </div>
        </>
      )
    }
  }
}

export default AdminOrders