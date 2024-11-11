// utils/userProfile.js
export const getUserProfile = () => {
    const profile = localStorage.getItem("userProfile");
    return profile ? JSON.parse(profile) : null;
};
