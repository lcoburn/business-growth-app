import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { userProfile } from "../utils/userProfile"; // Add this import
console.log(userProfile);

const ResultsPage1 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeData, setTimeData] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchCurrentTime = async () => {
            try {
                setLoading(true);
                // Use the correct backend URL
                const response = await axios.get(
                    "http://localhost:8000/get-current-time",
                    {
                        params: { timezone: "America/New_York" },
                    }
                );
                console.log("API Response:", response.data); // Debug log
                setTimeData(response.data);
            } catch (err) {
                console.error("API Error:", err); // Debug log
                setError(
                    err.response?.data?.detail || "Failed to load current time"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentTime();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <button onClick={handleBackClick}>
                        <ChevronLeft className="text-green-500 w-6 h-6" />
                    </button>
                    <span>Current Time Viewer</span>
                </div>
            </div>

            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">Current Time</h1>

                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {loading && (
                        <div className="flex items-center justify-center py-8">
                            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}

                    {error && (
                        <div className="text-red-500 text-center py-4">
                            {error}
                        </div>
                    )}

                    {!loading && !error && timeData && (
                        <div className="space-y-4">
                            <p>
                                <strong>Timezone:</strong> {timeData.timezone}
                            </p>
                            <p>
                                <strong>Current Time:</strong>{" "}
                                {new Date(
                                    timeData.current_time
                                ).toLocaleString()}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage1;
