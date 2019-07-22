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
              if (clothes === "5d281b5a95643703ba61b8d1") {
                return <p>Heavy Coat</p>
              } else if (clothes === "5d281b8d95643703ba61b8d2") {
                return <p>Trousers</p>
              } else if (clothes === "5d281b8d95643703ba61b8d3") {
                return <p>Jacket</p>
              } else if (clothes === "5d281b8d95643703ba61b8d4") {
                return <p>Dress</p>
              } else if (clothes === "5d281b8d95643703ba61b8d5") {
                return <p>Skirt</p>
              } else if (clothes === "5d281b8d95643703ba61b8d6") {
                return <p>Blouse</p>
              } else if (clothes === "5d281b8d95643703ba61b8d7") {
                return <p>Shirt</p>
              } else if (clothes === "5d281b8d95643703ba61b8d8") {
                return <p>Tie</p>
              } else if (clothes === "5d281b8d95643703ba61b8d9") {
                return <p>Scarf</p>
              }
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