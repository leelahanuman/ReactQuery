import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Products from './component/Products';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ProductDetail from './component/ProductDetail';
import Dashboard from './component/Dashboard';
import Sidebar from './Layout/Sidebar';
import Layout from './Layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime:  3000, // 5 minutes
      // cacheTime: 10 * 60 * 1000, // 10 minutes
      // refetchOnMount: false,
      // retry: 1,
      // cacheTime: 10000, // Data stays in cache for 5 minutes

      // refetchInterval: 5000, // Poll every 5 seconds
//refetch Between fetch and slate =>fetch data or get datat every 5000
  // enabled:false,
  // onSuccess: (data) => {
  //   console.log('Fetched projects successfully:', data);
  //   // Perform additional actions on success
  // },
  // onError: (error) => {
  //   console.error('Error fetching projects:', error);
  //   // Perform additional actions on error
  // },
  onSuccess: (data) => {
    console.log('Fetched products successfully:', data);
    // Perform additional actions on success
  },
  onError: (error) => {
    console.error('Error fetching products:', error);
    // Perform additional actions on error
  },
    },
  },
});

function App() {
  return (
 



<BrowserRouter>
      <Routes>
        <Route path='/*' element={<Layout />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
