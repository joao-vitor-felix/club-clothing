import { Route, Routes } from "react-router-dom";
import CategoriesOverview from "../../components/CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesOverview />} />
      <Route path="category/:id" element={<Category />} />
    </Routes>
  );
};

export default Shop;
