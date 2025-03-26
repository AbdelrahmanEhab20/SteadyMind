// src/pages/Premium.jsx
import Swal from 'sweetalert2';

const Premium = () => {
    Swal.fire({
        icon: 'info',
        title: 'Go Premium',
        text: 'Premium features are coming soon! Stay tuned for exciting updates.',
        confirmButtonText: 'OK'
    });

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Go Premium</h1>
            <p className="text-lg">You should see a premium message above.</p>
        </div>
    );
};

export default Premium;