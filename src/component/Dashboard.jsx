import React from 'react';
import { useUsers ,useProducts } from '../Hook/useParent';

function Dashboard() {
  const { isLoading: isLoadingProducts, error: productsError, data: products } = useProducts();
  const { isLoading: isLoadingUsers, error: usersError, data: users } = useUsers();

  if (isLoadingProducts || isLoadingUsers) return <div>Loading...</div>;
  if (productsError) return <div>Error fetching products: {productsError.message}</div>;
  if (usersError) return <div>Error fetching users: {usersError.message}</div>;

  return (
    <div>
      <h1>Products</h1>
      {products && products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price} ({product.priceInCents} cents)</p>
        </div>
      ))}

      <h1>Users</h1>
      {users && users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
