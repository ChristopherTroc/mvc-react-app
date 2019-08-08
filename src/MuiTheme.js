export const mainTheme = {
  palette: {
    primary: {
      light: '#75d9ad',
      main: '#00ba68',
      dark: '#007941',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#568889',
      contrastText: '#ffffff',
    },
    success: {
      light: '#75d9ad',
      main: '#00ba68',
      dark: '#007941',
      contrastText: '#fff',
    },
    error: {
      main: '#BA0052',
      light: '#ce4c85',
      dark: '#820039',
      contrastText: '#fff',
    },
    warning: {
      main: '#f8bf42',
      light: '#fad27a',
      dark: '#ad852e',
      contrastText: '#000',
    },
    info: {
      main: '#bce8f1',
      light: '#d9edf7',
      dark: '#3a87ad',
      contrastText: '#fff',
    },
    approved: {
      light: '#75d9ad',
      main: '#00ba68',
      dark: '#007941',
      contrastText: '#fff',
    },
    canceled: {
      main: '#BA0052',
      light: '#ce4c85',
      dark: '#820039',
      contrastText: '#fff',
    },
    completed: {
      light: '#75abc5',
      main: '#3A87AD',
      dark: '#285e79',
      contrastText: '#fff',
    },
    in_process: {
      main: '#9b9b9b',
      light: '#b9b9b9',
      dark: '#6c6c6c',
      contrastText: '#fff',
    },
    disabled: '#e6eaee',
  },
  classes: {
    container: {
      marginTop: '72px',
      marginBottom: '48px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '98%',
      maxWidth: '1140px',
    },
    containerFluid: {
      marginTop: '72px',
      marginBottom: '48px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '98%',
    },
    containerNoMarginTop: {
      marginBottom: '48px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '98%',
      maxWidth: '1140px',
    },
    containerNoMarginBot: {
      marginTop: '72px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '98%',
      maxWidth: '1140px',
    },
    globalAppDrawer: {
      marginLeft: 240,
    },
    globalAppDrawerWidth: {
      width: 240,
    },
  },
  typography: {
    fontFamily: 'Roboto',
    useNextVariants: true,
  },
  overrides: {
    MUIDataTableBodyCell: { root: { cursor: 'pointer' } },
    MuiPrivateSwitchBase: { root: { 'thead &:first-child': { display: 'none !important' } } },
  },
};
