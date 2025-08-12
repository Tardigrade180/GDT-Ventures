import ProductList from '../components/ProductList';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Our Products</h2>
      <ProductList />
    </div>
  );
}

export default Home;