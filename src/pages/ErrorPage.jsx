import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-light)] text-center px-4">
      <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[var(--color-dark)] mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        className="bg-[var(--color-primary)] text-white hover:bg-orange-600"
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </div>
  );
};

export default ErrorPage;
