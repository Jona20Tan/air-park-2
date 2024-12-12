import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from '../layout/Container';
import { MobileMenu } from './MobileMenu';
import { DesktopNav } from './DesktopNav';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative mx-4 mt-4">
      <div className="absolute inset-0 rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.15)]" />
      <div className="bg-white p-2 md:p-4 rounded-full relative">
        <Container>
          <div className="flex justify-between">
            <div className="flex-1">
              <DesktopNav />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors ml-4"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </Container>
      </div>
    </nav>
  );
}