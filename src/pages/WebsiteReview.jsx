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

const WebsiteInput = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        navigate("/details");
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

            {/* Website Section */}
            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">Website</h1>

                {/* Question Card */}
                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {/* Website Question */}
                    <div className="mb-8">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-800 font-medium">
                                Does your company have a website?
                            </p>
                            <Info className="w-5 h-5 text-gray-400" />
                        </div>

                        <div className="inline-flex bg-navy-100 rounded-full p-1">
                            <div className="bg-navy-900 text-white px-6 py-2 rounded-full">
                                Yes
                            </div>
                            <div className="px-6 py-2 text-gray-500">No</div>
                        </div>
                    </div>

                    {/* URL Input */}
                    <div className="mb-6">
                        <div className="flex justify-between items-start mb-2">
                            <label className="text-gray-800 font-medium">
                                Paste your website URL for review:
                            </label>
                            <Info className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="https://"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-400"
                                value="https://"
                                readOnly
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <Award className="w-5 h-5 text-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNextClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                    >
                        Next
                    </button>
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

export default WebsiteInput;
