import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';

function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((p) => p.id === parseInt(productId));
    setProduct(product);
  }, [productId]);

  if (!product) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">{product.name}</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded mb-4" />
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-red-500 line-through">₦{product.actualPrice.toLocaleString()}</p>
        <p className="text-green-600 font-bold mb-4">₦{product.discountedPrice.toLocaleString()}</p>
        <Link
          to={`/checkout/${product.id}`}
          className="flex items-center bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Order for Delivery
        </Link>
      </div>
    </div>
  );
}

export default Product;