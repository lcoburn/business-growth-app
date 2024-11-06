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
    Check,
    Search,
    Zap,
    ExternalLink,
} from "lucide-react";

const DetailsPage = () => {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState("do"); // 'do' section open by default

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCreateClick = () => {
        navigate("/results");
    };

    // Accordion sections data
    const sections = {
        know: {
            title: "Know: What you need to know",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        plan: {
            title: "Plan: What you need to plan",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        do: {
            title: "Do: How to do it",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate orci urna, sed hendrerit tortor tristique vel. Integer sit amet vehicula ligula. Nulla ac mi massa.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit.

      Sed vulputate orci urna, sed hendrerit tortor tristique vel. Integer sit amet vehicula ligula. Nulla ac mi massa.`,
        },
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            {/* Top Navigation */}
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <button onClick={handleBackClick}>
                        <ChevronLeft className="text-green-500 w-6 h-6" />
                    </button>
                    <span>Change Awareness 1: Do</span>
                </div>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Main Content */}
            <div className="px-4">
                {/* Accordion Sections */}
                {Object.entries(sections).map(([key, section]) => (
                    <div key={key} className="mb-2">
                        <button
                            onClick={() =>
                                setOpenSection(openSection === key ? null : key)
                            }
                            className="w-full bg-white rounded-lg p-4 flex justify-between items-center text-navy-900"
                        >
                            <span className="font-medium">{section.title}</span>
                            <Check
                                className={`w-5 h-5 text-green-500 ${
                                    openSection === key
                                        ? "transform rotate-180"
                                        : ""
                                }`}
                            />
                        </button>

                        {openSection === key && (
                            <div className="bg-white mt-1 p-4 rounded-lg text-navy-900">
                                <p className="whitespace-pre-line">
                                    {section.content}
                                </p>

                                {key === "do" && (
                                    <div className="mt-6 space-y-3">
                                        {/* DIY Option */}
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-3">
                                                    <Search className="w-5 h-5 text-green-500 mt-1" />
                                                    <div>
                                                        <h3 className="font-medium">
                                                            Do It Yourself
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            Subscription
                                                            required
                                                        </p>
                                                        <p className="text-sm">
                                                            Step-by-step
                                                            instructions +
                                                            support
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className="bg-green-500 text-white px-4 py-1 rounded-md">
                                                    DIY
                                                </button>
                                            </div>
                                        </div>

                                        {/* 1-click Create */}
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-3">
                                                    <Zap className="w-5 h-5 text-green-500 mt-1" />
                                                    <div>
                                                        <h3 className="font-medium">
                                                            1-click Create
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            Subscription
                                                            required
                                                        </p>
                                                        <p className="text-sm">
                                                            Auto generate using
                                                            our exclusive
                                                            expertise
                                                        </p>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={handleCreateClick}
                                                    className="bg-green-500 text-white px-4 py-1 rounded-md"
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>

                                        {/* Recommendations */}
                                        <div className="bg-gray-100 rounded-lg p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-start gap-3">
                                                    <ExternalLink className="w-5 h-5 text-green-500 mt-1" />
                                                    <div>
                                                        <h3 className="font-medium">
                                                            Recommendations
                                                        </h3>
                                                        <p className="text-sm text-gray-500">
                                                            Affiliate suppliers
                                                        </p>
                                                        <p className="text-sm">
                                                            We may earn revenue
                                                            if you use them
                                                        </p>
                                                    </div>
                                                </div>
                                                <button className="bg-green-500 text-white px-4 py-1 rounded-md">
                                                    URL
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
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

export default DetailsPage;
