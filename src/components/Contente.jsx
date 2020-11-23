import React, {useEffect, useState} from 'react'
import { Container, Col} from 'react-bootstrap'
import SingleVideo from './SingleVideo';
import Suggetion from './suggetion'
import Youtube from 'simple-youtube-api'



const SuggestionContente = (props) => {

    const [SelectedVideo, setSelectedVideo] = useState({})
    const [videoList, setVideoList] = useState([])
    const SearchValu = props.SearchValu
    const youtube = new Youtube(process.env.REACT_APP_API_KEY);
    
    const apiCall = () => {
        youtube.searchVideos(SearchValu, 5)
        .then((resultat) => {
            setVideoList(resultat)
            setSelectedVideo(resultat[0])
        })
        .catch((err) => console.log(err))
    }

    

    useEffect(() => {
        apiCall()

    }, [SearchValu])
    
    const selectedVideoCallback = (videoDetail) => {
        setSelectedVideo(videoDetail)
    }

    return (
       <React.Fragment>
           <Col xs={12} lg={8}>
                <SingleVideo video={SelectedVideo} />
           </Col>
           <Col xs={4} lg={4}>
                <Container>
                    <Suggetion videoList={videoList} ChangeSelected={selectedVideoCallback} />
                </Container>    
           </Col>
       </React.Fragment>
    )
}

export default SuggestionContente
