module.exports = {
  lightmode:'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      ps:'370px',
      s:'412px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        //sitedark: "url('./src/assets/img/site-bg.jpg')",
        sitelight:"url('./src/assets/img/concepto-fondo-estudio-fondo-purpura-sitio-estudio-pendiente-ligera-vacia-abstracta-producto-fondo-liso-estudio.jpg')",
        about: "url('./src/assets/img/311191014_1456031481562859_5057301907237021590_n.png')",
        services:"url('./src/assets/img/services.png')",
      },
    },
  },
  plugins: [],
};
