export const getUserProfile = () => {
    const profile = localStorage.getItem("userProfile");
    return profile
        ? JSON.parse(profile)
        : {
              firstName: "",
              lastName: "",
              businessType: "",
              country: "",
              question1Answer: null, // Add the question1Answer field
              isRemote: null, // true = remote, false = onsite
          };
};

export const setUserProfile = (newProfile) => {
    localStorage.setItem("userProfile", JSON.stringify(newProfile));
};
