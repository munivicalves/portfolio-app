import { useState } from 'react';
import styles from '../styles/ProjectCard.module.css';

function ProjectCard({ title, description, imageUrls = [], githubUrl, deployUrl, techs = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log('📦 Renderizando projeto:', title);

  const handleClickImage = (index) => {
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  // Agora acessando diretamente da pasta public
  const getImageSrc = (img) => `/assets/${img}`;

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>

      <div className={styles.imageGallery}>
        {imageUrls.map((img, idx) => (
          <img
            key={idx}
            src={getImageSrc(img)}
            alt={`${title}-${idx}`}
            className={styles.image}
            onClick={() => handleClickImage(idx)}
          />
        ))}
      </div>

      {techs.length > 0 && (
        <div className={styles.techs}>
          {techs.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </div>
      )}

      <div className={styles.links}>
        {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>}
        {deployUrl && <a href={deployUrl} target="_blank" rel="noreferrer">Ver Online</a>}
      </div>

      {selectedIndex !== null && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleCloseModal}>×</button>
            <img
              src={getImageSrc(imageUrls[selectedIndex])}
              alt="Imagem ampliada"
              className={styles.modalImage}
            />
            {imageUrls.length > 1 && (
              <>
                <button className={styles.prevButton} onClick={handlePrev}>‹</button>
                <button className={styles.nextButton} onClick={handleNext}>›</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
