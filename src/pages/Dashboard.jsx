// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import WorkLogTable from '../components/WorkLogTable';
import TimezoneSelector from '../components/TimezoneSelector';
import TipCarousel from '../components/TipCarousel';
import WeeklySchedule from '../components/WeeklySchedule';

const Dashboard = () => {
    const [timezone, setTimezone] = useState('UTC');
    const [workLogs, setWorkLogs] = useState([]);
    const [totalWorkTime, setTotalWorkTime] = useState(0);

    useEffect(() => {
        const savedLogs = JSON.parse(localStorage.getItem('workLogs')) || [];
        const savedTimezone = localStorage.getItem('timezone') || 'UTC';
        const savedTotalTime = parseInt(localStorage.getItem('totalWorkTime')) || 0;

        setWorkLogs(savedLogs);
        setTimezone(savedTimezone);
        setTotalWorkTime(savedTotalTime);
    }, []);

    const handleSessionComplete = (session) => {
        const updatedLogs = [...workLogs, {
            id: Date.now(),
            date: new Date().toISOString(),
            timezone,
            description: 'Work Session',
            duration: 30
        }];
        const updatedTotalTime = totalWorkTime + 30;

        setWorkLogs(updatedLogs);
        setTotalWorkTime(updatedTotalTime);

        // Save to localStorage
        localStorage.setItem('workLogs', JSON.stringify(updatedLogs));
        localStorage.setItem('totalWorkTime', updatedTotalTime.toString());
    };

    const handleTimezoneChange = (newTimezone) => {
        setTimezone(newTimezone);
        localStorage.setItem('timezone', newTimezone);
    };

    const handleDeleteLog = (id) => {
        const updatedLogs = workLogs.filter(log => log.id !== id);
        setWorkLogs(updatedLogs);
        localStorage.setItem('workLogs', JSON.stringify(updatedLogs));
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold text-blue-900 mb-6">Welcome to Your Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Work Session Timer</h2>
                    <CountdownTimer
                        onComplete={handleSessionComplete}
                        timezone={timezone}
                    />
                    <div className="mt-4">
                        <p className="text-lg">
                            Today's work time: <span className="font-bold">{totalWorkTime} minutes</span>
                        </p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Select Timezone</h2>
                    <TimezoneSelector
                        currentTimezone={timezone}
                        onChange={handleTimezoneChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Health Tips</h2>
                    <TipCarousel />
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Your Work Log</h2>
                    <WorkLogTable logs={workLogs} timezone={timezone} onDeleteLog={handleDeleteLog} />
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <WeeklySchedule
                    timezone={timezone}
                    logs={workLogs}
                    onAddLog={(log) => {
                        const updatedLogs = [...workLogs, log];
                        setWorkLogs(updatedLogs);
                        localStorage.setItem('workLogs', JSON.stringify(updatedLogs));
                        setTotalWorkTime(prev => prev + log.duration);
                    }}
                    onDeleteLog={(id) => {
                        const deletedLog = workLogs.find(log => log.id === id);
                        const updatedLogs = workLogs.filter(log => log.id !== id);
                        setWorkLogs(updatedLogs);
                        localStorage.setItem('workLogs', JSON.stringify(updatedLogs));
                        setTotalWorkTime(prev => prev - (deletedLog?.duration || 0));
                    }}
                />
            </div>
        </div>
    );
};

export default Dashboard;