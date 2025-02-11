import React from 'react';
import PhotoCard from './PhotoCard';
import { PhotoGridProps } from '../typescript/Interface';



const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onPhotoClick }) => {
    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
                {photos.map((photo, index) => (
                    <PhotoCard
                        key={`${photo.id}-${index}`}
                        photo={photo}
                        onClick={() => onPhotoClick(photo)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoGrid;
