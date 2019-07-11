import React from 'react'

class GetSingleInfo extends React.Component {
  state = {
    user: null
  }
  
  componentDidMount() {
    console.log('userinfo did mount')
  }

  async componentDidUpdate() {
      console.log('USERINFO DID UPDATE')
      if (this.props.users) {
      const {user} = this.props.users;
      fetch(user)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          user: json
        });
      })
    }
  }

  render() {
    if (this.state.user) {
      return (
      <div>
          <h3>New Update!!!</h3>
          {/* <h4>{email}'s Page</h4> */}
      </div>
      );
    }
    return null
  }
}

export default GetSingleInfo

