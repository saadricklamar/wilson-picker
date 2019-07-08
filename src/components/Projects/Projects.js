import React, { Component } from 'react';
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
                        return( <article>
                                    <h3> {project.title}</h3>
                                    <button><i class="fas fa-plus"></i></button>
                                </article>)
                    }) : null }
                </main>
            </div>
        )
    }
}


export default Projects;