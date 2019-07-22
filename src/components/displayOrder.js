import React from 'react'
import './cssComponents/DisplayOrder.css'


class DisplayOrder extends React.Component {

  render() {
    if (!this.props.order) {
      return null
    } else {
      return (
      <div className="clothingContainer">
        <div className="clothingTitle">
          <h3>Email: {this.props.order.user.email}</h3>
          <h4>Address: {this.props.order.location}</h4>
        </div>
        <div className="orderContainer">
          <div className="insideOrderContainer">
            <div className="order">
              <h3>Order:</h3> {this.props.order.clothes.map((clothes, index) => {
                if (clothes === "5d281b5a95643703ba61b8d1") {
                  return <p key={index} >Heavy Coat $24.20</p>
                } else if (clothes === "5d281b8d95643703ba61b8d2") {
                  return <p key={index}>Trousers $12.10</p>
                } else if (clothes === "5d281b8d95643703ba61b8d3") {
                  return <p key={index}>Jacket $13.10</p>
                } else if (clothes === "5d281b8d95643703ba61b8d4") {
                  return <p key={index}>Dress $22.00</p>
                } else if (clothes === "5d281b8d95643703ba61b8d5") {
                  return <p key={index}>Skirt $12.10</p>
                } else if (clothes === "5d281b8d95643703ba61b8d6") {
                  return <p key={index}>Blouse $12.10</p>
                } else if (clothes === "5d281b8d95643703ba61b8d7") {
                  return <p key={index}>Shirt $5.00</p>
                } else if (clothes === "5d281b8d95643703ba61b8d8") {
                  return <p key={index}>Tie $11.00</p>
                } else if (clothes === "5d281b8d95643703ba61b8d9") {
                  return <p key={index}>Scarf $12.20</p>
                }
              })}
            </div>
          </div>
          <h4>Price: ${this.props.order.price.toFixed(2)}</h4>
        </div>
      </div>
      )
    }
  }
}

export default DisplayOrder