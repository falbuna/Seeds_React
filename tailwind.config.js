module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
        center: true,
        padding: "2rem",
    },
    colors: {
        blue1: "#0008ff",
        baby1: "#81f4fc",
        blueLight1: "#b2ebf2",
        black: "#000000",
        white: "#ffffff",
        skyBlue: "#36A2EB",
        green1: "#323232",
        lime1: "#A1C16D",
    },
    height: (theme) => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh * .65)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh * .1)",
        "screen/6": "calc(100vh * .07)",
        "screen/7": "calc(100vh * .51)",
        "screen/1": "100vh",
    }),
},
  variants: {},
  plugins: [],
}
