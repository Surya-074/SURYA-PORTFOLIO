import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 'var(--nav-height)'
    }}>
      
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(0, 166, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
        borderRadius: '50%',
        animation: 'float 10s ease-in-out infinite alternate'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        filter: 'blur(60px)',
        zIndex: -1,
        borderRadius: '50%',
        animation: 'float 12s ease-in-out infinite alternate-reverse'
      }} />

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, -50px); }
        }
      `}</style>

      <div style={{
        textAlign: 'center',
        zIndex: 1,
        maxWidth: '800px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '0 auto 24px', width: 'fit-content' }}>
            {/* Sub Headline */}
            <div style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: '4px',
              letterSpacing: '2px', // Slight spacing for a premium look
              textTransform: 'uppercase',
              paddingLeft: '6px' // Visual optical alignment with the letter S
            }}>
              Hello, I'm
            </div>
            
            {/* Main Headline */}
            <h1 style={{
              fontSize: 'clamp(4rem, 10vw, 7rem)', // Slightly larger for better visual hierarchy
              fontWeight: 800,
              letterSpacing: '-3px',
              lineHeight: 1,
              marginTop: 0,
              marginBottom: 0,
            }}>
              <span className="text-gradient">SURYA S</span>
            </h1>
          </div>

          {/* Institutional Pill */}
          <div style={{ marginBottom: '40px' }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.5px'
            }}>
              AI & ML Student at KSRCT
            </span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 600,
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            letterSpacing: '-1px'
          }}>
            Building <span className="text-gradient-accent">Intelligent Systems</span> <br className="md-hidden" /> at the Edge.
          </h2>

          <p style={{
            fontSize: '1.1rem',
            color: '#888',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.6
          }}>
            Specializing in Deep Learning & Vision Models. Transitioning from academic research to building high-impact technological ventures.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="#projects" className="glow-btn" style={{ fontSize: '1.05rem', padding: '16px 32px' }}>
              View Projects <FiArrowRight />
            </a>
            <a href="#vision" style={{
              padding: '16px 32px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255,255,255,0.05)';
              e.target.style.borderColor = 'rgba(255,255,255,0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(255,255,255,0.2)';
            }}
            >
              Founder Vision
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
