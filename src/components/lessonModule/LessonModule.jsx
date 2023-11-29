import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { GET_MODULE_LESSON_API_REQUEST } from "../../apiRequest/API";

const LessonModule = () => {
  const [lessonData, setLessonData] = useState([]);
  const [selectVideo, setSelectVideo] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      const response = await GET_MODULE_LESSON_API_REQUEST();
      if (response.success) {
        setLessonData(response.data);
      }
    })();
  }, []);

  const handleClick = useCallback(
    (url) => {
      if (url === selectVideo) {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        }
      } else {
        setSelectVideo(url);
      }
    },
    [selectVideo]
  );

  useEffect(() => {
    if (videoRef.current) {
      if (selectVideo) {
        videoRef.current.src = selectVideo;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [selectVideo]);

  return (
    <div className="video_layout bg-white mt-32">
      <div>
        <video ref={videoRef} controls width="100%" height="300" autoPlay>
          <source src={selectVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Accordion openIcon={<CaretUp />} closeIcon={<CaretDown />} iconPosition="right" flush={true}>
        {lessonData.map((lesson) => (
          <Accordion.Panel key={lesson._id}>
            <Accordion.Title>{lesson.lessonTitle}</Accordion.Title>
            <Accordion.Content>
              {lesson.videos.map((video) => (
                <p
                  className="hover:cursor-pointer border hover:border-sky-500 mb-1"
                  onClick={() => handleClick(video.videoURL)}
                  key={video._id}>
                  {video.videoTitle}
                </p>
              ))}
            </Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default LessonModule;
