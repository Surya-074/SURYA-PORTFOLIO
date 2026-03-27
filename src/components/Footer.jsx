import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px 24px',
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      color: 'var(--text-secondary)'
    }}>
      <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px', color: '#fff' }}>
        SURYA<span style={{ color: 'var(--accent-blue)' }}>.S</span>
      </div>
      
      <p style={{ fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Agaashsurya. All rights reserved.
      </p>
      
      <div style={{ display: 'flex', gap: '24px', fontSize: '0.85rem' }}>
        <a href="#home" style={{ transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Home</a>
        <a href="#projects" style={{ transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Projects</a>
        <a href="#vision" style={{ transition: 'color 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Vision</a>
      </div>
    </footer>
  );
};

export default Footer;
