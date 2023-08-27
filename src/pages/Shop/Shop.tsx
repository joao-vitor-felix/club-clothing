import { Route, Routes } from "react-router-dom";
import Category from "../Category/Category";
import CategoriesPreview from "../../components/CategoriesPreview/CategoriesPreview";
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path="category/:id" element={<Category />} />
    </Routes>
  );
};

export default Shop;
