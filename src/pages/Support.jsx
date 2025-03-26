// src/pages/Support.jsx
import Swal from 'sweetalert2';

const Support = () => {
    Swal.fire({
        icon: 'info',
        title: 'Support',
        text: 'Our support team is here to help you! Contact us at support@steadymind.example.com',
        confirmButtonText: 'OK'
    });

    return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Support</h1>
            <p className="text-lg">You should see a support message above.</p>
        </div>
    );
};

export default Support;