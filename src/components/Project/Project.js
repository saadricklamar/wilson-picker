import React, { Component } from 'react';
import Palette from '../Palette/Palette';
import './Project.scss'


class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    displayProjectsAndPalettes = () => {
        let combineData = this.props.projects.map(project => {
            let matchingPalettes = this.props.palettes.filter(palette => {
                return palette.project_id === project.id
            })
            return <Palette project={project} palettes={matchingPalettes}/>
        })
        return combineData;
    }

    render() {
        const displayAll = this.displayProjectsAndPalettes();
        return(
        <div>
            {displayAll}
        </div>)
    }
}
export default Project;