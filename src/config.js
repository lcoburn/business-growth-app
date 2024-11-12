const config = {
    API_URL: import.meta.env.VITE_API_URL || "http://localhost:8000",
    ASSISTANT_ID:
        import.meta.env.VITE_ASSISTANT_ID || "asst_Nn2xCojT6NFQ416VrCmykWN3",
    IS_PRODUCTION: import.meta.env.PROD,
    FRONTEND_URL: "https://famous-froyo-8fc43e.netlify.app",
};

export default config;
