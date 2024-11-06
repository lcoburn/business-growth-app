import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    Bell,
    Home,
    Award,
    Lightbulb,
    Mail,
    MoreHorizontal,
    Info,
} from "lucide-react";

const ResultsPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [websiteData, setWebsiteData] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    // Simulated API call - replace with actual API call
    useEffect(() => {
        const fetchWebsiteData = async () => {
            try {
                setLoading(true);
                // Replace this with your actual API call
                // const response = await fetch('your-api-endpoint');
                // const data = await response.json();

                // Simulated API response delay
                await new Promise((resolve) => setTimeout(resolve, 1500));

                // Example data structure
                setWebsiteData({
                    hasWebsite: true,
                    url: "example.com",
                    review: "Your website analysis...",
                });
            } catch (err) {
                setError("Failed to load website analysis");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWebsiteData();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <button onClick={handleBackClick}>
                        <ChevronLeft className="text-green-500 w-6 h-6" />
                    </button>
                    <span>Marketing Strategy Builder</span>
                </div>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Progress Bar */}
            <div className="px-4 py-2">
                <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-400">Progress: 27%</span>
                </div>
                <div className="h-1 w-full bg-navy-700 rounded-full">
                    <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: "27%" }}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">Website</h1>

                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {/* Website Question Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                            <p className="font-medium">
                                Does your company have a website?
                            </p>
                            <Info className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* URL Input Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                            <p className="font-medium">
                                Paste your website URL for review:
                            </p>
                            <Info className="w-5 h-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Analysis Results */}
                    <div className="mt-8">
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

                        {!loading && !error && websiteData && (
                            <div className="space-y-4">
                                {/* Replace this with your actual API response display structure */}
                                <p>{websiteData.review}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between items-center">
                <Home className="text-gray-400 w-6 h-6" />
                <Award className="text-gray-400 w-6 h-6" />
                <Lightbulb className="text-green-500 w-6 h-6" />
                <Mail className="text-gray-400 w-6 h-6" />
                <MoreHorizontal className="text-gray-400 w-6 h-6" />
            </div>
        </div>
    );
};

export default ResultsPage;
