import React, { Component } from 'react';
import Projects from '../Projects/Projects'
import { Link, animateScroll as scroll } from "react-scroll";
import { postNewPalette }from '../../Util/apiCalls';
import {uid} from 'react-uid';
import './App.scss';

class App extends Component  {
  constructor () {
    super()
    this.state = {
      colors: [],
      lockedColors: [],
      projectID: 0
    }
  }

  componentDidMount = () => {
    this.generateColors();
  }
  
  generateColors = () => {
    if(!this.state.colors.length) {
      let colors = []
      for (let i = 0; i < 5; i++) {
        let colorObj = {
              isLocked: false,
              id: 0,
              hex: ''
              }
        colorObj.id = uid(i)      
        colorObj.hex = this.generateHex()
        colors.push(colorObj)
      }
      this.setState({colors})
    } else {
      let newColors = this.state.colors.map(color => {
        if(color.isLocked === false) {
          color.hex = this.generateHex()
          return {...color}
        } else {
          return {...color}
        }
      })
      this.setState({colors: newColors})
    }
  };


  generateHex = ind => {
    let hexValues = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
    let shuffledHexValues = hexValues.sort(() => Math.random() - 0.5)
    let color = shuffledHexValues.reduce((finalColor, hexValue) => {
        finalColor += hexValue
        return finalColor.slice(0, 6);
    }, '')
   return '#' + color; 
  }

  lockColor = (index, hex) => {
    let lockedColors = []
    this.state.colors.map(color => {
      if (color.hex === hex && color.isLocked === true) {
        color.isLocked = false;
        return;
      }
      if(color.hex === hex && color.isLocked === false) {
        color.isLocked = true;
        lockedColors = [...this.state.lockedColors, hex]
      }
    })
    this.setState({lockedColors})
  }



  render() {
 
    return (
      <div className="App">
        <header>
          <h1>Wilson Picker</h1>
          <nav>
            <div className='home-buttons' onClick={() => this.generateColors()}>Generate A Palette</div>
            <Link
              to='projects-section'
              smooth={true}
              duration= {10}
            >
            <div className='home-buttons'>Create A Project</div>
            </Link>
          </nav>
        </header>
        <div className='fences'>
          {this.state.colors.map((color, index) => {
            return (
            <div id={index} key={color.hex} className='fence' style={{backgroundColor: color.hex}}><i onClick={() => this.lockColor(index, color.hex)} className={color.isLocked ? 'fas fa-lock' : 'fas fa-unlock-alt'}></i></div>)
            })}
        </div>
        <Projects colors={this.state.colors}/>
      </div>
    )
  }
}

export default App;
