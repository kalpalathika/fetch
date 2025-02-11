// HomePage.test.tsx
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient } from '@tanstack/react-query';
import { renderWithClient } from '../utils/test-utils';

// Mock child components

vi.mock('../components/Home/Listing/DogListing', () => ({
  DogListing: () => <div data-testid="dog-listing" />,
}));

vi.mock('../components/Home/Pagination/Pagination', () => ({
  Pagination: () => <div data-testid="pagination" />,
}));

vi.mock('../components/Home/Filter/DesktopFilters', () => ({
  DesktopFilters: () => <div data-testid="desktop-filters" />,
}));

const queryClient = new QueryClient();


describe('HomePage - Private Route', () => {
  beforeEach(() => {
    // Mock authenticated user
    Storage.prototype.getItem = vi.fn(() => 'mock-token');
  });

  afterEach(() => {
    vi.clearAllMocks();
    queryClient.clear();
  });


  it('should render all main componentsin DOM when authenticated', async () => {
    render(
        renderWithClient({
          initialEntries: ['/home']
        })
      );

    await waitFor(() => {
      expect(screen.getByTestId('desktop-filters')).toBeInTheDocument();
      expect(screen.getByTestId('dog-listing')).toBeInTheDocument();
      expect(screen.getByTestId('pagination')).toBeInTheDocument();
    });
  });


  it('should display desktop filters and dog listing in the page', async () => {
    render(
        renderWithClient({
          initialEntries: ['/home']
        })
    );

    expect(screen.getByTestId('desktop-filters')).toBeVisible();
    expect(screen.getByTestId('dog-listing')).toBeVisible();
    expect(screen.getByTestId('pagination')).toBeVisible();
  });

});