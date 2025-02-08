import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Link,
  // BrowserRouter
} from 'react-router-dom';
// import App from './App.tsx'
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import FavouritesPage from './pages/FavouritesPage.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const PrivateRoute = ({children} : {children: JSX.Element}) => {
      const isAuthenticated = !!localStorage.getItem("token");

      return isAuthenticated ? children : <Navigate to="/" replace/>

}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" 
          element={
            <PrivateRoute> 
              <HomePage/>
            </PrivateRoute>
          } 
          />
          <Route path="/favourites" 
          element={
            <PrivateRoute>
              <FavouritesPage/>
            </PrivateRoute>
            } 
            />
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>
)
