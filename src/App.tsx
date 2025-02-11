import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import Header from './components/Header';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal';
import Loader from './components/Loader';
import { Photo } from './interface/Photo';

interface PexelsResponse {
  photos: Photo[];
}

const API_KEY = process.env.REACT_APP_PEXEL_API_KEY;

const App: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [query, setQuery] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchImages = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    try {
      let url = query
        ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&page=${page}` // Made to avoid CORS, BAD PRACTICE
        : `https://api.pexels.com/v1/curated?page=${page}`;

      if (color) {
        url += `&color=${color}`;
      }

      const response = await axios.get<PexelsResponse>(url, {
        headers: { Authorization: API_KEY },
      });

      setPhotos((prev) => {
        const newPhotos = response.data.photos.filter(
          (photo) => !prev.some((p) => p.id === photo.id)
        );
        return [...prev, ...newPhotos];
      });
    } catch (error) {
      console.error('API Error:', error);
    } finally {
      setLoading(false);
    }
  }, [query, color, page, loading]);

  useEffect(() => {
    if (loaderRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      });

      observer.observe(loaderRef.current);
      return () => observer.disconnect();
    }
  }, [loading]);

  useEffect(() => {
    fetchImages();
  }, [page, query, color]);

  const handleSearch = (newQuery: string, newColor: string) => {
    setPhotos([]);
    setQuery(newQuery);
    setColor(newColor);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={handleSearch} />

      <PhotoGrid photos={photos} onPhotoClick={setSelectedPhoto} />

      <div ref={loaderRef} className="h-10" />
      {loading && <Loader />}

      <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </div>
  );
};

export default App;
