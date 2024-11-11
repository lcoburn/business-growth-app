import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const businessTypes = [
    "Blacksmithing",
    "Bricklaying",
    "Carpentry",
    "Concrete Finishing",
    "Electrician",
    "Glazier (Glass Installation)",
    "HVAC Technician",
    "Landscaping",
    "Locksmith",
    "Masonry",
    "Metalworking",
    "Painter (Residential and Commercial)",
    "Plastering",
    "Plumbing",
    "Roofing",
    "Stonemasonry",
    "Tiling",
    "Welding",
    "Woodworking",
    "Animation",
    "Blogging",
    "Content Writing",
    "Digital Marketing",
    "Event Photography",
    "Graphic Design",
    "Illustration",
    "Photo Editing",
    "Social Media Management",
    "Video Editing",
    "Web Design",
    "Accounting and Bookkeeping",
    "Barbering",
    "Beautician (Skincare, Makeup)",
    "Business Consulting",
    "Career Coaching",
    "Dog Walking",
    "Fitness Training (Personal Trainer)",
    "Gardening Services",
    "Health and Wellness Coaching",
    "Life Coaching",
    "Massage Therapy",
    "Notary Services",
    "Pet Grooming",
    "Tattooing",
    "Bakery (Home-based or Commercial)",
    "Beverage Stand (Juice, Coffee)",
    "Catering",
    "Food Truck Operator",
    "Home-based Food Production (Jams, Snacks)",
    "Specialty Foods (Vegan, Gluten-Free)",
    "Academic Tutoring (Math, Language)",
    "Art Instruction (Painting, Drawing)",
    "Dance Instruction",
    "Language Tutoring",
    "Music Instruction (Instrument, Voice)",
    "Online Course Creation",
    "Test Preparation Coaching",
    "Affiliate Marketing",
    "Digital Product Sales (E-books, Courses)",
    "Drop-shipping",
    "E-commerce Store Owner",
    "Handmade Product Sales (Crafts, Jewelry)",
    "Print-on-Demand Products",
    "Cleaning Services",
    "Handyman Services",
    "Home Decor and Interior Design",
    "Home Organization",
    "Moving Assistance",
    "Power Washing",
    "Window Cleaning",
    "Alternative Therapy (Acupuncture, Reiki)",
    "Dietitian",
    "Health Coach",
    "Nutrition Consultant",
    "Physiotherapy",
    "Yoga Instruction",
];

const countries = [
    "United Kingdom",
    "United States",
    "Canada", // Add more countries
];

const OnboardingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "Miss",
        firstName: "",
        lastName: "",
        businessType: "",
        country: "",
        isRemote: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save to localStorage
        localStorage.setItem("userProfile", JSON.stringify(formData));
        // Navigate to home
        navigate("/home");
    };

    return (
        <div className="min-h-screen bg-navy-900 text-white pb-16">
            <div className="max-w-md mx-auto px-4 pt-8">
                <h1 className="text-2xl mb-2">Onboarding</h1>
                <h2 className="text-xl mb-8 text-center">Business Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title Selection */}
                    <div className="space-y-2">
                        <label className="block text-gray-300">
                            Title (optional)
                        </label>
                        <div className="flex gap-4">
                            {["Mr.", "Mrs.", "Miss", "Ms."].map((title) => (
                                <button
                                    key={title}
                                    type="button"
                                    onClick={() =>
                                        handleInputChange({
                                            target: {
                                                name: "title",
                                                value: title,
                                            },
                                        })
                                    }
                                    className={`px-4 py-2 rounded-lg ${
                                        formData.title === title
                                            ? "bg-[#62A157] text-white"
                                            : "bg-white text-navy-900"
                                    }`}
                                >
                                    {title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Name Fields */}
                    <div className="space-y-2">
                        <label className="block text-gray-300">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white text-navy-900"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-300">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white text-navy-900"
                            required
                        />
                    </div>

                    {/* Dropdowns */}
                    <div className="space-y-2">
                        <label className="block text-gray-300">Industry</label>
                        <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white text-navy-900"
                            required
                        >
                            <option value="">Select Business Type</option>
                            {businessTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-300">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-white text-navy-900"
                            required
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Business Type Radio */}
                    <div className="space-y-2">
                        <label className="block text-gray-300">
                            Do customers come to your business address?
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="isRemote"
                                    value="false"
                                    onChange={(e) =>
                                        handleInputChange({
                                            target: {
                                                name: "isRemote",
                                                value: false,
                                            },
                                        })
                                    }
                                    className="form-radio"
                                />
                                <span>Yes (Retail)</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="isRemote"
                                    value="true"
                                    onChange={(e) =>
                                        handleInputChange({
                                            target: {
                                                name: "isRemote",
                                                value: true,
                                            },
                                        })
                                    }
                                    className="form-radio"
                                />
                                <span>No (Remote)</span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#62A157] text-white py-3 rounded-lg mt-8"
                    >
                        Continue
                    </button>
                </form>

                <p className="text-center text-green-500 mt-6">
                    Grow Your Business With Confidence
                </p>
            </div>
        </div>
    );
};

export default OnboardingPage;
