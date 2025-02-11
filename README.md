## WallpaperGallery - High Quality Photo Gallery

**WallpaperGallery** is a React-based web application that fetches high-quality images using the **Pexels API**. Users can browse curated images and search for specific wallpapers using the built-in search functionality.

<img src="/public/WallpaperGallery SS.png" alt="WallpaperGallery Homepage"/>
---

### Features
- **Curated High-Quality Images** – Displays a gallery of handpicked wallpapers.
- **Search Functionality** – Find images based on user input.
- **Infinite Scrolling** – Automatically loads more images as the user scrolls.
- **Image Modal** – View images in an enlarged format.
- **Download & Share Options** – Allows users to download and share their favorite wallpapers.

---

### Getting Started

#### Prerequisites
1. Sign up or log in to your **Pexels Developer Account**:  
   [Pexels API](https://www.pexels.com/api/)
2. Generate your **API Key**.

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sarcastic-Soul/WallpaperGallery.git
   cd WallpaperGallery
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a **.env** file in the root directory and add your API key:
   ```
   REACT_APP_PEXEL_API_KEY=your_api_key_here
   ```
4. Run the project:
   ```bash
   npm run dev
   ```

---

### Important Notes
- **CORS Issue**: The Pexels API enforces CORS restrictions. Ensure you whitelist your website URL in your **Pexels Developer Dashboard** to avoid API request failures.
- **Usage Limitations**: Check the official Pexels API documentation for request limits and guidelines.

---

### License
This project is open-source and available for personal and commercial use. However, ensure proper credit is given to photographers as per **Pexels API Terms of Service**.

---

Happy Coding! 🚀