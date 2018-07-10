import React, {Component} from 'react';
import Intro from './component/intro';
import Series from './component/Series';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Series searcher</h1>
        <Series />
      </div>
    )
  }
}

export default App;