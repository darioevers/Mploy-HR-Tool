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
                    },
                    background: {
                        paper: '#fff',
                        default: '#fff',
                        darker: '#ebebeb'
                    },
                    footer: {
                        main: '#fff',
                    },
                    landingnavbar: {
                        main: '#fff',
                    },
                    homeheader: {
                        headerbackground: "#fff",
                        headerdot: "#a4b7cc",
                    },
                    solutions: {
                        header: '#ffbd00'
                    }
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#addcf7',
                        light: '#e0ffff',
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
                    },
                    background: {
                        paper: '#3b444e',
                        default: '#141d26',
                        darker: '#000000',
                    },
                    footer: {
                        main: '#141d26',
                    },
                    landingnavbar: {
                        main: '#141d26',
                    },
                    homeheader: {
                        headerbackground: "#addcf7",
                        headerdot: "#a4b7cc",
                    },
                    solutions: {
                        header: '#ffbd00'
                    }
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