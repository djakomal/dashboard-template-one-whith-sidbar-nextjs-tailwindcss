/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./page/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}"
 ],
 important:true,
  theme: {
    extend: {
      color:{
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}

