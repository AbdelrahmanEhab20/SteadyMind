import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">About us:</h1>

                <div className="space-y-4 text-gray-700">
                    <p>
                        Working remotely offers freedom, but staying focused can be a challenge. That's where we come in.
                    </p>

                    <p>
                        We help remote workers minimize distractions and maintain a healthy work-life balance with smart, interactive tools. Our wellness and mood checker bot lets you set timers for focused work sessions and energizing breaks, even suggesting fun activities to recharge. You can plan your schedule directly on our platform and choose advised playlists that match your mood.
                    </p>

                    <p>
                        Need an extra nudge to stay on track? Our eye-tracking service detects distractions and sends gentle reminders to refocus.
                    </p>

                    <p>
                        We're here to make remote work more productive, balanced, and enjoyable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;