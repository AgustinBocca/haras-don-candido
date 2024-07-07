/** @type {import('tailwindcss').Config} */

export const content = [
  './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  './node_modules/flowbite/**/*.js'
]
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Monserrat', 'sans-serif']
    }
  }
}
export const plugins = [require('flowbite/plugin')]
