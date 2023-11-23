// VideoContainer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import LessonList from "./LessonList.jsx";
const VideoContainer = () => {
    const [videoInfo, setVideoInfo] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/get-all-lesson')
            .then(response => {
                setVideoInfo(response.data.data);
            })
            .catch(error => {
                console.error('Error fetching video data:', error);
            });
    }, [0]);

    const handleVideoButtonClick = (video) => {
        setSelectedVideo(video);
        setIsPlaying(false); // Pause the video when a new one is selected
    };

    return (
        <div className="video_layout">
            <div>
                <VideoPlayer videoInfo={selectedVideo} isPlaying={isPlaying} />
            </div>
            <div>
                {videoInfo.length > 0 ? (
                    videoInfo.map((item, index) => (
                        <LessonList
                            key={index}
                            videoTitle={item.videoTitle}
                            onClick={() => handleVideoButtonClick(item)}
                        />
                    ))
                ) : (
                    <p>No video data available.</p>
                )}
            </div>
        </div>
    );
};

export default VideoContainer;

