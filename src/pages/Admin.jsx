import { useState } from 'react';
import AdminPanel from '../components/AdminPanel';
import LoginForm from '../components/LoginForm';

function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <div className="container mx-auto p-4">
      {isAuthenticated ? (
        <AdminPanel setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
}

export default Admin;