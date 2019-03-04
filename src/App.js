import React, { Component } from 'react'
import './styles/App.sass'

import MobileHeader from './components/MobileHeader'
import MobileNav from './components/MobileNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileHeader />
        <MobileNav />
      </div>
    );
  }
}

export default App;
