// import React from 'react'
// import axios from 'axios'
// import GetSingleInfo from './GetSingleInfo'


// class AllUsers extends React.Component {
//   state = {
//     users: null,
//     singleuser: null
//   };
//   async componentDidMount() {
//     const response = await axios('http://localhost:5000/api/profile/users')
//     this.setState({
//       users: response.data
//     })
//   }

//   render() {
//     const { users } = this.state
//     if (!users) {
//       return null
//     } else {
//       return <GetSingleInfo users={users} />
//     }
//   }
// }

// export default AllUsers