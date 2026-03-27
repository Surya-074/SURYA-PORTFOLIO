import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import AnimatedSection from './AnimatedSection';
import neuralNetworkAnimation from '../assets/neural-network.json'; // We will create this

const Vision = () => {
  return (
    <section id="vision" style={{ 
      position: 'relative',
      paddingBottom: '160px'
    }}>
      
      {/* 
        Transition from Developer (Blue/Dark) to Founder (Violet/Premium)
        using a gradient divider 
      */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100vw',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)'
      }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '64px',
        alignItems: 'center'
      }}>
        
        {/* Left: Animation */}
        <AnimatedSection direction="right" delay={0.2}>
          <div style={{
            position: 'relative',
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
          }}>
              {/* Lottie animation placeholder */}
              <div style={{ 
                width: '100%', 
                height: '300px', 
                background: 'rgba(139, 92, 246, 0.1)', 
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-violet)',
                fontWeight: 'bold',
                textAlign: 'center'
              }}>
                [Neural Network Animation]<br/>
                (Lottie JSON required)
              </div>
            
            {/* Glowing orb behind animation */}
            <div style={{
              position: 'absolute',
              width: '150px',
              height: '150px',
              background: 'var(--accent-violet)',
              filter: 'blur(100px)',
              opacity: 0.3,
              zIndex: -1
            }} />
          </div>
        </AnimatedSection>

        {/* Right: Vision Content */}
        <AnimatedSection direction="left" delay={0.1}>
          <div style={{ paddingRight: '20px' }}>
            <span style={{
              color: 'var(--accent-violet)',
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
              display: 'inline-block'
            }}>
              The Next Step
            </span>
            
            <h2 style={{ fontSize: '3rem', marginBottom: '32px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              Founder <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #fff 0%, var(--accent-violet) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Mindset.
              </span>
            </h2>
            
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.2rem', 
              lineHeight: 1.6, 
              marginBottom: '32px',
              fontWeight: 400
            }}>
              "Engineering isolated intelligence is no longer the bottleneck. The real challenge is deploying reliable, low-latency AI into environments where connectivity is unstable."
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.div
                whileHover={{ x: 10 }}
                style={{
                  paddingLeft: '24px',
                  borderLeft: '2px solid var(--accent-violet)'
                }}
              >
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>Mission</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Building decentralized AI infrastructure that operates seamlessly at the edge, ensuring critical models—like healthcare diagnostics—never fail due to cloud latency.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                style={{
                  paddingLeft: '24px',
                  borderLeft: '2px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderLeftColor = 'var(--accent-blue)'}
                onMouseLeave={(e) => e.currentTarget.style.borderLeftColor = 'rgba(255,255,255,0.1)'}
              >
                <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '8px' }}>Audience</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  Seeking forward-thinking VCs and specialized Tech Co-founders who understand the intersection of deep learning and industrial IoT.
                </p>
              </motion.div>
            </div>

          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default Vision;
