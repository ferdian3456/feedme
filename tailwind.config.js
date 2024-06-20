/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                "orange-kelompok": "#DAA06D",
            },
            height: {
                120: "30rem",
                "70%": "70%",
            },
            width: {
                "96.5%": "96.5%",
                "60svw": "60svw",
                "88.5%": "88.5%",
                120: "30rem",
            },
        },
    },
    plugins: [],
};
