import { Link } from "react-router-dom";
import { GET_ALL_BLOGS_API_REQUEST } from "../../apiRequest/API";
import { useEffect, useState } from "react";
const BlogSidebar = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await GET_ALL_BLOGS_API_REQUEST();
      setBlogs(result);
      setId(result);
    })();
  }, []);
  return (
    <div>
      {blogs.map((blog) => (
        <Link key={blog["_id"]} to={`/blogs/${blog._id}`}>
          <div className="bg-white p-3 grid grid-cols-3 gap-2 mb-3 rounded-md">
            <img src={blog.thumbnail} alt="" />
            <span className="col-span-2 hover:underline">{blog.title}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogSidebar;
