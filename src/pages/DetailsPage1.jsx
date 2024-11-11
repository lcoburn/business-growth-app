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

const DetailsPage1 = () => {
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
        // Navigate to ResultsPage without calling `/create`
        navigate("/results");
    };

    // Accordion sections data
    const sections = {
        know: {
            title: "Know: What you need to know",
            content:
                "Understanding change in our local market helps our business grow and stay successful. When we know what's changing around us, we can make better choices for our business.\n\nKey points about business change:\n\n- Local markets change often\n- Customers ask for new things\n- Changes happen all year round\n- Many things can be different in just one year\n\nWhy Change Matters\n\n- Businesses that watch for changes make 15% more money\n- Being ready for change helps us stay ahead of other businesses\n- Customers see us as more professional\n- We can give customers what they want before others do\n\nProblems if We Don't Watch for Changes\n\n- We might fall behind other businesses\n- Customers might think we're old-fashioned\n- We could lose customers to other businesses\n- We might miss new opportunities\n\nBenefits of Watching for Changes\n\n- Customers trust us more\n- We make more money\n- We stay important to our customers\n- We can plan better for the future",
        },

        plan: {
            title: "Plan: What you need to plan",
            content:
                "Making a plan helps us stay aware of changes and respond in ways that help our business grow. Without a plan, we might miss important changes or react too slowly.\n\nMain Planning Areas\n\n- Watch what's changing in our local area\n- Listen to what customers want\n- Look at how our business is different from others\n- Think about how to make small improvements\n\nPlanning Problems to Avoid\n\n- Not having a regular time to check for changes\n- Missing customer feedback\n- Copying other businesses instead of being unique\n\nBenefits of Good Planning\n\n- We know what to do next\n- We spend our time and money wisely\n- We keep what makes our business special",
        },

        do: {
            title: "Do: How to do it",
            content:
                "Taking action on what we learn about changes helps our business stay successful. When we make improvements based on what we learn, customers notice and appreciate it.\n\nMain Action Areas\n\n- Collect customer feedback\n- Make small improvements\n- Tell customers about improvements\n- Keep learning about changes\n\nProblems Without Action\n\n- Lost opportunities to improve\n- Unhappy customers\n- Falling behind other businesses\n\nBenefits of Taking Action\n\n- Happier customers\n- Better business results\n- Strong business future",
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

export default DetailsPage1;
