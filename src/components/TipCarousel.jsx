// src/components/TipCarousel.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TipCarousel = () => {
    const tips = [
        {
            title: "Set a Structured Routine",
            content: "Start and end your workday at consistent times to create a clear boundary between work and personal life.",
            spotify: null
        },
        {
            title: "Design a Dedicated Workspace",
            content: "Choose a quiet, comfortable place to work, free from distractions, and set it up with everything you need.",
            spotify: null
        },
        {
            title: "Take Regular Breaks",
            content: "Short breaks improve Focus. Use the work timer to schedule work sprints and fun break activities.",
            spotify: null
        },
        {
            title: "Listen to the Right Music",
            content: "Choose Spotify playlists that match your work style for better focus and productivity.",
            spotify: {
                text: "Explore productivity playlists",
                mood: "focus"
            }
        },
        // Add other tips from your screenshot
    ];

    const [currentTipIndex, setCurrentTipIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [tips.length]);

    return (
        <div className="relative bg-white p-6 rounded-lg shadow-md">
            {/* <h2 className="text-xl font-semibold mb-4">Productivity Tips</h2> */}
            <div className="relative h-40 overflow-hidden">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentTipIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <h3 className="text-lg font-medium mb-2">{tip.title}</h3>
                        <p className="text-gray-700 mb-3">{tip.content}</p>
                        {tip.spotify && (
                            <Link
                                to={`/spotify-mood?mood=${tip.spotify.mood}`}
                                className="inline-flex items-center text-blue-500 hover:text-blue-700"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                                {tip.spotify.text}
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                {tips.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTipIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${index === currentTipIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                        aria-label={`Go to tip ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default TipCarousel;