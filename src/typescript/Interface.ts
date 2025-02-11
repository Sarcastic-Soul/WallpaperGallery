export interface Photo {
    id: number;
    src: {
        large: string;
        original: string;
    };
    photographer: string;
    photographer_url: string;
    height: number;
    width: number;
}

export interface PexelsResponse {
    photos: Photo[];
}

export interface PhotoModalProps {
    photo: Photo | null;
    onClose: () => void;
}

export interface PhotoGridProps {
    photos: Photo[];
    onPhotoClick: (photo: Photo) => void;
}

export interface LoaderProps {
    ref?: React.Ref<HTMLDivElement>;
}

export interface HeaderProps {
    onSearch: (query: string, color: string) => void;
}