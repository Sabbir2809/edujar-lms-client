import LessonList from "./LessonList.jsx";

const VideoButton = ({ videoTitle, onClick }) => {
    return (
        <LessonList videoTitle={videoTitle} onClick={onClick}/>
    );
};

export default VideoButton;
