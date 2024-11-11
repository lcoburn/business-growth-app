import React from "react";
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

const Question1Page = () => {
    const navigate = useNavigate();

    const handleAgreeClick = () => {
        navigate("/loading");
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <button onClick={handleBackClick}>
                    <ChevronLeft className="text-green-500 w-6 h-6" />
                </button>
                <span className="text-white">Marketing Strategy Builder</span>
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

            {/* Question Section */}
            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">
                    Change Awareness
                </h1>

                {/* Question Card */}
                <div className="bg-white rounded-xl p-6 text-navy-900 text-base font-sans">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-base text-navy-900">
                            Over the past few years, have you felt that: Your
                            local market is changing quickly?
                        </p>
                        <Info className="w-5 h-5 text-navy-900" />
                    </div>

                    <div className="space-y-4">
                        <p className="text-base text-navy-900">
                            Customers often want new services?
                        </p>
                        <p className="text-base text-navy-900">
                            The local market is always evolving?
                        </p>
                        <p className="text-base text-navy-900">
                            Your business environment looks very different each
                            year? [Click the circle 'i' icon for more
                            information and tips on answering.]
                        </p>
                    </div>

                    {/* Answer Section */}
                    <div className="mt-8">
                        <p className="text-base text-navy-900 mb-3">
                            Choose 'Agree' or 'Disagree'
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleAgreeClick}
                                className="flex-1 bg-white hover:bg-gray-600 text-black border border-black font-medium py-2 px-4 rounded-full transition-colors"
                            >
                                Agree
                            </button>
                            <button
                                className="flex-1 bg-white text-black border border-black font-medium py-2 px-4 rounded-full cursor-not-allowed"
                                disabled
                            >
                                Disagree
                            </button>
                        </div>
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

export default Question1Page;
