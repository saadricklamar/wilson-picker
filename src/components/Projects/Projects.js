import React, { Component } from 'react';
import {uid} from 'react-uid';
import { postNewProject, deleteProject, postNewPalette }from '../../Util/apiCalls';
import Project from '../Project/Project';
import './Projects.scss';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
          projects: [],
          palettes: [],
          title: '',
          paletteName: '',
          projectID: ''
        }
    }

    componentDidMount = () => {
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

    handleChange = e => {
        const {name, value}  = e.target;
        this.setState({[name]: value})
    }

    generateProject = e => {
        e.preventDefault();
        let newProject = {}
        newProject.project_name = this.state.title
        let projects = [...this.state.projects, newProject]
        this.setState({projects})
        this.refs.title.value = '';
        postNewProject(newProject);
    }

    deleteAProject = (id) => {
        deleteProject(id);
        let withoutDeleted = this.state.projects.filter(proj=> {
          return proj.id !== id
        })
        this.setState({projects: withoutDeleted})
      }

      
    addPalette = (id) => {
        let newPalette = this.props.colors.reduce((obj, color, index) => {
          obj.palette_name = this.state.paletteName;
          obj.project_id = id;
          if(!obj[`color_${index+1}`]) {
            obj[`color_${index+1}`] = color.hex
          }
          return obj
        }, {})
        postNewPalette(newPalette);
      }
    

    render() {
        return (
            <div id='projects-section'>
                <nav>
                <h2>Name Your Project</h2>
                <form onSubmit={this.generateProject}>
                    <input ref ='title' name='title' type='text' onChange={this.handleChange} placeholder='Project Title...'/>
                    <button className='save-project'>Save</button>
                </form>
                </nav>
                <main>
                    {this.state.projects.map(project => { 
                        return( <article key={project.id}>
                                    <h3> {project.project_name}</h3>
                                    <section className='palette-form'>
                                        <input name='paletteName' onChange={this.handleChange} placeHolder='Add A Palette Name...'/>
                                        <button onClick={() => this.addPalette(project.id)}>Save Palette</button>
                                    </section>
                                    <i className="fas fa-trash" onClick={()=> this.deleteAProject(project.id)}></i>
                                    <Project projects={this.state.projects} palettes={this.state.palettes}/>
                                </article>)       
                    })}
                </main>
            </div>
        )
    }
}


export default Projects;