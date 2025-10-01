/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greywhite: "#F5F5F5",
        darkgreywhite: "#E1E1E1",
        goldgreen : "#A9832C"
      },
      spacing: {
        "10":"10px",
        "18":"18px",
        "19":"19px",
        "60": "60px",
        "28": "28px",
        "20": "20px",
        "74": "74px",
        "50":"50px",
        "48":"48px",
        "399":"399px",
        "147":"147px"
      },
      borderRadius:{
        "20":"20px",
        "30":"30px"
      }
    },
  },
  plugins: [],
};
