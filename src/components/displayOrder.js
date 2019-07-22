import React from 'react'
import './cssComponents/DisplayOrder.css'


class DisplayOrder extends React.Component {

  render() {
    if (!this.props.order) {
      return null
    } else {
      console.log(this.props.order)
      return (
      <div className="clothingContainer">
        <div className="clothingTitle">
          <h3>Email: {this.props.order.user.email}</h3>
          <h4>Address: {this.props.order.location}</h4>
        </div>
        <div className="order">
          <div className="insideOrderBox">
            <h3>Order:</h3> {this.props.order.clothes.map((clothes, index) => {
              return <p key={index}>{clothes}</p>
            })}
          </div>
          <h4>Price: ${this.props.order.price.toFixed(2)}</h4>
        </div>
      </div>
      )
    }
  }
}

export default DisplayOrder