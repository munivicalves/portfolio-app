import { useState } from "react";

import Card from "../ui/Card";

import ProjectGallery from "./ProjectGallery";
import ImageModal from "./ImageModal";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";

function ProjectCard({
  title,
  description,
  imageUrls = [],
  githubUrl,
  deployUrl,
  techs = [],
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  function previousImage() {
    setSelectedImage((current) =>
      current === 0 ? imageUrls.length - 1 : current - 1
    );
  }

  function nextImage() {
    setSelectedImage((current) =>
      current === imageUrls.length - 1 ? 0 : current + 1
    );
  }

  return (
    <>
      <Card>

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-zinc-600 dark:text-zinc-300 leading-7">
          {description}
        </p>

        <ProjectGallery
          images={imageUrls}
          onSelect={setSelectedImage}
        />

        <TechList techs={techs} />

        <ProjectLinks
          githubUrl={githubUrl}
          deployUrl={deployUrl}
        />

      </Card>

      {selectedImage !== null && (
        <ImageModal
          images={imageUrls}
          current={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}

export default ProjectCard;