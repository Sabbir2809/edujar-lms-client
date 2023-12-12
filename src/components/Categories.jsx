import { Card } from "keep-react";
import { Notification } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORY_API_REQUEST } from "../apiRequest/API";
import CategorySkalaton from "./common/CategorySkalaton";

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
        <h1 className="text-6xl font-bold text-center pt-14 pb-2 text-black tracking-wide">
          All Categories
        </h1>
        <p className="font-bold">12,000+ unique online course list designs</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 px-5 md:px-20 my-3 md:py-8">
        {categories.map((category) => (
          <Link key={category._id} to={`course-by-category/${category["_id"]}`}>
            <Card className="h-[220px] hover:border-green-300 hover:bg-white hover:shadow-xl hover:transition duration-200 cursor-pointer ease-in-out bg-slate-50">
              <Card.Container className="flex items-center justify-center pt-5">
<<<<<<< HEAD
                <Notification
                  className="bg-green-500 text-slate-50 p-4 rounded"
                  size={60}
                />
=======
                <Notification className="bg-green-500 text-slate-50 p-4 rounded" size={60} />
>>>>>>> 496d4a004a448e961d9352bcda99dd3d5004568e
              </Card.Container>
              <Card.Container className="text-center">
                <Card.Title>{category.categoryName}</Card.Title>
                <Card.Description className="py-2">
                  {category.courseQuantity} courses
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
