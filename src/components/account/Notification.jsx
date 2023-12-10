import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_NOTIFICATION_REQUEST } from "../../apiRequest/API";

const Notification = () => {
  const [notification, setNotification] = useState([]);
  useEffect(() => {
    (async () => {
      let result = await GET_ALL_NOTIFICATION_REQUEST();
      setNotification(result);
    })();
  }, []);
  console.log(notification);
  return (
    <div>
      <div className="py-5 bg-white mt-3 md:mt-10">
        <div className="px-4 sm:px-8 max-w-5xl m-auto">
          <ul className="border border-gray-200 rounded overflow-hidden">
            {notification.length > 0
              ? notification.map((item) => (
                  <li
                    key={item["_id"]}
                    className="flex justify-between px-4 py-2 w-full bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    {item["title"]}
                    <Link
                      to={"notification-details/" + item["_id"]}
                      className="btn btn-xs bg-green-400 text-white border-none">
                      See More
                    </Link>
                  </li>
                ))
              : "no data found"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
