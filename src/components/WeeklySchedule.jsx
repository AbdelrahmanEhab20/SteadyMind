// src/components/WeeklySchedule.jsx
import { useState } from 'react';
import { format, addDays, startOfWeek, addWeeks } from 'date-fns';
import * as dateFnsTz from 'date-fns-tz';

const WeeklySchedule = ({ timezone, logs, onAddLog, onDeleteLog }) => {
    const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));
    const [selectedDate, setSelectedDate] = useState(null);
    const [newLog, setNewLog] = useState({
        description: '',
        duration: 30,
        startTime: '09:00'
    });

    const generateWeekDays = () => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            days.push(addDays(currentWeekStart, i));
        }
        return days;
    };

    const handlePrevWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, -1));
    };

    const handleNextWeek = () => {
        setCurrentWeekStart(addWeeks(currentWeekStart, 1));
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
    };

    const handleAddLog = () => {
        if (!selectedDate || !newLog.description) return;

        const [hours, minutes] = newLog.startTime.split(':').map(Number);
        const logDate = new Date(selectedDate);
        logDate.setHours(hours, minutes, 0, 0);

        // Convert to UTC for storage
        const utcDate = dateFnsTz.zonedTimeToUtc(logDate, timezone);

        const log = {
            id: Date.now(),
            date: utcDate.toISOString(),
            timezone,
            description: newLog.description,
            duration: newLog.duration
        };

        onAddLog(log);
        setNewLog({
            description: '',
            duration: 30,
            startTime: '09:00'
        });
    };

    const getLogsForDate = (date) => {
        return logs.filter(log => {
            const logDate = dateFnsTz.utcToZonedTime(new Date(log.date), timezone);
            return (
                logDate.getDate() === date.getDate() &&
                logDate.getMonth() === date.getMonth() &&
                logDate.getFullYear() === date.getFullYear()
            );
        });
    };

    const formatDateForDisplay = (date) => {
        return format(dateFnsTz.utcToZonedTime(date, timezone), 'EEE, MMM d');
    };

    const formatTimeForDisplay = (dateString) => {
        const date = dateFnsTz.utcToZonedTime(new Date(dateString), timezone);
        return format(date, 'h:mm a');
    };

    const days = generateWeekDays();

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Weekly Schedule</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={handlePrevWeek}
                        className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextWeek}
                        className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
                {days.map((day, index) => (
                    <div
                        key={index}
                        onClick={() => handleDateSelect(day)}
                        className={`p-2 text-center cursor-pointer rounded-md ${selectedDate && day.toDateString() === selectedDate.toDateString()
                            ? 'bg-blue-100'
                            : 'hover:bg-gray-100'
                            }`}
                    >
                        <div className="font-medium">{format(day, 'EEE')}</div>
                        <div className="text-sm">{format(day, 'd')}</div>
                    </div>
                ))}
            </div>

            {selectedDate && (
                <>
                    <div className="mb-4">
                        <h3 className="font-medium mb-2">
                            Logs for {format(selectedDate, 'MMMM d, yyyy')}
                        </h3>
                        <div className="space-y-2">
                            {getLogsForDate(selectedDate).length > 0 ? (
                                getLogsForDate(selectedDate).map(log => (
                                    <div key={log.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
                                        <div>
                                            <span className="font-medium">{log.description}</span>
                                            <span className="text-sm text-gray-600 ml-2">
                                                ({formatTimeForDisplay(log.date)} - {log.duration} mins)
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => onDeleteLog(log.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No logs for this day</p>
                            )}
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="font-medium mb-2">Add New Log</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <input
                                type="text"
                                placeholder="Description"
                                value={newLog.description}
                                onChange={(e) => setNewLog({ ...newLog, description: e.target.value })}
                                className="p-2 border rounded-md md:col-span-2"
                            />
                            <select
                                value={newLog.duration}
                                onChange={(e) => setNewLog({ ...newLog, duration: parseInt(e.target.value) })}
                                className="p-2 border rounded-md"
                            >
                                <option value="30">30 mins</option>
                                <option value="60">60 mins</option>
                                <option value="90">90 mins</option>
                                <option value="120">120 mins</option>
                            </select>
                            <input
                                type="time"
                                value={newLog.startTime}
                                onChange={(e) => setNewLog({ ...newLog, startTime: e.target.value })}
                                className="p-2 border rounded-md"
                            />
                            <button
                                onClick={handleAddLog}
                                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 md:col-span-4"
                            >
                                Add Log
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default WeeklySchedule;