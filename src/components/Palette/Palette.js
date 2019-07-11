import React from 'react';
import './Palette.scss';

const Palette = (props) => {
    const displayPalettes = props.palettes.map(palette => {
        return(
            <div>
                <h4>{palette.palette_name}</h4>
                <section className='palette-container'>
                <div className='p' style={{backgroundColor: palette.color_1}}></div>
                <div className='p' style={{backgroundColor: palette.color_2}}></div>
                <div className='p' style={{backgroundColor: palette.color_3}}></div>
                <div className='p' style={{backgroundColor: palette.color_4}}></div>
                <div className='p' style={{backgroundColor: palette.color_5}}></div>
                </section>
            </div>
            )
    })
    return(
    <div>
        {displayPalettes}
    </div>)
    
}

export default Palette;