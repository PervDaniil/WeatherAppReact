import { useEffect, useState } from "react";
import ThemeContexProvider from "./ThemeProvider";
import { CircularProgress, Paper } from "@mui/material";


export default function PreloaderBar() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (document.readyState === 'complete') {
            setTimeout(() => {
                setLoading(false);
            }, 100)
        }
    }, []);

    return (
        <>
            {isLoading &&
                <ThemeContexProvider>
                    <Paper className="preloader" sx={{
                        height: '100vh', width: '100%', position: 'absolute', top: '0', left: '0',
                        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
                    }}>
                        <CircularProgress size="3.5em" />
                    </Paper>
                </ThemeContexProvider>
            }
        </>
    )
}