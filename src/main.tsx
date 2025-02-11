import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import FavouritesPage from './FavouritesPage';

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = !!localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

// Layout component to wrap all routes
const RouteLayout = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
      path="/home"
      element={
        <PrivateRoute>
          <HomePage />
        </PrivateRoute>
      }
    />
    <Route
      path="/favourites"
      element={
        <PrivateRoute>
          <FavouritesPage />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
            <RouteLayout /> 
        </QueryClientProvider>
      </RecoilRoot>
    </Router>

  </StrictMode>
);