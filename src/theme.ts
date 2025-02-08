import { createTheme, responsiveFontSizes } from "@mui/material";



let theme = createTheme({
    palette: {
      primary: {
        main: '#081325',
      },
      secondary: {
        main: '#101F3C'
      },
    },
    typography: {
        fontFamily: "Helvetica, Arial, sans-serif" // Atualizado para incluir a fonte do WhatsApp
    }
});

theme = responsiveFontSizes(theme);

export default theme;
