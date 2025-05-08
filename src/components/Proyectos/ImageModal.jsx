import React, { useEffect } from 'react';
import Image from 'next/image';
import './modal.css';
import { useBreakpoint } from '../../../Hook/useBreakpoint';

const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
  const breakpoint = useBreakpoint()
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="image-scroll-container">
          <div className="modal-image-wrapper">
            <Image
              src={imageUrl}
              alt={title}
              width={800}
              height={600}
              className="modal-image"
              priority
            />
          </div>
        </div>
      {breakpoint == 'mobile' && 
        <div className="rotate-message">
          <div className="rotate-icon">↻</div>
          <p>Gira tu dispositivo para ver mejor la imagen</p>
        </div>
        }  
      </div>
    </div>
  );
};

export default ImageModal;