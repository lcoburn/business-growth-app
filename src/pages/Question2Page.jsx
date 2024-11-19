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
    Upload,
} from "lucide-react";

const Question2Page = () => {
    const navigate = useNavigate();
    const [hasLogo, setHasLogo] = useState(false);
    const [logoFile, setLogoFile] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleNextClick = () => {
        // Save logo info to localStorage
        localStorage.setItem(
            "logoInfo",
            JSON.stringify({
                hasLogo: hasLogo,
                logoFile: logoFile,
            })
        );

        if (!hasLogo) {
            navigate("/loading2");
        } else if (logoFile) {
            navigate("/loading2");
        }
    };

    const handleLogoToggle = (value) => {
        setHasLogo(value);
        // Clear logo file when toggling to "No"
        if (!value) {
            setLogoFile(null);
        }
    };

    const handleLogoUpload = (e) => {
        setLogoFile(e.target.files[0]);
    };

    // Calculate if the next button should be enabled
    const isNextEnabled = !hasLogo || (hasLogo && logoFile);

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

            {/* Logo Section */}
            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">Company Logo</h1>

                {/* Question Card */}
                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {/* Logo Question */}
                    <div className="mb-8">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-800 font-medium">
                                Does your company have a logo?
                            </p>
                            <Info className="w-5 h-5 text-gray-400" />
                        </div>

                        <div className="inline-flex bg-navy-100 rounded-full p-1 gap-2">
                            <button
                                onClick={() => handleLogoToggle(true)}
                                className={`px-6 py-2 rounded-full transition-all border-2 ${
                                    hasLogo
                                        ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                                        : "bg-white text-gray-500 hover:bg-gray-100 border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleLogoToggle(false)}
                                className={`px-6 py-2 rounded-full transition-all border-2 ${
                                    !hasLogo
                                        ? "bg-navy-900 text-white border-navy-900 shadow-sm"
                                        : "bg-white text-gray-500 hover:bg-gray-100 border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                No
                            </button>
                        </div>
                    </div>

                    {/* Logo Upload - Only shown if hasLogo is true */}
                    {hasLogo && (
                        <div className="mb-6">
                            <div className="flex justify-between items-start mb-2">
                                <label className="text-gray-800 font-medium">
                                    Upload your company logo:
                                </label>
                                <Info className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="logo-upload"
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-900 flex items-center cursor-pointer"
                                >
                                    {logoFile ? (
                                        logoFile.name
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Upload className="w-5 h-5 text-gray-400" />
                                            <span className="text-gray-400">
                                                Choose file
                                            </span>
                                        </div>
                                    )}
                                </label>
                                <input
                                    id="logo-upload"
                                    type="file"
                                    className="hidden"
                                    onChange={handleLogoUpload}
                                />
                            </div>
                        </div>
                    )}

                    {/* Next Button */}
                    <button
                        onClick={handleNextClick}
                        className={`w-full font-medium py-3 px-4 rounded-lg transition-colors ${
                            hasLogo && !logoFile
                                ? "bg-[#62A157] hover:bg-green-600 text-white" // Disabled state
                                : "bg-[#62A157] hover:bg-green-600 text-white" // Enabled state
                        }`}
                        disabled={hasLogo && !logoFile}
                    >
                        {hasLogo ? "Next" : "Next"}
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
