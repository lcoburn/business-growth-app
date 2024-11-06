import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bg_splash.png";
import iconImage from "../assets/images/icon.png";

const SplashPage = () => {
    const navigate = useNavigate();
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsEnabled(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleScreenTouch = () => {
        if (isEnabled) {
            navigate("/home");
        }
    };

    return (
        <div
            onClick={handleScreenTouch}
            className="fixed inset-0 bg-navy-900 flex justify-center"
        >
            <div className="relative w-[375px] h-[664px]">
                {/* Image Container with exact dimensions */}
                <div className="absolute inset-0">
                    <img
                        src={bgImage}
                        alt="Business people smiling"
                        className="w-[500px] h-[885px] object-cover"
                        style={{ objectPosition: "50% 50%" }}
                    />
                    <div
                        className="absolute inset-0 bg-black/30"
                        aria-hidden="true"
                    />
                </div>

                {/* Text Content */}
                <div className="relative h-full flex items-center justify-center px-6 z-10">
                    <h1 className="text-white text-4xl font-bold text-center leading-tight">
                        Business
                        <br />
                        Growth for
                        <br />
                        Everyone
                    </h1>
                </div>

                {/* Touch Indicator */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        if (isEnabled) navigate("/home");
                    }}
                    className="absolute bottom-8 right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse hover:bg-gray-100 transition-colors z-10"
                >
                    <img src={iconImage} alt="Navigate" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default SplashPage;
