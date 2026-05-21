import { useEffect, useState } from 'react';

type ImageSliderProps = {
  images: string[];
  label: string;
  className?: string;
  interval?: number;
};

function ImageSlider({ images, label, className = '', interval = 2400 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => window.clearInterval(timerId);
  }, [images.length, interval]);

  return (
    <div className={`image-slider ${className}`.trim()} aria-label={`${label}の画像スライダー`}>
      {images.map((image, index) => (
        <img
          alt={`${label}のイメージ${index + 1}`}
          className={currentIndex === index ? 'is-active' : ''}
          key={image}
          src={image}
        />
      ))}
      {images.length > 1 && (
        <div className="slider-dots" aria-hidden="true">
          {images.map((image, index) => (
            <span className={currentIndex === index ? 'is-active' : ''} key={`${image}-dot`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageSlider;
