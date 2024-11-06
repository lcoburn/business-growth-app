import React from "react";
import { useNavigate } from "react-router-dom";
import {
    ChevronLeft,
    Bell,
    Home,
    GraduationCap,
    Mail,
    MoreHorizontal,
    Play,
    Maximize2,
    Volume2,
} from "lucide-react";

const MarketingStrategy = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleChangeAwarenessClick = () => {
        navigate("/change-awareness");
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <button onClick={handleBackClick}>
                    <ChevronLeft className="text-green-500 w-6 h-6" />
                </button>
                <span className="text-white">Your Marketing Strategy</span>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Welcome Section */}
            <div className="px-4 py-2">
                <h1 className="text-2xl font-semibold">
                    Welcome to your strategy
                </h1>
            </div>

            {/* Video Player Card */}
            <div className="mx-4 bg-navy-800 rounded-xl p-3 mb-6">
                <div className="relative rounded-lg overflow-hidden mb-2">
                    <img
                        src="/api/placeholder/400/200"
                        alt="Dr Raewyn Sleeman"
                        className="w-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 text-white">
                        <p className="font-medium">
                            Dr Raewyn Sleeman, Founder
                        </p>
                    </div>
                </div>

                {/* Video Controls */}
                <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-white" />
                    <div className="flex-grow h-1 bg-gray-600 rounded-full">
                        <div className="w-1/3 h-full bg-green-500 rounded-full" />
                    </div>
                    <Maximize2 className="w-5 h-5 text-white" />
                    <Volume2 className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Progress Section */}
            <div className="px-4 flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <GraduationCap className="text-green-500 w-6 h-6" />
                    <h2 className="text-xl font-semibold">Your Success Plan</h2>
                </div>
                <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90">
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="none"
                            stroke="#1a2e4c"
                            strokeWidth="4"
                        />
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                            strokeDasharray={`${55 * 1.26} 126`}
                        />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm">
                        55%
                    </span>
                </div>
            </div>

            {/* Strategy Items */}
            <div className="px-4 space-y-4">
                <button
                    onClick={handleChangeAwarenessClick}
                    className="w-full bg-white rounded-lg p-4 flex items-center justify-between text-navy-900"
                >
                    <div className="flex items-center gap-3">
                        <div className="text-green-500">👤</div>
                        <div className="text-left">
                            <p className="font-medium">Change Awareness</p>
                            <p className="text-sm text-gray-500">
                                Make customers feel secure.
                            </p>
                        </div>
                    </div>
                    <ChevronLeft className="rotate-180 text-green-500" />
                </button>

                {[
                    "Competition Awareness",
                    "Business Personality",
                    "Service Improvements",
                ].map((item, index) => (
                    <div
                        key={item}
                        className="w-full bg-white rounded-lg p-4 flex items-center justify-between text-navy-900"
                    >
                        <div className="flex items-center gap-3">
                            <div className="text-green-500">👥</div>
                            <div className="text-left">
                                <p className="font-medium">{item}</p>
                                <p className="text-sm text-gray-500">
                                    {index === 0 &&
                                        "How to build customer confidence."}
                                    {index === 1 &&
                                        "Why customers choose your business."}
                                    {index === 2 &&
                                        "Create an advantage over your competitors"}
                                </p>
                            </div>
                        </div>
                        <ChevronLeft className="rotate-180 text-green-500" />
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between items-center">
                <Home className="text-gray-400 w-6 h-6" />
                <GraduationCap className="text-gray-400 w-6 h-6" />
                <div className="text-green-500">
                    <GraduationCap className="w-6 h-6" />
                </div>
                <Mail className="text-gray-400 w-6 h-6" />
                <MoreHorizontal className="text-gray-400 w-6 h-6" />
            </div>
        </div>
    );
};

export default MarketingStrategy;
