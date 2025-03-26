// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Enjoy your workday section */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Enjoy your workday with our services</h2>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                                Try Free
                            </button>
                            <button className="border border-white hover:bg-gray-700 px-4 py-2 rounded-md">
                                Go Premium
                            </button>
                        </div>
                    </div>

                    {/* Info section */}
                    <div>
                        <h3 className="font-semibold mb-4">Info</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-blue-300">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-blue-300">Security Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact section */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li>Email: support@steadymind.nl</li>
                            <li>Phone: +XX-XXX-XXX-XXXX</li>
                            <li><a href="#" className="hover:text-blue-300">Report a problem</a></li>
                            <li><a href="#" className="hover:text-blue-300">Feedback</a></li>
                            <li><a href="#" className="hover:text-blue-300">Careers</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
                    © 2025 SteadyMind | All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;