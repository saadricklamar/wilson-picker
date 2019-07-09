import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {uid} from 'react-uid';
import './Projects.scss';

class Projects extends Component {
    constructor() {
        super()
        this.state = {
          projects: [],
          title: ''
        }
    }

    handleTitleChange = e => {
        const {value}  = e.target;
        this.setState({title: value})
    }

    generateProject = e => {
        e.preventDefault();
        let newProject = {}
        newProject.title = this.state.title
        let projects = [...this.state.projects, newProject]
        this.setState({projects})
        this.refs.title.value = '';
    }


    render() {
        return (
            <div id='projects-section'>
                <nav>
                <h2>Name Your Project</h2>
                <form onSubmit={this.generateProject}>
                    <input ref ='title' name='title' type='text' onChange={this.handleTitleChange} placeholder='Project Title...'/>
                    <button>Save</button>
                </form>
                </nav>
                <main>
                    {this.state.projects.length ? this.state.projects.map(project => {
                        return( <article key={uid}>
                                    <h3> {project.title}</h3>
                                    <Link
                                        to='App'
                                        smooth={true}
                                        duration= {10}
                                    >
                                        <button><i className="fas fa-plus"></i></button>
                                    </Link> 
                                </article>)
                    }) : null }
                </main>
            </div>
        )
    }
}


export default Projects;