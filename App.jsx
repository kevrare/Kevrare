import React from 'react';
import OrderForm from './pages/OrderForm';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <div>
      <OrderForm />
      <hr className="my-6" />
      <AdminDashboard />
    </div>
  );
}

export default App;