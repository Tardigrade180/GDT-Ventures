import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PaymentCallback() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const reference = new URLSearchParams(location.search).get('reference');
    if (reference) {
      alert('Order placed successfully!');
      localStorage.removeItem('order');
      navigate('/');
    }
  }, [location, navigate]);

  return <div className="container mx-auto p-4 text-teal-600">Processing payment...</div>;
}

export default PaymentCallback;