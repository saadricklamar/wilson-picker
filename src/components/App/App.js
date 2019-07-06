import React, { Component } from 'react';
import './App.scss';


class App extends Component  {
  constructor () {
    super()
    this.state = {
      colors: []
    }
  }

  generateColors = () => {
    let sixColors = []
    for (let i=0; i < 5; i++) {
      let color = this.generateHex()
      sixColors.push(color)
    }
    this.setState({colors: sixColors})
  }


  generateHex = () => {
    let hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
    let shuffledHexValues = hexValues.sort(() => Math.random() - 0.5)
    let color = shuffledHexValues.reduce((finalColor, hexValue) => {
        finalColor += hexValue
        return finalColor.slice(0, 6);
    }, '')
    return '#' + color;
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Wilson Picker</h1>
          <nav>
            <button onClick={() => this.generateColors()}>Generate a Palette</button>
            <button>Create a Project</button>
          </nav>
        </header>
        <div className='fences'>
          {this.state.colors.map(hex => {
            console.log(typeof hex)
            return (<div key={hex} className='fence' style={{backgroundColor: hex}}><i className="fas fa-unlock-alt"></i></div>)
          })}
          {/* <div className='fence'><i class="fas fa-unlock-alt"></i></div>
          <div className='fence'><i class="fas fa-unlock-alt"></i></div>
          <div className='fence'><i class="fas fa-unlock-alt"></i></div>
          <div className='fence'><i class="fas fa-unlock-alt"></i></div>
          <div className='fence'><i class="fas fa-unlock-alt"></i></div> */}
        </div>
      </div>
    );
  }
  
}

export default App;
