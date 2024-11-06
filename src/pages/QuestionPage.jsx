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

const QuestionPage = () => {
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
                <div className="bg-white rounded-xl p-6 text-navy-900">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm text-gray-600">
                            Change Awareness questions... same as currently
                        </p>
                        <Info className="w-5 h-5 text-gray-400" />
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-800">Absum lipsum...</p>
                        <p className="text-gray-800">
                            Lorem ipsum, dolor sit amet...
                        </p>
                        <p className="text-gray-600">
                            consectetur adipiscing elit. Sed.
                        </p>
                    </div>

                    {/* Answer Section */}
                    <div className="mt-8">
                        <p className="text-sm text-gray-600 mb-3">
                            Choose 'Agree' or 'Disagree'
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={handleAgreeClick}
                                className="flex-1 bg-gray-100 hover:bg-green-50 text-gray-800 font-medium py-2 px-4 rounded-full transition-colors"
                            >
                                Agree
                            </button>
                            <button
                                className="flex-1 bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-full cursor-not-allowed"
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

export default QuestionPage;
