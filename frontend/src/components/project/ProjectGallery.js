function ProjectGallery({ images = [], onSelect }) {
  const getImageSrc = (img) => `/assets/${img}`;

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="
        flex
        gap-3
        overflow-x-auto
        py-4
      "
    >
      {images.map((img, index) => (
        <img
          key={index}
          src={getImageSrc(img)}
          alt=""
          onClick={() => onSelect(index)}
          className="
            w-40
            h-28
            object-cover
            rounded-xl
            cursor-pointer
            transition
            hover:scale-105
          "
        />
      ))}
    </div>
  );
}

export default ProjectGallery;