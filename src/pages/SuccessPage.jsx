import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Bell,
    Home,
    Award,
    Lightbulb,
    Mail,
    MoreHorizontal,
    CheckCircle,
    GraduationCap,
} from "lucide-react";

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleContinueClick = () => {
        navigate("/review");
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <span className="text-white">Success</span>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Success Content */}
            <div className="px-4 pt-12 pb-6 text-center">
                <div className="flex justify-center mb-8">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>

                <h1 className="text-2xl font-semibold mb-2">
                    Successfully built
                </h1>
                <h2 className="text-2xl font-semibold mb-8">
                    Chapter: Change Awareness
                </h2>

                {/* Bonus Tips */}
                <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3 text-left">
                        <GraduationCap className="w-6 h-6 text-green-500 mt-1" />
                        <p className="text-gray-300">
                            Bonus Tip: Absum lipsum, dolor sit amet. Absum
                            lipsum, dolor sit amet. Absum lipsum, dolor sit.
                        </p>
                    </div>

                    <div className="flex items-start gap-3 text-left">
                        <GraduationCap className="w-6 h-6 text-green-500 mt-1" />
                        <p className="text-gray-300">
                            Bonus Tip: Absum lipsum, dolor sit amet. Absum
                            lipsum, dolor sit amet. Absum lipsum, dolor sit.
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        onClick={handleContinueClick}
                        className="w-full bg-[#62A157] text-white font-medium py-3 px-4 rounded-lg transition-colors"
                        disabled
                    >
                        Continue Building Strategy with Ads
                    </button>

                    <button
                        onClick={handleContinueClick}
                        className="w-full bg-white hover:bg-gray-100 text-navy-900 font-medium py-3 px-4 rounded-lg"
                    >
                        Review & Read Change Awareness with Ads
                    </button>

                    <button
                        className="w-full bg-gray-600 text-white font-medium py-3 px-4 rounded-lg cursor-not-allowed opacity-80"
                        disabled
                    >
                        Continue Later
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

export default SuccessPage;
