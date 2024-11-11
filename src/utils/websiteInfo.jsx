// utils/websiteInfo.js

// Get all website information
export const getWebsiteInfo = () => {
    const info = localStorage.getItem("websiteInfo");
    return info ? JSON.parse(info) : null;
};

// Get specific website status
export const hasWebsite = () => {
    const info = getWebsiteInfo();
    return info ? info.hasWebsite : false;
};

// Get website URL
export const getWebsiteUrl = () => {
    const info = getWebsiteInfo();
    return info ? info.websiteUrl : "";
};

// Get descriptive text based on website status
export const getWebsiteDescription = () => {
    const info = getWebsiteInfo();
    if (!info) return null;

    if (info.hasWebsite) {
        return `Your website (${info.websiteUrl}) will be analyzed`;
    } else {
        return "We'll help you plan your web presence";
    }
};
