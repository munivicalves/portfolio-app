function ImageModal({
  images,
  current,
  onClose,
  onPrevious,
  onNext,
}) {
  const imageSrc = (img) => `/assets/${img}`;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          ✕
        </button>

        <img
          src={imageSrc(images[current])}
          alt=""
          className="w-full max-h-[80vh] object-contain rounded-xl"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              ‹
            </button>

            <button
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ImageModal;