import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

class Checkout extends React.Component {
  onToken = (token, addresses) => {
  };

  render() {
    return (
      <StripeCheckout
        stripeKey={process.env.REACT_APP_BACKEND_URL}
        token={this.onToken}
        label="Pay with 💳"
      />
    )
  }
}

export default Checkout