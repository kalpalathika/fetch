import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginPage from './LoginPage';
import { useLogin } from '../services/user/servicesQuery';

vi.mock('../services/user/servicesQuery', () => ({
  useLogin: vi.fn(() => ({
    mutate: vi.fn(),
    isError: false,
    isPending: false,
  })),
}));

const queryClient = new QueryClient();

const renderWithClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
};

describe('LoginPage', () => {
  it('should render the login form', async () => {
    renderWithClient(<LoginPage />);
    
    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it('should allow typing in the username and email fields', async () => {
    renderWithClient(<LoginPage />);
    const user = userEvent.setup();

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);

    await user.type(usernameInput, 'testuser');
    await user.type(emailInput, 'test@example.com');

    expect(usernameInput).toHaveValue('testuser');
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should not submit the form if username or email is invalid', async () => {
    const { mutate } = useLogin();
    renderWithClient(<LoginPage />);
    const user = userEvent.setup();

    const usernameInput = screen.getByLabelText(/username/i);
    const emailInput = screen.getByLabelText(/email/i);
    const signInButton = screen.getByRole('button', { name: /sign in/i });

    // Test case 1: Invalid email
    await user.type(emailInput, 'invalidemail');
    await user.click(signInButton);

    await waitFor(() => {
      expect(mutate).not.toHaveBeenCalled();
    });

    // Test case 2: Empty email
    await user.clear(usernameInput);
    await user.clear(emailInput);
    await user.type(usernameInput, 'validusername');
    await user.click(signInButton);

    await waitFor(() => {
      expect(mutate).not.toHaveBeenCalled();
    });
  });
});