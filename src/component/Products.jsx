import React from 'react';
import useProducts from '../Hook/useProducts';
import { Link } from 'react-router-dom';

function Products() {
  const { isLoading, error, data, isFetching, refetch } = useProducts();

  if (isLoading || isFetching) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
console.log(data,"data")
  return (
    <div>
      <button onClick={refetch}>Fetch Products</button>

      {data && data.map(product => (
        <div key={product.id}>
    <Link to={`/products/${product.id}/`}>
            <h2>{product.title}</h2>
          </Link>
          <p>{product.description}</p>
          <p>{product.category}</p>

          <p>Price: ${product.price} ({product.priceInCents} cents)</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
