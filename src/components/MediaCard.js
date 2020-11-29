import React from 'react'


function MediaCard(props){

        return (
            <div>
                <h1>my name  is {props.name} </h1>
                <h1>this is my tital {props.heroname} </h1>
               <img src="/mediafile/saturday.jpeg" alt="abc"/>


            </div>
        )
    }


export default MediaCard
