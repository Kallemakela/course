import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>
            Welcome to the Programming basics course!
          </h1>

          <div className='feature'>
            <h3>Languages available</h3>
            <div className='list'>
              <p> &#62; R</p>
              <p> &#62; Python</p>
              <p> &#62; JavaScript</p>
            </div>
          </div>
          
          <div className='feature'>
            <h3>Specializations available</h3>
            <div className='list ml-1'>
              <p> &#62; Data processing and analysis</p>
              <p> &#62; Web development</p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
