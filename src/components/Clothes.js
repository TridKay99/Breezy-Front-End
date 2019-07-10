import React from 'react'
import axios from 'axios'

class Clothes extends React.Component {
  state = {
    clothes: null
  };

  async componentDidMount() {
    const response = await axios('http://localhost:5000/api/clothes/')
    this.setState({
      clothes: response.data
    })
  }

  render() {
    const  { clothes } = this.state
    if (!clothes) {
      return null
    } else {
      return clothes.map((item, index) => {
        return <p key={index}>{item.name}{item.price.toFixed(2)}</p>
      })
    }
  }
}

export default Clothes