
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LogOut } from 'lucide-react';

export function Header() {
  const { user, logout } = useAuthStore();

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="font-bold text-xl">
            AMS
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {user?.name}
            </span>
            <button
              onClick={logout}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}