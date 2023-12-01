import { Card } from "keep-react";
import { Notification } from "phosphor-react";
import { useEffect, useState } from "react";
import { CATEGORY_API_REQUEST } from "../apiRequest/API";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, SetCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await CATEGORY_API_REQUEST();
      SetCategories(result);
    })();
  }, []);

  return (
    <div className="bg-white py-2 md:py-8">
      <div className="text-center">
        <h1
          className="text-6xl font-bold text-center pt-14 pb-7 text-black tracking-wide"
          style={{ fontFamily: "Rowdies" }}
        >
          All <span className="text-[#2AAA94]">Categories</span>
        </h1>
        <p className="font-bold">12,000+ unique online course list designs</p>
      </div>
      <div className="grid justify-center grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-4 px-5 md:px-20 my-10 md:py-8">
        {categories.map((category) => (
          <Link to={`course-by-category/${category["_id"]}`}>
            <Card
              key={category._id}
              className="w-full p-4 hover:border-green-300 hover:bg-white hover:shadow-xl hover:transition duration-200 cursor-pointer ease-in-out bg-slate-50"
            >
              <Card.Container className="flex items-center justify-center">
                <Notification
                  className="bg-green-500 text-slate-50 p-4 rounded"
                  size={60}
                />
              </Card.Container>
              <Card.Container className="text-center">
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Description className="py-2">
                  {category.categoryNumber} courses
                </Card.Description>
              </Card.Container>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
