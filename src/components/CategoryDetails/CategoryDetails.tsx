import * as S from "./CategoryDetails.styles";

import { FC, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { BiChevronLeft } from "react-icons/bi";
import Category from "../../types/categories.types";
import { db } from "../../firebase/firebase.config";
import { categoryConverter } from "../../firebase/firestore.converters";
import Loading from "../Loading/Loading";
import ProductItem from "../ProductItem/ProductItem";
import useDocumentTitle from "../../hooks/useDocumentTitle";

type CategoryDetailsProps = {
  categoryId: string;
};

const CategoryDetails: FC<CategoryDetailsProps> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useDocumentTitle(`Explorar ${category?.displayName} | Club Clothing`);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);

        const querySnapshot = await getDocs(
          query(
            collection(db, "categories").withConverter(categoryConverter),
            where("id", "==", categoryId)
          )
        );

        const category = querySnapshot.docs[0]?.data();

        setCategory(category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.Title>
        <S.Icon to="/shop">
          <BiChevronLeft size={36} />
        </S.Icon>
        <p>Explorar {category?.displayName}</p>
      </S.Title>

      <S.ProductsContainer>
        {category?.products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </S.ProductsContainer>
    </S.Container>
  );
};

export default CategoryDetails;
