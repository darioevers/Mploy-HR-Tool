import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export function ToggleColorMode(props) {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            // The dark mode switch would invoke this method
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === 'light' ? 'dark' : 'light',
                );
            },
        }),
        [],
    );

    const getDesignTokens = (mode: PaletteMode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                        main: '#98c1d9',
                        light: '#caf4ff',
                        lighter: '#f4f4f4',
                        dark: '#6891a7',
                        contrastText: '#000',
                    },
                    secondary: {
                        main: '#ee6c4d',
                        light: '#ff9d7a',
                        dark: '#b63c23',
                    },
                    info: {
                        main: '#98c1d9',
                        light: '#caf4ff',
                        dark: '#6891a7',
                    },
                    divider: '#ebebeb',
                    text: {
                        primary: '#000',
                        secondary: '#000',
                        alternate: "#fff",
                    },
                    background: {
                        paper: '#fff',
                        default: '#fff',
                        darker: '#ebebeb',
                        lighter: '#ebebeb',
                        lighterTwo: "#f5f5f7",
                        lighterThree: "#fbfbfd",
                    },
                    landingpagenavbar: {
                        main: "rgba(255, 255, 255, 0.75)"
                    },
                    footer: {
                        main: '#f5f5f7',
                    },
                    homeheader: {
                        headerbackground: "#fff",
                        headergradient: "radial- gradient(circle, rgba(255, 255, 255, 1) 0 %, rgba(227, 227, 227, 1) 100 %)",
                    },
                    solutions: {
                        header: '#ffbd00'
                    },
                    contact: {
                        main: '#4b3f72'
                    },
                    button: {
                        white: "#fff"
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#addcf7',
                        light: '#e0ffff',
                        lighter: '#505d6a',
                        dark: '#7caac4',
                        contrastText: '#fff',
                    },
                    secondary: {
                        main: '#ee6c4d',
                        light: '#ff9d7a',
                        dark: '#b63c23',
                    },
                    info: {
                        main: '#addcf7',
                        light: '#e0ffff',
                        dark: '#7caac4',
                    },
                    divider: '#000',
                    text: {
                        primary: '#fff',
                        secondary: '#fff',
                        alternate: "#fff",
                    },
                    background: {
                        paper: '#3b444e',
                        default: '#141d26',
                        darker: '#000000',
                        lighter: '#3b444e',
                        lighterTwo: "#3d4752",
                        lighterThree: "#121a22",
                    },
                    landingpagenavbar: {
                        main: "rgba(54, 54, 54, 0.835)"
                    },
                    footer: {
                        main: '#141d26',
                    },
                    homeheader: {
                        headerbackground: "rgb(59,68,78)",
                        headergradient: "radial-gradient(circle, rgba(59,68,78,1) 0%, rgba(0,0,0,1) 100%)",
                    },
                    solutions: {
                        header: '#ffbd00'
                    },
                    contact: {
                        main: '#20262c'
                    },
                    button: {
                        white: "#fff"
                    },
                }),
        },
    });

    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}