import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [role, setRole] = useState<'student' | 'teacher'>('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - Replace with actual authentication
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: role,
      studentId: role === 'student' ? 'STU001' : undefined,
    };

    login(mockUser);
    navigate(role === 'student' ? '/student' : '/teacher');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-8">
          Attendance Management System
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Login As</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={cn(
                  'flex-1 py-2 px-4 rounded-lg border',
                  role === 'student'
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'border-gray-300 dark:border-gray-700'
                )}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={cn(
                  'flex-1 py-2 px-4 rounded-lg border',
                  role === 'teacher'
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'border-gray-300 dark:border-gray-700'
                )}
              >
                Teacher
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 px-4 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Login
          </button>
        </form>
      </Card>
    </div>
  );
}