import React from 'react'
import {ListGroup} from 'react-bootstrap'
import "./stylesheet/suggestion.css"

const Suggetion = ({videoList, ChangeSelected}) => {
    
    const ChangeSelectedVideo = (video) => {
        ChangeSelected(video)
    } 
    return (
        
        <ListGroup>
            
            {videoList.length > 0 && videoList.map(data => {
                return <ListGroup.Item style={{cursor:"pointer"}} key={data.id} onClick={()=> ChangeSelectedVideo(data)}> 
                <div style={{display:"flex"}}>
                    <div style={{padding:"0 5px"}}>
                        <img src={data.thumbnails.medium.url} height="80px" alt=""/>
                    </div>
                    <div>
                        <p className="para">{data.title}</p>
                        <p className="para">{data.channel.title}</p>
                    </div>
                </div>
                
                </ListGroup.Item>
            })}       
       </ListGroup>
    )
}

export default Suggetion
