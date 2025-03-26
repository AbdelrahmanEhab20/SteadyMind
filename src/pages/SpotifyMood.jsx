// src/pages/SpotifyMood.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SpotifyMood = () => {
    const [searchParams] = useSearchParams();
    const initialMood = searchParams.get('mood') || 'focus';
    const [selectedMood, setSelectedMood] = useState(initialMood);

    const moodCategories = {
        focus: {
            name: 'Focus',
            description: 'Playlists to help you concentrate and maintain productivity',
            playlists: [
                { id: '37i9dQZF1DWZeKCadgRdKQ', name: 'Deep Focus' },
                { id: '37i9dQZF1DX9sIqqvKsjG8', name: 'Instrumental Study' },
                { id: '37i9dQZF1DX8NTLI2TtZa6', name: 'Concentration Flow' }
            ]
        },
        relax: {
            name: 'Relax',
            description: 'Calming playlists for stress-free work sessions',
            playlists: [
                { id: '37i9dQZF1DX4WYpdgoIcn6', name: 'Chill Hits' },
                { id: '37i9dQZF1DX4sWSpwq3LiO', name: 'Peaceful Piano' },
                { id: '37i9dQZF1DX3Ogo9pFvBkY', name: 'Ambient Relaxation' }
            ]
        },
        energize: {
            name: 'Energize',
            description: 'Energetic playlists to boost your motivation',
            playlists: [
                { id: '37i9dQZF1DX0vHZ8elq0UK', name: 'Energy Boost' },
                { id: '37i9dQZF1DW76Wlfdnj7AP', name: 'Workout Motivation' },
                { id: '37i9dQZF1DWUVpAXiEPK8P', name: 'Power Workout' }
            ]
        }
    };

    const openSpotifyPlaylist = (playlistId) => {
        window.open(`https://open.spotify.com/playlist/${playlistId}`, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
                Spotify Playlists for {moodCategories[selectedMood].name}
            </h1>
            <p className="text-gray-600 mb-8">{moodCategories[selectedMood].description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {Object.entries(moodCategories).map(([moodKey, moodData]) => (
                    <div
                        key={moodKey}
                        onClick={() => setSelectedMood(moodKey)}
                        className={`p-6 rounded-lg shadow-md cursor-pointer transition-all ${selectedMood === moodKey ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-50'
                            }`}
                    >
                        <h2 className="text-xl font-semibold text-center">{moodData.name}</h2>
                    </div>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">
                    {moodCategories[selectedMood].name} Playlists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {moodCategories[selectedMood].playlists.map((playlist) => (
                        <div
                            key={playlist.id}
                            onClick={() => openSpotifyPlaylist(playlist.id)}
                            className="p-4 border rounded-lg hover:bg-blue-50 cursor-pointer transition-colors flex items-center"
                        >
                            <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-medium">{playlist.name}</h3>
                                <p className="text-sm text-gray-600 mt-1">Click to open in Spotify</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpotifyMood;