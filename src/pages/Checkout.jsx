import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import productsData from '../data/products.json';

function Checkout() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = productsData.find((p) => p.id === parseInt(productId));
    setProduct(product);
  }, [productId]);

  if (!product) return <div className="container mx-auto p-4">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-teal-600">Checkout - {product.name}</h2>
      <OrderForm product={product} />
    </div>
  );
}

export default Checkout;