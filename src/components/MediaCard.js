import React from 'react'
function MediaCard(props){

        return (
            <div>
                <h1>my name  is {props.name} </h1>
                <h1>this is my tital {props.heroname} </h1>
                <img src={require('media/saturday.jpeg')} />


            </div>
        )
    }


export default MediaCard
