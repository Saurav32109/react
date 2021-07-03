import React, { Component, component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="header">
        {/* <div >
          Phone directory
        </div>
        <button> Add</button>
        <div>
          <span >Name</span><br />
          <span>Phone</span>
        </div> */}
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Type here" defaultValue="saurav"/>
      </div>
    );
  }
}

export default App;
