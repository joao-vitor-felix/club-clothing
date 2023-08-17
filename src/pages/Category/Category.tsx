import { useParams } from "react-router-dom";
import CategoryDetails from "../../components/CategoryDetails/CategoryDetails";

const Category = () => {
  const { id } = useParams();

  if (!id) return null;

  return <CategoryDetails categoryId={id} />;
};

export default Category;
