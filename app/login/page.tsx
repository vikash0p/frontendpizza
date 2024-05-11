import LoginForm from '@/components/LoginForm';
import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login
