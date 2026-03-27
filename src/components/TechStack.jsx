import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact } from 'react-icons/fa';
import { SiTensorflow, SiPandas, SiNumpy, SiMysql } from 'react-icons/si';
import { BsCpuFill } from 'react-icons/bs';
import AnimatedSection from './AnimatedSection';

const TechStack = () => {
  const stackGroups = [
    {
        title: 'Languages',
        items: [
            { icon: <FaPython />, name: 'Python', color: '#3776AB' },
            { icon: <FaJava />, name: 'Java', color: '#ED8B00' },
            { icon: <SiMysql />, name: 'SQL', color: '#4479A1' }
        ]
    },
    {
        title: 'AI & Data',
        items: [
            { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00' },
            { icon: <SiPandas />, name: 'Pandas', color: '#150458' },
            { icon: <SiNumpy />, name: 'NumPy', color: '#013243' }
        ]
    },
    {
        title: 'Architecture',
        items: [
            { icon: <FaReact />, name: 'React', color: '#61DAFB' },
            { icon: <BsCpuFill />, name: 'Edge/CNN', color: '#8B5CF6' }
        ]
    }
  ];

  return (
    <section id="stack" style={{ 
      position: 'relative',
      paddingBottom: '160px' // Extra space for transition to vision
    }}>
      
      {/* Background radial soft light */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(0,0,0,0) 60%)',
        filter: 'blur(80px)',
        zIndex: -1,
        borderRadius: '50%'
      }} />

      <AnimatedSection direction="up" delay={0.1} className="text-center" style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', letterSpacing: '-1px' }}>
          My <span className="text-gradient-accent">Arsenal.</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Core technologies driving both high-performance machine learning models and efficient frontend solutions.
        </p>
      </AnimatedSection>

      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px'
      }}>
        {stackGroups.map((group, groupIdx) => (
            <AnimatedSection key={group.title} delay={0.2 + (groupIdx * 0.1)} direction="up">
                <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '24px',
                    padding: '32px',
                    height: '100%'
                }}>
                    <h4 style={{ 
                        color: 'var(--text-secondary)', 
                        marginBottom: '24px',
                        fontSize: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        borderBottom: '1px solid var(--border-subtle)',
                        paddingBottom: '16px'
                    }}>
                        {group.title}
                    </h4>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                        gap: '24px'
                    }}>
                        {group.items.map((item, i) => (
                            <motion.div
                                key={item.name}
                                whileHover={{ 
                                    scale: 1.1, 
                                    y: -8,
                                    boxShadow: `0 15px 30px -10px ${item.color}50` 
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '16px 8px',
                                    background: 'rgba(255,255,255,0.02)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <div style={{ 
                                    fontSize: '2.5rem', 
                                    color: item.color,
                                    filter: `drop-shadow(0 0 8px ${item.color}40)`
                                }}>
                                    {item.icon}
                                </div>
                                <span style={{ 
                                    fontSize: '0.8rem', 
                                    fontWeight: 500,
                                    color: 'var(--text-secondary)'
                                }}>
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
