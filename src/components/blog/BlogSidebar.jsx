import image from "../../assets/about-banner.jpg";

const BlogSidebar = () => {
  return (
    <div>
      <div className="bg-white p-3 grid grid-cols-3 gap-2 mb-3 rounded-md">
        <img src={image} alt="" />
        <span className="col-span-2">
          Related post title Related post titleRelated post title
        </span>
      </div>
    </div>
  );
};

export default BlogSidebar;
