import React, { useEffect, useState } from "react";
import Video from './Video';
import VideoForm from './VideoForm';
import { getAllVideos, searchAllVideos } from "../modules/videoManager";

//display a list of all the video titles
// when component loads, it will call the getAllVideos fn,
// set the state of the videos array and re-render to display a list of video titles
//update VidList comp to use the new Video component
const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [wordsToSearch, setWordsToSearch] = useState("");

    const getVideos = () => {
        getAllVideos().then(videos => setVideos(videos));
    };



    // search input that uses API endpoint
    const handleSearchInput = (e) => {
        let inputString = e.target.value;
        setWordsToSearch(inputString);
    }

    //search for entered words; the search field clears
    const searchVideos = () => {
        searchAllVideos(wordsToSearch, false).then(videos => {
            setVideos(videos);

        });
    }

    useEffect(() => {
        getVideos();
    }, []);

    return (
        <div className="container">
            <div className="mb-5 mt-3">
                <input className="row justify-content-center" type="text"
                    name="search" id="search" placeholder="search for videos"
                    onChange={(e) => handleSearchInput(e)} value={wordsToSearch}
                    required autoFocus /> &nbsp;
                <button className="btn btn-success" type="submit"
                    onClick={() => searchVideos()}>Search</button>

            </div>
            <div className="mb-5">
                <VideoForm getVideos={getVideos} />
            </div>
            <h3> Videos </h3>
            <div className="row justify-content-center">
                {videos && videos.map((video) => (
                    <Video video={video} key={video.id} />
                ))}
            </div>
        </div>

    );
}

export default VideoList;