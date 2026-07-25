import { useEffect, useRef, useState } from 'react';
import styles from '../styles/Reveal.module.css';

function Reveal({ children, className = '', as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}>
      {children}
    </Tag>
  );
}

export default Reveal;
