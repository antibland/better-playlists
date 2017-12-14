import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render() {
    var styles = {
      ul: {
        display: 'flex',
        padding: 0,
        margin: 0,
        'list-style': 'none',
        'justify-content': 'space-around'
      }
    }
    return (
      <ul style={styles.ul}>
        <li style={styles.li}>Number text</li>
        <li>Number text</li>
      </ul>
    )
  }
}

class Filter extends Component {
  render() {
    let labelFilter = 'Filter'
    return (
      // <img>
      <label>{labelFilter}
        <input type="text" placeholder="Search..." />
      </label>
    )
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{flex: 1}}>
        <h3>Playlist name</h3>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Title</h1>
          <Aggregate />
          <Filter />
          <div style={{display: 'flex'}}>
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
