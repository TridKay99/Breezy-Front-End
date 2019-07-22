import React from 'react'


class DisplayOrder extends React.Component {

  componentDidMount() {
    if (this.props.order) {
      const { order } = this.props.order 
      fetch(order)
      .then(resp => resp.json())
      .then(json => {
        console.log(json)
      })
    }
  }

  render() {
    if (!this.props.order) {
      return null
    } else {
      return <h1>order fuck face</h1>
    }
  }
}

export default DisplayOrder