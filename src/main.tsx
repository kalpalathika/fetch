import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import FavouritesPage from './pages/FavouritesPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

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