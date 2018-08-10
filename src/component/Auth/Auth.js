import React, { Component } from 'react'

import { connect } from 'react-redux'

class Auth extends Component{

updateUsername = (e) => {
  this.setState({
    state.info.name : e.target.value
  })
}

updatePassword = (e) => {
  this.setState({
    state.info.password : e.target.value
  })
}

  render(){
    return(
      <div>
        <input placeholder='Username' onChange ={this.updateUsername} />
        <input placeholder='Password' onChange ={this.updatePassword}/>
        <button>Login</button>
        <button onClick={this.newUser}>Register</button>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return{
    user: state.info
  }
}

export default connect(mapStateToProps)(Auth)
