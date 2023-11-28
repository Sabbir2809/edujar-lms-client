import axios from "axios";
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import { useEffect, useState } from "react";

const VideoContainer = () => {
  const [lessonData, setLessonDataData] = useState([]);
  const [selectVideo, setSelectVideo] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000/api/v1/get-all-lesson");
      setLessonDataData(data.data);
    })();
  }, []);

  const handleClick = (url) => {
    setSelectVideo(url);
  };

  return (
    <div className="video_layout bg-slate-300 mt-32">
      <div>
        <video controls width="100%" height="300" autoPlay>
          {selectVideo && <source src={selectVideo} type="video/mp4" />}
        </video>
      </div>
      <Accordion openIcon={<CaretUp />} closeIcon={<CaretDown />} iconPosition="right" flush={true}>
        {lessonData.map((lesson) => (
          <Accordion.Panel key={lesson._id}>
            <Accordion.Title>{lesson.lessonTitle}</Accordion.Title>
            <Accordion.Content>
              {lesson.videos.map((video) => (
                <p onClick={() => handleClick(video.videoURL)} key={video._id} className="cursor-pointer">
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

export default VideoContainer;
