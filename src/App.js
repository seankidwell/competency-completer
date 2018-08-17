import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      states: []
    }
  }

  componentDidMount() {
    axios.get('/api/read/states').then(res => {
      this.setState({states: res.data})
      console.log(res.data)
    })
  }

  render() {
    let finalStates = this.state.states.map((state,i) => {
      return (
        <div key={i} className='statesNcapitals'>
          <div className='states'>
            <span>State Id: {state.state_id}</span><br/>
            <span>State Name: {state.state_name}</span>
          </div>
          <div className='capitals'>
            <span>Capital's State Id: {state.capitals_state_id}</span><br/>
            <span>Capital Id: {state.capital_id}</span><br/>
            <span>Capital Name: {state.capital_name}</span>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <span>One to One Relationship</span>
        {finalStates}
      </div>
    );
  }
}

export default App;
