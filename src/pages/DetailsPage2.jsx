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
import { getWebsiteInfo } from "../utils/websiteInfo"; // Add this import

const DetailsPage2 = () => {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState("do"); // 'do' section open by default
    const [hasBeenOpened, setHasBeenOpened] = useState({
        know: false,
        plan: false,
        do: true, // Since 'do' starts open
    });

    // Load website info
    const websiteInfo = getWebsiteInfo();
    console.log(websiteInfo);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCreateClick = () => {
        navigate("/results2");
    };

    // Accordion sections data
    const sections = {
        know: {
            title: "Know: What you need to know",
            content: websiteInfo?.hasWebsite
                ? "Understanding how our website impacts our business success is crucial. Regular reviews help us stay competitive and meet customer needs.\n\nKey Ideas\n\n- 90% of customers search online before buying\n- Having a good website helps us compete better\n- Regular reviews show what needs updating\n- Customer feedback guides improvements"
                : "Understanding how not having a website impacts our business is crucial. Most customers search online first.\n\nKey Ideas\n\n- Most customers (90%+) look online first when they want to buy something\n- Only half of small businesses have websites\n- Having a website gives us an advantage\n- We're missing potential customers without one",
        },
        plan: {
            title: "Plan: What you need to plan",
            content: websiteInfo?.hasWebsite
                ? `We need to review ${websiteInfo.websiteUrl} regularly to ensure it serves our customers well.\n\nPlanning Areas\n\n- Website content review\n- Technical performance check\n- Customer experience assessment\n- Update schedule planning`
                : "Planning our new website carefully helps us create something that works well.\n\nPlanning Areas\n\n- Customer Information needs\n- Business story and services\n- Technical requirements\n- Mobile-friendly design",
        },
        do: {
            title: "Do: How to do it",
            content: websiteInfo?.hasWebsite
                ? `Let's review ${websiteInfo.websiteUrl} and make necessary improvements.\n\nAction Areas\n\n- Content updates\n- Technical updates\n- Customer trust building\n- Regular maintenance schedule`
                : "Taking action to create our website helps us get more customers.\n\nAction Areas\n\n- Website setup\n- Customer connection\n- Website safety\n- Professional appearance",
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
                    <span>Online Store: Do</span>
                </div>
                <Bell className="text-green-500 w-6 h-6" />
            </div>

            {/* Main Content */}
            <div className="px-4">
                {/* Accordion Sections */}
                {Object.entries(sections).map(([key, section]) => (
                    <div key={key} className="mb-2">
                        <button
                            onClick={() => {
                                setOpenSection(
                                    openSection === key ? null : key
                                );
                                if (!hasBeenOpened[key]) {
                                    setHasBeenOpened((prev) => ({
                                        ...prev,
                                        [key]: true,
                                    }));
                                }
                            }}
                            className="w-full bg-white rounded-lg p-4 flex items-center text-navy-900 h-[72px]"
                        >
                            <div className="flex-grow">
                                <span className="font-medium block">
                                    {section.title}
                                </span>
                            </div>
                            <ChevronLeft
                                className={`w-5 h-5 text-green-500 transition-transform duration-200 shrink-0 ${
                                    openSection === key
                                        ? "rotate-270"
                                        : "rotate-90"
                                }`}
                            />
                        </button>

                        <div
                            className={`transition-all duration-200 ${
                                openSection === key ? "mt-1" : "mt-0"
                            }`}
                        >
                            {(openSection === key || hasBeenOpened[key]) && (
                                <div
                                    className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
                                        openSection === key
                                            ? "p-4 opacity-100"
                                            : "h-0 p-0 opacity-0"
                                    }`}
                                >
                                    <p className="whitespace-pre-line text-black">
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
                                                            <h3 className="font-medium text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                Do It Yourself
                                                            </h3>
                                                            <p className="text-sm text-gray-800">
                                                                {" "}
                                                                {/* Set to darker gray or black */}
                                                                Subscription
                                                                required
                                                            </p>
                                                            <p className="text-sm text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                Step-by-step
                                                                instructions +
                                                                support
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="bg-[#62A157] text-white px-4 py-1 rounded-md">
                                                        {" "}
                                                        {/* Set to black */}
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
                                                            <h3 className="font-medium text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                1-click Create
                                                            </h3>
                                                            <p className="text-sm text-gray-800">
                                                                {" "}
                                                                {/* Set to darker gray or black */}
                                                                Subscription
                                                                required
                                                            </p>
                                                            <p className="text-sm text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                Auto generate
                                                                using our
                                                                exclusive
                                                                expertise
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={
                                                            handleCreateClick
                                                        }
                                                        className="bg-[#62A157] text-white px-4 py-1 rounded-md"
                                                    >
                                                        {" "}
                                                        {/* Set to black */}
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
                                                            <h3 className="font-medium text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                Recommendations
                                                            </h3>
                                                            <p className="text-sm text-gray-800">
                                                                {" "}
                                                                {/* Set to darker gray or black */}
                                                                Affiliate
                                                                suppliers
                                                            </p>
                                                            <p className="text-sm text-black">
                                                                {" "}
                                                                {/* Set to black */}
                                                                We may earn
                                                                revenue if you
                                                                use them
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="bg-[#62A157] text-white px-4 py-1 rounded-md">
                                                        {" "}
                                                        {/* Set to black */}
                                                        URL
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
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

export default DetailsPage2;
