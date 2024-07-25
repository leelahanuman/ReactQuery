import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchProductData = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
};

const fetchUserData = async () => {
  const response = await axios.get('https://dummyjson.com/users');
  return response.data.users;
};

export const useProducts = () => {
  return useQuery('products', fetchProductData, {
    onSuccess: (data) => {
      console.log('Fetched products successfully:', data);
    },
    onError: (error) => {
      console.error('Error fetching products:', error);
    },
    select: (data) => data.map(product => ({
      ...product,
      priceInCents: product.price * 100,
    })),
  });
};

export const useUsers = () => {
  return useQuery('users', fetchUserData, {
    onSuccess: (data) => {
      console.log('Fetched users successfully:', data);
    },
    onError: (error) => {
      console.error('Error fetching users:', error);
    },
  });
};
