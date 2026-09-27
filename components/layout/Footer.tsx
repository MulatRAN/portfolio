import { Container } from './Container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="mt-auto bg-slate-50 border-t border-slate-200 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
          <p>
            © {currentYear} <span className="font-medium text-slate-900">Mulat Ranaboson</span>. Tous droits réservés.
          </p>

          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1"
              aria-label="GitHub (opens in new tab)"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1"
              aria-label="LinkedIn (opens in new tab)"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@example.com"
              className="hover:text-amber-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-1"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
