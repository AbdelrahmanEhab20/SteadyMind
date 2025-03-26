// src/components/CountdownTimer.jsx
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const CountdownTimer = ({ onComplete, timezone }) => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [tips] = useState([
        "Take a short walk to refresh your mind",
        "Drink some water to stay hydrated",
        "Do some stretching exercises",
        "Look away from the screen for a minute",
        "Take deep breaths to relax"
    ]);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        const now = new Date();
                        const session = {
                            date: now.toISOString(),
                            timezone: timezone,
                            duration: 30
                        };
                        onComplete(session);

                        // Show random tip
                        const randomTip = tips[Math.floor(Math.random() * tips.length)];
                        Swal.fire({
                            icon: 'info',
                            title: 'Session Complete!',
                            text: randomTip,
                            confirmButtonText: 'Start Next Session'
                        });

                        resetTimer();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isActive, minutes, seconds, onComplete, timezone, tips]);

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setMinutes(30);
        setSeconds(0);
    };

    return (
        <div className="text-center">
            <div className="text-4xl font-mono mb-4">
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </div>
            <div className="flex justify-center space-x-4">
                <button
                    onClick={toggleTimer}
                    className={`px-6 py-2 rounded-md font-medium ${isActive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
                >
                    {isActive ? 'Pause' : 'Start Work'}
                </button>
                <button
                    onClick={resetTimer}
                    className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md font-medium"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountdownTimer;