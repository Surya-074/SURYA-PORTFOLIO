import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.6 
}) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Custom refined ease 
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
