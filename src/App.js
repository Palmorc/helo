import React, {Component} from 'react';
import './App.css';
import Auth from './component/Auth/Auth'
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Nav from './component/Nav/Nav'
import Post from './component/Post/Post'
import Routes from './route.js'

export default class App extends Component {
  render() {
    return (<div className="App">
      <Nav/>
      <Routes/>
    </div>);
  }
}
