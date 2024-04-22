/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screen : { 
        '2xl:bg-blue-250': {max:'1355px'},
        'xl:bg-blue-400':{max:'1279px', min :'993px'},
        'lg:bg-green-250':{max:'992px',min:'768px'},
        'md:bg-red-500':{max:'767px'},
        'sm:bg-red-250':{max:'640px'},
      },
    },
  },
  plugins: [],
};

// B1 : npm install -D tailwindcss
//b2 : npx tailwindcss init
// b3 :

