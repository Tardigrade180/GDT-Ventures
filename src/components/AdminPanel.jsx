import { useState, useEffect } from 'react';
import productsData from '../data/products.json';

function AdminPanel({ setIsAuthenticated }) {
  const [products, setProducts] = useState(productsData);
  const [form, setForm] = useState({
    id: '',
    name: '',
    actualPrice: '',
    discountedPrice: '',
    image: '',
    description: '',
  });

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (form.id) {
      setProducts(
        products.map((p) =>
          p.id === parseInt(form.id)
            ? { ...form, id: parseInt(form.id), actualPrice: parseFloat(form.actualPrice), discountedPrice: parseFloat(form.discountedPrice) }
            : p
        )
      );
    } else {
      setProducts([
        ...products,
        {
          ...form,
          id: products.length + 1,
          actualPrice: parseFloat(form.actualPrice),
          discountedPrice: parseFloat(form.discountedPrice),
        },
      ]);
    }
    setForm({ id: '', name: '', actualPrice: '', discountedPrice: '', image: '', description: '' });
  };

  const handleEdit = (product) => {
    setForm(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-teal-600">Admin Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <form onSubmit={handleAddOrUpdate} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
        <input
          type="text"
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
        <input
          type="number"
          placeholder="Actual Price"
          value={form.actualPrice}
          onChange={(e) => setForm({ ...form, actualPrice: e.target.value })}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
          required
        />
        <input
          type="number"
          placeholder="Discounted Price"
          value={form.discountedPrice}
          onChange={(e) => setForm({ ...form, discountedPrice: e.target.value })}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        />
        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          {form.id ? 'Update Product' : 'Add Product'}
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>Actual: ₦{product.actualPrice.toLocaleString()}</p>
            <p>Discounted: ₦{product.discountedPrice.toLocaleString()}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => handleEdit(product)}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;