import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Home,
    Bell,
    GraduationCap,
    Users,
    Award,
    ChevronRight,
} from "lucide-react";
import homeImage from "../assets/images/home_banner_image.png";
import { getUserProfile } from "../utils/userProfile.jsx";

const HomePage = () => {
    const navigate = useNavigate();
    const profile = getUserProfile(); // Will now never be null

    const handlePlanClick = () => {
        navigate("/strategy");
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <Home className="text-green-500 w-6 h-6" />
                <span className="text-white">Home</span>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Welcome Section */}
            <div className="px-4 py-2">
                <h1 className="text-2xl font-semibold">
                    Welcome{profile.firstName ? `, ${profile.firstName}` : ""}
                </h1>
            </div>

            {/* Hero Section */}
            <div className="px-4 mb-6">
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={homeImage}
                        alt="Business group"
                        className="w-full object-cover h-32 rounded-lg"
                        style={{ objectPosition: "50% 50%" }}
                    />
                </div>
                <h2 className="text-xl font-semibold mt-3">
                    Expert Strategy for Success
                </h2>

                {/* Main CTA Button */}
                <button
                    onClick={handlePlanClick}
                    className="w-full bg-[#62A157] text-white rounded-lg py-3 px-4 mt-3 flex justify-between items-center"
                >
                    <span>
                        {profile.businessType && profile.country
                            ? `Your personalised plan for your ${profile.businessType} Company in ${profile.country}`
                            : "Create your personalised business plan"}
                    </span>
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Growth Ideas Section */}
            <div className="px-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <GraduationCap className="text-green-500 w-5 h-5" />
                        <h3 className="font-semibold">Growth Ideas</h3>
                    </div>
                    <span className="text-gray-400 text-sm">2.3k</span>
                </div>
                <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Users className="text-green-500 w-5 h-5" />
                            <span>How to Stand Out in a Crowd </span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Award className="text-green-500 w-5 h-5" />
                            <span>Why It's Hard to Work On Strategy</span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Users className="text-green-500 w-5 h-5" />
                            <span>Your Customer Insights</span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>
                </div>
            </div>

            {/* Expert Tips Section */}
            <div className="px-4">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <Award className="text-green-500 w-5 h-5" />
                        <h3 className="font-semibold">Expert Tips</h3>
                    </div>
                    <span className="text-gray-400 text-sm">4.7k</span>
                </div>

                {/* Expert Tips Items */}
                <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Users className="text-green-500 w-5 h-5" />
                            <span>Making Customers Secure</span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Award className="text-green-500 w-5 h-5" />
                            <span>Building Customer Confidence</span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>

                    <div className="bg-white rounded-lg p-4 flex items-center justify-between text-navy-900">
                        <div className="flex items-center gap-2">
                            <Users className="text-green-500 w-5 h-5" />
                            <span>Why Customers Choose You</span>
                        </div>
                        <ChevronRight className="text-green-500 w-5 h-5" />{" "}
                        {/* Replaced text arrow */}
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white py-3 px-6 flex justify-between items-center">
                <Home className="text-green-500 w-6 h-6" />
                <Users className="text-gray-400 w-6 h-6" />
                <Award className="text-gray-400 w-6 h-6" />
                <Bell className="text-gray-400 w-6 h-6" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
            </div>
        </div>
    );
};

export default HomePage;
