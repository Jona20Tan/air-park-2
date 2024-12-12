import { NavLink } from './NavLink';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export function DesktopNav() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="hidden md:flex space-x-6">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/dates">EVENT DATES</NavLink>
        <NavLink to="/faq">FAQs</NavLink>
      </div>
      <div className="hidden md:block">
        <Button 
          as={Link} 
          to="/book" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-black text-lg px-8 py-2 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] transition-all duration-300"
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
}