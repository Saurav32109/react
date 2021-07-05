import React, { Component} from 'react';
import Header from "./Header"
class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <button> Add</button>
        <div>
          <span >Name</span><br />
          <span>Phon</span>
        </div>
        </div>
    );
  }
}

export default App;
