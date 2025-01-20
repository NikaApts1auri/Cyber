import ProductList from "../../../api/requests/getProducts";


const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
     <ProductList/>
    </div>
  );
};

export default Home;
