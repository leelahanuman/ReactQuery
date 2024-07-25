// src/hooks/usePaginatedProducts.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPaginatedProducts = async (page) => {
  const response = await axios
  .get(`https://dummyjson.com/products?page=${page}&limit=10`);
  


  return {
    ...response.data,
  };
};

const usePaginatedProducts = (page) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: () => fetchPaginatedProducts(page),
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export default usePaginatedProducts;
