/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
     
      
      screens:{
        'sm': '355px',
        // => @media (min-width: 640px) { ... }
  
        'md': '567px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      
    },

    backgroundImage:{
      'Buy':"url('./public/Buy.jpg')",
      'dark':"url('./public/Dark.jpg')",
      'Laptop':"url('./public/Laptop.jpg')",
      'start':"url('/public/start.jpg')",
      'm1':"url('./public/m1.jpg')",
      'm2':"url('./public/m2.jpg')",
      'm3':"url('./public/m3.jpg')",
      'm4':"url('./public/m4.jpg')",
      'Quote':"url('./public/Quote.jpg')",
      'White':"url('./public/White.jpg')",
      'Bg':"url('./public/Bg.jpg')",
      'Read':"url('./public/Read.jpg')",
      // 'Read':"url('./public/About1.jpg')",
      // 'Read':"url('./public/About2.jpg')",
      // 'Read':"url('./public/About3.jpg')",
      // 'Read':"url('./public/Face.jpg')",
      // 'Read':"url('./public/Contact1.jpg')",



      

    }
    },
  },
  plugins: [
    
  ],
}