import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  mobile?: boolean;
}

export function NavLink({ to, children, className = '', onClick, mobile = false }: NavLinkProps) {
  const baseStyles = mobile
    ? "block text-gray-900 hover:text-purple-600 font-black text-sm py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors"
    : "text-gray-900 hover:text-purple-600 font-black text-lg transition-colors";

  return (
    <Link 
      to={to} 
      className={`${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}