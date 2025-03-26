// src/components/TimezoneSelector.jsx
const TimezoneSelector = ({ currentTimezone, onChange }) => {
    const timezones = [
        'UTC',
        'America/New_York',
        'America/Chicago',
        'America/Denver',
        'America/Los_Angeles',
        'Europe/London',
        'Europe/Paris',
        'Asia/Tokyo',
        'Australia/Sydney'
    ];

    return (
        <select
            value={currentTimezone}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 border rounded-md"
        >
            {timezones.map((tz) => (
                <option key={tz} value={tz}>
                    {tz}
                </option>
            ))}
        </select>
    );
};

export default TimezoneSelector;