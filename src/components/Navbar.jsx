// src/components/Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleUnderConstruction = () => {
        Swal.fire({
            icon: 'info',
            title: 'Under Construction',
            text: 'This feature is currently being developed!',
        });
        setMobileMenuOpen(false);
    };

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('workSessions');
        sessionStorage.removeItem('totalWorkTime');
        sessionStorage.removeItem('timezone');

        // Update state
        setIsLoggedIn(false);

        // Navigate to home
        navigate('/');

        // Show confirmation
        Swal.fire({
            icon: 'success',
            title: 'Logged Out',
            text: 'You have been successfully logged out',
            timer: 1500,
            showConfirmButton: false
        });
        setMobileMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="text-2xl font-bold text-blue-900">
                        SteadyMind
                    </Link>

                    {/* Desktop Navigation - Horizontal */}
                    <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
                        {isLoggedIn ? (
                            <>
                                <Link to="/dashboard" className="text-gray-700 hover:text-blue-900 font-medium">
                                    Dashboard
                                </Link>
                                <button onClick={handleUnderConstruction} className="text-gray-700 hover:text-blue-900 font-medium">
                                    Support
                                </button>
                                <button onClick={handleUnderConstruction} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md font-medium">
                                    Go Premium
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="text-gray-700 hover:text-red-600 font-medium border border-gray-300 px-3 py-1 rounded-md"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-700 hover:text-blue-900 font-medium">
                                    Log in
                                </Link>
                                <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md font-medium">
                                    Try Free
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation - Vertical Column */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleUnderConstruction}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                                >
                                    Support
                                </button>
                                <button
                                    onClick={handleUnderConstruction}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
                                >
                                    Go Premium
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 border border-gray-300 hover:text-red-600 hover:bg-gray-50"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                                <Link
                                    to="/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
                                >
                                    Try Free
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;