import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stack', href: '#stack' },
    { name: 'Vision', href: '#vision' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '0 24px',
        background: scrolled ? 'rgba(5, 5, 5, 0.7)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.4s ease'
      }}
    >
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: 'var(--max-width)'
      }}>
        {/* Logo */}
        <a href="#" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
          SURYA<span style={{ color: 'var(--accent-blue)' }}>.S</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px' }} className="md-flex">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                fontWeight: 500,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'none' }} className="md-block">
          <a href="#contact" className="glow-btn" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md-hidden"
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '1.5rem', cursor: 'pointer' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (simplified for now) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#fff', fontSize: '1.1rem', padding: '8px 0' }}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--accent-blue)' }}>
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Quick responsive styles injected here to avoid polluting index.css with specific component logic */}
      <style>{`
        @media (min-width: 768px) {
          .md-flex { display: flex !important; }
          .md-block { display: block !important; }
          .md-hidden { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
