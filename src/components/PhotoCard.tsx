import React from 'react';
import { Photo } from '../typescript/Interface';

interface PhotoCardProps {
    photo: Photo;
    onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, onClick }) => {
    return (
        <div
            className="relative mb-4 overflow-hidden rounded-lg shadow-md transition-shadow duration-300 cursor-pointer group"
            onClick={onClick}
            style={{ breakInside: 'avoid' }}
        >
            <img
                src={photo.src.large}
                alt={photo.photographer}
                loading="lazy"
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="w-full bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-0 left-0 right-0 text-white text-sm p-2">
                    Photo by{' '}
                    <a
                        href={photo.photographer_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        {photo.photographer}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default PhotoCard;
