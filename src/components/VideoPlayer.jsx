import {useEffect, useRef} from "react";

const VideoPlayer = ({ videoInfo, isPlaying }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div>
            {videoInfo && (
                <video ref={videoRef} controls width="850" height="400" autoPlay>
                    <source src={videoInfo.videoURL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoPlayer;
