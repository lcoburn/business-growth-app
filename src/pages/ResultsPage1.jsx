import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { getUserProfile } from "../utils/userProfile.jsx";

const ResultsPage1 = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [advice, setAdvice] = useState(null);
    const profile = getUserProfile();

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchBusinessAdvice = async () => {
            console.log("**", profile);

            if (!profile?.businessType || !profile?.country) {
                setError("Please complete your profile first");
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const requestData = {
                    company: profile.businessType,
                    country: profile.country,
                    assistant_id: "asst_Nn2xCojT6NFQ416VrCmykWN3",
                    question:
                        "Over the past few years, have you felt that: Your local market is changing quickly?",
                    answer: profile.question1Answer,
                    isRemote: profile.isRemote,
                };

                const baseUrl = import.meta.env.PROD
                    ? "https://stratagease-test-backend-d3a3a58fe77f.herokuapp.com"
                    : "http://localhost:8000";

                const response = await axios.post(
                    `${baseUrl}/get-business-advice`,
                    requestData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );

                setAdvice(response.data.advice);
            } catch (err) {
                setError(
                    err.response?.data?.detail ||
                        "Failed to load business advice"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchBusinessAdvice();
    }, []);

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <button onClick={handleBackClick}>
                        <ChevronLeft className="text-green-500 w-6 h-6" />
                    </button>
                    <span>Business Advice</span>
                </div>
            </div>

            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">
                    Business Analysis
                </h1>

                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {loading && (
                        <div className="flex items-center justify-center py-8">
                            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
                        </div>
                    )}

                    {error && (
                        <div className="text-red-500 text-center py-4">
                            {error}
                        </div>
                    )}

                    {!loading && !error && advice && (
                        <div className="space-y-4">
                            <p className="mb-2">
                                <strong>Business Type:</strong>{" "}
                                {profile.businessType}
                            </p>
                            <p className="mb-2">
                                <strong>Country:</strong> {profile.country}
                            </p>
                            <div className="mt-4">
                                <strong>Advice:</strong>
                                <div className="mt-2">
                                    <ReactMarkdown>{advice}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage1;
