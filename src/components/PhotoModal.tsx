import React, { useState } from 'react';
import { FaDownload, FaShareAlt, FaTimes } from 'react-icons/fa';
import { PhotoModalProps } from '../typescript/Interface';


const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose }) => {
    const [toast, setToast] = useState("");

    if (!photo) return null;

    const handleDownload = () => {
        window.open(photo.src.original, '_blank');
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this photo from Pexels',
                    url: photo.src.original,
                });
            } catch (err) {
                console.log('Sharing failed:', err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(photo.src.original);
                setToast("Image link copied to clipboard!");
                setTimeout(() => setToast(""), 3000);
            } catch (err) {
                console.log('Clipboard copy failed:', err);
            }
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/40"
            onClick={onClose} 
        >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <img
                    src={photo.src.original}
                    alt={photo.photographer}
                    className="w-full max-h-[90vh] object-contain rounded-lg"
                />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                    <button
                        onClick={handleDownload}
                        className="p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                        title="Download"
                    >
                        <FaDownload size={18} />
                    </button>
                    <button
                        onClick={handleShare}
                        className="p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                        title="Share"
                    >
                        <FaShareAlt size={18} />
                    </button>
                    <button
                        onClick={onClose}
                        className="p-2 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
                        title="Close"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Photographer Credit */}
                <div className="absolute bottom-4 left-4 bg-black/60 text-white px-4 py-2 rounded">
                    Photo by{' '}
                    <a
                        href={photo.photographer_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {photo.photographer}
                    </a>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow">
                    {toast}
                </div>
            )}
        </div>
    );
};

export default PhotoModal;
