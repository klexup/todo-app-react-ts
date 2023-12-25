/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        WH: "#ffffff",
        BLK: "#080003",
        PRIMARY: "#0d99ff",
        GRAY: "#717171",
        S2: "#3fa796",
        S3: "#fec260",
        S1: "#080957",
        BG: "#f5f5f5",
        STROKE: "#e2e2e2",
        BLUE10PERCENT: "#dae8f2",
        ORANGE: "#fe7e08",
        STYLE: "#ff4034",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        H1: "24px",
        H2: "18px",
        RADIONUMBER: "14px",
        RADIOTEXT: "12px",
        PRIMARYBUTTON: "18px",
      },
      // fontWeight: {
      //   normal: "400",
      //   medium: "500",
      //   semibold: "600",
      //   bold: "700",
      // },
    },
  },
  plugins: [],
};
