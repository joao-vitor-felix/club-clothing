import Categories from "../../components/Categories/Categories";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Início | Club Clothing");
  return (
    <>
      <Categories />
    </>
  );
};

export default Home;
