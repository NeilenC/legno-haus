// components/ImageModal.js
import React from 'react';
import Image from 'next/image';

const ImageModal = ({ isOpen, onClose, imageUrl, title }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 style={{ color: 'white' }}>{title}</h2>
        <div className="modal-image-wrapper">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={600}
            className="modal-image"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease-in-out;
          padding: 1rem;
        }

        .modal-content {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          padding: 30px;
          border-radius: 8px;
          max-width: 90%;
          max-height: 90%;
          overflow: auto;
          position: relative;
          animation: slideUp 0.4s ease-out;
        }

        .modal-content::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }

        .modal-content {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 20px;
          background: transparent;
          border: none;
          font-size: 32px;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .close-button:hover {
          transform: scale(1.2);
        }

        .modal-image-wrapper {
          margin-top: 20px;
          width: 100%;
          border-radius: 2px;
          overflow: hidden;
        }

        .modal-image {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 20px;
            max-width: 100%;
            max-height: 90%;
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageModal;
