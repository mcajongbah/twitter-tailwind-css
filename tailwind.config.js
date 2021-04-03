module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1da1f2",
        secondary: "#F3F4F6",
        tertiary: "#EBEEF0",
        accent: "#F7F9FA",
        dark: "#14202A",
        trends: "#182634",
        space: "#182634",
      },
      width: {
        "1/10": "275px",
        "2/10": "600px",
        "3/10": "405px",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
