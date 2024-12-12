import { NavLink } from './NavLink';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-2 mx-4 fixed left-0 right-0 top-[4.5rem] bg-white rounded-3xl shadow-lg p-4 space-y-3 z-50">
      <NavLink to="/" mobile onClick={onClose}>HOME</NavLink>
      <NavLink to="/about" mobile onClick={onClose}>ABOUT US</NavLink>
      <NavLink to="/dates" mobile onClick={onClose}>EVENT DATES</NavLink>
      <NavLink to="/faq" mobile onClick={onClose}>FAQs</NavLink>
      <Button 
        as={Link} 
        to="/book" 
        className="flex justify-center w-full bg-yellow-400 hover:bg-yellow-500 text-black font-black text-sm px-4 py-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] transition-all duration-300"
        onClick={onClose}
      >
        BOOK NOW
      </Button>
    </div>
  );
}
