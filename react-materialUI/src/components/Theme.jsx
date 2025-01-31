import { createTheme } from '@mui/material/styles';
const demoTheme =createTheme({
  
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#6200ea' },
        background: { default: '#ffffff' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#a01b8b' },
        background: { default: '#121212' },
      },
    },
    
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default demoTheme;
