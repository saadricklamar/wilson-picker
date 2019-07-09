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
      projects: [],
      palettes: [],
      projectID: 0
    }
  }

  componentDidMount = () => {
    this.generateColors();
    this.fetchProjects();
    this.fetchPalettes();
  }

  fetchProjects = async () => {
    const projectURL = 'http://localhost:3001/api/v1/projects';
    const response = await fetch(projectURL)
    const projects = await response.json();
    this.setState({ projects })
  }

  fetchPalettes = async () => {
    const paletteURL = 'http://localhost:3001/api/v1/palettes';
    const response = await fetch(paletteURL)
    const palettes = await response.json();
    this.setState({ palettes })
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

  addPalette = () => {
    let newPalette = this.state.colors.reduce((obj, color, index) => {
      obj.palette_name = 'Hello moto';
      obj.project_id = this.state.projectID
      if(!obj[`color_${index+1}`]) {
        obj[`color_${index+1}`] = color.hex
      }
      return obj
    }, {})
    console.log(newPalette)
    postNewPalette(newPalette);
  }


  grabProjectId = (id) => {
    this.setState({projectID: id})
  }


  render() {
    console.log(this.state.projectID)
    return (
      <div className="App">
        <header>
          <h1>Wilson Picker</h1>
          <nav>
            <button className='home-button' onClick={() => this.generateColors()}>Generate a Palette</button>
            <Link
              to='projects-section'
              smooth={true}
              duration= {10}
            >
            <button className='home-button'>Create a Project</button>
            </Link>
            <Link
              to='projects-section'
              smooth={true}
              duration= {10}
            >
            <button className='home-button' onClick={() => this.addPalette()}>Save Palette</button>
            </Link>
          </nav>
        </header>
        <div className='fences'>
          {this.state.colors.map((color, index) => {
            return (
            <div id={index} key={color.hex} className='fence' style={{backgroundColor: color.hex}}><i onClick={() => this.lockColor(index, color.hex)} className={color.isLocked ? 'fas fa-lock' : 'fas fa-unlock-alt'}></i></div>)
            })}
        </div>
        <Projects projects={this.state.projects} grabId={this.grabProjectId}/>
      </div>
    )
  }
}

export default App;
