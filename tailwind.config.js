module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            height: {
                "62px": "3.875rem",
            },
            fontSize: {
                "64px": "4rem",
                "32px": "2rem",
                "28px": "1.75rem",
                "10px": "0.625rem",
                "8px": "0.5rem",
            },
            colors: {
                bunting: "#131D4A",
                "amparo-blue": "#4758A3",
                "light-blue": "#DBDEEC",
                "sky-color": "#ECEEF5",
                "light-green": "#77B741",
                "dark-blue": "#4959A1",
            },
            padding: {
                "60px": "3.75rem",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                segoe: ["Segoe UI"],
            },
            sizing: {
                "50px": "3.125rem",
                "35px": "2.1875rem",
            },
            backgroundImage: {
                banner: "url('/src/assets/headerbackground.png')",
                mission: "url('/src/assets/mission.png')",
                objective: "url('/src/assets/objective-bg.png')",
                enviroment: "url('/src/assets/enviroment.png')",
                emission: "url('/src/assets/emission.png')",
            },
        },
    },
    plugins: [],
};
