/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: "#1a2e4c",
                    800: "#1e3557",
                    700: "#234067",
                },
            },
        },
    },
    plugins: [],
};
