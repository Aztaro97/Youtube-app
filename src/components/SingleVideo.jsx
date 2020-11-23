import React from 'react'

const SingleVideo = ({video}) => {

    return (
        <React.Fragment>
            <iframe width="700" height="400" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h2>{video.title}</h2>
            <p> {video.description} </p>
        </React.Fragment>
        )
}

export default SingleVideo
