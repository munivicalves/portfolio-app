import { useState, useEffect, useCallback } from 'react';
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/ProjectCard.module.css';
import Reveal from './Reveal';

function ProjectCard({ title, description, imageUrls = [], githubUrl, deployUrl, techs = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCloseModal = useCallback(() => setSelectedIndex(null), []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  }, [imageUrls.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  }, [imageUrls.length]);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleCloseModal();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleCloseModal, handlePrev, handleNext]);

  const getImageSrc = (img) => `/assets/${img}`;

  return (
    <Reveal className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.projectDescriptionScroll}>{description}</p>

      <div className={styles.imageGallery}>
        {imageUrls.map((img, idx) => (
          <button
            key={img}
            type="button"
            className={styles.imageButton}
            onClick={() => setSelectedIndex(idx)}
            aria-label={`Ampliar imagem ${idx + 1} de ${title}`}
          >
            <img src={getImageSrc(img)} alt={`${title} — captura ${idx + 1}`} className={styles.image} />
          </button>
        ))}
      </div>

      {techs.length > 0 && (
        <div className={styles.techs}>
          {techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      )}

      <div className={styles.links}>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
        )}
        {deployUrl && (
          <a href={deployUrl} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
            <ExternalLink size={16} /> Ver Online
          </a>
        )}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal} aria-label="Fechar">
              <X size={18} />
            </button>
            <img
              src={getImageSrc(imageUrls[selectedIndex])}
              alt={`${title} — imagem ampliada ${selectedIndex + 1}`}
              className={styles.modalImage}
            />
            {imageUrls.length > 1 && (
              <>
                <button className={styles.prevButton} onClick={handlePrev} aria-label="Imagem anterior">
                  <ChevronLeft size={28} />
                </button>
                <button className={styles.nextButton} onClick={handleNext} aria-label="Próxima imagem">
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Reveal>
  );
}

export default ProjectCard;
