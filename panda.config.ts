import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{js,jsx,ts,tsx,vue}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        button: {
          className: "btn",
          base: {
            backgroundColor: "red",
          }
        }
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",


})
