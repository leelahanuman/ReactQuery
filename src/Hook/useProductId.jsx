import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProductById = async (productId) => {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`);
  return response.data;
};

const useProductID = (productId) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: () => fetchProductById(productId),
    initialData: {
      title: 'Loading...',
      description: 'Fetching product details...',
      price: 0,
      priceInCents: 0,
      category: 'placeholder-category',
    },
    onSuccess: (data) => {
      console.log('Fetched product successfully:', data);
    },
    onError: (error) => {
      console.error('Error fetching product:', error);
    },
  });
};

export default useProductID;
