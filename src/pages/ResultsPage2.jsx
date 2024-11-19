import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeft, Upload } from "lucide-react";
import { getUserProfile } from "../utils/userProfile.jsx";

const ResultsPage2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);
    const [openAIResponse, setOpenAIResponse] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        // Load logo info from localStorage
        const logoInfo = JSON.parse(localStorage.getItem("logoInfo"));
        if (logoInfo?.hasLogo && logoInfo?.logoFile) {
            const file = new File([logoInfo.logoFile], "logo.png", {
                type: "image/png",
            });
            setImage(file);
            handleImageAnalysis(file);
        }
    }, []);

    const handleImageAnalysis = async (file) => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("image", file);

            // Call your AWS Rekognition-backed API
            const response = await axios.post(
                "http://localhost:8000/analyze-image", // Replace with production URL if needed
                formData
            );

            // Update the state with the labels returned by Rekognition
            setOpenAIResponse(response.data.labels); // Update to `labels` based on backend response
        } catch (err) {
            console.error("API Error:", err);
            setError(
                err.response?.data?.detail || "Failed to get image analysis"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            <div className="flex justify-between items-center p-4">
                <div className="flex items-center gap-2">
                    <button onClick={handleBackClick}>
                        <ChevronLeft className="text-green-500 w-6 h-6" />
                    </button>
                    <span>Image Analysis</span>
                </div>
            </div>

            <div className="px-4 py-4">
                <h1 className="text-2xl font-semibold mb-6">Image Analysis</h1>

                <div className="bg-white rounded-xl p-6 text-navy-900">
                    {image && (
                        <div>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Uploaded"
                                className="max-w-full h-auto"
                            />
                            {openAIResponse && (
                                <div className="mt-4">
                                    <h2 className="text-lg font-semibold">
                                        AWS Rekognition Analysis:
                                    </h2>
                                    <ul>
                                        {openAIResponse.map((label, index) => (
                                            <li key={index}>
                                                <strong>{label.Name}</strong>:{" "}
                                                {label.Confidence.toFixed(2)}%
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

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

                    {!loading && !error && !image && (
                        <div className="flex justify-center items-center h-40">
                            <p>No image uploaded yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResultsPage2;
