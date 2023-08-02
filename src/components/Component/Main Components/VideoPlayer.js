import React, { Component } from 'react';
import vidData from '../../../data/videos.json';


function VideoPlayer(props) {
    const attribute = props.attribute;
    const className = props.className;
    const id = props.id;
    const title = props.title;
    
        return (
            <section className='main__video'>
                <video controls>
                    <source src={vidData}></source>
                </video>
            </section>
        )
}