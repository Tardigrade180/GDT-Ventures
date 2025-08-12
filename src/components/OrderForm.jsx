import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderForm({ product }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ customerName: '', customerEmail: '', customerAddress: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('order', JSON.stringify({ ...form, productId: product.id }));
    const paystack = window.PaystackPop.setup({
      key: 'YOUR_PAYSTACK_PUBLIC_KEY', // Replace with your Paystack public key
      email: form.customerEmail,
      amount: product.discountedPrice * 100,
      currency: 'NGN',
      callback: function (response) {
        alert(`Payment successful! Reference: ${response.reference}`);
        navigate('/payment-callback');
      },
      onClose: function () {
        alert('Payment cancelled');
      },
    });
    paystack.openIframe();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Full Name"
        value={form.customerName}
        onChange={(e) => setForm({ ...form, customerName: e.target.value })}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={form.customerEmail}
        onChange={(e) => setForm({ ...form, customerEmail: e.target.value })}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        required
      />
      <textarea
        placeholder="Delivery Address"
        value={form.customerAddress}
        onChange={(e) => setForm({ ...form, customerAddress: e.target.value })}
        className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-teal-600"
        required
      />
      <button
        type="submit"
        className="w-full bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
      >
        Proceed to Payment
      </button>
    </form>
  );
}

export default OrderForm;