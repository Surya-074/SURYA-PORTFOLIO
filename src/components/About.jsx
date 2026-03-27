import React from 'react';
import AnimatedSection from './AnimatedSection';

const About = () => {
  return (
    <section id="about" style={{ 
      position: 'relative',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      
      <AnimatedSection direction="up" delay={0.1}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Left: Content */}
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '24px',
              letterSpacing: '-1px'
            }}>
              The <span className="text-gradient">Pivot.</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
              <p>
                As an AI & ML student at KSRCT, augmented by an online career-development course in Applied AI & ML from IIT Patna, my foundation was built on rigorous coursework and standard engineering pipelines.
              </p>
              <p>
                But building for the lab isn't enough. I recognized a gap between isolated AI models and real-world, localized deployment. This realization sparked my transition from traditional placement tracks toward <strong style={{color: 'white', fontWeight: 600}}>entrepreneurship</strong>.
              </p>
              <p>
                Today, I'm focused on launching my own venture—bridging the gap between robust AI models and high-performance Edge Computing infrastructure.
              </p>
            </div>
            
            <div style={{ 
              marginTop: '32px',
              display: 'flex',
              gap: '24px'
            }}>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-blue)' }}>3+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Years Core ML</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-violet)' }}>1st</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Startup Venture</div>
              </div>
            </div>
          </div>

          {/* Right: Abstract Visual representation of the pivot */}
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '24px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Abstract visual elements */}
            <div style={{
              position: 'absolute',
              width: '1px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
              left: '30%'
            }} />
            <div style={{
              position: 'absolute',
              width: '1px',
              height: '100%',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
              left: '70%'
            }} />
            <div style={{
              position: 'absolute',
              height: '1px',
              width: '100%',
              background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
              top: '50%'
            }} />
            
            {/* Central glowing node representing 'The Pivot' */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-violet) 100%)',
              boxShadow: '0 0 40px rgba(0, 166, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: 2,
              animation: 'pulse 3s infinite'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--bg-dark)' }} />
            </div>
            
            <style>{`
              @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(0, 166, 255, 0.4); }
                70% { box-shadow: 0 0 0 20px rgba(0, 166, 255, 0); }
                100% { box-shadow: 0 0 0 0 rgba(0, 166, 255, 0); }
              }
            `}</style>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
