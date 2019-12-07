import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4A8BAC',
      main: '#2f597c',
      dark: '#18405A',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A08D5F',
    },
    error: {
      main: '#BE2C18',
    },
    background: {
      default: '#FAFAFA',
    },
  },
});

export default theme;