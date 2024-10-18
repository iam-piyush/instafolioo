import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [wallpapers, setWallpapers] = useState([]);

    useEffect(() => {
        const fetchWallpapers = async () => {
            try {
                const response = await axios.get('https://backend-instafolioo-1.onrender.com/api/wallpapers'); 
                setWallpapers(response.data);
            } catch (error) {
                console.error('Error fetching wallpapers:', error);
            }
        };

        fetchWallpapers();
    }, []);

    return (
        <div className="App">
            <h1>Wallpaper Store</h1>
            <div id="wallpaper-container" className="wallpaper-container">
                {wallpapers.map((wallpaper) => (
                    <div key={wallpaper.ID} className="card">
                        <img src={wallpaper['Image Link']} alt={wallpaper['Title']} />
                        <h2>{wallpaper['Title']}</h2>
                        <p>{wallpaper['Description']}</p>
                        <p>ID: {wallpaper['ID']}</p>
                        <a href={wallpaper['Buy Link']} target="_blank" rel="noopener noreferrer">Buy Now</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
