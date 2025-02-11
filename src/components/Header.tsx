import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';

import { HeaderProps } from '../typescript/Interface';
import { colors, exampleTags } from '../data/constants.ts';

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query, selectedColor);
    };

    const handleColorSelect = (color: string) => {
        setSelectedColor(selectedColor === color ? '' : color);
        onSearch(query, selectedColor === color ? '' : color);
    };

    const handleExampleClick = (tag: string) => {
        setQuery(tag);
        onSearch(tag, selectedColor);
    };

    return (
        <header className="sticky top-0 bg-white shadow-sm z-50 p-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-3">
                {/* Title */}
                <h1 className="text-5xl my-2 font-bold text-gray-800 text-center">Wallpaper Gallery</h1>

                {/* Search Bar */}
                <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search wallpapers..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Search
                    </button>
                </form>

                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-3">
                        <FiFilter className="text-gray-600 text-lg" />
                        {colors.map(({ name, hex }) => (
                            <button
                                key={name}
                                onClick={() => handleColorSelect(name)}
                                className={`w-8 h-8 rounded-full transition-all border-2 ${selectedColor === name ? 'border-black scale-110' : 'border-transparent'
                                    }`}
                                style={{ backgroundColor: hex }}
                            />
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600 whitespace-nowrap">Try for example:</span>
                        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                            {exampleTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => handleExampleClick(tag)}
                                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Header;
