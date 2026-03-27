import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const Card = ({ title, subtitle, description, tags, isPrimary = false }) => (
    <div style={{
      background: isPrimary ? 'rgba(0, 166, 255, 0.03)' : 'var(--bg-card)',
      border: `1px solid ${isPrimary ? 'rgba(0, 166, 255, 0.2)' : 'var(--border-subtle)'}`,
      borderRadius: '24px',
      padding: '40px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = isPrimary 
        ? '0 20px 40px -20px rgba(0, 166, 255, 0.3)' 
        : '0 20px 40px -20px rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = isPrimary 
        ? 'rgba(0, 166, 255, 0.4)'
        : 'rgba(255, 255, 255, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.borderColor = isPrimary 
        ? 'rgba(0, 166, 255, 0.2)'
        : 'var(--border-subtle)';
    }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150px',
        height: '150px',
        background: isPrimary 
          ? 'radial-gradient(circle, rgba(0, 166, 255, 0.1) 0%, rgba(0,0,0,0) 70%)'
          : 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        transform: 'translate(30%, -30%)',
      }} />

      <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: isPrimary ? 'var(--text-primary)' : 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: isPrimary ? 'var(--accent-blue)' : 'var(--text-secondary)', fontWeight: 500, marginBottom: '24px' }}>{subtitle}</p>
      
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px', flexGrow: 1 }}>{description}</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map((tag, i) => (
          <span key={i} style={{
            padding: '4px 12px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '999px',
            fontSize: '0.85rem',
            color: '#ddd',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <AnimatedSection>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-1px' }}>
          Technical <span className="text-gradient">Showcase.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '64px', maxWidth: '600px' }}>
          Selected projects demonstrating capability across Deep Learning architectures and modern web frameworks.
        </p>
      </AnimatedSection>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '32px'
      }}>
        
        <AnimatedSection delay={0.1}>
          <Card 
            title="Glaucoma Detection AI"
            subtitle="CNN Architecture • TensorFlow • React"
            description="Developing a robust AI-driven Glaucoma detection system. The model utilizes Convolutional Neural Networks (CNNs) built with TensorFlow to analyze retinal images. The inference engine is integrated into a React-based frontend framework, providing a seamless medical diagnostic tool."
            tags={['Python', 'TensorFlow', 'CNN', 'React']}
            isPrimary={true}
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', height: '100%' }}>
            <Card 
              title="Industrial Edge Computing"
              subtitle="IoT Infrastructure • Deployment"
              description="Exploring decentralized compute paradigms. Focused on deploying ML models directly to edge devices to reduce latency, ensure data privacy, and maintain high availability in industrial settings without relying on continuous cloud connectivity."
              tags={['Edge Computing', 'IoT', 'Deployment']}
            />
            
            {/* Milestones / Timeline view for the Glaucoma project */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '24px',
              padding: '32px',
              flexGrow: 1
            }}>
              <h4 style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>Project Milestones</h4>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { phase: 'Phase 1', desc: 'Dataset Curation & Preprocessing' },
                  { phase: 'Phase 2', desc: 'CNN Model Training & Validation' },
                  { phase: 'Phase 3', desc: 'React Frontend Integration (Current)' },
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
                  >
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: i === 2 ? 'rgba(0, 166, 255, 0.2)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${i === 2 ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: i === 2 ? 'var(--accent-blue)' : 'var(--text-secondary)',
                      flexShrink: 0
                    }}>
                      {i + 1}
                    </div>
                    <div style={{
                      color: i === 2 ? '#fff' : 'var(--text-secondary)',
                      fontWeight: i === 2 ? 500 : 400
                    }}>
                      {step.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
};

export default Projects;
