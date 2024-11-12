// utils/userProfile.js
export const getUserProfile = () => {
    const profile = localStorage.getItem("userProfile");
    return profile
        ? JSON.parse(profile)
        : {
              firstName: "",
              lastName: "",
              businessType: "",
              country: "",
              // Add any other fields that your app uses with empty defaults
          };
};
