// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import TipCarousel from '../components/TipCarousel';

const Home = () => {
    return (
        <div className="pt-16"> {/* Account for fixed navbar */}
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Welcome to SteadyMind</h1>
                    <p className="text-xl text-gray-700 mb-8">Help yourself get rid of distractions and boost productivity</p>
                    <Link
                        to="/login"
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
                    >
                        Try Free Version
                    </Link>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">About Us</h2>
                    <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
                        <p>
                            Working remotely offers freedom, but staying focused can be a challenge. That's where we come in.
                        </p>
                        <p>
                            We help remote workers minimize distractions and maintain a healthy work-life balance with smart, interactive tools. Our wellness and mood checker bot lets you set timers for focused work sessions and energizing breaks, even suggesting fun activities to recharge. You can plan your schedule directly on our platform and choose Spotify playlists that match your mood.
                        </p>
                        <p>
                            Need an extra nudge to stay on track? Our eye-tracking service detects distractions and sends gentle reminders to refocus.
                        </p>
                        <p>
                            We're here to make remote work more productive, balanced, and enjoyable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Free Tier Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Free Tier Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Focus Timer</h3>
                            <p className="text-gray-700">25-minute work sessions with 5-minute breaks (Pomodoro technique)</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Basic Analytics</h3>
                            <p className="text-gray-700">Track your daily and weekly productivity</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Health Tips</h3>
                            <p className="text-gray-700">Personalized reminders to stay healthy while working</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3">Spotify Integration</h3>
                            <p className="text-gray-700">Productivity playlist recommendations based on your mood</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tips Carousel */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Productivity Tips</h2>
                    <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg">
                        <TipCarousel />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;