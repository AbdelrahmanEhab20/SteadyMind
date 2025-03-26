import * as dateFnsTz from 'date-fns-tz';
import { format } from 'date-fns';

const WorkLogTable = ({ logs, timezone, onDeleteLog }) => {
    const formatDate = (dateString) => {
        const date = dateFnsTz.utcToZonedTime(new Date(dateString), timezone);
        return format(date, 'EEE, MMM d, yyyy h:mm a');
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Date & Time</th>
                        <th className="py-2 px-4 border-b text-left">Description</th>
                        <th className="py-2 px-4 border-b text-left">Duration</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.length > 0 ? (
                        logs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b">{formatDate(log.date)}</td>
                                <td className="py-2 px-4 border-b">{log.description}</td>
                                <td className="py-2 px-4 border-b">{log.duration} mins</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        onClick={() => onDeleteLog(log.id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="py-4 px-4 border-b text-center text-gray-500">
                                No work sessions recorded yet
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default WorkLogTable;