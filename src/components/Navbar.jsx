import { useState } from 'react';
import { Rocket, Menu, X, Calendar, Users, Image as ImageIcon, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Rocket },
    { href: '#events', label: 'Events', icon: Calendar },
    { href: '#team', label: 'Current Team', icon: Users },
    { href: '#gallery', label: 'Gallery', icon: ImageIcon },
    { href: '#blog', label: 'Scientific Blog', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-800">
            <Rocket className="h-6 w-6 text-blue-600" />
            <span className="tracking-tight">SAEINDIA · IIITDM Kurnool</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              >
                <Icon className="h-4 w-4 text-blue-600" /> {label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-2 grid gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              >
                <Icon className="h-4 w-4 text-blue-600" /> {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
