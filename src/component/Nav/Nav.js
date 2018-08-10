import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'

function Nav(props) {
  let propTypes = {
    location: PropTypes.object.isRequired,
  }
  const {location} = props
  if (location.pathname !== '/') {
    return (<div>
      <Link to='/dashboard'><button>Home</button></Link>
      <Link to='/new'><button>Compose</button></Link>
      <Link to='/'><button>Logout</button></Link>
    </div>)
  } else {
    return (<div></div>)
  }
}
export default withRouter(Nav)
