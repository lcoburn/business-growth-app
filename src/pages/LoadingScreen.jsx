import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Bell } from "lucide-react";

const LoadingScreen = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const duration = 2000; // 2 seconds for the animation
        const interval = 20; // Update every 20ms for smooth animation
        const steps = duration / interval;
        const increment = 100 / steps;
        let currentProgress = 0;

        const timer = setInterval(() => {
            currentProgress += increment;
            if (currentProgress >= 100) {
                clearInterval(timer);
                currentProgress = 100;
                setShowButton(true);
            }
            setProgress(Math.min(Math.round(currentProgress), 100));
        }, interval);

        return () => clearInterval(timer);
    }, []);

    const handleResultsClick = () => {
        navigate("/results-page");
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center">
                    <ChevronLeft className="text-green-500 w-6 h-6" />
                    <span className="ml-2">Creating Strategy</span>
                </div>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center h-[calc(100vh-76px)]">
                <h1 className="text-2xl font-semibold text-center mb-16 px-8">
                    Your personalised strategy is
                    <br />
                    being created
                </h1>

                {/* Progress Circle */}
                <div className="relative w-32 h-32 mb-16">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="58"
                            fill="none"
                            stroke="#1a2e4c"
                            strokeWidth="12"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="58"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={`${progress * 3.64} 364`}
                            className="transition-all duration-100 ease-linear"
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-semibold">
                            {progress}
                        </span>
                    </div>
                </div>

                {/* Results Button */}
                {showButton && (
                    <button
                        onClick={handleResultsClick}
                        className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out transform hover:bg-green-600"
                    >
                        See Results with Ads
                    </button>
                )}
            </div>
        </div>
    );
};

export default LoadingScreen;
