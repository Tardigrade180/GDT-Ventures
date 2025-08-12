import { Link } from 'react-router-dom';
import { TruckIcon } from '@heroicons/react/24/outline';

function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-red-500 line-through">₦{product.actualPrice.toLocaleString()}</p>
      <p className="text-green-600 font-bold">₦{product.discountedPrice.toLocaleString()}</p>
      <Link
        to={`/product/${product.id}`}
        className="flex items-center bg-teal-600 text-white px-4 py-2 rounded mt-2 hover:bg-teal-700"
      >
        <TruckIcon className="h-5 w-5 mr-2" />
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;