import Link from 'next/link';
import { Container } from './Container';
import { Navigation } from './Navigation';

export function Header() {
  return (
    <header role="banner" className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-amber-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1"
          >
            <span className="text-amber-500">M</span>R
          </Link>

          <Navigation />
        </div>
      </Container>
    </header>
  );
}
