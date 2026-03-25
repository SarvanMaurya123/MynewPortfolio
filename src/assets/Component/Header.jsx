import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import ResumeDownload from './Downlode';

const navItems = [
    { label: 'Summary', href: '#summary' },
    { label: 'Founder Fit', href: '#highlights' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
            <div className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 md:px-6">
                <a href="#hero" className="text-xl font-semibold tracking-[0.2em] text-white/95 md:text-2xl">
                    {'<SM/>'}
                </a>

                <button
                    className="md:hidden rounded-lg border border-white/20 p-2 text-white"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <MdClose className="h-7 w-7" /> : <MdMenu className="h-7 w-7" />}
                </button>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="nav-link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden md:block">
                    <ResumeDownload />
                </div>
            </div>

            {menuOpen && (
                <div className="mt-3 rounded-2xl border border-white/20 bg-black/45 p-5 shadow-xl backdrop-blur-xl md:hidden">
                    <nav>
                        <ul className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="nav-link block" onClick={closeMenu}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <ResumeDownload compact />
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
