const LessonList = ({ videoTitle, onClick }) => {
  return (
    <div className="shadow p-2">
      <li style={{ cursor: "pointer" }} onClick={onClick}>
        {videoTitle}
      </li>
    </div>
  );
};
export default LessonList;
