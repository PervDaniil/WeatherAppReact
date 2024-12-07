import { createTheme } from '@mui/material';
import { createContext, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

const ThemeContext = createContext();

export default function ThemeContexProvider({ children }) {
    const [themeMode, setThemeMode] = useState('dark');
    const UserTheme = createTheme({
        palette: {
            mode: themeMode,
            primary: {
                main: 'rgb(50, 255, 0)'
            },
        },
        typography: {
            fontFamily: 'Montserrat'
        }
    });

    const HandleThemeChange = () => {
        setThemeMode(mode => mode === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={ HandleThemeChange }>
            <ThemeProvider theme={UserTheme}>
                <CssBaseline />
                { children }
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}