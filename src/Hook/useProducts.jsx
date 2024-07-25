import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProductData = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  console.log(response.data.products,"This is products ");
  return response.data.products;
};

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProductData,
    onSuccess: (data) => {
      console.log('Fetched products successfully:', data);
      // Perform additional actions on success
    },
    onError: (error) => {
      console.error('Error fetching products:', error);
      // Perform additional actions on error
    },
    select: (data) => {
      // Transform the data
      return data.map(product => ({
        ...product,
        priceInCents: product.price * 100,
      }));
    },
  });
};

export default useProducts;
