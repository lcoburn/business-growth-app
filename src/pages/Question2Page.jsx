import React, { useState } from "react";
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

const Question2Page = () => {
    const navigate = useNavigate();
    const [hasWebsite, setHasWebsite] = useState(true);
    const [websiteUrl, setWebsiteUrl] = useState("");

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleNextClick = () => {
        // Save to localStorage
        localStorage.setItem(
            "websiteInfo",
            JSON.stringify({
                hasWebsite: hasWebsite,
                websiteUrl: websiteUrl,
            })
        );

        if (!hasWebsite) {
            navigate("/loading2");
        } else if (websiteUrl.trim()) {
            navigate("/loading2");
        }
    };

    const handleToggle = (value) => {
        setHasWebsite(value);
        // Clear URL when toggling to "No"
        if (!value) {
            setWebsiteUrl("");
        }
    };

    // Calculate if the next button should be enabled
    const isNextEnabled =
        !hasWebsite || (hasWebsite && websiteUrl.trim() !== "");

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

                        <div className="inline-flex bg-navy-100 rounded-full p-1 gap-2">
                            {" "}
                            {/* Added gap-2 */}
                            <button
                                onClick={() => handleToggle(true)}
                                className={`px-6 py-2 rounded-full transition-all border-2 ${
                                    hasWebsite
                                        ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                                        : "bg-white text-gray-500 hover:bg-gray-100 border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleToggle(false)}
                                className={`px-6 py-2 rounded-full transition-all border-2 ${
                                    !hasWebsite
                                        ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                                        : "bg-white text-gray-500 hover:bg-gray-100 border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    {/* URL Input - Only shown if hasWebsite is true */}
                    {hasWebsite && (
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
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    value={websiteUrl}
                                    onChange={(e) =>
                                        setWebsiteUrl(e.target.value)
                                    }
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <Award className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={handleNextClick}
                        className={`w-full font-medium py-3 px-4 rounded-lg transition-colors ${
                            hasWebsite && !websiteUrl.trim()
                                ? "bg-[#62A157] hover:bg-green-600 text-white" // Disabled state
                                : "bg-[#62A157] hover:bg-green-600 text-white" // Enabled state
                        }`}
                        disabled={hasWebsite && !websiteUrl.trim()}
                    >
                        {hasWebsite ? "Next" : "Next"}
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

export default Question2Page;
