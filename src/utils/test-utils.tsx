import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import FavouritesPage from '../pages/FavouritesPage';

const queryClient = new QueryClient();

interface AuthProviderProps {
  initialEntries?: string[];
}

export const renderWithClient = ({ initialEntries = ['/home'] }: AuthProviderProps) => (
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage/>}/>
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  </RecoilRoot>
);
