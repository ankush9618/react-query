import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import DisplayUsers from './pages/DisplayUsers';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__:
      import('@tanstack/query-core')
        .QueryClient
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/users' element={<DisplayUsers/>}/>
    </Routes>
    </QueryClientProvider>
    </>
  )
}

export default App
