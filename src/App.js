/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import './styles/App.sass'

import Layout from './components/Layout'

// Opera 8 - 75 
const isOpera = (!!window.opr && !! window.opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

// Firefox 1.0 - 82.0
const isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window.safari.pushNotification));

if (/Edg/.test(navigator.userAgent)) {
  alert("You are using a browser (Edge) that is currently not supported by this page. Please switch to Chrome, Firefox or Opera for a better user experience. Thank you!");
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <Layout />
        </div>
    );
  }
}

export default App;
