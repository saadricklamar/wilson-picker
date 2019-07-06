import React, { Component } from 'react';
import Projects from '../Projects/Projects'
import { Link, animateScroll as scroll } from "react-scroll";
import './App.scss';


class App extends Component  {
  constructor () {
    super()
    this.state = {
      colors: []
    }
  }

  generateColors = () => {
    let fiveColors = []
    for (let i=0; i < 5; i++) {
      let color = this.generateHex()
      fiveColors.push(color)
    }
    this.setState({colors: fiveColors})
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
            <button className='home-button' onClick={() => this.generateColors()}>Generate a Palette</button>
            <Link
              activeClass='active'
              to='projects-section'
              spy={true}
              smooth={true}
              duration= {10}
            >
            <button className='home-button'>Create a Project</button>
            </Link>
          </nav>
        </header>
        <div className='fences'>
          {this.state.colors.map(hex => {
            return (<div key={hex} className='fence' style={{backgroundColor: hex}}><i className="fas fa-unlock-alt"></i></div>)
          })}
        </div>
        <Projects/>
      </div>
    )
  }
}

export default App;
