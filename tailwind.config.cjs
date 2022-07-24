const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      colors: {
        divpurple: "#623cea",
        divorange: "#f85e00"
        // ...
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        libre: ["Libre Baskerville", "serif"],
        dm: ["DM Serif Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      }
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [
    require('flowbite/plugin')
  ],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  }
};
