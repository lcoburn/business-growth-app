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

const DetailsPage2 = () => {
    const navigate = useNavigate();
    const [openSection, setOpenSection] = useState("do"); // 'do' section open by default
    const [hasBeenOpened, setHasBeenOpened] = useState({
        know: false,
        plan: false,
        do: true, // Since 'do' starts open
    });

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
                "Understanding how our business environment changes helps us stay successful. When we know what's happening around us, we can make better choices for our business.\n\nKey Ideas\n\n- Our local market is always changing\n- Customer needs keep evolving\n- Being different from other businesses is important\n- Customer feedback shows us what to improve\n\nProblems if We Don't Pay Attention\n\n- Our business falls behind others\n- We lose customers to other businesses\n- We miss opportunities to grow\n- Our income goes down\n\nBenefits When We Pay Attention\n\n- Make up to 15% more money than other businesses\n- Keep customers happy\n- Stay ahead of changes\n- Keep being special to customers",
        },

        plan: {
            title: "Plan: What you need to plan",
            content:
                "Making a plan helps us stay organized and make sure we're doing the right things to keep our business strong.\n\nPlanning Areas\n\n- Looking at customer feedback\n- Finding what makes us special\n- Choosing what to improve\n- Telling customers about improvements\n\nProblems Without Planning\n\n- Miss important customer feedback\n- Waste time on wrong improvements\n- Lose track of good ideas\n- Miss chances to tell customers about changes\n\nBenefits of Good Planning\n\n- Clear direction for improvements\n- Better use of time and money\n- Organized way to grow\n- Happy customers who know we listen",
        },

        do: {
            title: "Do: How to do it",
            content:
                "Taking action keeps our business growing and shows customers we care about making things better.\n\nAction Areas\n\n- Collecting customer feedback\n- Making small improvements\n- Sharing news with customers\n- Checking if changes worked\n\nProblems Without Action\n\n- Customers feel ignored\n- Fall behind other businesses\n- Miss chances to improve\n- Lose customers over time\n\nBenefits of Taking Action\n\n- Happier customers\n- Better business results\n- Stay special to customers\n- Keep growing steadily",
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
                    <span>Change Awareness: Do</span>
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
                                                    <button className="bg-green-500 text-white px-4 py-1 rounded-md">
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
                                                        className="bg-green-500 text-white px-4 py-1 rounded-md"
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
                                                    <button className="bg-green-500 text-white px-4 py-1 rounded-md">
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
