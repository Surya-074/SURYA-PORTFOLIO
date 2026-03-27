import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" style={{ 
      borderTop: '1px solid var(--border-subtle)',
      paddingBottom: '160px'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '64px'
      }}>
        
        {/* Left: Info */}
        <AnimatedSection direction="up" delay={0.1}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '16px', letterSpacing: '-1.5px' }}>
              Let's <span className="text-gradient">Connect.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '40px', lineHeight: 1.6 }}>
              Whether you're exploring the intersection of AI and Edge computing, seeking a technical co-founder, or looking to discuss cutting-edge applied AI concepts—I'm open to the conversation.
            </p>

            <div style={{ display: 'flex', gap: '16px' }}>
              {[
                { icon: <FiGithub />, label: 'GitHub', href: '#' },
                { icon: <FiLinkedin />, label: 'LinkedIn', href: '#' },
                { icon: <FiMail />, label: 'Email', href: 'mailto:contact@example.com' }
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  whileHover={{ y: -4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    color: '#fff',
                    transition: 'border-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Right: Form */}
        <AnimatedSection direction="up" delay={0.2}>
          <form 
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: 'var(--bg-card)',
              padding: '40px',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Message</label>
              <textarea 
                placeholder="Looking to discuss..."
                rows={4}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '16px',
                  borderRadius: '12px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none',
                  fontFamily: 'inherit',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>

            <button type="submit" className="glow-btn" style={{ marginTop: '8px', padding: '16px' }}>
              Send Message
            </button>
          </form>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default Contact;
